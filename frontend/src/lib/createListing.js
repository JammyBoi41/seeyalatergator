import axios from 'axios';

const createListing = async ({title, description, price, userID, userEmail, thumbnail, condition, category}) => {
    try {
        console.log('getting here!');
        const {data} = await axios.post('/createListing', {title, description, price, userID, userEmail, condition, category, thumbnail})
        if(data.err) {
            console.log(data.err)
        }
    } catch(e) {
        console.log("frontend/createListing.js error: ", e)
    }
}

export default createListing;