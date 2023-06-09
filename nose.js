document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("calculate").addEventListener("click", function () {
    let question1 = document.getElementById("question1").value;
    let question2 = document.getElementById("question2").value;
    let question3 = document.getElementById("question3").value;
    let question4 = document.getElementById("question4").value;
    let question5 = document.getElementById("question5").value;

    // Convertendo os valores para inteiros
    question1 = parseInt(question1);
    question2 = parseInt(question2);
    question3 = parseInt(question3);
    question4 = parseInt(question4);
    question5 = parseInt(question5);

    // Calculando o escore NOSE
    let score = (question1 + question2 + question3 + question4 + question5) * 5;

    let result = "";

    if (score <= 30) {
      result = "Não é um problema";
      document.getElementById("result").style.color = "green";
      document.getElementById("result").style.backgroundColor = "navy";
    } else if (score <= 50) {
      result = "Impacto leve";
      document.getElementById("result").style.color = "yellow";
      document.getElementById("result").style.backgroundColor = "navy";
    } else if (score <= 70) {
      result = "Impacto moderado";
      document.getElementById("result").style.color = "orange";
      document.getElementById("result").style.backgroundColor = "navy";
    } else {
      result = "Impacto Intenso/Grave";
      document.getElementById("result").style.color = "red";
      document.getElementById("result").style.backgroundColor = "navy";
    }

    // Mostrando o resultado na página
    document.getElementById(
      "result"
    ).innerHTML = `Escore NOSE: ${score}. Classificação: ${result}`;
  });
});
