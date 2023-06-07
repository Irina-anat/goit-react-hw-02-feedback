import css from './Statistics.module.css'


const Statistics = ({ good, neutral, bad }) => {
    return (
        <div>
             <ul>
                <li className={css.statistic__item} >Good: <span>{good}</span></li>
                <li className={css.statistic__item}>Neutral: <span>{neutral}</span></li>
                <li className={css.statistic__item}>Bad: <span>{bad}</span></li>
        </ul>
            </div>      
   )
}

export default Statistics

 /* <div>
             <ul>
            <li className={css.statistic__item} >Good: <span>{this.state.good }</span></li>
            <li className={css.statistic__item}>Neutral: <span>{this.state.neutral }</span></li>
            <li className={css.statistic__item}>Bad: <span>{this.state.bad}</span></li>
        </ul>
            </div> */