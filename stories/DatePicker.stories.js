import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Harness from './helpers/Harness';
import DatePicker from '../src/components/Fields/DatePicker';
import '../src/styles/_all.scss';

const requiredProps = {
  label: 'Please choose a date',
  input: { value: null },
  meta: {},
};

export default { title: 'DatePicker' };

export const Field = () => (
  <Harness
    requiredProps={requiredProps}
  >
    {props => <DatePicker {...props} />}
  </Harness>
);

export const AutoScroll = () => (
  <Harness
    requiredProps={requiredProps}
  >
    {props => (
      <div style={{ backgroundColor: 'silver', height: '400px', overflowY: 'scroll' }}>
        <div style={{ padding: '330px 0' }}>
          <DatePicker {...props} />
        </div>
      </div>
    )}
  </Harness>
  );
