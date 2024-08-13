'use client'

import React from 'react'
import ThumbsUpIcon from '../../../public/reviews-main/thumb-up.svg'
import ThumbsDownIcon from '../../../public/reviews-main/thumb-down.svg';
import styles from './progress.module.scss';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import ProgressBar from '@ramonak/react-progress-bar';

const ProgressBars = () => {
  return (
    <div className={styles.progress}>
        <div className={styles.stats}>
            <div className={styles.item}>
                <ThumbsUpIcon width={36} height={35}/>
                <div className={styles.numberOne}>
                    <CountUp end={274} duration={5} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                </div>
            </div>
            <div className={styles.item}>
                <ThumbsDownIcon width={36} height={35}/>
                <div className={styles.number}>
                    <CountUp end={12} duration={5} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                </div>
            </div>
        </div>
        <div className={styles.bar}>
        <ProgressBar 
        completed={80}
        className={styles.barWrapper}
        barContainerClassName={styles.barContainer}
        completedClassName={styles.barCompleted}
        animateOnRender={true}
        isLabelVisible={false}
    />
        </div>
        <div className={styles.userStats}>
            <span className={styles.percent}>94%</span>
            пользователей довольны работоспособностью сервиса
        </div>
    </div>
  )
}

export default ProgressBars
