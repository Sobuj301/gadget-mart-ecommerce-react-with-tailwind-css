
const Search = ({search,setSearch,setSortType,sortType}) => {

    return (
        <div className="flex items-center justify-between gap-4 pb-5 bg-transparent">

            {/* Input - Adaptive Light/Dark Mode */}
            <div className="relative flex-1 max-w-xs">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-slate-500 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>
                <input
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    placeholder="Search favorite..."
                    className="w-full bg-white dark:bg-slate-900 text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 border border-gray-200 dark:border-slate-800 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 pl-9 pr-4 py-2 rounded-xl text-sm transition-all duration-200 outline-none shadow-sm"
                    type="text"
                />
            </div>

            {/* Select dropdown - Adaptive Light/Dark Mode */}
            <div className="relative">
                <select
                    onChange={(e)=>setSortType(e.target.value)}
                    value={sortType}
                    className="appearance-none bg-white dark:bg-slate-900 text-gray-600 dark:text-slate-300 border border-gray-200 dark:border-slate-800 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 pl-4 pr-10 py-2 rounded-xl text-sm transition-all duration-200 cursor-pointer outline-none shadow-sm"
                    name="priceSort"
                    id="priceSort"
                >
                    <option value="" disabled hidden>Sort by Price</option>
                    <option value="low" className="bg-white dark:bg-slate-900 text-gray-800 dark:text-slate-200">Price: Low to High</option>
                    <option value="high" className="bg-white dark:bg-slate-900 text-gray-800 dark:text-slate-200">Price: High to Low</option>
                </select>

                {/* Custom Arrow */}
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 dark:text-slate-500 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </div>

        </div>
    );
};

export default Search;