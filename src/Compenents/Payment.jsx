
import React from 'react'

const Payment = () => {
  return (
    <div>
        <div className="delivery-and-payment-section pt-5 pb-5" id="deliveryPaymentSection">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-5 order-1 order-md-2">
        <div className="text-center">
          <img 
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png" 
            className="delivery-and-payment-section-img" 
            alt="Delivery and Payment Section" 
          />
        </div>
      </div>
      <div className="col-12 col-md-7 order-2 order-md-1">
        <h1 className="delivery-and-payment-section-heading">
          Delivery and Payment
        </h1>
        <p className="delivery-and-payment-section-description">
          Enjoy hassle-free payment with the plenitude of payment options
          available for you. Get live tracking and locate your food on a
          live map. It's quite a sight to see your food arrive at your door.
          Plus, you get a 5% discount on every order every time you pay
          online.
        </p>
        <button className="custom-button">Order Now</button>
        <div className="d-flex flex-row justify-content-center">
          <div className="mt-3">
            <a href="mailto:yashuyashvanth960@axl">
              <img 
                src="/paytm1.png"
                className="payment-card-img" 
              />
            </a>
            <a href="#">
              <img 
                src="/phonepe.jpg" 
                className="payment-card-img1 ml-2 mr-2" 
              />
            </a>
            <a href="#">
              <img 
                src="/gpay.png" 
                className="payment-card-img" 
              />
            </a>
            <a href="#">
              <img 
                src="/Amazon_Pay1.jpg" 
                className="payment-card-img" 
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Payment