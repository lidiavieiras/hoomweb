require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const express = require('express'); // Importa o Express
const app = express(); // Cria a instância do Express

// Middlewares
app.use(express.json()); // Habilita o parsing de JSON para o corpo das requisições

// Rotas
const authRoutes = require('./src/routes/authRoutes'); // Importa as rotas de autenticação
app.use('/api/auth', authRoutes); // Define o prefixo para as rotas de autenticação

// Porta do Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
