import styled from 'styled-components';

export const Box = styled.div<{ padding?: string; bg?: string; radius?: string }>`
  padding: ${(p) => p.padding || '1rem'};
  background: ${(p) => p.bg || 'transparent'};
  border-radius: ${(p) => p.radius || '8px'};
`;

export default Box;
