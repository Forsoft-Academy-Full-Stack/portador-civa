tratar_campos = function() {
    let erro = false;
    let campos = ["name","surname","date-birth", "identity", "country-select", "postal-code", "city-select", "state-select", "logrd-name", "telf", "email"];

    for (i = 0; i < campos.length; i++) {
        if (document.getElementById(campos[i]).value=='') {
            erro = true;
        }
    
    if (erro) { 
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos os Campos Precisam ser Preenchidos!',
        footer: '<a href="">Por que eu tive esse problema?</a>'
      })
    
     }
     else { 
         
        Swal.fire({
            icon: 'Sucesso',
            title: 'Cadastro Realizado Com Sucesso',
            showConfirmButton: false,
            timer: 1500
          })
           }
     }
    return !erro;

    }
document.getElementById('form-cad-portador').onsubmit = tratar_campos;