import Link from "next/link";
import { ReactElement } from "react";

interface Props {
  linkName: string;
  link: string;
}

const Links = ({ linkName, link }: Props) => {
  return (
    <ul className="lg:m-5">
      <li className="underline text-black text-md tracking-wider hover:text-gray-500 duration-300">
        <Link href={link}>{linkName}</Link>
      </li>
    </ul>
  );
};

export default Links;
