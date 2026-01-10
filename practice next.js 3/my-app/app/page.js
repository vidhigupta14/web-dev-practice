"use client";
import { submitAction } from "./actions/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef();
  // const submitAction = async (formData) => {
  //   "use server";
  //   const name = formData.get("name");
  //   const add = formData.get("add");
  //   console.log("Name:", name);
  //   console.log("Address:", add);
  // };
  return (
    <div>
      <form ref={ref} action={(e) => {submitAction(e); ref.current.reset()}} className="m-12 p-6 border-2 border-gray-300 rounded-lg bg-gray-200 text-black">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" className="text-black bg-white m-2" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input type="text" className="text-black bg-white m-2" name="add" id="add" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
