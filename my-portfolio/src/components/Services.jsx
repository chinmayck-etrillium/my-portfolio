import { Briefcase, LineChart, Shield, PiggyBank, Banknote, BookText } from 'lucide-react';

const services = [
  {
    title: 'Financial Planning',
    description: 'Personalized financial blueprints aligned with your life goals and risk appetite.',
    icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: 'Investment Advisory',
    description: 'Data-driven guidance across Mutual Funds, ETFs, SIFs, Commodities & Derivatives.',
    icon: <LineChart className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: 'Insurance Planning',
    description: 'Protecting your wealth and family with the right insurance strategies.',
    icon: <Shield className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: 'Estate Planning',
    description: 'Helping you organize, manage, and distribute wealth efficiently across generations.',
    icon: <BookText className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: 'Tax & Debt Management',
    description: 'Optimizing taxes and structuring debts for financial efficiency and growth.',
    icon: <Banknote className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: 'Budgeting & Cash Flow',
    description: 'Structuring income and expenses to maximize savings and financial control.',
    icon: <PiggyBank className="w-6 h-6 text-indigo-600" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Services I Offer</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          I offer personalized, data-driven wealth management solutions built around your goals, risk profile, and comfort level.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg p-6 border hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-indigo-100 rounded-full mx-auto">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
