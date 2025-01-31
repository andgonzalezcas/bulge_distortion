import BulgeImage from "./components/bulgeImage";

export default function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full flex justify-end">
        <div className="w-[45%] h-[300px]">
          <BulgeImage />
        </div>
      </div>
      <div className="w-full flex justify-start">
        <div className="w-[45%] h-[300px]">
          <BulgeImage />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <div className="w-[45%] h-[300px]">
          <BulgeImage />
        </div>
      </div>
      <div className="w-full flex justify-start">
        <div className="w-[45%] h-[300px]">
          <BulgeImage />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <div className="w-[45%] h-[300px]">
          <BulgeImage />
        </div>
      </div>
    </div>
  );
};