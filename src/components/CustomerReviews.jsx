import { Star } from 'lucide-react';

const reviews = [
  { name: "Alex Johnson", rating: 5, comment: "Absolutely incredible! The build quality exceeded my expectations." },
  { name: "Sarah Smith", rating: 5, comment: "Fast shipping and works perfectly. Highly recommended!" },
  { name: "Mike Chen", rating: 4, comment: "Great product, but the instructions could be a bit clearer." },
];

const Reviews = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Customer Reviews
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} fill={j < review.rating ? "currentColor" : "none"} />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{review.comment}"</p>
              <h4 className="font-semibold text-gray-900 dark:text-white">- {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;