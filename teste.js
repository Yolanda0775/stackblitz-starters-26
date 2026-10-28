const BASE = 'http://localhost:3000';
const LIMPAR_NO_FINAL = true;

let aprovados = 0;
let reprovados = 0;

async function pedir(metodo, caminho, dados) {
  const opcoes = { method: metodo, headers: { 'Content-Type': 'application/json' } };
  if (dados) opcoes.body = JSON.stringify(dados);

  const resposta = await fetch(BASE + caminho, opcoes);
  const texto = await resposta.text();
  let corpo = null;
  if (texto) {
    try{ 
      corpo = JSON.parse(texto);
    } catch {
      corpo =texto;
    }
  }
  
  return { status: resposta.status, corpo};
{}}