import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const { 
    minutes, 
    seconds, 
    hasFinished,
    isActive,
    startCountdown, 
    resetCountdown
  } = useContext(CountdownContext);

  //tanto para minutos quanto para segundos caso sejam menor que 10 coloca o 0 a esquerda
  // para manter os 2 dígitos
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split(''); 

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          className={styles.CountdownButton}
          disabled>
          Cíclo encerrado
          <img src="icons/checked.svg" alt="checked"/>
        </button>
      ) : (
        <>
          { isActive ? (
            <button 
              type="button" 
              className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}
              onClick={resetCountdown}>
              Abandonar cíclo
            </button>
          ) : (
            <button 
              type="button" 
              className={styles.CountdownButton}
              onClick={startCountdown}>
              Iniciar cíclo
            </button>
          )}
        </>
      )}
    </div>
  );
}