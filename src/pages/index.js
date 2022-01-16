import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

import wsp from '../assets/images/wsppicon.png'

const HomeIndex = () => {
  const siteTitle = 'Nicolas Caruso Lombardi '
  const siteDescription = 'Site description'

  const scrollToEnd = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    })
  }

  const styleSpan = {
    color: '#91102C',
  }

  const styleH2 = {
    textAlign: 'center'
  }

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Soluciones legales 
              <br />
              <span style={styleSpan}> para el mundo actual.</span>
            </h2>
          </header>

          <p>
            {/* Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc
            nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae
            lobortis tortor primis integer massa adipiscing id nisi accumsan
            pellentesque commodo blandit enim arcu non at amet id arcu magna.
            Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate
            lorem neque cubilia. */}
          </p>

          <div className="wsapbtn">
            <a
              href="https://api.whatsapp.com/send?phone=5491165014249"
              target="_blank"
              rel="noreferrer"
            >
              <img src={wsp} alt="" />
            </a>
          </div>
          <ul className="actions">
            <li>
              <a href="#" className="button" onClick={scrollToEnd}>
                Contacto
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <div style={styleH2}>
            <h2>Servicios</h2>
          </div>
          <Gallery />

          {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul> */}
        </section>

        <section id="three">
          <h2>Haceme tu consulta</h2>
          <p>
            Completa el siguiente formulario, tratare tu consulta a la brevedad
            .
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nombre"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Mensaje"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="button" value="Enviar Mensaje" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Ceretti 2218
                  <br />
                  Villa Urquiza
                  <br />
                  C.A.B.A
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Celular</span>
                  </h3>
                  1165014249
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="/">elombardi.prod@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
