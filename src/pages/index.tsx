import { useState, useEffect } from "react";
import Axios from "axios";
import Head from "next/head";
// import Link from "next/link";
import dayjs from "dayjs";

import { Post } from "../types";
import relativeTime from "dayjs/locale/*";

dayjs.extend(relativeTime);

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

          )}
        </div>
      </div>
    </div>
  );
}
