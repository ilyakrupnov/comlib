import React from 'react';
import { render } from 'react-dom';

const Wrapper = ({components}) =>
    <div>
        {components.map((Component, i) =>
            <Component key={i}/>
        )}
    </div>;

window.addEventListener('load', () => {
    render(<Wrapper components={[]}/>, document.getElementById('root'));
});