module.exports = {
  trailingSlash: true, //ter ou não barra no final
  async redirects() {
    return [
      {
        source: "/perguntas",
        destination: "/faq/",
        permanent: true, //308 - redirect permanent, 307 - redirect temporário
        // com redirect, a aplicação retorna código 307/308 e faz o redirecionamento
      },
    ];
  },
};
