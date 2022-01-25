import { BellIcon, TrashIcon } from '@heroicons/react/outline';
import { useRef } from 'react';
import useClickOutside from '../hooks/useClickOutside';
import { NavLink } from 'react-router-dom';
import DeleteAction from './DeleteAction';
import EditLabelsAction from './EditLabelsAction';
let links = [
  { path: 'notes', title: 'notes', icon: BellIcon },
  { path: 'reminders', title: 'reminders', icon: BellIcon },
  { path: 'personal', title: 'personal', icon: BellIcon },
  { path: 'work', title: 'work', icon: BellIcon },
  { path: 'shopping', title: 'shopping', icon: BellIcon },
  { path: 'trash', title: 'delete', icon: TrashIcon },
];

export default function Sidebar({
  showMenu,
  setShowMenu,
  menuIconPressed,
  setMenuIconPressed,
}) {
  let sideBarRef = useRef(null);
  useClickOutside(
    sideBarRef,
    () => menuIconPressed && setMenuIconPressed(false)
  );
  return (
    <aside
      ref={sideBarRef}
      className={`h-full pt-4 ${showMenu && 'shadow-xl'} ${
        (showMenu || menuIconPressed) && ' w-1/4'
      }`}
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}>
      <nav>
        <ul className='list-none flex flex-col items-start w-full'>
          {links.map(link => (
            <li
              key={link.path}
              className=' overflow-hidden hover:bg-gray-100 active: rounded-r-full w-full'>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? 'bg-yellow-100   flex gap-4 items-center '
                    : '  flex gap-4 items-center '
                }>
                <span className='h-12  aspect-square flex items-center justify-center  p-2 rounded-full hover:bg-gray-100  focus-visible:outline-gray-400 focus-visible:outline-1 focus-visible:outline'>
                  <link.icon className=' h-6 aspect-square' />
                </span>
                <span
                  className={`w-max ${
                    !showMenu && !menuIconPressed && 'hidden'
                  }`}>
                  {link.title}
                </span>
              </NavLink>
            </li>
          ))}

          <li>
            <EditLabelsAction />
          </li>
        </ul>
      </nav>
    </aside>
  );
}
