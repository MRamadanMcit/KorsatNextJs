import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {next: {revalidate: 10}});
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const users : User[] = await res.json();

  return (
    <div>
      <Link href="/" className="text-red-700 block mb-3">
        Home
      </Link>
      <h1 className="mb-3">Users</h1>
      {users.map((user) => (
        <div key={user?.id} className="mb-5">
          <div>{user?.name}</div>
          <div className="ml-5">{user?.email}</div>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
