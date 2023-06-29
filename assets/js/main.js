const data = new Date();

/*
    FUNÇÕES DE HTML
*/
function criaH1() {
    const h1 = document.createElement('h1');
    return h1;
}

function texto() {
    const titulo = document.querySelector('.container');
    const h1 = criaH1();

    h1.innerHTML = formatDataBr(data);
    titulo.appendChild(h1);
}



/*
    FUNÇÕES DE HORA
*/
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formatDataBr(data) {
    const diaSemanaNum = data.getDay();
    const dia = zeroAEsquerda(data.getDate());
    const mesNum = data.getMonth();
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());

    const diaSemana = getDiaSemana(diaSemanaNum);
    const mes = getMesTexto(mesNum);
    const msgDia = `${diaSemana}, ${dia} de ${mes} de ${ano} </br> ${hora}:${min}`;
    return msgDia;
}

function getDiaSemana(diaSemanaNum) {
    const dias = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    let diaTexto = dias[diaSemanaNum];

    return diaTexto;

    /*
    switch (diaSemanaNum) {
        case 0:
            diaTexto = dias[0];
            return diaTexto;
        case 1:
            diaTexto = dias[1];
            return diaTexto;
        case 2:
            diaTexto = dias[2];
            return diaTexto;
        case 3:
            diaTexto = dias[3];
            return diaTexto;
        case 4:
            diaTexto = dias[4];
            return diaTexto;
        case 5:
            diaTexto = dias[5];
            return diaTexto;
        case 6:
            diaTexto = dias[6];
            return diaTexto;
        default:
            diaTexto = 'Dia inválido';
            return diaTexto;
    }
    */
}

function getMesTexto(mesNum) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    let mesTexto = meses[mesNum];
    return mesTexto;

    /*
    switch (mesNum) {
        case 0:
            mesTexto = meses[0];
            return mesTexto;
        case 1:
            mesTexto = meses[1];
            return mesTexto;
        case 2:
            mesTexto = meses[2];
            return mesTexto;
        case 3:
            mesTexto = meses[2];
            return mesTexto;
        case 4:
            mesTexto = meses[4];
            return mesTexto;
        case 5:
            mesTexto = meses[5];
            return mesTexto;
        case 6:
            mesTexto = meses[6];
            return mesTexto;
        case 7:
            mesTexto = meses[7];
            return mesTexto;
        case 8:
            mesTexto = meses[8];
            return mesTexto;
        case 9:
            mesTexto = meses[9];
            return mesTexto;
        case 10:
            mesTexto = meses[10];
            return mesTexto;
        case 11:
            mesTexto = meses[11];
            return mesTexto;
        default:
            diaTexto = 'Mês inválido';
            return mesTexto;
    }
    */
}

texto();