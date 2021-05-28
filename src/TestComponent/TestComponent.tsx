import React from "react";

import { TestComponentProps } from "./TestComponent.types";

import "./TestComponent.scss";

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h1 className="heading">component</h1>
    
  </div>
);

export default TestComponent;
