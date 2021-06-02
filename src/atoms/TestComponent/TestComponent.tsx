import React from "react";

export interface TestComponentProps {
  theme: "primary" | "secondary";
}

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
