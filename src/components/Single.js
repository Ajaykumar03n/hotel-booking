import React from 'react';
import './Rooms.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUser } from '@fortawesome/free-solid-svg-icons';

const Single= () => {
    return (
        <div className="container">
            <div className="image-section">
                <img src="styles\single.jpg" alt="Club Single Room" />
            </div>
            <div className="details-section">
                <h2>SINGLE BEDROOM</h2>
                <p className="price">From <span>INR 2,500.00</span> / Day<br />(Exclusive of Taxes)</p>
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

export default Single;
