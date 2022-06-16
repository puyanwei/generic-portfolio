export function ActiveBreakpoint() {
  return (
    <div className="fixed bottom-0 left-0 z-50 flex items-center px-4 py-2 pb-1 space-x-2 text-sm font-bold text-white bg-gray-700 rounded-tr">
      <span className="">Active breakpoint:</span>
      <span className="font-bold">
        <div className="hidden sm:block md:hidden">sm</div>
        <div className="hidden md:block lg:hidden">md</div>
        <div className="hidden lg:block xl:hidden">lg</div>
        <div className="hidden xxl:block 2xl:hidden">xxl</div>
      </span>
    </div>
  )
}
