import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import App2 from './app2';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <App2 />
  </StrictMode>
);
