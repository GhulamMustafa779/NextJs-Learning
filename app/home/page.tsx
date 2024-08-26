import React from "react";
import Image from "next/image";
import first from "@/public/images/first.jpg";
import second from "@/public/images/second.jpg";

const HomePage = () => {
  return (
    <main className="relative h-screen">
      <Image
        src="https://bit.ly/react-cover"
        alt="first"
        fill
        className="object-cover"
        sizes="(max-width: 440px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      />
    </main>
  );
};

export default HomePage;
