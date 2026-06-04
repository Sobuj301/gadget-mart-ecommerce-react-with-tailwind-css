import { Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const reviews = [
  { name: "Alex Johnson", rating: 5, comment: "Absolutely incredible! The build quality exceeded my expectations." },
  { name: "Sarah Smith", rating: 5, comment: "Fast shipping and works perfectly. Highly recommended!" },
  { name: "Mike Chen", rating: 4, comment: "Great product, but the instructions could be a bit clearer." },
];

const Reviews = () => {
  return (
    <ScrollReveal>
      <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            Customer Reviews
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-center mb-10">
            What our customers say about this product
          </p>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition hover:shadow-md"
              >
                {/* Stars */}
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      fill={j < review.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "{review.comment}"
                </p>

                {/* Name */}
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  - {review.name}
                </h4>
              </div>
            ))}

          </div>

        </div>

      </section>
    </ScrollReveal>
  );
};

export default Reviews;