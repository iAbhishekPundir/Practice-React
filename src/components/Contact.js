const Contact = () => {
  return (
    <div className="w-6/12 m-auto text-center">
      <h1 className="m-2 p-2 font-bold text-2xl">Contact us</h1>

      <form className="m-2 p-2 border border-gray-400 shadow-lg rounded-md">
        <div className="m-2">
          <label className="p-2 font-semibold">Name</label>
          <input className="border border-gray-400 px-2 rounded-sm" placeholder="Enter you name" />
        </div>

        <div className="m-2">
          <label className="p-2 font-semibold">Query</label>
          <input className="border border-gray-400 px-2 rounded-sm" placeholder="Enter you message" />
        </div>

        <div>
          <button className="bg-red-600 text-white px-2 rounded-md hover:bg-red-700">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
