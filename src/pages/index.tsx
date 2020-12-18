import { useState, useEffect } from "react";
import Axios from "axios";
import Head from "next/head";

export default function Home() {
  const [posts, setposts] = useState([]);
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
      <div className="container flex mt-4">
        {/* Posts feed */}
        <div className="w-160"></div>
      </div>
    </div>
  );
}
