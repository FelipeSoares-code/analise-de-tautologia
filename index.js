function implica(a, b) {
    return !a || b
}

function xor(a, b) {
    return a != b
}

function somenteSe(a, b){
    return a == b
}

const variaveis = {
  p: { descricao: 'metrô funcionar dentro da normalidade', estado: false },
  q: { descricao: 'passageiro chegar ao destino no horário', estado: false },
  r: { descricao: 'haver uma greve de funcionários', estado: false },
  s: { descricao: 'metrô ficar lotado', estado: false },
  t: { descricao: 'metrô em manutenção', estado: false },
  u: { descricao: 'ativar transporte alternativo', estado: false },
  v: { descricao: 'ter excesso de passageiro na estação', estado: false },
  w: { descricao: 'passageiro ter alta satisfação', estado: false },
  x: { descricao: 'ter reclamações públicas', estado: false },
  y: { descricao: 'passageiro sentir desconforto', estado: false }
};

const validar = (metroEmGreve) => {
    //variaveis para facilitar a leitura do codigo
    const { p, q, r, s, t, u, v, w, x, y } = {
        p: variaveis.p.estado,
        q: variaveis.q.estado,
        r: metroEmGreve,
        s: variaveis.s.estado,
        t: variaveis.t.estado,
        u: variaveis.u.estado,
        v: variaveis.v.estado,
        w: variaveis.w.estado,
        x: variaveis.x.estado,
        y: variaveis.y.estado
    };

    argumento = implica(
        (
            implica(p, q) &&
            implica(r, !q && s) &&
            implica(t || r, u) &&
            implica(r && xor(u, !u), !q) &&
            implica((q && v), (w && x)) &&
            implica(!q, !w) &&
            implica(v, s) &&
            somenteSe(y, s) &&
            implica(!w || y, x) &&
            r
        ),
        (
            xor(t, !t)
        )
    )
}
