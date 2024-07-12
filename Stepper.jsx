import { useState } from "react";

const Stepper = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [pass, setPass] = useState("");

  let data = [
    {
      title: "NAME",
      type: "text",
      getter: name,
      setter: setName,
      btn: "next",
    },
    {
      title: "EMAIL",
      type: "email",
      getter: email,
      setter: setEmail,
      btn: "next",
    },
    {
      title: "DOB",
      type: "date",
      getter: dob,
      setter: setDob,
      btn: "next",
    },
    {
      title: "PASSWORD",
      type: "password",
      getter: pass,
      setter: setPass,
      btn: "submit",
    }
  ];

  const [index, setIndex] = useState(0);

  function increment() {
    console.log(index);
    setIndex(index + 1);
  }

  function decrement() {
    console.log(index);
    setIndex(index - 1);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {index <= 3 && (
        <>
          {index > 0 && (
            <button
              className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={decrement}
            >
              Prev
            </button>
          )}
          <form
            className="flex flex-col justify-center items-center gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              increment();
            }}
          >
            <p className="text-2xl font-bold">{data[index].title}</p>
            <input
              type={data[index].type}
              value={data[index].getter}
              onChange={(e) => data[index].setter(e.target.value)}
              className="h-10 w-64 p-1 outline-none border border-solid border-black"
            />
            <button className="bg-violet-800 text-white w-32 h-12 text-xl rounded-sm">
              {data[index].btn}
            </button>
          </form>
        </>
      )}
      {index === 4 && (
        <div className="mt-10 p-6 bg-white rounded-lg shadow-lg">
          <p className="text-xl font-semibold">Summary:</p>
          <div className="mt-4 space-y-2">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Date of Birth:</strong> {dob}</p>
            <p><strong>Password:</strong> {pass}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stepper;
