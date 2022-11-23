import LocationCard from "./LocationCard";
import SlotCluster from "./SlotCluster";

const LocationColumn = () => {
  return (
    <div className="location-column">
      <SlotCluster></SlotCluster>
      <LocationCard></LocationCard>
      <SlotCluster></SlotCluster>
    </div>
  );
};

export default LocationColumn;
