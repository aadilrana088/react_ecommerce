import Card from '../Card/Card';
import './FeaturedProducts.scss';
import useFetch from '../../hooks/useFetch';
const FeaturedProducts = ({ type }) => {
    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
    );
    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} product</h1>
                <p>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis labore
                    et dolore magna aliqua. Quis ipsum suspendisse ultrices
                    gravida. Risus commodo viverra maecenas.
                </p>
            </div>
            <div className="bottom">
                {error
                    ? `Something went wrong + ${error}`
                    : loading
                    ? 'loading'
                    : data?.map((item) => <Card item={item} key={item.id} />)}
            </div>
        </div>
    );
};

export default FeaturedProducts;
