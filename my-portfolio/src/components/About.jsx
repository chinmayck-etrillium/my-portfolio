const About = () => {
    return (
      <main className="min-h-screen bg-white py-20 px-6 max-w-3xl mx-auto flex flex-col gap-12">
        <h1 className="text-4xl font-semibold text-gray-900 text-center">
          About Me
        </h1>
  
        <section className="text-gray-700 text-base leading-relaxed space-y-6">
          <p>
            I’m a Computer Science graduate who began my career as a Fullstack Developer. My early interest in the stock market blossomed into a passion, motivating me to transition into wealth management. I am currently CWM Level 1 certified and actively preparing for Level 2.
          </p>
  
          <p>
            I specialize in investments across diverse instruments such as Mutual Funds, ETFs, SIFs (Specialzed Investment Funds), Commodities, Derivatives, and Debt Funds. My expertise includes financial planning, equity research, insurance and estate planning, tax planning, debt management, budgeting, financial modeling, and valuation.
          </p>
  
          <p>
            My approach is deeply data-driven and centered around understanding each client’s unique risk appetite and comfort level. I prioritize aligning every financial strategy with your personal goals to ensure clarity and confidence.
          </p>
  
          <p>
            Continuous learning fuels my work — I regularly read industry articles and books to stay informed and deliver thoughtful, research-backed advice.
          </p>
        </section>
  
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">My Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Client-first transparency and trust</li>
            <li>Personalized, goal-driven strategies</li>
            <li>Data-backed decision making</li>
            <li>Long-term wealth creation and protection</li>
          </ul>
        </section>
  
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Mission</h2>
          <p className="text-gray-700">
            To empower clients by delivering clear, customized wealth management solutions that turn financial aspirations into reality, enabling financial independence and peace of mind.
          </p>
        </section>
      </main>
    );
  };
  
  export default About;
  