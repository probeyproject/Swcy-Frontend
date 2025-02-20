import React from 'react';

function CategoryMen() {
  return (
    <div>
      <div className="container mt-5">
        <h6 className="mb-3 text-uppercase">Brown Cotton High Low Hem Kurta Set</h6>
        <h5 className="text-muted">
          &#8377;5,500.00 
        </h5>
        <hr />
        <div className="mt-4">
          <h6 className='text-muted'>Color:</h6>
          <button className="btn border text-dark active rounded-0 ms-1" disabled>
            Brown
          </button>
          <button className="btn border text-dark active rounded-0 ms-1" disabled>
            Red
          </button>
        </div>

        <div className="mt-4">
          <h6 className='text-muted'>Size:</h6>
          <div className="btn-group" role="group" aria-label="Size options">
            <button className="btn border text-dark rounded-0 ms-1">XS</button>
            <button className="btn border text-dark rounded-0 ms-1">S</button>
            <button className="btn border text-dark rounded-0 ms-1">M</button>
            <button className="btn border text-dark disabled rounded-0 ms-1" >
              L
            </button>
            <button className="btn border text-dark disabled rounded-0 ms-1" >
              XL
            </button>
            <button className="btn border text-dark disabled rounded-0 ms-1" >
              XXL
            </button>
          </div>
        </div>

        <div className="mt-4">
          <button className="btn border text-secondary btn-lg me-2 rounded-0 ms-1" >
            Add to Cart
          </button>
          <button className="btn border bg-warning text-dark btn-lg rounded-0 ms-1">Buy It Now</button>
        </div>
        <hr />
      </div>


      <div 
  className="card border-0 shadow-sm p-4 rounded position-relative" 
  style={{ maxWidth: '600px', margin: 'auto', background: '#fff' }}
>
  {/* SVG Background */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 144 144"
    className="position-absolute svg-icon"
    style={{ width: '120px', height: '120px', top: '-30px', right: '-30px', opacity: 0.1 }}
  >
    <path
      d="M72 0C111.927 0 144 32.073 144 72C144 111.927 111.927 144 72 144C32.073 144 0 111.927 0 72C0 32.073 32.073 0 72 0ZM72 24C46.764 24 24 46.764 24 72C24 97.236 46.764 120 72 120C97.236 120 120 97.236 120 72C120 46.764 97.236 24 72 24Z"
      fill="#808080" /* Default gray color */
    />
  </svg>

  <div className="card-body">
    <div className="d-flex align-items-center mb-3">
      {/* Star Ratings */}
      <div className="text-warning">
        <span className="me-1">&#9733;</span>
        <span className="me-1">&#9733;</span>
        <span className="me-1">&#9733;</span>
        <span className="me-1">&#9733;</span>
        <span className="text-muted">&#9734;</span>
      </div>
    </div>

    {/* Review Text */}
    <p className="fst-italic text-muted">
      "The spinach I ordered was incredibly fresh and lasted for a week in my fridge. Delivery was super quick too!"
    </p>

    <div className="d-flex align-items-center mt-4">
      {/* Profile Image */}
      <img
        src="https://via.placeholder.com/64"
        alt="Profile"
        className="rounded-circle me-3"
        style={{ width: '64px', height: '64px', objectFit: 'cover' }}
      />
      <div>
        <h6 className="mb-0 text-capitalize fw-bold text-danger">mohit</h6>
        <small className="text-muted">Gurugram</small>
      </div>
    </div>
  </div>
</div>



    </div>
  );
}

export default CategoryMen;
