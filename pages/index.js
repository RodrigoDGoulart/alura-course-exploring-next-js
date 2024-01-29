import Link from "../src/components/Link";
import Title from "../src/components/Title";

export default function HomePage() {
  return (
    <div>
      <Title as="h2">Alura cases - Home</Title>
      <Link href="/faq">FAQ</Link>
    </div>
  );
}
