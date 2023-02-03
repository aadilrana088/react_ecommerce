import React from 'react';
import { useState } from 'react';
import './Product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

export const Product = () => {
    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const data = [
        'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ];

    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img
                        src={data[0]}
                        alt=""
                        onClick={(e) => setSelectedImg(0)}
                    />
                    <img
                        src={data[1]}
                        alt=""
                        onClick={(e) => setSelectedImg(1)}
                    />
                </div>
                <div className="mainImg">
                    <img src={data[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className="price">$199</span>
                <p>
                    Dolor et takimata gubergren erat elitr rebum. Erat diam diam
                    lorem et justo ea justo clita sanctus, kasd ut kasd.
                </p>
                <div className="quantity">
                    <button
                        onClick={() =>
                            setQuantity((prev) => (prev === 0 ? 0 : prev - 1))
                        }
                    >
                        -
                    </button>
                    {quantity}
                    <button onClick={() => setQuantity((prev) => prev + 1)}>
                        +
                    </button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon /> ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon />
                        ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceIcon />
                        ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
                    <span>Vandor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    );
};
