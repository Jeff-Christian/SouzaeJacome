import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

const WHATSAPP_URL =
  'https://wa.me/5511966013586?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20Souza%20%26%20Jacome%20Advogados.'
const WHATSAPP_ARTICLE_URL =
  'https://wa.me/5511966013586?text=Ol%C3%A1!%20Vi%20um%20artigo%20no%20site%20e%20gostaria%20de%20saber%20mais.'

const WHATSAPP_PATH =
  'M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.07-1.33A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.6 0-3.1-.44-4.38-1.2l-.31-.19-3.01.79.8-2.94-.2-.3A7.94 7.94 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.38-5.86c-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.41-.14-.01-.3-.01-.46-.01s-.42.06-.64.3c-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28z'

const PRACTICES = [
  {
    title: 'Trabalhista e Previdenciário',
    text: 'Defesa dos seus direitos no ambiente de trabalho e no acesso aos benefícios previdenciários.',
    icon: (
      <>
        <path d="M12 3l8 4v2H4V7l8-4z" />
        <path d="M6 10v7M10 10v7M14 10v7M18 10v7" />
        <path d="M3 21h18" />
      </>
    ),
  },
  {
    title: 'Família e Sucessões',
    text: 'Orientação e segurança jurídica em questões de família, divórcio, união estável, guarda e inventário.',
    icon: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      </>
    ),
  },
  {
    title: 'LGPD / Proteção de Dados',
    text: 'Conformidade e proteção de dados para empresas e pessoas físicas, com foco na sua privacidade e segurança.',
    icon: (
      <>
        <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
        <path d="M9.5 12l1.8 1.8L15 10" />
      </>
    ),
  },
]

const FOUNDERS = [
  {
    photo: '/socio-fundador.jpeg',
    alt: 'Sócio Fundador - Souza & Jacome Advogados Associados',
    name: 'Dr. Raphael Rodrigues Jácome',
    role: 'Sócio Fundador — OAB/SP nº 503.501',
    bio: 'Formado pela Universidade Nove de Julho, pós-graduando em Direito Penal e Processual Penal, e em Direito Digital e Proteção de Dados pela Escola Superior da Advocacia Paulista (ESA/SP), e pós-graduando em Direito Previdenciário pela Escola Superior da Advocacia Paranaense (ESA/PR), atua de forma direcionada, unindo estratégia, técnica e compromisso a cada cliente.',
  },
  {
    photo: '/socia-fundadora.jpeg',
    alt: 'Sócia Fundadora - Souza & Jacome Advogados Associados',
    name: 'Dra. Flávia Cristina Souza Silva',
    role: 'Sócia Fundadora — OAB/SP nº 500.486',
    bio: 'Formada pela Universidade Nove de Julho e pós-graduada pela Escola Paulista de Direito em Direito Civil e Processo Civil, e pós-graduanda em Prática Trabalhista e Previdenciária pela Escola Pró Ordem Campinas, atua com dedicação à defesa dos direitos de seus clientes, unindo sensibilidade e rigor técnico.',
  },
]

const AREAS = [
  {
    title: 'Direito Trabalhista',
    text: 'Ações trabalhistas, verbas rescisórias, assédio moral e negociações coletivas.',
  },
  {
    title: 'Direito Previdenciário',
    text: 'Aposentadorias, revisões de benefícios, auxílios e planejamento previdenciário.',
  },
  {
    title: 'Direito de Família',
    text: 'Divórcio, guarda, pensão alimentícia, união estável e inventários.',
  },
  {
    title: 'LGPD e Proteção de Dados',
    text: 'Adequação à LGPD, políticas de privacidade e governança de dados.',
  },
]

