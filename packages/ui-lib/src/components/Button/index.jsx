import React from 'react';
import c from 'classnames';
import p from 'prop-types';

import './style.css';

const Button = ({ theme, extraClass, children }) => {
  const cRoot = c('uiLib__button', `uiLib__button_${theme}`, ...extraClass);

  return (
    <button type={type} className={cRoot}>
      {children}
    </button>
  );
};

button.propTypes = {
  theme: p.oneOf(['default', 'red', 'green']),
  type: p.oneOf(['button', 'reset', 'submit']),
  children: p.element
};

button.defaultProps = {
  theme: 'default',
  type: 'button',
  children: null
};

export default Button;
