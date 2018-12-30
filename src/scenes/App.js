// ============================================================
// Import packages
import React from 'react';

// ============================================================
// Import containers
import {
    CurrentTitle,
    InputTitle,
} from '../containers';

// ============================================================
// Scene

function App() {
    return (
        <div>
            <CurrentTitle />
            <div>
                Set title:
                {' '}
                <InputTitle />
            </div>
        </div>
    );
}

// ============================================================
// Exports
export default App;
