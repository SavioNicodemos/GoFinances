import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Import from '../pages/Import';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/import" element={<Import />} />
    </Routes>
  );
}

export default AppRoutes;
