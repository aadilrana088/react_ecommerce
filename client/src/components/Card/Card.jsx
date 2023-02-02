import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    return (
        <Link className="link" to={`/product/${item.id}`}>
            <div className="card">
                <div className="image">
                    {item.isNew && <span>New Season</span>}
                    <img src={item.img} alt="" className="mainImg" />
                    <img src={item.img2} alt="" className="secondImg" />
                </div>
                <h2>{item.title}</h2>
                <div className="prices">
                    <h3> &#8377;{item.oldPrice * 80}</h3>
                    <h3> &#8377;{item.price * 80}</h3>
                </div>
            </div>
        </Link>
    );
};

export default Card;
