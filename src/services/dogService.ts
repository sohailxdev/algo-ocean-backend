import axios from "axios";

const DOG_API_URL =
    "https://dog.ceo/api/breeds/image/random";

export const getRandomDogImage = async () => {
    const response = await axios.get(DOG_API_URL);

    return response.data.message;
};