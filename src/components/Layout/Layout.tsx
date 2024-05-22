import React from 'react';
import { Layout as StyledLayout, Container } from './Layout.styles';
import { Header } from '../Header/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <Header />
      <Container>{children}</Container>
    </StyledLayout>
  );
};
