import axios from 'axios';

const createListing = async ({title, description, price, userID, userEmail, thumbnail}) => {
    try {
        console.log('getting here!');
        const price = "25.99"; //CHANGE THIS I JUST WANT TO DO THIS FOR TESTING REASONS
        const {data} = await axios.post('/createListing', {title, description, price, userID, userEmail, thumbnail})
        if(data.err) {
            console.log(data.err)
        }
    } catch(e) {
        console.log("frontend/createListing.js error: ", e)
    }
}

export default createListing;