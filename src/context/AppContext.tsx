import React, { createContext, useContext, useReducer, Dispatch } from 'react';

type AppState = {
  user: {
    isLoggedIn: boolean;
    username: string;
    email: string;
    token: string;
  };
};

type Action =
  | { type: 'LOGIN'; payload: { username: string; email: string; token: string } }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_PROFILE'; payload: { username: string; email: string } };

const initialState: AppState = {
  user: {
    isLoggedIn: false,
    username: '',
    email: '',
    token: ''
  }
};

const AppContext = createContext<{
  state: AppState;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null
});

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: {
          isLoggedIn: true,
          username: action.payload.username,
          email: action.payload.email,
          token: action.payload.token
        }
      };
    case 'LOGOUT':
      return {
        ...state,
        user: initialState.user
      };
    case 'UPDATE_PROFILE':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload
        }
      };
    default:
      return state;
  }
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);