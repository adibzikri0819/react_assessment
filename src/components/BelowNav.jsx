import React from 'react';
import { StarIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import './BelowNav.css';

const BelowNav = () => {
  return (
    <nav className="below-nav">
      <div className="nav-item active">
        <StarIcon className="icon" />
        <span className="label">Trending</span>
      </div>
      <div className="nav-item">
        <Cog6ToothIcon className="icon" />
        <span className="label">Settings</span>
      </div>
    </nav>
  );
};

export default BelowNav;

