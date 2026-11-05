import { useEffect, useState } from 'react'

const LINKS = [
  { id: 'inicio', label: 'INÍCIO' },
  { id: 'sobre', label: 'SOBRE NÓS' },
  { id: 'areas', label: 'ÁREAS DE ATUAÇÃO' },
  { id: 'artigos', label: 'ARTIGOS' },
  { id: 'contato', label: 'CONTATO' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('inicio')

  // Destaca no menu a seção que está visível na tela
  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY + 140
      let current = LINKS[0].id
      for (const { id } of LINKS) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= offset) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header>
      <div className="header-inner">
        <a
          href="#inicio"
          aria-label="Souza & Jacome Advogados Associados"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/logo-header.png"
            alt="Souza & Jacome Advogados Associados"
            className="logo-img"
          />
        </a>

        <nav className={menuOpen ? 'open' : ''}>
          <ul>
            {LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={active === id ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-tag">
          SEU DIREITO,
          <br />
          NOSSO COMPROMISSO.
        </div>

        <button
          className="menu-toggle"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          ☰
        </button>
      </div>
    </header>
  )
}
