// Generated with util/create-component.js
import React from "react";

import { ButtonComponentProps } from "./ButtonComponent.types";

import "./ButtonComponent.scss";

const ButtonComponent: React.FC<ButtonComponentProps> = ({ label }) => (
    <input type='button' data-testid="ButtonComponent" className="foo-bar" value={label} />
);

export default ButtonComponent;

