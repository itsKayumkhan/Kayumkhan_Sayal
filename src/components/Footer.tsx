

const Footer = () => {
  return (
    <>
      <div className='flex justify-center items-center  flex-col space-y-4 relative' >
      <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        <div className='w-[10%] h-[10%]'>
            <img src='../../public/assets/logo.svg' className='h-full object-cover w-full'
            />
        </div>
        <div className='flex items-center justify-center gap-3'>
            <h2 className='font-bold text-1xl'>Twitter</h2>
            <h2 className='font-bold text-1xl'>Linkedin</h2>
            <h2 className='font-bold text-1xl'>Github</h2>
            <h2 className='font-bold text-1xl'>Instagram</h2>
            <h2 className='font-bold text-1xl'>Facebook</h2>
        </div>
        
        <div className='flex items-center justify-center gap-3'>
        © {new Date().getFullYear()} Kayumkhan_Sayal 
        </div>
      </div>
    </>
  )
}

export default Footer
