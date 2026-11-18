const express = require('express');
const app = express();

// VULNERABILIDADE 1: Chave de API chumbada no código (Hardcoded credential)
const GEMINI_API_KEY = "AIzaSyFakeKeyQueO-ScannerVaiDetectar123";

// VULNERABILIDADE 2: Rota sem proteção de cabeçalhos (Falta o helmet)
app.get('/api/relatos', (req, res) => {
    res.send({ mensagem: "Relato retornado sem proteção HTTP" });
});

app.listen(3000);