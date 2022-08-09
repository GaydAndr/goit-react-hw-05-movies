import { Img, Button } from './GoHomePage.styled';

export const GoHomePage = () => {
  return (
    <h1>
      <Img
        src={`https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif`}
        alt=""
      />
      <Button to="/goit-react-hw-05-movies/">Back Home</Button>
    </h1>
  );
};
