import * as React from 'react';
import './GlobalFooter.css';

export default () => (
  <footer className="GlobalFooter">
      <div className="container text-center">
        <span className="text-muted">ChicagoJS {new Date().getFullYear()}</span>
      </div>
    </footer>
)
