const button = document.getElementById('button');
const container = document.getElementById('container');
const create = document.getElementById('create');



function inverter() {
    container.style.display = 'none';
    create.style.display = 'flex';
    create.innerHTML = `
            <section id="register1"> 
                <div class="title">
                    <h1>Já tem conta?</h1>
                </div>
                <p>Para entrar em nosso site, faça login <br> com suas informações</p>
                <button id="button" onclick="inverterEntrar()">Entrar</button>
            </section>
            <section id="enter1">
                <div id="top">
                    <div class="title">
                        <h1>Criar Conta</h1>
                    </div>
                    <div id="accounts">
                        <a href=""><i class="fa-brands fa-facebook-f fa-lg" "></i></a>
                        <a href=""><i class="fa-brands fa-google fa-lg" "></i></a>
                        <a href=""><i class="fa-brands fa-linkedin-in fa-lg" "></i></a>
                    </div>
                    <p>ou cadastre seu e-mail</p>
                </div>
                <form>
                    <div id="user">
                        <input type="name" placeholder="Nome">
                        <input type="email" placeholder="E-mail">
                        <input type="password" placeholder="Senha">
                    </div>
                <div id="send">
                        <input type="submit" value="Cadastrar">
                </div>
                </form>
            </section>`
}

function inverterEntrar() {
    container.style.display = 'flex';
    create.style.display = 'none';
}

