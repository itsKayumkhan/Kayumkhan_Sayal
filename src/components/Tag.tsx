const Tag = ({ text }: { text: string }) => {
  return (
    <>
      {/* <button className="w-28 rounded-xl text-black border-black px-4 py-2 text-center shadow-lg bg-white">

      </button> */}
      <button className="tagBtn ">
        {text}
      </button>
    </>
  );
};

export default Tag;
