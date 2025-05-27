import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto px-6 py-20 md:py-32 gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight max-w-xl mx-auto md:mx-0">
            Empower Your Financial Future <br /> With Expert Wealth Management
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-lg mx-auto md:mx-0">
            I’m a Chartered Wealth Manager (CWM) Level 1 certified candidate
            with deep expertise in personalized investment strategies, ready to
            help you grow and protect your wealth.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition"
            >
              Book a Free Consultation
            </Link>
            <Link
              to="/blog"
              className="inline-block px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md font-semibold hover:bg-indigo-50 transition"
            >
              Read My Blog
            </Link>
          </div>
        </div>

        <div className="flex-1 max-w-md mx-auto">
          {/* Placeholder for image or illustration */}
          <img
            src="/images/hero-image.png"
            alt="Wealth Management Illustration"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">About Me</h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-lg">
          I combine rigorous financial knowledge and practical experience to
          craft investment portfolios tailored to your unique goals. Currently
          completing CWM Level 2 certification, I am passionate about
          integrating technology and research to offer you cutting-edge wealth
          solutions.
        </p>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="bg-white py-16 border-t border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-10">
            What I Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                title: "Personalized Wealth Management",
                description:
                  "Tailored investment portfolios aligned with your financial goals and risk appetite.",
              },
              {
                title: "Goal-Based Financial Planning",
                description:
                  "Structured strategies to meet milestones like retirement, education, or buying a home.",
              },
              {
                title: "Market Insights & Blog",
                description:
                  "Regular updates and deep dives into market trends, investing strategies, and wealth-building tips.",
              },
            ].map(({ title, description }) => (
              <div
                key={title}
                className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                  {title}
                </h3>
                <p className="text-gray-700">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">
          Latest Blog Posts
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Explore my insights on investment strategies, market trends, and
          practical financial advice.
        </p>
        <Link
          to="/blog"
          className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition"
        >
          View All Blogs
        </Link>
      </section>
    </main>
  );
};

export default Home;
