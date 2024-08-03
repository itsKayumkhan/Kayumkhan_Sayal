import Logo from "../../public/assets/logo.svg";

const NavBar = ({
  logoRef,
  iconRef,
}: {
  logoRef: React.RefObject<HTMLDivElement>;
  iconRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <>
      <nav className="flex items-center justify-between text-white mx-12 mt-4">
        <div className="h-20 icon" ref={logoRef}>
          <img src={Logo} alt="logo" className="h-full object-cover logo" />
        </div>
        <div className="text-3xl icon" ref={iconRef}>
          <i className="ri-telegram-2-line"></i>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
