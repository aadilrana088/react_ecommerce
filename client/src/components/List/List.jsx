import React from 'react';
import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';
import './List.scss';
const List = ({ catId, maxPrice, sort, subCats }) => {
    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][categories][id]=${catId}`
    );
    console.log(data);

    return (
        <div className="list">
            {error
                ? `Something went wrong  ${error}`
                : loading
                ? 'loading'
                : data?.map((item) => <Card item={item} key={item.id} />)}
            {/* {data.map((item) => (
                <Card item={item} key={item.id} />
            ))} */}
        </div>
    );
};

export default List;
