import React from 'react';
import Card from 'react-bootstrap/Card'
import './Room.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRestroom, faBed, faDollarSign} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

const Room = (props) => {
    const {title, description,imgUrl,capacity, bed, bedType, avatar, price} = props.room;
    return (
        <div className="col-md-4 card-container">
            <Card>
                <div className="">
                    <Card.Title className="title"><span className="avatar">{avatar}</span>{title}</Card.Title>
                </div>
                <Card.Img variant="top" src={imgUrl} alt="" />
                <Card.Body>
                    <Card.Text style={{textAlign:"justify"}}>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-around align-items-center">
                    <FontAwesomeIcon icon={faBed} />{bed}
                    <FontAwesomeIcon icon={faRestroom} />{capacity}
                    <FontAwesomeIcon icon={faDollarSign} />{price}
                    <Link to={"/book/"+bedType}>
                        <button className="book-btn">Book</button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Room;