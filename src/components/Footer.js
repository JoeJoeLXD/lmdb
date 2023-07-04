import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const [isLinkedinHovered, setIsLinkedinHovered] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);

  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <Link to="/" className="hover:underline">
          LMDB
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li className="relative">
          <a
            href="https://www.linkedin.com/in/xiangdong-li/"
            target="_blank"
            className="hover:underline"
            onMouseEnter={() => setIsLinkedinHovered(true)}
            onMouseLeave={() => setIsLinkedinHovered(false)}
            rel="noreferrer"
          >
            {isLinkedinHovered && (
              <div className="absolute left-0 bottom-full mt-2 px-2 py-1 text-sm bg-white rounded shadow-hover-box">
                View my LinkedIn profile
              </div>
            )}
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </li>
        <li className="relative ml-16 mr-8">
          <a
            href="https://github.com/JoeJoeLXD"
            target="_blank"
            className="hover:underline"
            onMouseEnter={() => setIsGithubHovered(true)}
            onMouseLeave={() => setIsGithubHovered(false)}
            rel="noreferrer"
          >
            {isGithubHovered && (
              <div className="absolute left-0 bottom-full mt-2 px-2 py-1 text-sm bg-white rounded shadow-hover-box">
                View code on Github
              </div>
            )}
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
