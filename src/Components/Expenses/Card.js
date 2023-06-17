import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className; // this is soo other css classes can be added to the
    // card component

    return <div className={classes}>{props.children}</div>;
}

export default Card;