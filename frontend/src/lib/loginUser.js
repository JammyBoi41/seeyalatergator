import axios from 'axios';

const loginUser = async ({email, password}) => {
    try {
        const {data} = await axios.post('/login', {email, password})
    } catch(e) {
        console.log("frontend/loginUser.js error: ", e)
    }
}

export default loginUser;