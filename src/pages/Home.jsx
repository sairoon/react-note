import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../features/NoteSlice";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const maxCharacters = 100;

  const dispatch = useDispatch();

  const handelSaveNotes = (e) => {
    e.preventDefault();
    if (!name) {
      toast.error("Please fill Name field", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
      });
      return;
    }
    if (!title) {
      toast.error("Please add a Title", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
      });
      return;
    }
    if (!description) {
      toast.error("Please write a Description", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
      });
      return;
    } else {
      const newNotes = {
        id: Date.now().toString(32),
        name,
        title,
        description,
        createAt: new Date().toString(),
      };
      setName("");
      setTitle("");
      setDescription("");
      dispatch(addNote(newNotes));

      toast.success("Note Added Successfully", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
      });
    }
  };
  const handleDescription = (e) => {
    if (e.target.value.length <= maxCharacters) {
      setDescription(e.target.value);
    }
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <Helmet>
        <title>Notify | Home</title>
      </Helmet>
      <ToastContainer />
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-1/3 bg-slate-50 shadow-xl text-slate-600 rounded-md py-3 px-4 box-border">
          <div>
            <h1 className="text-3xl font-bold text-center">Create Note</h1>
          </div>
          <hr className="my-2" />
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md bg-white border transition ease-in delay-100 my-2 px-3 py-2 outline-none focus:shadow-lg"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="Title"
            className="w-full rounded-md bg-white border transition ease-in delay-100 my-2 px-3 py-2 outline-none focus:shadow-lg"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <textarea
            rows={5}
            type="text"
            maxLength={maxCharacters}
            placeholder="Description"
            className="w-full rounded-md bg-white border transition ease-in delay-100 my-2 px-3 py-2 resize-none outline-none focus:shadow-lg"
            onChange={handleDescription}
            value={description}
          />

          <div className="w-full flex items-center mb-2 font-light">
            <input
              type="checkbox"
              className="cursor-pointer form-checkbox"
              id="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="checkbox" className="ms-2 cursor-pointer">
              I want to add this Note
            </label>
            <p className="ms-auto">{maxCharacters - description.length} characters remaining</p>
          </div>
          <div className="w-full flex justify-center">
            <button
              onClick={handelSaveNotes}
              className="w-[95%] rounded-lg bg-green-600 hover:bg-green-700 transition ease-in delay-25 hover:scale-105 my-2 px-3 py-2 text-white active:scale-95 disabled:bg-gray-500 disabled:scale-100 disabled:cursor-not-allowed"
              disabled={!isChecked}
            >
              Save Note
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
