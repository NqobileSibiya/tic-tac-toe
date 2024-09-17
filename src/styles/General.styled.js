import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};  /* Access the theme's colors */
  padding: 0 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color?.text};  /* Fallback to black if theme color is not defined */
  font-size: 3rem;
  font-family: "Pacifico", cursive;  /* Ensure correct font name and spelling */
  background-color: transparent;
`;

export const Subtitle = styled.h1`
  color: ${(props) => props.theme.color?.text};  /* Fallback to black if theme color is not defined */
  font-size: 1.5rem;
  font-weight: 200;
  background-color: transparent;
  padding: 10px;
`;
