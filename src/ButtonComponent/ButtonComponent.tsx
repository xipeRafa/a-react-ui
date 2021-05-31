// Generated with util/create-component.js
import React from "react";

import { ButtonComponentProps } from "./ButtonComponent.types";

import Button from '@material-ui/core/Button'

import "./ButtonComponent.scss";

const ButtonComponent: React.FC<ButtonComponentProps> = ({ label }) => (

    <Button className="button" >{label}</Button>

);

export default ButtonComponent;

