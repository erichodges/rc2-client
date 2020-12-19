import { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { Post } from "../types";

export default function Home() {
  const [posts, setposts] = useState<Post[]>([]);
  useEffect(() => {
    Axios.get("/posts")
      .then((res) => setposts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-12">
      <Head>
        <title>Readit: The front page of the internet</title>
      </Head>
      <div className="container flex pt-4">
        {/* Posts feed */}
        <div className="w-160">
          {posts.map((post) => (
            <div key={post.identifier} className="flex mb-4 bg-white rounded">
              {/* Vote Section */}
              <div className="w-10 text-center bg-gray-200 rounded-l">
                <p>V</p>
              </div>
              {/* Post data section */}
              <div className="w-full p-2">
                <div className="flex items-center">
                  <Link href={`/r/${post.subName}`}>
                    <Fragment>
                    <img
                      src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                      alt="gravatar-placeholder"
                      className="w-6 h-6 mr-1 rounded-full cursor-pointer
                    />
                    <a className="text-xs font-bold cursor-pointer hover:underline">
                      /r/{post.subName}
                    </a>
                    </Fragment>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
