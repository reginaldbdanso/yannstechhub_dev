import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

// Styled Components
const CareersContainer = styled.div`
  display: flex;
  padding-top: 21px;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const MainContent = styled.main`
  width: 100%;
  max-width: 80%;
  margin-top: 100px;

  @media (max-width: 991px) {
    padding-left: 20px;
    padding-right: 20px;
    max-width: 95%;
  }
`;

const PageTitle = styled.h1`
  color: #000;
  text-align: center;
  font-size: 36px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 800;
  line-height: 1;
  margin-top: 46px;
  margin-bottom: 0;
`;

const PageDescription = styled.p`
  text-align: center;
  color: #000;
  font-size: 16px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 300;
  line-height: 2;
  margin-top: 12px;
`;

const JobStats = styled.section`
  display: flex;
  margin-top: 42px;
  max-width: 100%;
  align-items: center;
  justify-content: space-around;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  color: #000;
  line-height: 1;

  @media (max-width: 991px) {
    margin-top: 40px;
    flex-wrap: wrap;
  }
`;

const TotalJobs = styled.h2`
  font-size: 24px;
  font-weight: 800;
  margin: 0;
`;

const JobTypes = styled.div`
  display: flex;
  gap: 57px;
  font-size: 16px;
  font-weight: 400;
`;

const JobListings = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  align-self: center;
  align-items: start;
  justify-content: center;
  gap: 30px;
  margin-top: 45px;
  padding-bottom: 80px;
  width: 100%;

  @media (max-width: 991px) {
    margin-top: 40px;
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

const JobCard = styled.article`
  flex: 1;
  min-width: 300px;
  border-radius: 20px;
  background-color: #fff;
  padding: 8px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  box-shadow: 1px 5px 9px 3px rgba(0, 0, 0, 0.100);
  width: 100%;
`;

const JobImageContainer = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 1.718;
  width: 100%;
`;

const JobImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StatusBadge = styled.span<{ closed?: boolean }>`
  position: absolute;
  top: 6px;
  left: 8px;
  border-radius: 20px;
  background-color: ${props => props.closed ? '#000' : '#0055b6'};
  padding: 4px 22px;
  font-size: 12px;
  color: #fcfcfc;
  font-weight: 500;
`;

const JobDetails = styled.div`
  display: flex;
  margin-top: 9px;
  padding: 0 20px;
  padding-bottom: 50px;
  justify-content: space-between;
  align-items: start;
`;

const JobTitle = styled.h3`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
`;

const JobType = styled.p`
  color: #010101;
  font-size: 12px;
  font-weight: 400;
  margin: 7px 0 0;
`;

const ApplyButton = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #0055b6;
  padding: 7px 19px;
  font-size: 12px;
  color: #fffbfb;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Job data
const jobData = [
  {
    id: 1,
    title: "Sales Executive",
    type: "Regular",
    status: "Open",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce79820243537fb1d8ef4c32e91a585c07b6f81b6a44cf178ace962523852e93?apiKey=e13307e2352343dd9e1a467ee55b8e09"
  },
  {
    id: 2,
    title: "Security Officer",
    type: "Regular",
    status: "Open",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b99136c20bdf94a80ed4e8786239d999cba60f97b07bbd485e922bd364fb4aa5?apiKey=e13307e2352343dd9e1a467ee55b8e09"
  },
  {
    id: 3,
    title: "HR Officer",
    type: "Regular",
    status: "Open",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9849731508e899b16aaeb83952265aa09a09ad04bbd52f3438bf5cc04e309c7e?apiKey=e13307e2352343dd9e1a467ee55b8e09"
  },
  {
    id: 4,
    title: "Delivery Rider",
    type: "Regular",
    status: "Closed",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/802588a2e33d31387422e089139df3866d662e57e85e376a368caeec0a362c5b?apiKey=e13307e2352343dd9e1a467ee55b8e09"
  }
];

const Careers: React.FC = () => {
  return (
    <CareersContainer>
      <Header />
      <MainContent>
        <PageTitle>Career opportunities</PageTitle>
        <PageDescription>
          Explore our open roles for working with the team, either full-time
          employment or internship.
        </PageDescription>

        <JobStats>
          <TotalJobs>4 open roles</TotalJobs>
          <JobTypes>
            <span>Regular - 4</span>
            <span>Internship - 0</span>
          </JobTypes>
        </JobStats>

        <JobListings>
          {jobData.map((job) => (
            <JobCard key={job.id}>
              <JobImageContainer>
                <JobImage
                  loading="lazy"
                  src={job.image}
                  alt={`${job.title} position`}
                />
                <StatusBadge closed={job.status === 'Closed'}>
                  {job.status}
                </StatusBadge>
              </JobImageContainer>
              <JobDetails>
                <div>
                  <JobTitle>{job.title}</JobTitle>
                  <JobType>{job.type}</JobType>
                </div>
                <ApplyButton disabled={job.status === 'Closed'}>
                  Apply now
                </ApplyButton>
              </JobDetails>
            </JobCard>
          ))}
        </JobListings>
      </MainContent>
      <Footer />
    </CareersContainer>
  );
};

export default Careers; 