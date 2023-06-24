import { Form } from 'components/Form';
import { useSelector } from 'react-redux';
import { selectExchangeResult } from 'redux/selectors';

const Home = () => {
  const result = useSelector(selectExchangeResult);

  return (
    <>
      <h2>Home</h2>
      <Form />
      <p>Result: {result}</p>
    </>
  );
};

export default Home;
