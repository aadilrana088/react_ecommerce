import React from 'react';
import Card from '../Card/Card';
import './List.scss';
const List = () => {
    const data = [
        {
            id: 1,
            title: 'Men',
            isNew: true,
            img: 'https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600',
            oldPrice: 20,
            price: 15,
        },
        {
            id: 2,
            title: 'Women',
            isNew: true,
            img: 'https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600',
            oldPrice: 20,
            price: 15,
        },
        {
            id: 3,
            title: 'Boy',
            img: 'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600',
            oldPrice: 20,
            price: 15,
        },
        {
            id: 4,
            title: 'Girl',
            img: 'https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600',
            oldPrice: 20,
            price: 15,
        },
    ];

    return (
        <div className="list">
            {/* {data.map((item) => (
                <Card item={item} key={item.id} />
            ))} */}
        </div>
    );
};

export default List;
