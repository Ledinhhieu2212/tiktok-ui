import React from 'react';
import Header from '../DefaulLayout/Header';

export default function HeaderOnly({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </>
  );
}
