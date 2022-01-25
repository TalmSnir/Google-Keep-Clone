import {
  CogIcon,
  DocumentIcon,
  MenuIcon,
  RefreshIcon,
  SearchIcon,
  ViewGridIcon,
  ViewListIcon,
} from '@heroicons/react/outline';
import Avatar from './Avatar';
import IconButton from './IconButton';
import ProfileImg from '../profileimg.jpg';
export default function Header({ showMenu, setShowMenu, setMenuIconPressed }) {
  return (
    <header className='flex items-center justify-between py-2 px-4 gap-8 border-b border-b-gray-200 h-16'>
      <div className='flex items-center gap-2'>
        <IconButton
          size='sm'
          tooltip='grid'
          icon={MenuIcon}
          onClick={() => setMenuIconPressed(pressed => !pressed)}
        />
        <IconButton size='sm' tooltip='grid' icon={DocumentIcon} />
      </div>

      <form className='shadow-lg rounded-lg p-2 w-1/2 mx-auto'>
        <fieldset className='flex items-center gap-2 w-full '>
          <IconButton size='sm' label='search' icon={SearchIcon} />
          <input
            type='search'
            placeholder='Search'
            className='text-gray-700 flex-grow placeholder:text-gray-900 placeholder:font-semibold focus:outline-none'
          />
        </fieldset>
      </form>
      <div className='flex items-center gap-2'>
        <IconButton size='sm' tooltip='grid' icon={RefreshIcon} />
        <IconButton size='sm' tooltip='grid' icon={ViewListIcon} />
        <IconButton size='sm' tooltip='grid' icon={CogIcon} />
      </div>
      <div className='flex items-center gap-2'>
        <IconButton size='sm' tooltip='grid' icon={ViewGridIcon} />
        <Avatar src={ProfileImg} />
      </div>
    </header>
  );
}
