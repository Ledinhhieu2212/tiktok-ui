import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default function DefaulLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </>
  );
}
