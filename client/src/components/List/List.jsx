import React from 'react';
import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';
import './List.scss';
const List = ({ catId, maxPrice, sort, subCats }) => {
    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
            (item) => `&[filters][sub_categories][id]=${item}`
        )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    );
    // console.log(data);

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
