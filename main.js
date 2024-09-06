const roleta = document.querySelector('.roleta');
const resultado = document.getElementById('resultado');

function girar() {
  // Número de setores (ajuste conforme necessário)
  const numSetores = 8;

  // Ângulo de rotação aleatório
  const anguloAleatorio = Math.random() * 360 * numSetores;

  // Animação de rotação
  roleta.style.transform = `rotate(${anguloAleatorio}deg)`;

  // Calcular o setor vencedor (simplificado para fins de exemplo)
  const setorVencedor = Math.floor(anguloAleatorio / (360 / numSetores));
  resultado.textContent = `Vencedor: Setor ${setorVencedor + 1}`;
}