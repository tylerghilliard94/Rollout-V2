import React from 'react';
import './index.css';
import Initialize from './Components/Initialize'
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'materialize-css';
import { UserProfileProvider } from './Providers/UserProvider';


const rootElement = document.getElementById("root")

const root = createRoot(rootElement)
root.render(
  <Router>
    <UserProfileProvider>
      <Initialize />
    </UserProfileProvider>
  </Router>
);

