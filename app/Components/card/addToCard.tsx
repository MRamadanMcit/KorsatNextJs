"use client";
export default function addToCard() {
  return (
    <button
      className="ml-5 px-5 py-2 bg-sky-300 rounded-md text-sm hover:bg-sky-500 hover:text-white"
      onClick={() => console.log("add to card")}
    >
      Add to Card
    </button>
  );
}
