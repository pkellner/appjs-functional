import Link from "next/link";

export default () => {
  console.log("about.js");
  return (
    <div>
      About us
      <br />
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};
