import { Link } from "react-router-dom";

export default function Header(){
  return (
    <header className="bg-amber-50 border-b border-amber-200">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="brand">
            <Link to="/" className="text-2xl font-semibold text-amber-600">LoGo</Link>
          </div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link> </li>
              <li> <Link to="/blogs">Blogs</Link> </li>
              <li><Link to="/contact">Contact</Link> </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
};