import React from 'react';
import COD from '../assets/Icons/cash-on-delivery.png';
import securepay from '../assets/Icons/secure-payment.png';
import quality from '../assets/Icons/quality-service.png';
import bestDeals from '../assets/Icons/best-deals.png';
import madeInIndia from '../assets/Icons/flag.png';

function CardAllservices() {
  const cards = [
    { icon: COD, text: 'Cash on Delivery' },
    { icon: quality, text: 'Assured Quality' },
    { icon: securepay, text: 'Secured Payments' },
    { icon: bestDeals, text: 'Best Deals' },
    { icon: madeInIndia, text: 'Made in India' },
  ];

  return (
    <div className='w-full p-4' >
      <div className='px-4 w-full'>
        <div className="py-2">
          <div className="row g-2 justify-content-between">
            {cards.map((card, index) => (
              <div key={index} className="col-lg-auto p-3" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="text-center" style={{ width: '190px' }}>
                  <div className="card-body">
                    <div className="mb-3">
                      <img 
                        src={card.icon} 
                        alt={card.text} 
                        style={{ width: '50px', height: '50px' }} 
                      />
                    </div>
                    <h5 className="card-title">{card.text}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <hr className='w-100' /> */}
    </div>
  );
}

export default CardAllservices;
