/* eslint-disable import/no-extraneous-dependencies */
/* eslint-env node */

// ============================================================
// Import packages
import React from 'react';
import { storiesOf } from '@storybook/react';

// ============================================================
// Import components
import Title from './Title';

// ============================================================
// Story
storiesOf('Title', module)
    .add('without text', () => (
        <Title />
    ))
    .add('with text', () => (
        <Title>tox</Title>
    ));
