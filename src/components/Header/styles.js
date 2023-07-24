import { styled } from "styled-components";

export const Container = styled.header`
  position: sticky;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem;
  height: 9rem;

  background: rgba(8, 9, 10, 0.26);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
`;
