import { NavLink } from 'react-router-dom'

function Navbar() {
  const links = [
    { path: '/', name: 'Home' },

     { path: '/movies', name: 'Movies' },

     { path: '/series', name: 'Series' },
    { path: '/watchlist', name: 'Watchlist' },
  ]

  return (
    <nav className="flex items-center justify-between bg-black px-8 py-4">
      
   
      <h1 className="text-3xl font-bold text-yellow-400">IMDb</h1>


      <input type="text" placeholder="Search movies..."
        className="w-[400px] rounded px-4 py-2 outline-none"
      />

      <div className="flex gap-4">
        {links.map((link) => (
       <NavLink key={link.path} to={link.path}
            className={({ isActive }) =>
              isActive
       ? 'rounded bg-yellow-400 px-4 py-2 text-black'
                : 'rounded px-4 py-2 text-white hover:bg-gray-800'
            }
          >
            {link.name}
            
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Navbar