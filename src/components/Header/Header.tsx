import { memo } from 'react';
import { Link } from 'react-router-dom';
import Rocket from '@/assets/rocket.svg';
import LazyImage from '../LazyImage/LazyImage';

function Header() {
  return (
    <header>
      <nav className="px-3 py-5 bg-gray-800">
        <div className="flex gap-x-2">
          <LazyImage
            src={Rocket}
            alt="Rocket"
            className="w-8 h-8 inline-block"
          />
          <h1 className="text-2xl text-white w-fit hover:cursor-pointer">
            <Link to="/"> Launch Dashboard</Link>
          </h1>
        </div>
      </nav>
    </header>
  );
}

export default memo(Header);
