import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      After First Commit.{" "}
      <Link href="/about">
        <a>About Page</a>
      </Link>
    </div>
  );
}
