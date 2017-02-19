import React from 'react';
import { render } from 'react-dom';
import Button from './com/Button';

window.addEventListener('load', () => {
    render(<Button/>, document.getElementById('root'));
});