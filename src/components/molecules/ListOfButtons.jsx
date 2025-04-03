import FilterButton from "../atoms/FilterButton";

export default function ListOfButtons({ currentState, setCurrentState }) {
  const buttons = ["All", "Active", "Inactive"];

  return (
    <div className="md:flex md:justify-between md:items-center mt-8 mb-6 w-full">
      <h1 className="text-center text-[#0a133c] dark:text-white transition-colors text-3xl font-bold mb-4 md:mb-0">
        Extensions List
      </h1>
      <nav className="flex justify-center gap-x-3">
        {
          buttons.map((button, index) => (
            <FilterButton currentState={currentState} setCurrentState={setCurrentState} key={index} textContent={button} />
          ))
        }
      </nav>
    </div>
  )
}
