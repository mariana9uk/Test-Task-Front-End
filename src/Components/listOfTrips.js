import { useRef } from "react";
import "../App.css";
import { ListItem } from "./listItem";
import { nanoid } from "nanoid";
export const ListOfTrips = ({ trips, searchTerm, selectTrip }) => {
  const filteredTrips = trips.filter((trip) =>
    trip.city.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const tripListContainerRef = useRef(null);
  const handleWheelScroll = (event) => {
    const tripListContainer = tripListContainerRef.current;
    tripListContainer.scrollLeft += event.deltaY;
  };
  const tripCard = filteredTrips.map((trip) => (
    <ListItem
      key={nanoid()}
      tripData={trip}
      onClick={() => selectTrip(trip.city, trip.startDate, trip.endDate)}
    />
  ));
  return (
    <div className="list-box">
      <ul
        className="trip-list-container, trip-cards"
        ref={tripListContainerRef}
        onWheel={handleWheelScroll}
      >
        {tripCard}
      </ul>
    </div>
  );
};
