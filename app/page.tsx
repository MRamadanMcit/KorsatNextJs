import Link from "next/link";
import Card from "./Components/card/CardContainer/card";

export default function Home() {
  return (
    <div>
      <h1>header</h1>
      <Card />
      <h1>Footer</h1>
      <button className="btn btn-neutral">Footer</button>
      <Link href="/users">Users</Link>
    </div>
  );
}
