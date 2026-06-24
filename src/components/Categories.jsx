import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CategoryCard from "./CategoryCard";
import Heading from "./Heading";

const Categories = ({ categories }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxIndex = Math.max(0, categories.length - itemsPerView);
  const visibleCategories = categories.slice(startIndex, startIndex + itemsPerView);

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <Heading title="Browse by Category" subTitle="Our Collections" />

      {/* Grid Container with Framer Motion for smooth transitions */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
      >
        <AnimatePresence mode="popLayout">
          {visibleCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
            >
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Premium Styled Navigation Controls */}
      <div className="flex justify-center items-center gap-6 mt-12">
        <button
          onClick={() => setStartIndex(Math.max(0, startIndex - 1))}
          disabled={startIndex === 0}
          className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-[#22C55E] hover:text-white transition-all duration-300 disabled:opacity-30"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <span className="text-sm font-medium text-gray-500">
          {startIndex + 1} / {maxIndex + 1}
        </span>

        <button
          onClick={() => setStartIndex(Math.min(maxIndex, startIndex + 1))}
          disabled={startIndex >= maxIndex}
          className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-[#22C55E] hover:text-white transition-all duration-300 disabled:opacity-30"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
};

export default Categories;