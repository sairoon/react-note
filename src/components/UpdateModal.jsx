import React from "react";
import { GiCrossedSabres } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { updateNote } from "../features/NoteSlice";
import { toast, ToastContainer } from "react-toastify";

const UpdateModal = ({
  setModal,
  editName,
  editTitle,
  editDescription,
  editId,
  setEditName,
  setEditTitle,
  setEditDescription,
}) => {
  const dispatch = useDispatch();
  const handleUpdate = () => {
    if (!editName) {
      toast.error("Name shouldn't be empty", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
      });
      return;
    }
    if (!editTitle) {
      toast.error("Title shouldn't be empty", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
      });
      return;
    }
    if (!editDescription) {
      toast.error("Description shouldn't be empty", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
      });
      return;
    }
    const updateValues = {
      id: editId,
      name: editName,
      title: editTitle,
      description: editDescription,
      createAt: new Date().toString(),
    };
    dispatch(updateNote(updateValues));
    toast.success("Note Updated Successfully", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
    });
    setTimeout(() => {
      setModal(false);
    }, 4000);
  };
  return (
    <>
      <ToastContainer />
      <div className="w-full h-screen bg-black/20 fixed top-12 left-0 flex justify-center items-center">
        <div className="w-1/3 bg-slate-50 shadow-xl text-slate-600 rounded-md py-3 px-4 box-border">
          <div className="relative">
            <h1 className="text-3xl font-bold text-center">Edit Note</h1>
            <div
              className="absolute top-1 right-3 w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 transition ease-out active:scale-90 cursor-pointer flex justify-center items-center"
              onClick={() => setModal(false)}
            >
              <GiCrossedSabres />
            </div>
          </div>
          <hr className="my-2" />
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md bg-white border transition ease-in delay-100 my-2 px-3 py-2 outline-none focus:shadow-lg"
            onChange={(e) => setEditName(e.target.value)}
            value={editName}
          />
          <input
            type="text"
            placeholder="Title"
            className="w-full rounded-md bg-white border transition ease-in delay-100 my-2 px-3 py-2 outline-none focus:shadow-lg"
            onChange={(e) => setEditTitle(e.target.value)}
            value={editTitle}
          />
          <textarea
            rows={5}
            type="text"
            maxLength={100}
            placeholder="Description"
            className="w-full rounded-md bg-white border transition ease-in delay-100 my-2 px-3 py-2 resize-none outline-none focus:shadow-lg"
            onChange={(e) => setEditDescription(e.target.value)}
            value={editDescription}
          />
          <div className="w-full flex items-center mb-2 font-light">
            {/* <p className="ms-auto">100 characters remaining</p> */}
          </div>
          <div className="w-full flex justify-center">
            <button
              className="w-[95%] rounded-lg bg-teal-600 hover:bg-teal-700 transition ease-in delay-25 hover:scale-105 my-2 px-3 py-2 text-white active:scale-95"
              onClick={handleUpdate}
            >
              Update Note
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
