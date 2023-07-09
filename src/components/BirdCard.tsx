import React from "react";
import { IBird } from "../types";
import styles from "./BirdCard.module.scss";

interface BirdCardProps {
    key: number;
    bird: IBird;
}

const BirdCard = (props: BirdCardProps): JSX.Element => {
    const { name, description, img } = props.bird;
    return (
        <div className={styles.birdCard}>
            <img src={img} alt={name} className={styles.birdImage} />
            <div className={styles.birdInfo}>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BirdCard;
