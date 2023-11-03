const nome = ["Ana", "André", "Júlia", "Eduardo", "Guilherme", "Ellen", "Felippe", "Hugo", "Íris"];
const competicao = ["Triathlon", "Maratona", "Pentathlon"];

function getEventoAleatorio() {
    let random = Math.floor(Math.random() * competicao.length);
    const eventoAleatorio = competicao[random];
    return eventoAleatorio;
}

function logEvento() {
    const eventoAleatorio = getEventoAleatorio();
    let random = Math.floor(Math.random() * nome.length);
    const pessoaAleatoria = nome[random];
    console.log(`Atleta: ${pessoaAleatoria}`);
    console.log(`Modalidade: ${eventoAleatorio}`);
    return { pessoa: pessoaAleatoria, modalidade: eventoAleatorio };
}

function getDiasTreino() {
    const { pessoa, modalidade } = logEvento();
    let tempo = 0;

    if (modalidade === "Maratona") {
        tempo = 50;
        console.log(`O tempo necessário para o(a) ${pessoa} se preparar para a Maratona é de ${tempo} dias.`);
    } else if (modalidade === "Triathlon") {
        tempo = 100;
        console.log(`O tempo necessário para o(a) ${pessoa} se preparar para o Triathlon é de ${tempo} dias.`);
    } else {
        tempo = 200;
        console.log(`O tempo necessário para o(a) ${pessoa} se preparar para o Pentathlon é de ${tempo} dias.`);
    }
}

function logTempo() {
    getDiasTreino();
}

logTempo();
