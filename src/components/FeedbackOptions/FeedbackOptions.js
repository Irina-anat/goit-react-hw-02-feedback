import React from 'react'
import css from './FeedbackOptions.module.css'
import PropTypes from 'prop-types';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return <div className={css.options__thumb}>
        {options.map((option) => (<button type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
            className={css.option__button}>
            {option}</button>))}
        </div>    
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions;