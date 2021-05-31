import React from 'react';
import './ButtonComponent.scss';
import Button from '@material-ui/core/Button';

import { ButtonComponentProps } from "./ButtonComponent.types";

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <Button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </Button>
  );
};