const ARTICLES = [
  {
    image: '/artigo-previdenciario.jpg',
    alt: 'Direito Previdenciário',
    tag: 'PREVIDENCIÁRIO',
    title: 'O que muda com a revisão de benefícios previdenciários',
    summary:
      'Entenda quando vale a pena solicitar a revisão do seu benefício junto ao INSS.',
    preview:
      'Vamos explicar em quais situações a revisão de benefício junto ao INSS pode aumentar o valor recebido, quais documentos costumam ser exigidos, os prazos legais para solicitar a revisão e os erros mais comuns que levam ao indeferimento do pedido.',
  },
  {
    image: '/artigo-familia.jpeg',
    alt: 'Direito de Família e Sucessões',
    tag: 'FAMÍLIA',
    title: 'Guarda compartilhada: direitos e deveres dos pais',
    summary:
      'Saiba como funciona a guarda compartilhada e como ela impacta a rotina familiar.',
    preview:
      'O artigo aborda como a guarda compartilhada é definida pela Justiça, a diferença entre guarda compartilhada e guarda alternada, como fica a divisão de tempo com os filhos e quais direitos e deveres cada um dos pais mantém após a separação.',
  },
  {
    image: '/artigo-lgpd.jpeg',
    alt: 'LGPD e Direito Digital',
    tag: 'LGPD',
    title: 'LGPD para pequenas empresas: por onde começar',
    summary:
      'Passos práticos para adequar sua empresa à Lei Geral de Proteção de Dados.',
    preview:
      'Vamos apresentar um passo a passo prático para pequenas empresas iniciarem a adequação à LGPD: mapeamento dos dados coletados, elaboração de política de privacidade, cuidados no armazenamento de informações de clientes e os riscos de não conformidade.',
  },
]

function WhatsAppIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d={WHATSAPP_PATH} />
    </svg>
  )
}

