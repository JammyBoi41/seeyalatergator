import axios from 'axios';

const getListings = async (setData) => {
    try {
        const {data} = await axios.get('/listings', {});
        setData(data);
    } catch(e) {
        console.log("frontend/getListings.js error: ", e)
    }
}

export default getListings;