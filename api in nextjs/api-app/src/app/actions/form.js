"use server"
import fs from "node:fs/promises"

export async function submitAction(formData) {
  // "use server";
  let data = {
    name: formData.get("name"),
    age: formData.get("age"),
  };

  let info = [];

  try{
    const file = await fs.readFile("info.json", "utf-8");
    info = JSON.parse(file)
  }catch(err){
    // console.log("File not found, creating a new one");
    info = []
  }

  info.push(data)

  await fs.writeFile("info.json", JSON.stringify(info, null, 2));
  
}
