import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about-us">
      <div className="main-content">
        <h1 className="page-title">About Us.</h1>

        <section className="content-section">
          <aside className="sidebar">
            <nav className="sidebar-nav">
              <p>About Us<br />Our Team.<br />Press.</p>
            </nav>
          </aside>
          <article className="main-content">
            <p className="description">
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
            </p>
            <p className="description">
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
            </p>
          </article>
        </section>

        <section className="team-section">
          <img
            loading="lazy"
            src="/src/assets/team-banner.png"
            className="team-banner"
            alt="Team banner"
          />

          <div className="quote-container">
            <div className="quote-content">
              <img
                loading="lazy"
                src="/src/assets/quote-image.png"
                className="quote-image"
                alt="Quote image"
              />
              <div className="quote-text">
                <blockquote>
                  "Our work does make sense<br />only if it is a faithful witness<br />of
                  his time."
                </blockquote>
                <p className="quote-author">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </div>

          <h2 className="section-title">The Team.</h2>

          <div className="team-gallery">
            <div className="team-member">
              <img
                loading="lazy"
                src="/src/assets/team-member-1.png"
                className="member-image"
                alt="Team member 1"
              />
            </div>
            <div className="team-member">
              <img
                loading="lazy"
                src="/src/assets/team-member-2.png"
                className="member-image"
                alt="Team member 2"
              />
            </div>
            <div className="team-member">
              <img
                loading="lazy"
                src="/src/assets/team-member-3.png"
                className="member-image"
                alt="Team member 3"
              />
            </div>
          </div>

          <p className="team-description">
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
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;