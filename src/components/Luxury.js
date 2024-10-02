import React from 'react';
import './Rooms.css';
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUser } from '@fortawesome/free-solid-svg-icons';

const Luxury= () => {
    return (
        <div className="container">
            <div className="image-section">
                <img src="styles\Luxury.jpg" alt="Club Luxury Room" />
            </div>
            <div className="details-section">
                <h2>LUXURY BEDROOM</h2>
                <p className="price">From <span>INR 4,000.00</span> / Day<br />(Exclusive of Taxes)</p>
                <ul className="custom-list">
                    <li><FontAwesomeIcon icon={faCheckCircle} /> Accommodation</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} /> Breakfast</li>
                </ul>
                <div className="capacity-info">
                    <div>
                        <FontAwesomeIcon icon={faUser} /> Max. Capacity: 4 Guests
                    </div>
                </div>
                <Link to="/Payment">BOOK ROOM</Link>
            </div>
        </div>
    );
};

export default Luxury;