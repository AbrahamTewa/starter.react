// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';

// ============================================================
// Component
/**
 * Title of the application
 * @param {string} children
 * @returns {React}
 * @constructor
 */
function Title({ children }) {
    return <h1>{children}</h1>;
}

Title.defaultProps = {
    children: undefined,
};

Title.propTypes = { children: PropTypes.string };

// ============================================================
// Exports
export default Title;
