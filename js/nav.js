const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <a href="index.html"><img src="img/DigMA.png" class="brand-logo" alt=""></a>
    <div class="nav-itens">
        <div class="search">
            <input type="text" class="search-box" placeholder="Pesquise Serviços Aqui">
            <button class="search-btn">search</button>
        </div>
        <a href="#"><img src="img/user.png" alt=""></a>
        <a href="#"><img src="img/cart.png" alt=""></a>
    </div>
</div>
<ul class="links-container">
    <li class="link-item"><a href="index.html" class="link">Início</a></li>
    <li class="link-item"><a href="#" class="link">Como Funciona</a></li>
    <li class="link-item"><a href="service.html" class="link">Serviços</a></li>
</ul>
    `;
}

createNav();