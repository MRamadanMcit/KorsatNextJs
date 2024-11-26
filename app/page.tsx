import Link from "next/link";
import Card from "./card/card";

export default function Home() {
  return (
    <div>
      <h1>header</h1>
      <Card />
      <h1>Footer</h1>
      <Link href="/users">Users</Link>
    </div>
  );
}
