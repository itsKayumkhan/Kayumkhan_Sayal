import Logo from '../../public/assets/logo.svg'


const NavBar = () => {
  return (
    <>
      <nav className="flex items-center justify-between text-white mx-12 mt-4">
        <div className="h-20 icon">
        <img src={Logo} alt="logo" className='h-full object-cover' />
        </div>
        <div className="text-3xl icon">
          <i className="ri-telegram-2-line"></i>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
