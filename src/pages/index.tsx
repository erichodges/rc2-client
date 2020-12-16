import Head from "next/head";
import Link from "next/link";

import RedditLogo from "../images/reddit-logo.svg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Readit: The front page of the internet</title>
      </Head>
      <div
        className="fixed inset-x-0 top-0 z-10 flex items-center justify-center h-12 bg-white"
        px-5
      >
        {/* Logo and title */}
        <div className="flex items-center div">
          <Link href="/">
            <a>
              <RedditLogo className="w-8 h-8 mr-2" />
            </a>
          </Link>
          <span className="text-2xl font-semibold">
            <Link href="/">readit</Link>
          </span>
        </div>
        {/* Search input*/}
        <div className="flex items-center mx-auto bg-gray-100 border rounded hover:border-blue-500 hover:bg-white">
          <i className="pl-4 pr-3 text-gray-500 fas fa-search" />
          <input
            type="text"
            className="py-1 pr-3 bg-transparent rounded w-160 focus:outline-none"
          />
        </div>
        {/* Auth buttons*/}
        <div className="flex div">
          <Link href="/login">
            <a className="w-32 py-1 mr-4 hollow blue button">Log In</a>
          </Link>
          <Link href="/register">
            <a className="w-32 py-1 mr-4 blue button">Log In</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
