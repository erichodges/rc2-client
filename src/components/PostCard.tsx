import { Fragment } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import classNames from "classnames";

import axios from "axios";
import { Post } from "../types";
import Axios from "axios";

dayjs.extend(relativeTime);

const ActionButton = ({ children }) => {
  return (
    <div className="px-1 mr-1 text-xs rounded cursor-pointer text-ray-400 hover:bg-gray-200">
      {children}
    </div>
  );
};

interface PostCardProps {
  post: Post;
}

export default function PostCard({
  post: {
    identifier,
    slug,
    title,
    body,
    subName,
    createdAt,
    voteScore,
    userVote,
    commentCount,
    url,
    username,
  },
}: PostCardProps) {
  const vote = async (value) => {
    try {
      const res = await Axios.post("/misc/vote", {
        identifier,
        slug,
        value,
      });

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div key={identifier} className="flex mb-4 bg-white rounded">
      {/* Vote Section */}
      <div className="w-10 py-3 text-center bg-gray-200 rounded-l">
        {/* Upvote */}
        <div
          className="w-6 mx-auto text-gray-400 rounded cursor-pointer hover:br-gray-300 hover:text-red-500"
          onClick={() => vote(1)}
        >
          <i
            className={classNames("icon-arror-up", {
              "text-red-500": userVote === 1,
            })}
          ></i>
        </div>
        <p className="font-bold vext-xs">{voteScore}</p>
        {/* Downvote */}
        <div className="w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-blue-600 onClick={() => vote(-1)}">
          <i
            className={classNames("icon-arrow-down", {
              "text-blue-600": userVote === -1,
            })}
          ></i>
        </div>
      </div>
      {/* Post data section */}
      <div className="w-full p-2">
        <div className="flex items-center">
          <Link href={`/r/${subName}`}>
            <Fragment>
              <img
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                alt="gravatar-placeholder"
                className="w-6 h-6 mr-1 rounded-full cursor-pointer"
              />
              <a className="text-xs font-bold cursor-pointer hover:underline">
                r/{subName}
              </a>
            </Fragment>
          </Link>
          <p className="text-xs text-gray-500">
            <span className="mx-1">·</span>
            Posted by
            <Link href={`u/${username}`}>
              <a className="mx-1 hover:underline">u/{username}</a>
            </Link>
            <Link href={url}>
              <a className="mx-1 hover:underline">
                {dayjs(createdAt).fromNow()}
              </a>
            </Link>
          </p>
        </div>
        <Link href={url}>
          <a className="my-1 text-lg font-medium">{title}</a>
        </Link>
        {body && <p className="my-1 text-sm">{body}</p>}

        <div className="flex">
          <Link href={url}>
            <a>
              <ActionButton>
                <div className="px-1 py-1 mr-1 text-xs text-gray-400 rounded cursor-pointer hover:bg-gray-200">
                  <i className="mr-1 fas fa-comment-alt fa-xs"></i>
                  <span className="font-bold">20 comments</span>
                </div>
              </ActionButton>
            </a>
          </Link>
          <ActionButton>
            <div className="px-1 py-1 mr-1 text-xs text-gray-400 rounded cursor-pointer hover:bg-gray-200">
              <i className="mr-1 fas fa-share fa-xs"></i>
              <span className="font-bold">Share</span>
            </div>
          </ActionButton>
          <ActionButton>
            <div className="px-1 py-1 mr-1 text-xs text-gray-400 rounded cursor-pointer hover:bg-gray-200">
              <i className="mr-1 fas fa-bookmark fa-xs"></i>
              <span className="font-bold">Save</span>
            </div>
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
