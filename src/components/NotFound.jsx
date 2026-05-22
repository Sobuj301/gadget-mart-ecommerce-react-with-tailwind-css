
const NotFound = ({setSearch,search}) => {
    return (
        <div className="col-span-full flex flex-col items-center justify-center py-16 px-4 text-center bg-transparent">

          
            <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 mb-4 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white ring-2 ring-white dark:ring-slate-950">
                    ✕
                </span>
            </div>

         
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 tracking-tight">
                No Gadgets Found
            </h3>
            <p className="mt-1 text-sm text-slate-400 dark:text-slate-500 max-w-xs mx-auto">
                We couldn't find anything matching "<span className="font-medium text-slate-600 dark:text-slate-300">{search}</span>". Try checking your spelling or typing something else.
            </p>

           
            <button
                onClick={() => setSearch('')}
                className="mt-5 px-4 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 rounded-lg transition-colors border border-transparent dark:border-slate-800"
            >
                Clear Search
            </button>
        </div>
    );
};

export default NotFound;