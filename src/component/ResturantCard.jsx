import { imgURL } from "./../config";

const ResturantCard = ({ restaurant }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = restaurant;
  return (
    <div className="w-52 m-2 p-2 shadow-lg bg-pink-80 hover:bg-pink-300">
      <img src={imgURL + cloudinaryImageId} alt="image" />
      <p className="text-xl">{name}</p>
      <p className="text-xs">{cuisines.slice(0, 4).join(",")}</p>
      <p>{avgRating}</p>
    </div>
  );
};
export default ResturantCard;
