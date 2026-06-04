import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const specs = [
    { title: "Dimensions", content: "150mm x 75mm x 8mm" },
    { title: "Weight", content: "185 grams" },
    { title: "Battery Life", content: "Up to 24 hours of continuous use" },
    { title: "Connectivity", content: "Bluetooth 5.2, USB-C Charging" },
];

const SpecAccordion = ({ findProduct }) => {

    const { specifications } = findProduct

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <ScrollReveal>
            <section className="py-12 bg-white dark:bg-gray-950 transition-colors duration-300">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Heading */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                        Technical Specifications
                    </h2>

                    <p className="text-gray-500 dark:text-gray-400 text-center mb-10">
                        Detailed information about this product
                    </p>

                    {/* Accordion */}
                    <div className="max-w-3xl mx-auto space-y-4">

                        {specifications.map((spec, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden transition hover:shadow-sm"
                            >
                                {/* Header */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                >
                                    <span className="font-medium text-gray-900 dark:text-gray-100">
                                        {spec.title}
                                    </span>

                                    {openIndex === index ? (
                                        <ChevronUp className="text-gray-500" />
                                    ) : (
                                        <ChevronDown className="text-gray-500" />
                                    )}
                                </button>

                                {/* Content */}
                                {openIndex === index && (
                                    <div className="p-4 bg-white dark:bg-gray-950 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
                                        {spec.content}
                                    </div>
                                )}
                            </div>
                        ))}

                    </div>

                </div>

            </section>
        </ScrollReveal>
    );
};

export default SpecAccordion;