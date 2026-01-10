"use server";
const submitAction = async (formData) => {
    
    const name = formData.get("name");
    const add = formData.get("add");
    console.log("Name:", name);
    console.log("Address:", add);
  };

export { submitAction };