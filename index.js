
const herois = [
  { nome: "Invoker", xp: 4500 },
  { nome: "Axe", xp: 12000 },
  { nome: "Phantom Assassin", xp: 2000 },
  { nome: "Crystal Maiden", xp: 850 },
  { nome: "Juggernaut", xp: 7200 }
];


function classificarHeroi(xp) {
  if (xp < 1000) return "Ferro";
  else if (xp <= 2000) return "Bronze";
  else if (xp <= 5000) return "Prata";
  else if (xp <= 7000) return "Ouro";
  else if (xp <= 8000) return "Platina";
  else if (xp <= 9000) return "Ascendente";
  else if (xp <= 10000) return "Imortal";
  else return "Radiante";
}

for (let heroi of herois) {
  const nivel = classificarHeroi(heroi.xp);
  console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}