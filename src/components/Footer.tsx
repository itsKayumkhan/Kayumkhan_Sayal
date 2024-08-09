

const Footer = () => {
  return (
    <>
      <div className='flex justify-center items-center  flex-col space-y-4 relative' >
      <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        <div className='w-[10%] h-[10%]'>
            <img src='../../public/logo.svg' className='h-full object-cover w-full hover:scale-95 duration-100'
            />
        </div>
        <div className='flex items-center justify-center gap-4'>
            <a href="https://twitter.com/kayumkhan"><h2 className='font-bold text-2xl'>Twitter</h2></a>
            <a href="https://www.linkedin.com/in/kayumkhan"><h2 className='font-bold text-2xl'>Linkedin</h2></a>
            <a href="https://github.com/itsKayumkhan"><h2 className='font-bold text-2xl'>Github</h2></a>
            <a href="https://www.instagram.com/condemanoranjan"><h2 className='font-bold text-2xl'>Instagram</h2></a>
            <a href="https://www.facebook.com/kayumkhan_kks"><h2 className='font-bold text-2xl'>Facebook</h2></a>
        </div>
        
        <div className='flex items-center justify-center gap-3'>
        © {new Date().getFullYear()} Kayumkhan_Sayal 
        </div>
      </div>
    </>
  )
}

export default Footer
