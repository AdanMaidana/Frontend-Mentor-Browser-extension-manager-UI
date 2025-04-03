export default function FilterButton({ textContent, currentState, setCurrentState }) {
  return (
    <button onClick={() => setCurrentState(textContent)} className={`text-xl py-2 px-5 rounded-full font-medium border-gray-500/50 dark:border-white/25 border cursor-pointer transition-all outline-2 outline-transparent outline-offset-3 focus-visible:outline-[#f25d51] ${currentState === textContent ? 'text-white bg-[#f25d51] dark:text-[#0a133c]' : 'text-[#0a133c] bg-white dark:bg-[#2f354b] dark:text-white hover:opacity-75 dark:hover:bg-[#525868] dark:hover:opacity-100 dark:focus-visible:bg-[#525868]'}`}>
      {textContent}
    </button>
  )
}
