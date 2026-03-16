import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Docs module</h1>
      <Link to="/docs/about">Перейти на about page</Link>
      <Outlet />
    </div>
  );
}
