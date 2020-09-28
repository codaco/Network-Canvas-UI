import React, { useState, useRef } from 'react';
import uuid from 'uuid';
import { action } from '@storybook/addon-actions';
import Modal from '../src/components/Modal';
import '../src/styles/_all.scss';

export default { title: 'Modal' };

const useToggle = () => {
  const id = useRef(uuid());
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(v => !v);
    action('show')(id.current, !show);
  };

  return [show, toggleShow];
};

export const interaction = () => {
  const [show1, toggle1] = useToggle();
  const [show2, toggle2] = useToggle();
  const [show3, toggle3] = useToggle();

  return (
    <React.Fragment>
      <button onClick={toggle1}>open</button>
      <Modal show={show2}>
        Second window<br />

        <button onClick={toggle3}>open</button>
        <button onClick={toggle2}>close</button>
      </Modal>
      <Modal show={show1}>
        First window<br />

        <button onClick={toggle2}>open</button>
        <button onClick={toggle1}>close</button>
      </Modal>
      <Modal show={show3}>
        Third window<br />

        <button onClick={toggle3}>close</button>
      </Modal>
    </React.Fragment>
  );
};