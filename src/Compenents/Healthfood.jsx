import React from 'react';

const HealthyFoodSection = () => {
  return (
    <div className="healthy-food-section pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5">
            <div className="text-center">
              <img
                src="https://c.ndtvimg.com/2020-04/808nac88_fruits-veggies_625x300_16_April_20.jpg"
                alt="Healthy Fruits"
                className="healthy-food-section-img"
              />
            </div>
          </div>
          <div className="col-12 col-md-7">
            <h1 className="healthy-food-section-heading">
              Fresh, Healthy, Organic, Delicious Fruits
            </h1>
            <p className="healthy-food-section-description">
              Say no to harmful chemicals and go fully organic with our range of
              fresh fruits and veggies. Pamper your body and your senses with
              the true and unadulterated gifts from mother nature. with the true
              and unadulterated gifts from mother nature.
            </p>
            <div id="sectionBackk">
              <button className="custom-button">Watch Video</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthyFoodSection;
