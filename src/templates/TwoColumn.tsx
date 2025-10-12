import styled from 'styled-components';

export const TwoColumnRoot = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const TwoColumn = ({ left, right }: { left: React.ReactNode; right: React.ReactNode }) => (
  <TwoColumnRoot>
    <div>{left}</div>
    <div>{right}</div>
  </TwoColumnRoot>
);

export default TwoColumn;
