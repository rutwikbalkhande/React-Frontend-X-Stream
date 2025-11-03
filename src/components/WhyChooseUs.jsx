import { Clock, Shield, Award, BarChart3 } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Clock size={32} className="text-cyan-500" />,
      title: 'Instant Approval',
      description: 'Get approved in minutes',
    },
    {
      icon: <Shield size={32} className="text-cyan-500" />,
      title: '100% Secure',
      description: 'Bank-grade security',
    },
    {
      icon: <Award size={32} className="text-cyan-500" />,
      title: 'Best Rates',
      description: 'Lowest premiums guaranteed',
    },
    {
      icon: <BarChart3 size={32} className="text-cyan-500" />,
      title: 'Easy Claims',
      description: 'Quick claim settlement',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 text-lg">
            Experience the SecureInsure difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-50 rounded-xl">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
