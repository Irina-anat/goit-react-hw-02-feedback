import css from './Statistics.module.css'
import PropTypes from 'prop-types';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <ul>
                <li className={css.statistic__item}>Good: <span>
                    {good}</span></li>
                <li className={css.statistic__item}>Neutral: <span>
                    {neutral}</span></li>
                <li className={css.statistic__item}>Bad: <span>
                    {bad}</span></li>
                <li className={css.statistic__item}>Total: <span>
                    {total}</span></li>
                <li className={css.statistic__item}>Positive feedback: <span>{positivePercentage}%</span></li>
            </ul>
        </div>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

 