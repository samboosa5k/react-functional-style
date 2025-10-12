import styled from 'styled-components';
import { Heading } from '../atoms/Heading';
import { Button } from '../atoms/Button';

export const HeroSection = styled.section`
  display: grid;
  place-items: center;
  text-align: center;
  padding: 4rem 1rem;
  background: linear-gradient(135deg, #ece9ff 0%, #f8f8ff 100%);
`;

export const HeroTitle = styled(Heading)`
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
`;

export const HeroSubtitle = styled.p`
  margin: 0 0 1.25rem 0;
  color: #444;
`;

export const Hero = ({ title, subtitle, ctaText, onCta }: { title: string; subtitle?: string; ctaText?: string; onCta?: () => void; }) => (
  <HeroSection>
    <div>
      <HeroTitle as="h1">{title}</HeroTitle>
      {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
      {ctaText && <Button onClick={onCta}>{ctaText}</Button>}
    </div>
  </HeroSection>
);

export default Hero;
