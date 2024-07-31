
const SideNav = () => {
  return (
    <>
      <nav className="">
        <ul className='flex flex-col items-center justify-center gap-2 text-3xl'>
            <li className='text-3xl flex items-center justify-center icon cursor-pointer  hover:bg-[#0a66c2]  hover:scale-125  w-12 h-12 list'><i className="ri-linkedin-fill"></i></li>
            <li className='text-3xl flex items-center justify-center icon cursor-pointer  hover:bg-[#1da1f2]  hover:scale-125  w-12 h-12 list'><i className="ri-twitter-fill"></i></li>
            <li className='text-3xl flex items-center justify-center icon cursor-pointer  hover:bg-[#c32aa3]  hover:scale-125  w-12 h-12 list'><i className="ri-instagram-line"></i></li>
            <li className='text-3xl flex items-center justify-center icon cursor-pointer  hover:bg-[#1877f2]  hover:scale-125  w-12 h-12 list '><i className="ri-facebook-fill"></i></li>
            <li className='text-3xl flex items-center justify-center icon cursor-pointer  hover:bg-[#5865f2]  hover:scale-125  w-12 h-12 list'><i className="ri-discord-fill"></i></li>
        </ul>
      </nav>
    </>
  )
}

export default SideNav
