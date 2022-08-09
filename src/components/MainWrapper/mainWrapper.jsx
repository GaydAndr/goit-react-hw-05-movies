import { Outlet } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Wrapper, Container } from './mainWrapper.styled';

export const MainWrapper = () => {
  return (
    <Wrapper>
      <SharedLayout></SharedLayout>
      <Container>
        <Outlet></Outlet>
      </Container>
    </Wrapper>
  );
};
