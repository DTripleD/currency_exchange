import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectBaseCurrency } from 'redux/selectors';

export const Layout = () => {
  const baseCurrency = useSelector(selectBaseCurrency);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rates">Rates</Link>
            </li>
          </ul>
        </nav>
        <p>Base Currency: {baseCurrency}</p>
      </header>
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </>
  );
};
