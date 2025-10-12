import styled from 'styled-components';

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
`;

export const Gallery = ({ children }: { children: React.ReactNode }) => (
  <GalleryGrid>
    {children}
  </GalleryGrid>
);

export default Gallery;
