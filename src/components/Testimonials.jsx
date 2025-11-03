import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: '\"SecureInsure made the process so simple. I got my policy within 24 hours!\"',
      name: 'Sarah Johnson',
      role: 'Life Insurance Customer',
      avatar: '👩‍🦰',
    },
    {
      rating: 5,
      text: '\"Best car insurance rates I found. The claim process was seamless.\"',
      name: 'Michael Chen',
      role: 'Car Insurance Customer',
      avatar: '👨‍💼',
    },
    {
      rating: 5,
      text: '\"Comprehensive coverage for my entire family at an affordable price.\"',
      name: 'Priya Sharma',
      role: 'Health Insurance Customer',
      avatar: '👩‍🦱',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Customer Stories
          </h2>
          <p className="text-gray-600 text-lg">
            See what our customers have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">
                {testimonial.text}
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-400 rounded-full flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
