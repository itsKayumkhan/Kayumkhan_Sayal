const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center  flex-col space-y-4 relative">
        <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        <div className="w-[10%] h-[10%]">
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dslgstzex/image/upload/v1723646927/logo_rbvpx8.svg"
            className="h-full object-cover w-full hover:scale-95 duration-100"
            alt="footerImg"
          />
        </div>
        <div className="flex items-center justify-center gap-4">
          <a href="https://twitter.com/kayumkhan">
            <h2 className="font-bold  hover:text-white text-slate-300 duration-200 transition-all text-xl hover:scale-105">Twitter</h2>
          </a>
          <a href="https://www.linkedin.com/in/kayumkhan">
            <h2 className="font-bold hover:text-white text-slate-300 duration-200 transition-all  text-xl hover:scale-105">Linkedin</h2>
          </a>
          <a href="https://github.com/itsKayumkhan">
            <h2 className="font-bold hover:text-white text-slate-300 duration-200 transition-all  text-xl hover:scale-105">Github</h2>
          </a>
          <a href="https://www.instagram.com/condemanoranjan">
            <h2 className="font-bold hover:text-white text-slate-300 duration-200 transition-all  text-xl hover:scale-105">Instagram</h2>
          </a>
          <a href="https://www.facebook.com/kayumkhan_kks">
            <h2 className="font-bold  hover:text-white text-slate-300 duration-200 transition-all text-xl hover:scale-105">Facebook</h2>
          </a>
        </div>

        <div className="flex items-center justify-center gap-3">
          © {new Date().getFullYear()} Kayumkhan_Sayal
        </div>
      </div>
    </>
  );
};

export default Footer;
