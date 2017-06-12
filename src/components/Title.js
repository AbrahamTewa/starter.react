import React from 'react';
import PropTypes from 'prop-types';

/**
 * Title of the application
 * @param {string} title
 * @returns {XML}
 * @constructor
 */
function Title({title}) {
    return <h1>{title}</h1>;
}

Title.propTypes = { title: PropTypes.string.isRequired };

export default Title;

