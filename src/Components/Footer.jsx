const NAV = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre Nós' },
  { id: 'areas', label: 'Áreas de Atuação' },
  { id: 'artigos', label: 'Artigos' },
  { id: 'contato', label: 'Contato' },
]

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <img
              src="/logo-footer.png"
              alt="Souza & Jacome Advogados Associados"
              className="footer-logo-img"
            />
            <p className="footer-slogan">Seu direito, nosso compromisso.</p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h4>NAVEGAÇÃO</h4>
              <ul>
                {NAV.map(({ id, label }) => (
                  <li key={id}>
                    <a href={`#${id}`}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>CONTATO</h4>
              <ul>
                <li>
                  <a href="mailto:souza.jacomeadvassociados@gmail.com">
                    souza.jacomeadvassociados@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+5511966013586">(11) 96601-3586</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © 2026 Souza &amp; Jacome Advogados Associados. Todos os direitos reservados.
          </span>
          <span>OAB/SP — Advocacia Ética e Comprometida</span>
        </div>
      </div>
    </footer>
  )
}
