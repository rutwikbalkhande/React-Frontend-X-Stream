import { Heart, Car, TrendingUp } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Heart size={40} className="text-pink-500" />,
      title: 'Life Insurance',
      description: 'Protect your family\'s financial future with comprehensive life coverage plans.',
      link: 'Learn More',
    },
    {
      icon: <Car size={40} className="text-blue-500" />,
      title: 'Car Insurance',
      description: 'Drive with confidence with comprehensive and third-party car insurance.',
      link: 'Learn More',
    },
    {
      icon: <TrendingUp size={40} className="text-green-500" />,
      title: 'Health Insurance',
      description: 'Quality healthcare for you and your loved ones with cashless benefits.',
      link: 'Learn More',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Protection
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive coverage for every aspect of your life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 inline-block p-3 bg-blue-50 rounded-xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <a href="#" className="text-cyan-500 hover:text-cyan-600 font-medium flex items-center space-x-2">
                <span>{service.link}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
