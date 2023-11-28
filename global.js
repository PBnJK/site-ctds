/**
 * Cria o cabeçalho
 * 
 * @returns {DocumentFragment} Conteúdo do cabeçalho
 */
function getHeader() {
	const HEADER = document.createElement('template');

	HEADER.innerHTML = `
		<header id="global-header">
			<img src="assets/img_logo.png"/>
		</header>
	`;

	return HEADER.content
}

/**
 * Cria o rodapé
 * 
 * @returns {DocumentFragment} Conteúdo do rodapé
 */
function getFooter() {
	const FOOTER = document.createElement('template');

	FOOTER.innerHTML = `
		<footer id="global-footer">
			<p>
				<b>Quer ser o primeiro a ouvir das nossas descobertas mais recentes?</b><br>
				Digite o seu e-mail no campo abaixo e receba nossas notificações diretamente na
				sua caixa de entrada!
			</p>

			<input type="email" id="newsletter-input-box" placeholder="eu@exemplo.com">
			</input>

			<p><i>&copy; 2023 Teóricos Anônimos</i></p>
		</footer>
	`;

	return FOOTER.content
}

/**
 * Inicia a página, adicionando o cabeçalho e rodapé
 */
function startPage() {
	document.body.appendChild(getHeader());
	document.body.appendChild(getFooter());
}

startPage();