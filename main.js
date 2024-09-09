const form = (document.getElementById("form_atividade"))
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji de festa" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji de triste" />'
const atividades = [];
const notas = [];
const spanAprovado = '<spam class="resultado_aprovado">Aprovado</span>'
const sanpReprovado = '<span class="resultado_reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a nota mínima:"))


let linhas ="";
form.addEventListener("submit", function(e){
    e.preventDefault();
    adicionarLinha();
    atualizaTabela();
    atualizaMedia();

});

function adicionarLinha(){
    const inputNomeAtivudade = (document.getElementById("nome_atividade"));
    const inputNotaAtividade = (document.getElementById("nota_atividade"));

    if (atividades.includes(inputNomeAtivudade.value)) {
        alert(`A atividade: ${inputNomeAtivudade.value} ja foi inserida`);
    } 
    else{ 
        atividades.push(parseFloat(inputNomeAtivudade.value));
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = "<tr>";
        linha += `<td>${inputNomeAtivudade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`
    
        linhas += linha;
    }
    inputNomeAtivudade.value = "";
    inputNotaAtividade.value = "";
} 

function atualizaTabela(){
    const corpoTabela = (document.querySelector("tbody"));
    corpoTabela.innerHTML = linhas;
}

function atualizaMedia(){
    const mediaFinal = calculaMediaFinal();
    document.getElementById("media_final_valor").innerHTML = mediaFinal.toFixed(2);
    document.getElementById("media_final_resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : sanpReprovado ;
}
function calculaMediaFinal(){
    let somasDasNotas = 0
    for(let i = 0; i < notas.length; i++){
        somasDasNotas += notas[i];
    }
    return somasDasNotas / notas.length;
    
}