import React from 'react'
import css from './FeedbackOptions.module.css'



const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    //console.log(options)
    return options.map(option => (
        <div>
            <button type="button"
                key={option}
                onClick={() => onLeaveFeedback(option)}   className={css.option__button}>
                  {option}</button>
        </div> 
    ))   
    }




export default FeedbackOptions