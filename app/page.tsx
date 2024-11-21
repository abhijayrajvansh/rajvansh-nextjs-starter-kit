'use client'

import { ModeToggle } from "@/components/ModeToggle";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen container">
      <div>
        <p className="text-5xl font-light mb-10">Rajvansh Nextjs Starter Kit</p>
      </div>
      <div>
      <ModeToggle />
      </div>
      <div className="text-2xl">
        <li>Next.js 15</li>
        <li>sdf</li>
        <li>sdf</li>
      </div>
    </div>
  );
};

export default page;
