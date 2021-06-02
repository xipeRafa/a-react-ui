import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

import {large,med,xlarge,small} from '../sizes'
import { black, white, blue } from '../colors'

const StyledButton = styled(Button)<ButtonComponentProps>`
    
     color:${black};
     background-color:${white}; //primary-color
      ${(props) => props.primary === false && `background-color: ${blue};`} //secondary-color

     
     ${(props) => props.size === "large" && `padding: 20px;`}
     ${(props) => props.size === "medium" && `padding: 10px;`}
     ${(props) => props.size === "small" && `padding: 2px;`}
    
`

export interface ButtonComponentProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  onClick?: () => void;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  
  return (
    <StyledButton
         primary={primary}
         style={{ backgroundColor }}
         {...props}
    >
      {label}
    </StyledButton>
  );
};
export default ButtonComponent