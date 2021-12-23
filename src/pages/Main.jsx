import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  return (
    <StyledRoot>
      <StyledLink to="/propPractice">
        <button>prop-Practice</button>
      </StyledLink>
      <StyledLink to="/useStatePractice">
        <button>useState-Practice</button>
      </StyledLink>
      <StyledLink to="/eventPractice">
        <button>event-Practice</button>
      </StyledLink>
      <StyledLink to="/contextPractice">
        <button>context-Practice</button>
      </StyledLink>
    </StyledRoot>
  );
};

export default Main;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 1rem;
`;
