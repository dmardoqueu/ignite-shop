# 🛍️ Ignite Shop

Este é um projeto de e-commerce desenvolvido com **Next.js**, integrado com **Stripe** para pagamentos. A loja oferece camisetas personalizadas e possui um checkout funcional e página de sucesso para finalização das compras.

---

## 🖼️ Capturas de Tela

### 🏠 Página Inicial
Visualização dos produtos disponíveis na loja.

![Home Page](https://github.com/user-attachments/assets/b4574073-3230-48c5-8b7a-90b9ed46fdc4)
)

---

### 👕 Página do Produto
Detalhes da camiseta selecionada, com nome e valor.

![Product Page](https://github.com/user-attachments/assets/aefe4b21-e316-408e-8d75-978bd1aecf0a)


---

### 💳 Checkout com Stripe
Redirecionamento para o checkout seguro da Stripe.

![Checkout](https://github.com/user-attachments/assets/fb208e65-6309-4d74-93b6-e2daeda7efbf)


---

### ✅ Página de Sucesso
Confirmação da compra após o pagamento.

![Success Page](https://github.com/user-attachments/assets/2b69d9f4-81cf-4848-a348-98fbdfac607e)



## 🚀 Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** — Framework React para produção
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática para JavaScript
- **[Stripe](https://stripe.com/)** — API de pagamentos
- **[PNPM](https://pnpm.io/)** — Gerenciador de pacotes
- **[ESLint](https://eslint.org/)** — Padronização de código
- **[PostCSS](https://postcss.org/)** — Processamento de CSS
- **[Styled Components](https://styled-components.com/)** — CSS-in-JS para estilização

---

## 📁 Estrutura do Projeto

```
├── .gitignore
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── src
    ├── assets
    │   ├── camisetas
    │   │   ├── 1.png
    │   │   ├── 2.png
    │   │   ├── 3.png
    │   │   └── 4.png
    │   └── logo.svg
    ├── lib
    │   └── stripe.ts
    ├── pages
    │   ├── _app.tsx
    │   ├── _document.tsx
    │   ├── api
    │   │   └── checkout.ts
    │   ├── index.tsx
    │   ├── product
    │   │   └── [id].tsx
    │   └── success.tsx
    └── styles
    │   ├── global.ts
    │   ├── index.ts
    │   └── pages
    │       ├── app.ts
    │       ├── home.ts
    │       ├── product.ts
    │       └── sucess.ts
└── tsconfig.json
```

---

## 💳 Integração com Stripe

A API de checkout da Stripe é utilizada para criar sessões de pagamento. A lógica de backend está localizada em:

```bash
src/pages/api/checkout.ts
```

---

## 🌐 Rotas Principais

- `/` — Página inicial com os produtos
- `/product/[id]` — Página de detalhes do produto
- `/success` — Página exibida após compra concluída

---

## 🧪 Como rodar localmente

1. **Clone o repositório**
```bash
git clone https://github.com/dmardoqueu/ignite-shop.git
```

2. **Instale as dependências**
```bash
pnpm install
```

3. **Configure as variáveis de ambiente**
Crie um arquivo `.env.local` com as chaves da Stripe:
```env
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_...
```

4. **Inicie o servidor de desenvolvimento**
```bash
pnpm dev
```

---

## 📦 Scripts Disponíveis

- `pnpm dev` — Inicia o servidor Next.js em modo desenvolvimento
- `pnpm build` — Compila o projeto para produção
- `pnpm start` — Inicia o servidor em produção
- `pnpm lint` — Executa o ESLint

---

## 🧑‍💻 Autor

Desenvolvido por [@dmardoqueu](https://github.com/dmardoqueu) 🚀
