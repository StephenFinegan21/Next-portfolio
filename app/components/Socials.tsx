import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Socials() {
  return (
    <>
      <div className="flex flex-row text-white py-4">
        <FaGithub className="mr-4 text-2xl" />
        <FaLinkedin className="mr-4 text-2xl" />
      </div>
    </>
  );
}
