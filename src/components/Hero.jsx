import { ArrowRight, CheckCircle } from 'lucide-react';
import familyPhoto from '../assets/family-photo.png';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Trusted by 500,000+ customers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Technology Innovation Unleashed
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              Cutting-edge technology solutions that transform businesses. Trusted by innovators worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 font-medium flex items-center justify-center space-x-2 transition-colors">
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "rgba(219, 197, 197, 1)",
                    textAlign: "center",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderRadius: "0px",
                    marginTop: "0px",
                    marginRight: "1px",
                    marginBottom: "0px",
                    marginLeft: "1px",
                    paddingTop: "0px",
                    paddingRight: "0px",
                    paddingBottom: "0px",
                    paddingLeft: "0px"
                  }}>Get Free Quote</span>
                <ArrowRight size={18} />
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-900 rounded-lg hover:border-gray-400 font-medium transition-colors">
                Explore Solutions
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} className="text-gray-400" />
                <span className="text-gray-600 font-medium">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} className="text-gray-400" />
                <span className="text-gray-600 font-medium">Instant Approval</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={familyPhoto}
                  alt="Happy family with children in a brick window frame"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
