import React from 'react'
import styles from './Statistics.module.css';
import PropTypes from 'prop-types'

function Statistics({ title, stats }) {

  const statisticItems = stats.map(props => {
    return (<li className={styles.item} key={props.id}>
      <span className={styles.label}>{props.label}</span>
      <span className="percentage">{props.percentage}%</span>
    </li>);
  });

    return(
    <section className={styles.statistics}>
        {title && <h2 className="title">{title}</h2>}

        <ul className={styles.statList}>
          {statisticItems}
        </ul>
        </section>
    )
}

export default Statistics

    
Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired
}