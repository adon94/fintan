import { type ChangeEvent, useState, FormEvent } from "react";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [subbed, setSubbed] = useState(false);

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function storeEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }).then((res) => {
      if (res.status === 200) setSubbed(true);
    });
  }

  return (
    <section id="subscribe" className="bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold sm:text-4xl text-white">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light md:mb-12 sm:text-xl text-gray-400">
            Stay up to date with announcements on project progress, new lesson
            topics, and work opportunities from our partners.
          </p>
          <form onSubmit={storeEmail}>
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium text-gray-300"
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm rounded-lg border sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  onChange={onInputChange}
                  value={email}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                >
                  Subscribe
                </button>
              </div>
            </div>
            {subbed && (
              <p className="text-white mb-5">Thank you for subscribing!</p>
            )}
            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500">
              We care about the protection of your data.{" "}
              <a
                href="https://www.termsfeed.com/live/4875ffe6-29e8-49c3-be04-d3ac0d3a65e3"
                target="_blank"
                rel="noopener"
                className="font-medium text-primary-500 hover:underline"
              >
                Read our Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
