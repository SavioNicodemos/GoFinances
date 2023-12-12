import React from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Import from '../pages/Import';

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/import" element={<Import />} />
    </Routes>
  </Router>
);

export default AppRoutes;
