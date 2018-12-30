/* eslint-disable import/no-extraneous-dependencies */
/* eslint-env node */

// ============================================================
// Import package
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// ============================================================
// Import module
import Input from '../Input';

// ============================================================
// Story
storiesOf('Input', module)
    .add('with text', () => (
        <Input
            onkeypress={action('key press')}
            title="Enter title"
        />
    ));
