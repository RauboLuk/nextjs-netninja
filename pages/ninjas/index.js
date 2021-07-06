import Link from "next/link";

const Ninjas = () => {
  return (
    <div>
      <h1>All ninjas</h1>
      <Link href="/ninjas/test">
        <a>test</a>
      </Link>
    </div>
  );
};

export default Ninjas;
