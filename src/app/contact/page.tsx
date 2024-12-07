"use client"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-10000 text-white">
      <div className="w-full max-w-md p-6 bg-white-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 rounded bg-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded bg-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 rounded bg-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-bold transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
  