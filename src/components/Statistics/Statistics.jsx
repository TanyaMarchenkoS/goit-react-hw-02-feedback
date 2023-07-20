import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
        <p className={css.statisticGood}>Good: {good} </p>
        <p className={css.statisticNeutral}>Neutral: {neutral} </p>
        <p className={css.statisticBad}>Bad: {bad} </p>
        <p>Total: {total} </p>
        <p className={css.positiveFeedback}>Positive feedback: {positivePercentage} %</p>
    </div>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
}

export default Statistics;