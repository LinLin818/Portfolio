export default function ProjectDisplay(){
      return (
        <>
        <div className = "flex flex-col items-center">
          Check out my newest projects
        </div>
    <div className="flex justify-around space-x-8">
      <div className="w-48 h-30 border-amber-300 border-solid border flex items-center justify-center">
        <p className="">AI-Routing-Model System</p>
      </div>
      <div className="w-48 h-100  border-amber-300 border-solid border flex items-center justify-center">
        <p>item 2</p>
      </div>
    </div>

    </>
  );

}