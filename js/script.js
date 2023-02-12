$("#phone").mask("(99) 99999-9999");


var products = [

  {id: 1, name: "Bife com Batata", price:30.0},
  {id: 2, name: "Coxa de Frango Crocante", price:25.0},
  {id: 3, name: "Carne de Panela", price:22.0},
  {id: 4, name: "Farofa", price:10.0},
  {id: 5, name: "Salada", price:8.0},
  {id: 6, name: "Torresmo", price:12.0},

];



var inputNome = document.querySelector("#name1");
name1.addEventListener("keypress", function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
  
  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});


function showOrder(){
  
      var quantities  = document.getElementsByName("quantity"); // Recebe todos os elementos com nome quantity no HTML
      var output      = document.getElementById("output");
      var result      = 0;
      output.innerHTML = `Caro <strong>${name1.value}</strong></br></br></br>
                          Seguem os dados do seu pedido. </br></br>
                          O seu pedido e: </br></br>`;
                          
      for (var input of quantities) { // Percorre todos os itens (quantities) vindo do HTML

          let id = input.id; 
          var formatter = new Intl.NumberFormat('pt-BR', { // formatador para moeda corrente
            style: 'currency',
            currency: 'BRL',
          });

          if(input.value >= 1){
              output.innerHTML += `• Prato: = ${products[id-1].name} - 
              Preço Unitario: ${formatter.format(products[id-1].price)} 
              Quantidade: ${input.value} </br>`;
              result += products[id-1].price * parseFloat(input.value);
          }
      };

      output.innerHTML += `</br><strong>Preço final : ${formatter.format(result)}</strong>`;
      
};