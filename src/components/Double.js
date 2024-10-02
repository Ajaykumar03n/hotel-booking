import React from 'react';
import './Rooms.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUser } from '@fortawesome/free-solid-svg-icons';

const Double = () => {
    return (
        <div className="container">
            <div className="image-section">
                <img src="styles\double.jpg" alt="Club Double Room" />
            </div>
            <div className="details-section">
                <h2>DOUBLE BEDROOM</h2>
                <p className="price">From <span>INR 3,000.00</span> / Day<br />(Exclusive of Taxes)</p>
                <ul className="custom-list">
                    <li><FontAwesomeIcon icon={faCheckCircle} /> Accommodation</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} /> Breakfast</li>
                </ul>
                <div className="capacity-info">
                    <div>
                        <FontAwesomeIcon icon={faUser} /> Max. Capacity: 3 Guests
                    </div>
                </div>
                <a href="./payment" className="add-room">BOOK ROOM</a>
            </div>
        </div>
    );
};

export default Double;
