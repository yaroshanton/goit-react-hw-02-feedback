import React from 'react'
import PropTypes from 'prop-types'

const FeedbackOptions = ({ onLeaveFeedback }) => (
    <>
        <button value="good" onClick={onLeaveFeedback}>Good</button>
        <button value="neutral" onClick={onLeaveFeedback}>Neutral</button>
        <button value="bad" onClick={onLeaveFeedback}>Bad</button>
    </>
)

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func
}

export default FeedbackOptions;