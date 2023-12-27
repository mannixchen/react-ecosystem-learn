import { NavLink } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import logo from './logo.svg';
export function Header() {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleSearch() {
    setSearchParams({ search: '22222', age: ['1', '2'] });
  }
  return (
    <header className="text-center text-slate-50 bg-slate-900 h-40 p-5">
      <img src={logo} alt="Logo" className="inline-block h-20" />
      <h1 className="text-2xl" onClick={handleSearch}>
        React Tools
      </h1>
      <nav className="flex">
        <NavLink
          to="products"
          className={({ isActive }) =>
            `flex-auto text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
              isActive ? 'border-black' : 'border-transparent'
            }`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="persons"
          className={({ isActive }) => {
            console.log(isActive);

            return `flex-auto text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
              isActive ? 'border-black' : 'border-transparent'
            }`;
          }}
        >
          PersonInfo
        </NavLink>
      </nav>
    </header>
  );
}
