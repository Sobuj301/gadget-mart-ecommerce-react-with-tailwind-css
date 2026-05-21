
const Heading = ({title,subTitle}) => {
    return (
        <div className="text-center pb-12 max-w-xl mx-auto">
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest block mb-3">
                {subTitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight relative inline-block">
               {title}
            </h2>
        </div>
    );
};

export default Heading;