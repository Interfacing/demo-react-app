import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.primary};
`;
