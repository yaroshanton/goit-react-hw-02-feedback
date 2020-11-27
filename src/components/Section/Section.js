import React from 'react'
import PropTypes from 'prop-types'
import './Section.css'


const Section = ({ title, children }) => (
    <section className="feedbackSection">
        <h2>{title}</h2>
        {children}
    </section>
)

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired
}

export default Section;