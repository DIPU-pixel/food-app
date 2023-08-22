
import { imgURL } from './../config';

const ResturantCard = ({restaurant}) => {
    const{name,cuisines,avgRating,cloudinaryImageId}  =restaurant
  return (
    <div className="card" >
      <img
        src={imgURL+ cloudinaryImageId}
        alt="image"
      />
      <h3>{name}</h3>
      <h5>{cuisines.slice(0,4).join(',')}</h5>
      <h4>{avgRating}</h4>
    </div>
  );
};
export default ResturantCard