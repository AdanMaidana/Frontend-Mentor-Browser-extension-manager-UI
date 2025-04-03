export default function ExtensionCard({ extensionData, allExtensions, setAllExtensions }) {
  const removeExtension = () => {
    setAllExtensions(allExtensions.filter(extension => extension.name !== extensionData.name))
  }

  const handleCheckboxChange = (e, extensionId) => {
    const updatedExtensions = allExtensions.map((ext) =>
      ext.id === extensionId ? { ...ext, active: e.target.checked } : ext
    );
    setAllExtensions(updatedExtensions);
  }

  return (
    <li className="bg-[#fcfdff] dark:bg-[#1f2535] text-white rounded-2xl shadow-sm shadow-gray-300 dark:shadow-transparent p-4 flex flex-col justify-between transition-all border-gray-500/20 dark:border-white/25 border">
      <div className="flex items-start gap-x-4 mb-8">
        <img src={extensionData.img} alt={`${extensionData.name} icon`} width={64} height={64} className="w-full max-w-16" />
        <div>
          <h3 className="text-xl font-bold mb-2 text-[#0a133c] dark:text-white">{extensionData.name}</h3>
          <p className="text-[#6e7276] text-[.95rem] dark:text-white/65">{extensionData.description}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button onClick={removeExtension} className="bg-[#fcfdff] dark:bg-[#1f2535] hover:bg-[#f25d51] text-[#0a133c] dark:text-white hover:text-white dark:hover:text-[#0a133c] font-medium py-2 px-4 md:py-1.5 rounded-full border-gray-500/50 dark:border-white/25 hover:border-[#f25d51] border cursor-pointer transition-colors outline-2 outline-transparent outline-offset-2 focus-visible:outline-[#f25d51] focus-visible:border-transparent focus-visible:bg-[#eaf0f0] focus-visible:text-[#0a133c] dark:focus-visible:bg-[#525868] dark:focus-visible:text-white">Remove</button>

        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={allExtensions.find(ext => ext.id === extensionData.id)?.active ?? false}
            onChange={(e) => handleCheckboxChange(e, extensionData.id)}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-[#c6c6c6] dark:bg-[#525868] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 transition-all peer-checked:bg-[#f25d51] outline-2 outline-transparent outline-offset-1 peer-focus-visible:outline-[#f25d51]"></div>
        </label>

      </div>

    </li>
  )
}
