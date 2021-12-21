import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/blog" as="/">
          <a>home</a>
        </Link>
      </li>
      <li>
        <Link href="/tips" as="tips">
          <a>tips</a>
        </Link>
      </li>
    </ul>
  );
}