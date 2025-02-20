import axios from 'axios';
  export const baseUrl = "http://localhost:9000/api";
// export const baseUrl = "https://www.api.vegenmart.com/api";

export const fetchHeadersAds = async () => {
    try {
        const response = await axios.get(`${baseUrl}getAllHeaderAds`);
        return await response.data;
    } catch (error) {
        console.error("Error fetching header ads:", error);
        throw error; // Re-throw the error for handling in the component
    }

};




