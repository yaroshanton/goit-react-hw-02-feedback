import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Statistics extends Component {
    static propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
        children: PropTypes.object.isRequired
    }

    render() {
        const { good, neutral, bad, total, positivePercentage, children } = this.props;

        return (
            <>
                <h2>Statistics</h2>
                {total === 0 ? children :
                    <div>
                        <p>Good: {good}</p>
                        <p>Neutral: {neutral}</p>
                        <p>Bad: {bad}</p>
                        <p>Total: {total}</p>
                        <p>Positive feedback: {positivePercentage}%</p>
                    </div>}
            </>
        )
    }
}

export default Statistics;