import React from 'react';
import './TextInput.scss';

interface TextInputProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? 'storybook-input--primary' : 'storybook-input--secondary';
  return (
    <input
      placeholder={label}
      type="text"
      className={['storybook-input', `storybook-input--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    />
  );
};

export default TextInput;
