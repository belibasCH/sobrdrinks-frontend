import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { pages } from '../pages';

export default function Routes() {
  return (
    <RouterRoutes>
      {Object.entries(pages).map(([path, Component]) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </RouterRoutes>
  );
}