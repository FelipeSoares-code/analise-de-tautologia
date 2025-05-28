

function implica(a, b) {
    return !a || b
}

function xor(a, b) {
    return a != b
}

function somenteSe(a, b){
    return a == b
}

const txtVariaveis = {
    p: 'metrô funcionar dentro da normalidade',
    q: 'passageiro chegar ao destino no horário',
    r: 'haver uma greve de funcionários',
    s: 'metrô ficar lotado',
    t: 'metrô em manutenção',
    u: 'ativar transporte alternativo',
    v: 'ter excesso de passageiro na estação',
    w: 'passageiro ter alta satisfação',
    x: 'ter reclamações públicas',
    y: 'passageiro sentir desconforto'
};

//variaveis para facilitar a leitura do codigo
const numVariaveis = Object.values(txtVariaveis).length;
const totalLinhas = Math.pow(2, numVariaveis);


function verificarTautologia() {
    console.clear()
    let msgErro = []
    let haGreve = document.getElementById('greve').checked;
    
    document.getElementById('msgErro').innerHTML = '';
    console.log(haGreve ? 'Haverá greve de funcionários' : 'Não haverá greve de funcionários');
    console.log(totalLinhas)
    let tautologia = true;

    for (let i = 0; i < totalLinhas; i++) {
        // cria um número em binário com o tamanho do número de variáveis
        // e converte para um array de números com zeros a esqueda para completar
        // Exemplo: 5 -> [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
        // isso é usado para criar todas as combinações possíveis de verdadeiro ou falso
        // com o número de variáveis que temos
        const bin = i.toString(2).padStart(numVariaveis, '0').split('').map(Number);
        const [ p, q, r, s, t, u, v, w, x, y ] = bin;

        const argumento = (
            implica(
                implica(p, q) &&
                implica(r, !q && s) &&
                implica(t || r, u) &&
                implica(r && xor(u, !u), !q) &&
                implica((q && !v), (w && !x)) &&
                implica(!q, !w) &&
                implica(v, s) &&
                somenteSe(y, s) &&
                implica(!w || y, x),
                haGreve ? r : !r
            )
        )
        // se um argumento for falso, a proposição não é uma tautologia
        if (!argumento){
            tautologia = false;
            msgErro.push(`A linha número ${i + 1} é falsa [${bin}]`);
        } 
        console.log(`linha ${i + 1}: ${argumento ? 'V' : 'F'}`)
    }

    const resultado = `A proposição ${tautologia ? 'é tautologia' : `não é tautologia`}`
    if (!tautologia) {
        msgErro.forEach((msg) => {
            document.getElementById('msgErro').innerHTML += `<li>${msg}</li>`
        })
    } else {
        msgErro = []
        document.getElementById('msgErro').innerHTML = ''
    }

    console.log(resultado)
    document.getElementById('resultado').innerHTML = resultado
}


