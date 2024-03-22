export default function List({ selectedList, random }) {
  return (
    <div className="justify-center glass-filter overflow-x-auto w-[400px] md:w-[780px] lg:w-11/12 xl:w-8/12 p-2 bg-neutral-800 text-center rounded-lg font-semibold flex flex-col gap-2 text-sm lg:text-base">
      <div className="grid min-w-[900px] max-w-[900px] md:min-w-full md:max-w-full gap-2 grid-cols-11">
        <div className="bg-neutral-200 py-1 rounded-[4px]">Image</div>
        <div className="bg-neutral-200 py-1 rounded-[4px]">Name</div>
        <div className="bg-neutral-200 py-1 rounded-[4px]">School</div>
        <div className="bg-neutral-200 py-1 rounded-[4px] col-span-2">Club</div>
        <div className="bg-neutral-200 py-1 rounded-[4px]">ATK Type</div>
        <div className="bg-neutral-200 py-1 rounded-[4px]">DEF Type</div>
        <div className="bg-neutral-200 py-1 rounded-[4px]">Class</div>
        <div className="bg-neutral-200 py-1 rounded-[4px]">Variant</div>
        <div className="bg-neutral-200 py-1 rounded-[4px]">Weapon</div>
        <div className="bg-neutral-200 py-1 rounded-[4px]">Role</div>
      </div>
      {selectedList.map((item, index) => (
        <div key={index} className="grid min-w-[900px] max-w-[900px] md:min-w-full md:max-w-full gap-2 items-center grid-cols-11">
          <div>
            <img className="w-full" src={item.img} alt={item.name} />
          </div>
          <div className={`h-full flex items-center rounded-[4px] justify-center ${item.name === random.name ? "bg-green-400" : "bg-red-500"}`}>{item.name}</div>
          <div className={`h-full flex items-center rounded-[4px] justify-center ${item.school === random.school ? "bg-green-400" : "bg-red-500"}`}>{item.school}</div>
          <div className={`h-full flex items-center rounded-[4px] justify-center col-span-2 ${item.club === random.club ? "bg-green-400" : "bg-red-500"}`}>{item.club}</div>
          <div className={`h-full flex items-center rounded-[4px] justify-center ${item.atkType === random.atkType ? "bg-green-400" : "bg-red-500"}`}>{item.atkType}</div>
          <div className={`h-full flex items-center rounded-[4px] justify-center ${item.defType === random.defType ? "bg-green-400" : "bg-red-500"}`}>{item.defType}</div>
          <div className={`h-full flex items-center rounded-[4px] justify-center ${item.class === random.class ? "bg-green-400" : "bg-red-500"}`}>{item.class}</div>
          <div className={`h-full flex items-center rounded-[4px] justify-center ${item.variant === random.variant ? "bg-green-400" : "bg-red-500"}`}>{item.variant}</div>
          <div className={`h-full flex items-center rounded-[4px] justify-center ${item.weapon === random.weapon ? "bg-green-400" : "bg-red-500"}`}>{item.weapon}</div>
          <div className={`h-full flex items-center rounded-[4px] justify-center ${item.role === random.role ? "bg-green-400" : "bg-red-500"}`}>{item.role}</div>
        </div>
      ))}
    </div>
  );
}
