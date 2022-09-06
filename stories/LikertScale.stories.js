import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Harness from './helpers/Harness';
import LikertScale from '../src/components/Fields/LikertScale';
import '../src/styles/_all.scss';

const requiredProps = {
  input: {},
};

export default { title: 'Fields/LikertScale' };

export const interaction = () => {
  const [value, setValue] = useState('foo');
  const handleBlur = (...args) => {
    setValue(...args);
    action('change')(...args);
  };

  return (
    <Harness
      requiredProps={requiredProps}
      label="What do you make of **that**?"
      type="ordinal"
      meta={{}}
      options={[
        { label: '**foo**', value: 'foo' },
        { label: 'bar', value: 'bar' },
        { label: 'bazz', value: 'bazz' },
      ]}
      input={{
        onBlur: handleBlur,
        value,
      }}
    >
      {props => <LikertScale {...props} />}
    </Harness>
  );
};
