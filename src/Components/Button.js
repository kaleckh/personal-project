import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #292929;
  border: white;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  opacity: 0.6;
  transition: 0.3s;
  cursor: pointer;
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
