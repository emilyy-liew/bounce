import { useState } from 'react';
import Image from 'next/image';

import openToggleImg from '../../images/toggle_open.png';
import closeToggleImg from '../../images/toggle_close.png';

import styles from '../../styles/Toggle.module.css';

export default function Toggle({ children, initialVisiblility, label }) {
    const [isVisible, setIsVisible] = useState(initialVisiblility);

    function handleOnClick() {
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <Image 
                src={isVisible ? openToggleImg : closeToggleImg}
                width={18}
                height={18}
                className={styles.icon}
                onClick={handleOnClick}
                alt="expand toggle button"
                />
            <p onClick={handleOnClick}>{label}</p>
            {isVisible ? children : false}
        </div>
    )    
}