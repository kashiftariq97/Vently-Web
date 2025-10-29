export default function Home() {
    return (
      <>
        {/* Hero Section */}
        <section className="text-center py-20 bg-gradient-to-b from-blue-100 to-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to MyBrand</h1>
          <p className="text-lg mb-8">Build beautiful landing pages with Next.js and Tailwind CSS.</p>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </section>
  
        {/* Features Section */}
        <section id="features" className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Fast</h3>
              <p>Lightning-fast performance for your landing pages.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Responsive</h3>
              <p>Looks great on any device — mobile, tablet, or desktop.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Customizable</h3>
              <p>Easily tweak styles and sections to match your brand.</p>
            </div>
          </div>
        </section>
  
        {/* Pricing Section */}
        <section id="pricing" className="bg-gray-100 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 px-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <p className="text-3xl font-bold mb-4">$10/mo</p>
              <ul className="mb-4">
                <li>✔ Feature A</li>
                <li>✔ Feature B</li>
                <li>✔ Feature C</li>
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Choose
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <p className="text-3xl font-bold mb-4">$25/mo</p>
              <ul className="mb-4">
                <li>✔ Feature A</li>
                <li>✔ Feature B</li>
                <li>✔ Feature C</li>
                <li>✔ Feature D</li>
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Choose
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <p className="text-3xl font-bold mb-4">$50/mo</p>
              <ul className="mb-4">
                <li>✔ All Pro Features</li>
                <li>✔ Priority Support</li>
                <li>✔ Custom Solutions</li>
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Choose
              </button>
            </div>
          </div>
        </section>
  
        {/* Contact Section */}
        <section id="contact" className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border rounded"
            />
            <textarea
              placeholder="Message"
              className="p-3 border rounded"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6 text-center">
          &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
        </footer>
      </>
    );
  }
  