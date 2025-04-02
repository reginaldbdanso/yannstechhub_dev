import React from 'react';
import '../styles/components/ProductDescription_module.css';

const ProductDescription: React.FC = () => {
  return (
    <section className="contentSection">
      <h2 className="sectionTitle">Description</h2>
      <div className="specsList">
        BT Version: 5.2<br/>
        BT Range: ≥10m<br/>
        Speaker Diameter: 40mm<br/>
        Playtime: Up to 60 hours<br/>
        Charging Time: 1.5 hours<br/>
        Supported Format: Mic support / Aux in Mode / Type-C<br/>
        Model: OHP-610
      </div>

      <div className="featureDescription">
        <strong>
          Powerful Deep Bass<br/>
          Hits You in Waves
        </strong>
        Powered by advanced 40mm drivers and exclusive HavyBassTM technology, BoomPop2 is meticulously designed to offer music enthusiasts an unparalleled sound experience, characterized by incredibly deep and dynamic bass.
      </div>

      <h2 className="sectionTitle">Ratings and Reviews</h2>
      <div className="reviewsContainer">
        <div className="ratingSummary">
          <div className="ratingScore">
            <span>5.0</span>
            <img src="/imgs/star.png" alt="Rating stars" />
          </div>
          <div>5489 ratings</div>

          <div className="ratingBars">
            {[5, 4, 3, 2, 1].map(rating => (
              <div key={rating} className="ratingBar">
                <span>{rating}</span>
                <div className="barContainer">
                  <div 
                    className="barFill" 
                    style={{ 
                      width: rating === 5 ? '100%' : 
                             rating === 4 ? '80%' : 
                             rating === 3 ? '60%' : 
                             rating === 2 ? '40%' : '20%' 
                    }}
                  />
                </div>
                <span>3321</span>
              </div>
            ))}
          </div>
        </div>

        {[1, 2, 3].map(index => (
          <div key={index} className="reviewCard">
            <div className="reviewRating">
              <h3 className="reviewTitle">Super impressive</h3>
              <div className="reviewStars">
                {[1, 2, 3, 4].map(star => (
                  <img
                    key={star}
                    src="/imgs/star.png"
                    alt="Rating star"
                  />
                ))}
              </div>
            </div>
            <p className="reviewText">
              The sound quality from this device is great and my favourite feature is how I&apos;m able to connect to both my phone and laptop, with the headset auto switching when a sound is being played from either of them.
            </p>
            <p className="reviewAuthor">Reviewed by Sweetie Baiden</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductDescription;