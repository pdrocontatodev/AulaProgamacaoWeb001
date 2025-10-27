/*mobile*/
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

/*scroll reveal*/
function scrollActive(sectionId){
    const section = document.getElementById(sectionId);

    if(!section) return;

    const headerHeight = 70;
    const sectionPosition = section.offsetTop - headerHeight;

    window.scrollTo({top: sectionPosition, behavior: 'smooth'});

    const menu = document.getElementById('navMenu');
    menu.classList.remove('active');
}

/*cadastro*/

function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('volunteerForm');

    const formData ={
        nome: form.nome.value,
        email: form.email.value,
        telefone: form.telefone.value,
        idade: form.idade.value,
        disponibilidade: form.disponibilidade.value,
        areainteresse: form.areainteresse.value,
        experiencia: form.experiencia.value,
        motivacao: form.motivacao.value,
        dataCadastro: new Date().toLocaleDateString()
    }

    let voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];
    voluntarios.push(formData);
    localStorage.setItem('voluntarios', JSON.stringify(voluntarios));

    const sucessMessage = document.getElementById('successMessage');
    sucessMessage.classList.add('show');
    sucessMessage.strollIntoView({behavior: 'smooth', block: 'center'});

    setTimeout(()=> form.requestFullscreen()2000);
    setTimeout(()=> sucessMessage.classList.remove('show')3000);

    exibirVoluntarios();
}

function exibirVoluntarios() {
    const voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];
    const tabelaContainer = document.getElementById('tabelaVoluntarios');

    if(!tabelaContainer) return;
    if(voluntarios.length === 0){
        tabelaContainer.innerHTML = '<p>Nenhum voluntário cadastrado.</p>';
    }

}