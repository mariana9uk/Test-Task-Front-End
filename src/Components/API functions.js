import axios from "axios";

const API_KEY = "EVW435AWUN5VA3VKAWVX9S63W";
export const FetchForecast = async (queryCity, dateStart, dateEnd) => {
  const city = queryCity;
  const date1 = dateStart;
  const date2 = dateEnd;
  try {
    const responce = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${date1}/${date2}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
    );

    return responce.data.days;
  } catch (error) {
    console.log(error);
  }
};

export const fetchWeather = async (queryCity) => {
  const city = queryCity;

  try {
    const responce =
      await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days
      &key=${API_KEY}&contentType=json`);

    return responce.data.days;
  } catch (error) {
    console.log(error);
  }
};
