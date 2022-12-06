import React from 'react'
import ReactDOM from 'react-dom/client'

import Pages from './pages';

import './styles/global.styles.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Pages.Home />
  </React.StrictMode>
)
