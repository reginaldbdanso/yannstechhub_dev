import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const AboutUs = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const MainContent = styled.div`
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 21px 0 0px;
`;

const PageTitle = styled.h1`
  color: #000;
  font-size: 80px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 700;
  line-height: 1;
  margin-top: 150px;
`;

const ContentSection = styled.section`
  display: flex;
  margin-top: 4px;
  width: 100%;
  max-width: 70%;
  gap: 100px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  color: #000;

  @media (max-width: 991px) {
    flex-direction: column;
    max-width: 90%;
      gap: 10px;
  }

`;

const Sidebar = styled.aside``;

const SidebarNav = styled.nav`
  font-size: 15px;
  font-weight: 600;
  width: max-content;
  line-height: 23px;
  padding-top: 21px;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 300;
  text-align: justify;
  line-height: 22px;
  margin-bottom: 20px;
`;

const TeamSection = styled.section`
  background-color: #fff;
  width: 100%;
  max-width: 80%;
  padding: 75px 0px 135px;
  display: flex;
  flex-direction: column;
  align-items: center;

   @media (max-width: 991px) {
    max-width: 93%;
  }
`;

const TeamBanner = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
`;

const QuoteContainer = styled.div`
  margin-top: 96px;
  width: 100%;
  max-width: 80%;

   @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 50px;
  }
`;

const QuoteContent = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  gap: 40px;
  max-width: 100%;

   @media (max-width: 991px) {
    padding: 0;
    flex-direction: column-reverse;
  }
`;

const QuoteImage = styled.img`
  width: 55%;
  height: auto;
  object-fit: contain;

   @media (max-width: 991px) {
    width: 100%;
  }

`;

const QuoteText = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-style: italic;


   @media (max-width: 991px) {
    width: 100%;
  }

  blockquote {
    font-size: 30px;
    font-family: Inria Serif, -apple-system, Roboto, Helvetica, sans-serif;
    font-weight: 500;
    font-style: italic;
    line-height: 47px;
    margin: 0;
  }

`;

const QuoteAuthor = styled.p`
  font-size: 14px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 300;
  line-height: 2;
  margin: 0;
`;

const SectionTitle = styled.h2`
  align-self: center;
  color: #000;
  font-size: 50px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 700;
  line-height: 2;
  margin-top: 77px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const TeamGallery = styled.div`
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2%;
  margin-top: 2%;

  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TeamMember = styled.div`
  width: 100%;
`;

const MemberImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const TeamDescription = styled.p`
  color: #000;
  font-size: 14px;
  text-align: justify;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 300;
  line-height: 22px;
  margin-top: 42px;

  @media (max-width: 991px) {
    margin-top: 10%;
  }
`;

const Article = styled.article`
  flex: 1;
