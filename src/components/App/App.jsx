import Section from '../Section/Section'
import css from './App.module.css'
import Statistics from 'components/Statistics/Statistics';
import React from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

export class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
  }
  
  addFeedbacOption = option => {
    this.setState(state => ({
      [option]: state[option] + 1,}));
    };

      render() {
      const { good, neutral, bad } = this.state;
      return <div className={css.container}>
        <Section title="Please leave feedback">
          <div className={css.options__thumb}>
            <FeedbackOptions options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedbacOption} />
          </div>  
      </Section>
      <Section>
        <Section title="Statistics">
          <Statistics good={good}
							neutral={neutral}
              bad={bad}/>
        </Section>
      </Section>
    </div>
    
  }
}

