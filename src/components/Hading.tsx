
const Hading = ({text,isBlack,classes}:{text:string,isBlack?:boolean ,classes?:string}) => {
  return (
    <h1 className={`${isBlack ? "text-black" : "text-slate-100"} text-6xl text-center ${classes?classes:'my-14'} drop-shadow-lg`}>
    {text}
  </h1>
  )
}

export default Hading