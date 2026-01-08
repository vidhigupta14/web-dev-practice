import { Metadata } from "next";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      I am homepage
      <Image src="https://i.pinimg.com/1200x/86/b0/51/86b05185f4a89274dba0ae36f7a73a9a.jpg" alt="frieren image" width={720} height={160} />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Welcome to Website",
  description: "",
};