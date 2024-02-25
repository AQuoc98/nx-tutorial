import React, { forwardRef } from 'react';
import ReactButton from 'react-bootstrap/Button';
import './button.scss';

export const Button = forwardRef(({ children, className, ...props }, ref) => (
  <ReactButton ref={ref} bsPrefix="react-button" {...props}>
    {children}
  </ReactButton>
));

Button.displayName = 'Button';
