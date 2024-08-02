import ContainerWrapper from "../components/ContainerWrapper";
import Hading from "../components/Hading";

const Contact = () => {
  return (
    <ContainerWrapper>
      <div className=" cardS w-[70%]  bg-white rounded-lg shadow-md p-6">
       <Hading text="Contact Me" isBlack={true}/>
        <form className="flex flex-col">
          <input
            type="text"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Full Name"
          />
          <input
            type="email"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Message"
            defaultValue={""}
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">
            Submit
          </button>
        </form>
      </div>
    </ContainerWrapper>
  );
};

export default Contact;
