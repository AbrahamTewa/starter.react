/* eslint-env node */

import React from 'react';
import { storiesOf } from '@storybook/react';

import Title from '../Title';

storiesOf('Button', module)
  .add('with text', () => (
      <Title/>
  ))
  .add('with some emoji', () => (
    <Title>Emoji</Title>
  ));
