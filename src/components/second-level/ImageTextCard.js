import classes from "./ImageTextCard.module.css"; 
const ImageTextCard = (props) => {
    return(
        <div className={classes.imageTextCard} style={{background: `top/cover url(${props.photo}) no-repeat`, color:props.color}}>
            <h3>{props.title}</h3>
            <p>{props.paragraph}</p>
        </div>
    )
}

export default ImageTextCard; 