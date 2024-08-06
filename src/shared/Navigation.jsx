import { Link, NavLink } from 'react-router-dom';
import { IoGridOutline } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass, faX, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';
import fire from '../assets/flammable.svg';
import { useTheme } from '../shared/ThemeContext'; // Adjust path as necessary
import { useState } from 'react';

const Navigation = () => {
  const [mobileNavLinks, setMobileNavLinks] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [notificationsVisible, setNotificationsVisible] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const showMobileLinks = () => setMobileNavLinks(true);
  const hideMobileLinks = () => setMobileNavLinks(false);
  const toggleSearch = () => setSearchVisible(!searchVisible);
  const clearSearch = () => {
    setSearchTerm('');
    setSearchVisible(false);
  };
  const toggleNotifications = () => setNotificationsVisible(!notificationsVisible);

  return (
    <div className={`relative w-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      <div className="bg-emerald-700 py-2 "></div>
      <div className='max-w-7xl mx-auto px-6 py-10 flex items-center justify-between relative'>
        <Link to={'/'} >
          <img src={logo} alt="Detector Mania" className='w-44 md:w-56'/>
        </Link>

        <ul className='hidden xl:flex items-center gap-3 uppercase font-semibold text-xs'>
          <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-emerald-600' : 'hover:text-emerald-600 transition-all'}>Home</NavLink></li>
          <li><NavLink to={'magnet'} className={({ isActive }) => isActive ? 'text-emerald-600' : 'hover:text-emerald-600 transition-all'}>Magnet Fishing</NavLink></li>
          <li><NavLink to={'news'} className={({ isActive }) => isActive ? 'text-emerald-600' : 'hover:text-emerald-600 transition-all'}>News</NavLink></li>
          <li><NavLink to={'trekking'} className={({ isActive }) => isActive ? 'text-emerald-600' : 'hover:text-emerald-600 transition-all'}>Trekking</NavLink></li>
          <li className='flex items-center gap-1'>
            <p><a href={'#recension'} >Recension</a></p>
            <p className='text-xs p-1 rounded-md bg-yellow-100 flex items-center gap-1'>New <img className='w-3' src={fire} alt="" /></p>
          </li>
          <li><NavLink to={'schede'} className={({ isActive }) => isActive ? 'text-emerald-600' : 'hover:text-emerald-600 transition-all'}>Schede Tecniche</NavLink></li>
          <li><NavLink to={'arte'} className={({ isActive }) => isActive ? 'text-emerald-600' : 'hover:text-emerald-600 transition-all'}>Arte e storia</NavLink></li>
          <li><NavLink to={'legislatura'} className={({ isActive }) => isActive ? 'text-emerald-600' : 'hover:text-emerald-600 transition-all'}>Legislatura</NavLink></li>
        </ul>

        <div className='flex items-center gap-5 text-xl relative'>
          <FontAwesomeIcon
            icon={faCircleHalfStroke}
            className='text-xl cursor-pointer'
            onClick={toggleDarkMode}
          />
          <div className='relative'>
            <FontAwesomeIcon
              icon={faBell}
              className={`cursor-pointer relative ${darkMode ? 'text-white' : 'text-gray-900'}`}
              onClick={toggleNotifications}
            />
            <div className='absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border border-red-500' />
            {notificationsVisible && (
              <div className={`absolute z-20 top-full right-0 mt-2 w-64 border rounded-md shadow-lg ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'}`}>
                <div className='p-4'>
                  <h4 className='text-lg font-semibold'>Notifications</h4>
                  <ul className='mt-2 text-sm'>
                    <li className='py-2 border-b'>New comment on your post</li>
                    <li className='py-2 border-b'>New follower</li>
                    <li className='py-2 border-b'>Update available</li>
                    <li className='py-2'>Maintenance scheduled</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className={`absolute -top-1 right-0 ml-5 flex items-center transition-transform duration-300 ease-in-out ${searchVisible ? 'translate-x-0' : 'translate-x-full'}`}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className='bg-emerald-700 text-white p-2 rounded-md cursor-pointer'
              onClick={toggleSearch}
            />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`p-2 pl-10 border rounded-l-lg outline-none transition-transform duration-300 ease-in-out ${searchVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
            />
            <button
              className={`p-2 text-white bg-red-500 rounded-r-lg transition-transform duration-300 ease-in-out ${searchVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
              onClick={clearSearch}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
          <IoGridOutline className='bg-emerald-700 text-white p-2 text-4xl rounded-md cursor-pointer' onClick={showMobileLinks} />
        </div>
      </div>
      {mobileNavLinks && (
        <div className='fixed inset-0 z-20 flex'>
          <div
            className='fixed inset-0 bg-black opacity-50'
            onClick={hideMobileLinks}
          ></div>
          <div className={`absolute top-0 right-0 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-full p-5 shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
            <h4 className='text-3xl absolute top-12 right-12 cursor-pointer' onClick={hideMobileLinks}><FontAwesomeIcon icon={faX} /></h4>
            <ul className='flex flex-col px-6 text-xl mt-32 gap-3 uppercase font-semibold '>
              <li><NavLink onClick={hideMobileLinks} to={'/'} className={({ isActive }) => isActive ? 'text-emerald-600' : 'hover:text-emerald-600 transition-all'}>Home</NavLink></li>
              <li><NavLink onClick={hideMobileLinks} to={'magnet'} className={({ isActive }) => isActive ? 'text-emerald-600' : 'hover:text-emerald-600 transition-all'}>Magnet Fishing</NavLink></li>
              <li><NavLink onClick={hideMobileLinks} to={'news'} className={({ isActive }) => isActive ? 'text-emerald-600' : 'hover:text-emerald-600 transition-all'}>News</NavLink></li>
              <li><NavLink onClick={hideMobileLinks} to={'trekking'} className={({ isActive }) => isActive ? 'text-emerald-600' : 'hover:text-emerald-600 transition-all'}>Trekking</NavLink></li>
              <li className='flex items-center gap-2'>
                <p><NavLink onClick={hideMobileLinks} to={'recension'} className={({ isActive }) => isActive ? 'text-emerald-600' : 'hover:text-emerald-600 transition-all'}>Recension</NavLink></p>
                <p className='text-xs p-1 rounded-md bg-yellow-100 flex items-center gap-1'><img className='w-3' src={fire} alt="" />New</p>
              </li>
              <li><NavLink onClick={hideMobileLinks} to={'schede'} className={({ isActive }) => isActive ? 'text-emerald-600' : 'hover:text-emerald-600 transition-all'}>Schede Tecniche</NavLink></li>
              <li><NavLink onClick={hideMobileLinks} to={'arte'} className={({ isActive }) => isActive ? 'text-emerald-600' : 'hover:text-emerald-600 transition-all'}>Arte e storia</NavLink></li>
              <li><NavLink onClick={hideMobileLinks} to={'legislatura'} className={({ isActive }) => isActive ? 'text-emerald-600' : 'hover:text-emerald-600 transition-all'}>Legislatura</NavLink></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
