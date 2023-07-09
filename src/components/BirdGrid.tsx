import React, { useState, useEffect } from 'react'
import BirdCard from './BirdCard'
import { IBird }  from '../types'
import styles from './BirdGrid.module.scss';


const BirdGrid = (): JSX.Element => {
    const [birds, setBirds] = useState<IBird[]>([]);

    useEffect(() => {
        fetch('http://localhost:9090/birds')
            .then(response => response.json())
            .then(data => {
                const birds: IBird[] = data;
                setBirds(birds);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className={styles['bird-grid']}>
            {birds.map((bird, index) => 
                <BirdCard key={index} bird={bird}/>
            )}
        </div>
    )
}

export default BirdGrid;
