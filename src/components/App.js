import React, { Component } from 'react';
import Statistics from './Statistics/Statistics'
import Section from './Section/Section'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Notification from './Notification/NotificationMessage';

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    incrimentFeedback = (e) => {
        this.setState(prevState => {
            const value = e.target.value;
            return {
                [value]: prevState.[value] + 1
            };
        })
    };

    countTotalFeedback = () => Object.values(this.state).reduce((a, b) => a + b);


    countPositiveFeedbackPercentage = () => Math.round(this.state.good / this.countTotalFeedback() * 100);


    render() {
        const { good, neutral, bad } = this.state;

        const visibleTotal = this.countTotalFeedback();

        return (
            <Section title="Please leave feedback">
                <FeedbackOptions onLeaveFeedback={this.incrimentFeedback} />
                <Statistics good={good} neutral={neutral} bad={bad} total={visibleTotal} positivePercentage={this.countPositiveFeedbackPercentage()}>
                    <Notification message="No feedback given" />
                </Statistics>
            </Section>
        )
    }
}