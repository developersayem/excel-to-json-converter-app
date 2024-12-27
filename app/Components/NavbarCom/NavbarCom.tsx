import React from "react";
// import { Button } from "@/components/ui/button";
import { ThemeSwitcherCom } from "../ThemeSwicherCom/ThemeSwitcherCom";

export default function NavbarCom() {
  return (
    <div className="w-screen h-20 bg-white dark:bg-black grid grid-cols-2 justify-items-center border-b-2 border-black dark:border-white">
      <div className="flex justify-center items-center">
        <h1 className="capitalize text-2xl">excel to json converter</h1>
      </div>
      {/* <div className="flex justify-center items-center gap-5">
        <Button>Item 1</Button>
        <Button>Item 2</Button>
        <Button>Item 3</Button>
      </div> */}
      <div className="flex justify-center items-center">
        <ThemeSwitcherCom />
      </div>
    </div>
  );
}
