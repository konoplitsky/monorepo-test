import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <div>Web module</div>

      <Link to="/docs">Перейти на страницу /docs</Link>
      <Outlet />
    </div>
  );
}
