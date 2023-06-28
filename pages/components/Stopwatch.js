import { useState, useEffect } from 'react';
import Image from 'next/image';

import play from '../../images/play.png';
import pause from '../../images/pause.png';
import stop from '../../images/stop.png';

import styles from '../../styles/Stopwatch.module.css';

export default function Stopwatch({ task, onStopClick}) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    
    useEffect(() => {
        let timer;

        if (isRunning) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
        
    }, [isRunning]);

    function handlePlay() {
        setIsRunning(true);
    }

    function handlePause() {
        setIsRunning(false);
    }

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        let minutes = time % 3600;
        minutes = Math.floor(minutes / 60);
        let seconds = (time % 3600) % 60;

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      };

    return (
        <>
            <Image
            src={play}
            width={18}
            height={18}
            className={styles.button}
            onClick={handlePlay}
            alt='Start timer button'
            />
            <Image
            src={pause}
            width={18}
            height={18}
            className={styles.button}
            onClick={handlePause}
            alt='Pause timer button'
            />
            <Image
            src={stop}
            width={18}
            height={18}
            className={styles.button}
            onClick={() => {
                handlePause();
                onStopClick(time, task);
                setTime(0);
            }}
            alt='Stop timer button'
            />
            <p className={styles.time}>{formatTime(time)}</p>
        </>
    );
}