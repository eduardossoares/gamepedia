# Gamepedia 🎮

Uma aplicação web elegante para explorar jogos eletrônicos, construída com **Next.js** (SSR), **TypeScript** e **Tailwind CSS**. A Gamepedia reúne dados de uma API externa em um catálogo visualmente atraente, permitindo que usuários descubram jogos, vejam detalhes e pesquisem por nome — tudo com um design minimalista e responsivo.

![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC)

## Sobre o Projeto

A Gamepedia é um showcase de habilidades em frontend, trazendo um catálogo de jogos eletrônicos direto para o navegador. Usando **Server-Side Rendering (SSR)** do Next.js, ela entrega performance rápida e dados atualizados de uma API externa. O design, feito com **Tailwind CSS**, é simples, moderno e funciona em qualquer dispositivo — perfeito para quem quer explorar jogos de forma prática e bonita.

## Funcionalidades Principais

- **Catálogo Minimalista**: Veja todos os jogos na homepage, com fotos, categorias e plataformas em um layout responsivo.
- **Detalhes do Jogo**: Clique em um jogo para explorar sua descrição completa e informações específicas.
- **Busca Rápida**: Use a barra de pesquisa para encontrar jogos pelo nome em segundos.

## Tecnologias que Dão Vida ao Projeto

- **Next.js (SSR)**: Renderização no servidor para performance e SEO.
- **TypeScript**: Código confiável e bem tipado.
- **Tailwind CSS**: Estilização ágil e consistente.

## Decisões Técnicas

- Optei por **SSR** no Next.js para carregar os dados da API rapidamente e melhorar a experiência inicial do usuário.
- Usei **Tailwind CSS** para criar um design clean e responsivo sem escrever CSS manual, acelerando o desenvolvimento.
- A barra de busca foi implementada com filtragem client-side para manter a simplicidade e evitar chamadas desnecessárias à API.
