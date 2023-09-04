import React from 'react'
import "./PricingCardStyles.css"
import { Link } from 'react-router-dom'
const PricingCard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>-Full Stack Website -</h3>
                <span className='bar'></span>
                <p className='btc'>15000 ₹</p>
                <p>- 1 week -</p>
                <p>- Full Stack (web2/web3)-</p>
                <p>- MongoDB database / prisma (PSQL) -</p>
                <p>- Responsive Design -</p>
                <p>- Certification Preparation -</p>
                <Link to="/contact" className='btn'>
                    PURCHASE NOW
                </Link>
            </div>

            <div className='card'>
                <h3>- Cloud -</h3>
                <span className='bar'></span>
                <p className='btc'>20000 ₹</p>
                <p>- 2 weeks -</p>
                <p>- Cloud Platform Exposure -</p>
                <p>- Cloud Security and Compliance  -</p>
                <p>- Certification Preparation -</p>
                <Link to="/contact" className='btn'>
                    PURCHASE NOW
                </Link>
            </div>

            <div className='card'>
                <h3>- AI -</h3>
                <span className='bar'></span>
                <p className='btc'>25000 ₹</p>
                <p>- 5 Days -</p>
                <p>- AI/ML -</p>
                <p>- Enhanced Algorithms -</p>
                <p>- Certification Preparation -</p>
                <Link to="/contact" className='btn'>
                    PURCHASE NOW
                </Link>
            </div>
        </div>

    </div>
  )
}

export default PricingCard