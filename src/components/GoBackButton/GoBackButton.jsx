import { useLocation } from 'react-router-dom';
import { Button } from './GoBackButton.styled';

export const GoBackButton = () => {
  const location = useLocation();

  return (
    <Button
      to={location?.state?.from ?? '/goit-react-hw-05-movies/'}
      type="button"
    >
      ⇐
    </Button>
  );
};
