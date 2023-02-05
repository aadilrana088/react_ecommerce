import  {useEffect, useState} from 'react';;
import { makeRequest } from '../makeRequest';

const useFetch = ({url}) => {
    const [data, setData] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await makeRequest.get(url);
                // console.log(data);
                setData(res.data.data)
            } catch (err) {
                setError(err)
            }
            setLoading(false)
        };
        fetchData();
    }, [url]);
    return {data, loading, error}
};

export default useFetch;
