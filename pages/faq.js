import Link from "../src/components/Link";

// obs.: ambas as funções getStaticProps e getServerSideProps rodam a cada acesso quando projeto está rodando como dev

// export async function getStaticProps() {
// getStaticProps roda uma vez na build. Não é rodado outra vez no acesso

export async function getServerSideProps() {
// getServerSideProps é rodado a cada acesso na página

  console.log('rodando');
  const API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const faq = await fetch(API_URL)
    .then((res) => res.json())
    .then((res) => res);
  return {
    props: {
      faq,
    },
  };
}

export default function Faq({ faq }) {
  return (
    <div>
      <h1>FAQ</h1>
      <Link href="/">Home</Link>
      <ul>
        {faq.map(({ answer, question }) => (
          <li key={question}>
            <article>
              <h1>{question}</h1>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
