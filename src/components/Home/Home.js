import React, {useLayoutEffect} from 'react';
import Room from "../Room/Room";
import {CardGroup} from 'react-bootstrap';
import './Home.css';

const Home = () => {
    const rooms = [
        {
            title: 'Standard Single',
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/room/presidential-two-bedroom-suite/burj-al-arab-presidential-suite-guest-bedroom_6-4_landscape/burj-al-arab-presidential-suite-guest-bedroom_16-9_landscape.jpg?w=2080',
            bed: 1,
            capacity: 1,
            bedType: 'Single',
            avatar: 'S',
            price: 119
        },
        {
            title: 'Couple Power',
            description: 'Super Delux. Superior Double Rooms are perfectly equipped for traveling couples or friends.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-royal-suite-staircase-5-hero.jpg',
            bed: 1,
            capacity: 2,
            bedType: 'Double',
            avatar: 'D',
            price: 149
        },
        {
            title: 'Family Capacity',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/room/presidential-two-bedroom-suite/burj-al-arab-presidential-suite-guest-bedroom_6-4_landscape/burj-al-arab-presidential-suite-guest-bedroom_16-9_landscape.jpg?w=2080',
            bed: 2,
            capacity: 4,
            bedType: 'Family',
            avatar: 'F',
            price: 199
        }
    ]
    return (
        <div className="card-group-container">
            <div className="card-deck row d-flex justify-content-around">
                {
                    rooms.map(room => <Room key={room.bedType} room={room}></Room>)
                }
            </div>
        </div>
    );
};

export default Home;