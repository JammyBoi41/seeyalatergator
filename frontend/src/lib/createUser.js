import axios from 'axios';

const createUser = async ({name, email, password}) => {
    try {
        const {data} = await axios.post('/register', {name, email, password})
        if(data.error) {
            alert(data.error);
        }
        return data;
    } catch(e) {
        console.log("frontend/createUser.js error: ", e)
    }
}

export default createUser;