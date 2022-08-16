import classes from './ImageCard.module.css';

const ImageCard = (props) => {
    return (
        <div className={`${classes.imageCard} ${props.name === "Egg" ? classes.transform : ''}`}>
            <img src={props.photo} alt=""/>
        </div>
    )
}

export default ImageCard; 