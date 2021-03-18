import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Harness from './helpers/Harness';
import Text from '../src/components/Fields/Text';
import '../src/styles/_all.scss';

const requiredProps = {
  label: 'This prompt text contains **markdown** _formatting_',
  placeholder: '',
  input: { value: undefined },
  meta: {},
};

export default { title: 'Fields/Text' };

export const WithError = () => {
  const defaultMeta = false;
  const [meta, setMeta] = useState(defaultMeta);

  const toggleError = () => {
    setMeta(!meta);
    action('toggleError')(!meta);
  };


  const renderMeta = { error: 'Something was not right about the input', invalid: meta, touched: meta };

  return (
    <Harness
      requiredProps={requiredProps}
      meta={renderMeta}
    >
      {props => (
        <div>
          <button onClick={toggleError}>Toggle Error</button>
          <div>
            <Text {...props} />
            Next element
          </div>
        </div>
      )}
    </Harness>
  );
};

export const multilineLabel = () => (
  <Harness
    requiredProps={requiredProps}
  >
    {props => (
      <div>
        <div>
          <Text {...props} label={'This is a _particularly_ long prompt that is spread:\n- Over multiple\n- lines'} />
          Next element
        </div>
      </div>
    )}
  </Harness>
);
