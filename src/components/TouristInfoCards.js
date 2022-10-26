import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="container pt-2">
      <div className="row">
        <div className="col-4">
          <div className="card">
            <img
              src="https://loremflickr.com/640/360"
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h4 className="card-title">Glasgow</h4>
              <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, ratione beatae reprehenderit accusantium ex, temporibus
                deleniti blanditiis earum minus cupiditate dolorem, ut at quod
                pariatur. Doloremque pariatur iure maiores saepe?
              </p>
              <a
                href="https://peoplemakeglasgow.com"
                className="btn btn-primary"
              >
                Go Glasgow
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <img
              src="https://placekitten.com/640/360"
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h4 className="card-title">Manchester</h4>
              <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, ratione beatae reprehenderit accusantium ex, temporibus
                deleniti blanditiis earum minus cupiditate dolorem, ut at quod
                pariatur. Doloremque pariatur iure maiores saepe?
              </p>
              <a href="https://visitmanchester.com" className="btn btn-primary">
                Go Manchester
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <img
              src="https://placebeard.it/640x360"
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h4 className="card-title">London</h4>
              <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, ratione beatae reprehenderit accusantium ex, temporibus
                deleniti blanditiis earum minus cupiditate dolorem, ut at quod
                pariatur. Doloremque pariatur iure maiores saepe?
              </p>
              <a href="https://visitlondon.com" className="btn btn-primary">
                Go London
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
