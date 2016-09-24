/*
################################
	LISTA DE MERCADO
################################
*/
	var listaMercado = function(){
		this.list = [
					{
						nome	: "Detergente",
						usuario	: "Todos", 
						qtde	: 2
					},
					{
						nome	: "Carne",
						usuario	: "Murilo", 
						qtde	: 1
					},
					{
						nome	: "Macarrao",
						usuario	: "Todos", 
						qtde	: 2
					},
					{
						nome 	: "Molho de tomate",
						usuario : "Todos",
						qtde 	: 2
					},
					{
						nome 	: "Salsicha",
						usuario : "Enrique",
						qtde 	: 1
					},
					{
						nome  	: "Pão",
						usuario : "Enrique",
						qtde 	: 6
					},
					{
						nome 	: "Hamburguer",
						usuario : "Enrique",
						qtde 	: 6
					},
					{
						nome 	: "Papel Toalha",
						usuario : "Todos",
						qtde 	: 1
					},
					{
						nome 	: "Papel Higiênico",
						usuario : "Todos",
						qtde 	: 1
					},
					{
						nome 	: "Amaciante",
						usuario : "Todos",
						qtde 	: 1
					},
					{
						nome 	: "Arroz",
						usuario : "Todos",
						qtde 	: 1
					},
					{
						nome 	: "Frutas",
						usuario : "Murilo",
						qtde 	: 1
					},
					{
						nome  	: "Margarina",
						usuario : "Todos",
						qtde 	: 1
					},
					{
						nome 	: "Agua com cheiro",
						usuario : "Todos",
						qtde    : 1
					},
					{
						nome 	: "Plastico do cha",
						usuario : "Todos",
						qtde 	: 1
					}
					];
	}
	listaMercado.prototype.listarCompras = function(){
		var count 		= Object.keys(this.list).length,
			selector 	= document.getElementById("compra-list"),
			obj  		= this.list;
		for(var i = 0; i < count; i++){
			var row 		= document.createElement("tr"),
				td_nome 	= document.createElement('td'),
				td_usuario 	= document.createElement('td'),
				td_qtde		= document.createElement("td");
			td_nome.setAttribute("class", "mdl-data-table__cell--non-numeric");
			td_nome.innerHTML = obj[i].nome;
			td_usuario.innerHTML = obj[i].usuario;
			td_qtde.innerHTML = obj[i].qtde;
			row.appendChild(td_nome);
			row.appendChild(td_usuario);
			row.appendChild(td_qtde);
			selector.appendChild(row);
 		}

	}
/*
################################
	//LISTA DE MERCADO
################################
*/

/*
###############################
	PAGE LOAD
###############################
*/
	$(document).ready(function(){
		var mercado = new listaMercado();
		mercado.listarCompras();
	});
/*
###############################
	//PAGE LOAD
###############################
*/