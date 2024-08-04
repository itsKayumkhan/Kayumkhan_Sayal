const Tag = ({ text }: { text: string }) => {
  return (
    <>
      {/* <button className="w-28 rounded-xl text-black border-black px-4 py-2 text-center shadow-lg bg-white">
      
      </button> */}
      <button className="px-4 bg-primary py-2 border-4 border-custom-gradient transition ease-in-out duration-300 bg-transparent text-custom-gradient font-bold text-lg transform hover:scale-120 hover:rotate-10 hover:bg-custom-gradient hover:text-white w-28">
        {text}
      </button>
    </>
  );
};

export default Tag;
