import clients from "../../data/client-data.json";
import classes from "./Testimonials.module.css";

import Emily from "../../assets/image-emily.jpg";
import Thomas from "../../assets/image-thomas.jpg"; 
import Jennie from "../../assets/image-jennie.jpg"; 

const Testimonials = () => {
  const profilePhotos = [Emily, Thomas, Jennie]; 

  return (
    <div className={classes.testimonials}>
      <h3>Client Testimonials</h3>
      <div className={classes.flexbox}>
      {clients.map((client) => {
        return (
          <div className={classes.testimonialCard} key={client.name}>
            <img
              src={profilePhotos[client.photoNumber]}
              alt={client.name}
              className={classes.photo}
            />
            <p className={classes.testimonial}>{client.testimonial}</p>
            <p className={classes.name}>{client.name}</p>
            <p className={classes.job}>{client.job}</p>
          </div>
          
        );
      })}
      </div>
    </div>
  );
};

export default Testimonials;
