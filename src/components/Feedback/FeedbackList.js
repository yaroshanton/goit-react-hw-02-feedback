import React, { Component } from 'react';
import './Feedback.css'

export default class FeedbackList extends Component {
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

    countTotalFeedback = () => Object.values(this.state).reduce((a, b) => a + b, 0);


    countPositiveFeedbackPercentage = () => Math.round(this.state.good / this.countTotalFeedback() * 100);



    render() {
        const { good, neutral, bad } = this.state

        const total = this.countTotalFeedback();

        return (
            <>
                <section className="feedbackSection">
                    <h2>Please leave feedback</h2>
                    <div>
                        <button value="good" onClick={this.incrimentFeedback}>Good</button>
                        <button value="neutral" onClick={this.incrimentFeedback}>Neutral</button>
                        <button value="bad" onClick={this.incrimentFeedback}>Bad</button>
                    </div>
                    <h2>Statistics</h2>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                    {total > 0 && <p>Total: {this.countTotalFeedback()}</p>}
                    {total > 0 && <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>}
                </section>
            </>
        )
    }
}