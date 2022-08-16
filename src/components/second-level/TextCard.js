import classes from "./TextCard.module.css";
const TextCard = (props) => {
  return (
    <div className={classes.textCard} id={props.id}>
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
      <div className={classes.link}>
        <p>Learn More</p>
        <div className={classes.highlight} style={{backgroundColor: props.highlight}}></div>
      </div>
    </div>
  );
};

export default TextCard;
