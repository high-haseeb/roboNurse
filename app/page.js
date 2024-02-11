"use client";
import { database } from "@/firebase.config";
import { onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState(false);
  const [dir, setDir] = useState("rest");
  useEffect(() => {
    onValue(ref(database, "connected"), (snapshot) => {
      const data = snapshot.val();
      setState(data);
    });
  }, []);
  useEffect(() => {
    set(ref(database, "dir"), dir);

  }, [dir]);
  return (
    <div className="w-screen h-screen bg-gray-300 font-sans flex flex-col items-center justify-center">
      <div
        className="w-10 h-10 rounded-full absolute top-10 left-10 border-white border"
        style={{ backgroundColor: state ? "lightgreen" : "darkred" }}
      />
      <div className="text-9xl text-white font-bold">Robo Nurse</div>
      <div className="flex flex-col text-4xl text-white gap-4">
        {["forward", "backward", "left", "right"].map((dir, index) => {
          return (
            <button
              onClick={() => setDir(dir)}
              className="bg-black rounded-2xl p-4"
            >
              {dir}
            </button>
          );
        })}
      </div>
    </div>
  );
}
