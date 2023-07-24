import { styled } from "styled-components";

export const Container = styled.li`
  background-color: var(--color-pink-800);
  box-shadow: 2px 2px 11px rgba(0, 0, 0, 0.35);
  border-radius: 0.8rem;
  display: flex;

  &:hover {
    transform: scale(1.05);
  }
  transition: transform 0.5s;

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;

    padding: 6px 14px 14px;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      width: 200px;
      height: 75px;

      font-size: 2.2rem;
      font-weight: 500;
      margin-bottom: 0.8rem;
    }

    img {
      width: 20rem;
      height: 18.5rem;
      border-radius: 0.8rem;
      border: 2px solid var(--color-pink-400);
    }
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  position: relative;

  button {
    border: none;
    border-radius: 0rem 0.8rem 0.8rem 0rem;
    height: 100%;
    padding: 0.5rem;

    order: 3;
  }

  svg {
    fill: var(--color-pink-500);
  }

  &::after,
  &::before {
    content: "";
    width: 1rem;
    height: 100%;

    border-radius: 0.3rem 0rem 0rem 0.3rem;
  }

  &::after {
    background-color: var(--color-gray-400);
  }

  &::before {
    background-color: var(--color-pink-300);
    position: absolute;
    height: ${({ playertime }) => playertime}%;
    transition: height 1s;
  }
`;
