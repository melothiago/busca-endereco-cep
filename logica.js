			function callback() {
				var oResponse = this;
				var sResponseBody = oResponse.responseText;
				var oJSON = JSON.parse(sResponseBody);

				if (oJSON.erro) {
					$("#msg-box").css("display", "initial");
				} else {

					var logradouro = oJSON.logradouro;
					var bairro = oJSON.bairro;
					var localidade = oJSON.localidade;
					var uf = oJSON.uf;

					document.querySelector("#logradouro").value = logradouro;
					document.querySelector("#bairro").value = bairro;
					document.querySelector("#localidade").value = localidade;
					document.querySelector("#uf").value = uf;

					$("#result").css("display", "initial");

				}
			}

			function chamaAPI() {

				var cep = document.querySelector("#cep").value;
				let reg = new RegExp('-');
				cep = cep.replace(reg, '');

				var sURL = "https://viacep.com.br/ws/" + cep + "/json/";
				var oRequest = new XMLHttpRequest();
				oRequest.addEventListener("load", callback);
				oRequest.open("GET", sURL);
				oRequest.send();
			}

			$("#cep").keyup(function () {

				var cep = document.querySelector("#cep").value;

				if (cep.length == 9) {
					chamaAPI();
				} else {
					$("#result").css("display", "none");
					$("#msg-box").css("display", "none");
				}

			});