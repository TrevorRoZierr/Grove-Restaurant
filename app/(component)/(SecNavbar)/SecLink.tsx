import Link from "next/link";

interface Props {
  link: string;
  linkName: string;
}

const SecLink = ({ link, linkName }: Props) => {
  return (
    <ul className="lg:m-5">
      <li className="underline text-black text-md tracking-wider hover:text-gray-500 duration-300">
        <Link href={link}>{linkName}</Link>
      </li>
    </ul>
  );
};

export default SecLink;
