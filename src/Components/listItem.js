import citiesData from "../cities.json";
export const ListItem = ({ tripData, onClick }) => {
  const { city, startDate, endDate } = tripData;
  const cityData = citiesData.find((item) => item.city === city);
  const imageUrl = cityData ? cityData.image : "";

  return (
    <li className="trip-card" onClick={onClick}>
      <img src={imageUrl} alt={cityData.city} className="trip-card-image"></img>
      <div className="trip-card-text-container">
        <p className="trip-card-text">{city}</p>
        <p className="trip-card-text-time">
          {startDate} - {endDate}
        </p>
      </div>
    </li>
  );
};
