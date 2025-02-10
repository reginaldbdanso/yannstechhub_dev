# Yannstechhub

https://github.com/reginaldbdanso/yannstechhub_dev

## Description
This is a full stack Ecommerce Website. It provides APIs for user authentication, product management, and order management, along with a frontend interface for users to interact with the application.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/reginaldbdanso/yannstechhub_dev.git
   ```
2. Navigate to the project directory:
   ```bash
   cd yannstechhub_dev
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
1. Create a `.env` file in the root directory and add the required environment variables (see Environment Variables section).
2. Start the development server:
   ```bash
   npm run dev
   ```
3. The server will start on `http://localhost:4000`.

## Environment Variables
The following environment variables are required:
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`: Google service account email
- `GOOGLE_PRIVATE_KEY`: Google private key
- `GOOGLE_PROJECT_ID`: Google project ID
- `GOOGLE_CLIENT_ID`: Google client ID
- `GOOGLE_CLIENT_SECRET`: Google client secret
- `GOOGLE_REDIRECT_URI`: Google redirect URI

## Project Structure
```
yannstechhub_dev/
├── src/
│   ├── config/
│   │   ├── db.js
│   │   ├── googleCloud.js
│   │   └── googleDrive.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── ordersController.js
│   │   └── productController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── Order.js
│   │   ├── Product.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── ordersRoutes.js
│   │   └── productRoutes.js
│   ├── services/
│   │   ├── googlePhotos.js
│   │   ├── order/
│   │   │   └── orderService.js
│   │   ├── product/
│   │   │   └── productService.js
│   │   └── storage/
│   │       ├── driveService.js
│   │       └── googlePhotos.js
│   ├── utils/
│   │   └── seedData.js
│   └── server.js
├── .gitignore
├── package.json
└── README.md
```

## Dependencies
- `bcryptjs`: ^2.4.3
- `cors`: ^2.8.5
- `dotenv`: ^16.3.1
- `express`: ^4.18.2
- `express-validator`: ^7.0.1
- `googleapis`: ^126.0.1
- `helmet`: ^7.0.0
- `jsonwebtoken`: ^9.0.2
- `mongoose`: ^7.8.3
- `morgan`: ^1.10.0
- `multer`: ^1.4.5-lts.1
- `streamifier`: ^0.1.1

### Dev Dependencies
- `jest`: ^29.6.4
- `nodemon`: ^3.0.1

## Contribution Guidelines
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Open a pull request.
