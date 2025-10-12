import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  background: #3f51b5;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;

  &:hover { opacity: 0.9; }
  &:active { transform: translateY(1px); }
`;

export default Button;