`;

const About: React.FC = () => {
  return (
    <AboutUs>
      <MainContent>
        <Header />
        <PageTitle>About Us.</PageTitle>
        
        <ContentSection>
          <Sidebar>
            <SidebarNav>
              <p>About Us<br />Our Team.<br />Press.</p>
            </SidebarNav>
          </Sidebar>
          
          <Article>
            <Description>
              Lorem ipsum dolor sit amet consectetur. Vulputate magna mi lectus auctor
              nisi varius enim. Feugiat sed ut amet lacus enim nibh. Adipiscing lacus
              eu libero felis elit eros mauris. Proin quam nunc varius nulla
              convallis. Volutpat nisi ac urna diam mattis amet. Porta gravida pretium
              pulvinar suspendisse venenatis augue purus tellus donec. Turpis amet
              lacus tristique ornare sit aliquet massa nulla scelerisque. Placerat nec
              sagittis diam rhoncus in lacus elementum at. Ac nam nullam vel eleifend
              egestas pellentesque et leo venenatis. Tincidunt magnis diam amet
              interdum tellus a. Dignissim nunc tincidunt tincidunt purus massa
              volutpat elementum integer. Vel gravida rutrum ut at tortor erat sed
              duis. Volutpat blandit magna nisi consequat diam ac.
            </Description>
            <Description>
              Tincidunt at quis fames semper morbi aliquam massa aliquet elit. Eget
              maecenas tincidunt suspendisse sit sed rutrum sed cum mauris. Lacus elit
              tristique pharetra proin vulputate magna. Facilisis diam turpis facilisi
              nisl commodo nunc. Montes hendrerit in leo nisl a tellus pharetra
              pellentesque tincidunt. Nisl vitae et ullamcorper augue scelerisque
              ornare et. Purus sagittis lectus fusce lacus. Eu tincidunt consectetur
              cras et. Eu sem pharetra neque egestas cursus nec mauris. Lectus dui
              auctor pharetra magna sed. Elementum ut quis curabitur quis mauris
              ornare pretium. Sed nisi eu egestas eu enim. Nibh orci felis lacus
              egestas orci facilisi diam maecenas dapibus. Mi sed maecenas odio odio.
              Mi ut ultricies dui at tellus nulla. Urna sit eros ultrices et a natoque
              congue a viverra. Turpis nunc pellentesque egestas purus.
            </Description>
          </Article>
        </ContentSection>

        <TeamSection>
          <TeamBanner
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aea414fb9fa092b267b2060386b3831983788ae5ef05956396250820ad440dd4?placeholderIfAbsent=true&apiKey=e13307e2352343dd9e1a467ee55b8e09"
            alt="Team banner"
          />

          <QuoteContainer>
            <QuoteContent>
              <QuoteImage
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a0693f118f8bb7d7a320f1621e71fe824ee785a21eaca21a3e37c15b6c6f505?placeholderIfAbsent=true&apiKey=e13307e2352343dd9e1a467ee55b8e09"
                alt="Quote image"
              />
              <QuoteText>
                <blockquote>
                  "Our work does make sense only if it is a faithful witness of
                  his time."
                </blockquote>
                <QuoteAuthor>Lorem ipsum dolor sit amet consectetur</QuoteAuthor>
              </QuoteText>
            </QuoteContent>
          </QuoteContainer>

          <SectionTitle>The Team.</SectionTitle>

          <TeamGallery>
            <TeamMember>
              <MemberImage
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e16a9db58ecc6395d1f8d1a6d7f62c8299e3ab3dbe393fc03c58b52b382921c?placeholderIfAbsent=true&apiKey=e13307e2352343dd9e1a467ee55b8e09"
                alt="Team member 1"
              />
            </TeamMember>
            <TeamMember>
              <MemberImage
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b3991ab6995b8437944a9e9d742e3da28ceaeaa22e33e75f1c6089a75048e8a?placeholderIfAbsent=true&apiKey=e13307e2352343dd9e1a467ee55b8e09"
                alt="Team member 2"
              />
            </TeamMember>
            <TeamMember>
              <MemberImage
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc1ef4414de19456a9ed2a57fa39819216005a05b088a578e9e3661b0dafa6d2?placeholderIfAbsent=true&apiKey=e13307e2352343dd9e1a467ee55b8e09"
                alt="Team member 3"
              />
            </TeamMember>
            <TeamMember>
              <MemberImage
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc1ef4414de19456a9ed2a57fa39819216005a05b088a578e9e3661b0dafa6d2?placeholderIfAbsent=true&apiKey=e13307e2352343dd9e1a467ee55b8e09"
                alt="Team member 3"
              />
            </TeamMember>
            <TeamMember>
              <MemberImage
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc1ef4414de19456a9ed2a57fa39819216005a05b088a578e9e3661b0dafa6d2?placeholderIfAbsent=true&apiKey=e13307e2352343dd9e1a467ee55b8e09"
                alt="Team member 3"
              />
            </TeamMember>
          </TeamGallery>

          <TeamDescription>
            Lorem ipsum dolor sit amet consectetur. Vulputate magna mi lectus auctor
            nisi varius enim. Feugiat sed ut amet lacus enim nibh. Adipiscing lacus eu
            libero felis elit eros mauris. Proin quam nunc varius nulla convallis.
            Volutpat nisi ac urna diam mattis amet. Porta gravida pretium pulvinar
            suspendisse venenatis augue purus tellus donec. Turpis amet lacus
            tristique ornare sit aliquet massa nulla scelerisque. Placerat nec
            sagittis diam rhoncus in lacus elementum at. Ac nam nullam vel eleifend
            egestas pellentesque et leo venenatis. Tincidunt magnis diam amet interdum
            tellus a. Dignissim nunc tincidunt tincidunt purus massa volutpat
            elementum integer. Vel gravida rutrum ut at tortor erat sed duis. Volutpat
            blandit magna nisi consequat diam ac.
          </TeamDescription>
        </TeamSection>
      </MainContent>
      <Footer />
    </AboutUs>
  );
};

export default About; 