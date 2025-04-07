import { useEffect, useState } from "react";
import { IoIosSunny } from "react-icons/io";
import { LuMoonStar } from "react-icons/lu";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex justify-between p-4">
      <div className="text-4xl uppercase font-bold">
        <span className="text-purple-500">Fallon</span> Studio
      </div>
      <div className="flex gap-4">
        <button onClick={() => setIsDarkMode((prev) => !prev)}>
          {isDarkMode ? <IoIosSunny size={22} /> : <LuMoonStar size={20} />}
        </button>
        <button>Show</button>
      </div>
    </div>
  );
}

export default Navbar;
