// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';

// ============================================================
// Container

/**
 * Input container
 *
 * @param {string} title
 * @param {function} onkeypress
 * @returns {React}
 * @constructor
 */
function Input({ title, onkeypress }) {
    return (
        <input
            type="text"
            defaultValue={title}
            onChange={onkeypress}
        />
    );
}

Input.propTypes = {
    onkeypress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

// ============================================================
// Exports
export default Input;
