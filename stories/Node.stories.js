import React, { useState } from 'react';
import faker from 'faker';
import Harness from './helpers/Harness';
import Node from '../src/components/Node';
import '../src/styles/_all.scss';
import colors from './helpers/Colors';

const requiredProps = {
  // label: faker.name.findName(),
  label: 'Katherine',
};

export default {
  title: 'Components/Node',
  argTypes: { handleClick: { action: 'clicked' } },
};

export const selectable = () => {
  const [selected, setSelected] = useState(false);

  return (
    <Harness
      requiredProps={requiredProps}
      handleClick={() => setSelected(!selected)}
    >
      {props => <Node {...props} selected={selected} />}
    </Harness>
  );
};

export const linking = () => {
  const [selected, setSelected] = useState(false);

  return (
    <Harness
      requiredProps={requiredProps}
      handleClick={() => setSelected(!selected)}
    >
      {props => <Node {...props} linking={selected} />}
    </Harness>
  );
};

export const colorVariants = () => {
  return colors.map(color => (
    <Harness
      requiredProps={requiredProps}
      color={color}
    >
      {props => <Node {...props} />}
    </Harness>
  ));
};
