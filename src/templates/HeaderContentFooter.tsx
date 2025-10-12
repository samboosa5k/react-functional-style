import styled from 'styled-components';

const Root = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Header = styled.header`
  padding: 1rem 1.5rem;
  background: #121212;
  color: #fff;
`;

const Content = styled.main`
  padding: 2rem 1.5rem;
`;

const Footer = styled.footer`
  padding: 1rem 1.5rem;
  background: #f1f3f5;
  color: #333;
`;

export const HeaderContentFooter = ({ header, children, footer }: { header?: React.ReactNode; children?: React.ReactNode; footer?: React.ReactNode }) => (
  <Root>
    <Header>{header}</Header>
    <Content>{children}</Content>
    <Footer>{footer}</Footer>
  </Root>
);

export default HeaderContentFooter;