export default function App() {
  const [openArticle, setOpenArticle] = useState(null)

  // Esc fecha o modal; trava o scroll do body enquanto ele está aberto
  useEffect(() => {
    if (!openArticle) return
    const onKey = (e) => e.key === 'Escape' && setOpenArticle(null)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openArticle])

  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="hero" id="inicio">
          <div className="hero-content">
            <div className="eyebrow" />
            <h1>
              <span className="h1-line">Soluções jurídicas com estratégia,</span>
              <br />
              <span className="h1-line">ética e compromisso.</span>
            </h1>
            <p>
              O Souza &amp; Jacome Advogados Associados atua com foco na defesa dos seus
              direitos, oferecendo atendimento personalizado e eficiente, tanto para
              pessoas físicas quanto jurídicas.
            </p>
            <a href="#contato" className="btn">
              FALE CONOSCO →
            </a>
          </div>
          <div className="hero-image">
            <img
              src="https://images.pexels.com/photos/1821616/pexels-photo-1821616.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Vista noturna de São Paulo - Ponte Estaiada"
            />
          </div>
        </section>

        {/* FAIXA DE ÁREAS */}
        <section className="practice-strip">
          <div className="wrap">
            <div className="practice-grid">
              {PRACTICES.map((p) => (
                <div className="practice-item" key={p.title}>
                  <div className="practice-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#c9a227"
                      strokeWidth="2"
                    >
                      {p.icon}
                    </svg>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section className="block about" id="sobre">
          <div className="wrap about-grid">
            <div className="about-figure">
              <img
                src="/deusa-justica-holograma.jpg"
                alt="Deusa da Justiça holográfica"
              />
            </div>
            <div className="about-text">
              <div className="section-head about-head">
                <div className="eyebrow-line" />
                <h2>Sobre o escritório</h2>
              </div>
              <p>
                O escritório Souza &amp; Jacome nasceu com o propósito de democratizar o
                acesso ao Direito e às relações jurídicas, de forma simples e objetiva,
                com atuação voltada para pessoas que acreditam que fazer justiça e fazer
                Direito estão no mesmo caminho, e não em lados opostos.
              </p>
              <p>
                Nascemos da união de duas pessoas que acreditam que o mundo pode ser um
                lugar melhor para se viver, respeitando a ética e, sobretudo, os
                princípios fundamentais que norteiam a sociedade e o Direito.
              </p>
              <ul className="about-list">
                <li>Atendimento personalizado, com resposta ágil às demandas do cliente</li>
                <li>Equipe multidisciplinar com atuação em diversas áreas do Direito</li>
                <li>Transparência em honorários e no andamento dos processos</li>
              </ul>
            </div>
          </div>

          <div className="wrap founders-row">
            {FOUNDERS.map((f) => (
              <div className="founder-col" key={f.name}>
                <div className="founder-photo-sm">
                  <img src={f.photo} alt={f.alt} />
                </div>
                <div className="founder-text-sm">
                  <h3>{f.name}</h3>
                  <p className="founder-role">{f.role}</p>
                  <p>{f.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ÁREAS DE ATUAÇÃO */}
        <section className="block areas" id="areas">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow-line" />
              <h2>Áreas de atuação</h2>
              <p>
                Oferecemos assessoria jurídica completa, unindo conhecimento técnico e
                visão estratégica em cada área de atuação.
              </p>
            </div>
            <div className="areas-grid">
              {AREAS.map((a, i) => (
                <div className="area-card" key={a.title}>
                  <span className="area-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ARTIGOS */}
        <section className="block articles" id="artigos">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow-line" />
              <h2>Artigos</h2>
              <p>Conteúdos e orientações para você entender melhor os seus direitos.</p>
            </div>
            <div className="articles-grid">
              {ARTICLES.map((a) => (
                <div className="article-card" key={a.title}>
                  <img src={a.image} alt={a.alt} />
                  <div className="article-body">
                    <span className="article-date">{a.tag}</span>
                    <h3>{a.title}</h3>
                    <p>{a.summary}</p>
                    <button
                      type="button"
                      className="article-link"
                      onClick={() => setOpenArticle(a)}
                    >
                      LER MAIS →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section className="block contact" id="contato">
          <div className="wrap contact-centered">
            <div className="eyebrow-line" />
            <h2>Fale conosco</h2>
            <p>
              Estamos prontos para ouvir o seu caso e apresentar a melhor estratégia
              jurídica para você.
            </p>
            <div className="contact-detail">
              <span className="k">Endereço Fiscal</span>
              <span>
                Av. Paulista, 1471 - CJ 1110, Jardim Paulista, São Paulo/SP - CEP:
                01311-200
              </span>
            </div>
            <div className="contact-detail">
              <span className="k">Plantão WhatsApp</span>
              <span>(11) 96601-3586</span>
            </div>
            <div className="contact-detail">
              <span className="k">E-mail</span>
              <span>souza.jacomeadvassociados@gmail.com</span>
            </div>
            <div className="contact-detail">
              <span className="k">Atendimento</span>
              <span>On-line em todo o Brasil</span>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <WhatsAppIcon size={20} />
              Falar no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />

      {/* WhatsApp flutuante */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Falar no WhatsApp"
        style={{ color: '#fff' }}
      >
        <WhatsAppIcon size={30} />
      </a>

      {/* Modal de prévia do artigo */}
      <div
        className={`article-modal-overlay${openArticle ? ' is-open' : ''}`}
        onClick={(e) => e.target === e.currentTarget && setOpenArticle(null)}
      >
        <div className="article-modal" role="dialog" aria-modal="true">
          <button
            type="button"
            className="article-modal-close"
            onClick={() => setOpenArticle(null)}
            aria-label="Fechar"
          >
            &times;
          </button>
          <span className="article-modal-tag">PRÉVIA DO ARTIGO</span>
          <h3>{openArticle?.title}</h3>
          <p>{openArticle?.preview}</p>
          <a
            href={WHATSAPP_ARTICLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            Falar sobre esse assunto →
          </a>
        </div>
      </div>
    </>
  )
}
