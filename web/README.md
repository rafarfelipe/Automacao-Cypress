# 📘 Documentação – Testes Automatizados Webdojo (Cypress)

## 📌 Visão Geral
Este projeto contém testes automatizados End-to-End (E2E) desenvolvidos com **Cypress** para a aplicação **Webdojo**. O objetivo é validar os principais fluxos e comportamentos da aplicação web, garantindo qualidade, estabilidade e confiança nas entregas.

A aplicação **Webdojo** está no **mesmo repositório** do projeto de testes, sendo necessário iniciá-la localmente antes da execução dos testes.

---

## 🛠️ Tecnologias Utilizadas
- Node.js
- Cypress
- JavaScript
- npm

---

## 📂 Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── alerts.cy.js
│   ├── cep.cy.js
│   ├── consultancy.cy.js
│   ├── github.cy.js
│   ├── hover.cy.js
│   ├── iframe.cy.js
│   ├── kanban.cy.js
│   ├── links.cy.js
│   └── login.cy.js
│
├── fixtures/
│   ├── cep.json
│   ├── consultancy.json
│   └── document.pdf
│
├── support/
│   ├── actions/
│   │   └── consultancy.actions.js
│   ├── commands.js
│   ├── e2e.js
│   └── utils.js
```

---

## 🧪 Descrição das Pastas

### 🔹 cypress/e2e
Contém os arquivos de testes E2E organizados por funcionalidade da aplicação.

### 🔹 cypress/fixtures
Armazena dados mockados utilizados nos testes.

### 🔹 cypress/support
Configurações globais, comandos customizados e utilitários reutilizáveis.

---

## ▶️ Executando a Aplicação Webdojo

```bash
npm run dev
```

A aplicação ficará disponível em:
```
http://localhost:3000
```

---

## ▶️ Executando os Testes Automatizados

```bash
npm run test
```

Ou:
```bash
npx cypress run
```

---

## ✅ Boas Práticas Aplicadas
- Uso de fixtures
- Commands customizados
- Organização por funcionalidade
- Reutilização de actions

---

✍️ **Autor:** Rafael Felipe  
🧪 **Área:** Qualidade de Software / Automação de Testes
