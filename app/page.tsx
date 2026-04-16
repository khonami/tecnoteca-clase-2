"use client"

import { useState, useEffect, useCallback } from "react"
import "./slides.css"

const slidesData = [
  { id: 0, title: "Portada" },
  { id: 1, title: "Calentamiento" },
  { id: 2, title: "Qué es v0" },
  { id: 3, title: "GitHub" },
  { id: 4, title: "Demo v0" },
  { id: 5, title: "Landing ejercicio" },
  { id: 6, title: "WhatsApp" },
  { id: 7, title: "Cards" },
  { id: 8, title: "Contador" },
  { id: 9, title: "Calculadora" },
  { id: 10, title: "Testimonios" },
  { id: 11, title: "Modo oscuro" },
  { id: 12, title: "Publicar" },
  { id: 13, title: "Cierre" },
]

export default function SlidePresentation() {
  const [current, setCurrent] = useState(0)
  const [exitingSlide, setExitingSlide] = useState<number | null>(null)
  const total = slidesData.length

  const goTo = useCallback((n: number) => {
    if (n < 0 || n >= total) return
    setExitingSlide(current)
    setCurrent(n)
    setTimeout(() => setExitingSlide(null), 500)
  }, [current, total])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {})
    } else {
      document.exitFullscreen()
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault()
        goTo(current + 1)
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault()
        goTo(current - 1)
      }
      if (e.key === "f" || e.key === "F") {
        toggleFullscreen()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [current, goTo, toggleFullscreen])

  return (
    <div className="slides-container">
      <div id="progress-bar" style={{ width: `${((current + 1) / total) * 100}%` }} />

      <div id="stage">
        {/* SLIDE 1 - PORTADA */}
        <div className={`slide ${current === 0 ? "active" : ""} ${exitingSlide === 0 ? "exit" : ""}`}>
          <div className="top-bar">
            <span className="logo">eCloud · Tecnoteca Rosario</span>
            <span className="badge">Clase 2</span>
          </div>
          <div className="slide-body" style={{ padding: "44px 60px" }}>
            <div className="bg-glow" style={{ width: 500, height: 300, background: "rgba(62,207,142,0.06)", top: -50, left: -100 }} />
            <div className="bg-glow" style={{ width: 300, height: 300, background: "rgba(34,211,238,0.04)", bottom: -60, right: 0 }} />
            <div className="eyebrow">Tecnoteca Rosario · Fase: Confianza y Descubrimiento</div>
            <h1 className="title">De la Especificación<br /><span className="highlight">al Diseño</span></h1>
            <div className="divider" style={{ width: 80, margin: "20px 0", background: "linear-gradient(90deg,var(--accent-green),transparent)" }} />
            <div className="meta-row">
              <div className="meta-chip"><span className="icon">📚</span> Clase 2</div>
              <div className="meta-chip"><span className="icon">⏱</span> 2 horas</div>
              <div className="meta-chip"><span className="icon">👥</span> Grupos de 2-3 personas</div>
              <div className="meta-chip"><span className="icon">💻</span> Una computadora por grupo</div>
              <div className="meta-chip accent"><span className="icon">🌐</span> <strong>Entregable: Primera interfaz web publicada en internet</strong></div>
            </div>
          </div>
        </div>

        {/* SLIDE 2 - CALENTAMIENTO */}
        <div className={`slide ${current === 1 ? "active" : ""} ${exitingSlide === 1 ? "exit" : ""}`}>
          <div className="top-bar">
            <span className="logo">eCloud · Tecnoteca Rosario</span>
            <span className="badge">Clase 2</span>
          </div>
          <div className="slide-body">
            <div className="bloque-header">
              <span className="bloque-tag">Bloque 1</span>
              <span className="bloque-time">15 minutos</span>
            </div>
            <h2 className="section-title">Revisión y calentamiento</h2>
            <div className="two-col">
              <ul className="bullet-list">
                <li><span className="dot">◆</span><span>¿Pensaron en sus ideas durante la semana?</span></li>
                <li><span className="dot">◆</span><span>¿Estuvieron mirando algo nuevo?</span></li>
                <li><span className="dot">◆</span><span>¿La cambiaron o la evolucionaron?</span></li>
                <li><span className="dot">◆</span><span>¿Alguien la discutió con otra persona?</span></li>
              </ul>
              <div className="card">
                <div className="card-title">💡 Mostrar prototipo</div>
                <p>No tiene que ser perfecto. Es suficiente para ver si tiene sentido. <strong style={{ color: "var(--text-primary)" }}>Cualquier boceto vale.</strong></p>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 3 - QUE ES V0 */}
        <div className={`slide ${current === 2 ? "active" : ""} ${exitingSlide === 2 ? "exit" : ""}`}>
          <div className="top-bar">
            <span className="logo">eCloud · Tecnoteca Rosario</span>
            <span className="badge">Clase 2</span>
          </div>
          <div className="slide-body">
            <div className="bloque-header">
              <span className="bloque-tag">Bloque 2</span>
              <span className="bloque-time">15 minutos</span>
            </div>
            <h2 className="section-title">¿Qué es <span style={{ color: "var(--accent-green)" }}>v0</span>?</h2>
            <div className="two-col">
              <div>
                <p className="subtitle" style={{ marginBottom: 16 }}>v0 es una herramienta de Vercel que convierte <strong style={{ color: "var(--text-primary)" }}>descripción en texto</strong> → interfaz visual real, sin necesidad de saber programar.</p>
                <div className="steps" style={{ gap: 10 }}>
                  <div className="step">
                    <div className="step-num">1</div>
                    <div className="step-content">
                      <strong>Vos escribís</strong>
                      <span>Le decís a v0 qué querés que vea el usuario</span>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-num">2</div>
                    <div className="step-content">
                      <strong>La IA construye</strong>
                      <span>Genera la interfaz en segundos</span>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-num">3</div>
                    <div className="step-content">
                      <strong>Listo para iterar</strong>
                      <span>Un diseño real, listo para publicar</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", gap: 14 }}>
                <div style={{ fontSize: 56 }}>🚀</div>
                <div className="card-title" style={{ fontSize: 16, margin: 0 }}>v0.dev</div>
                <p>Demo en vivo: el docente crea una interfaz desde cero con los grupos</p>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 4 - GITHUB */}
        <div className={`slide ${current === 3 ? "active" : ""} ${exitingSlide === 3 ? "exit" : ""}`}>
          <div className="top-bar">
            <span className="logo">eCloud · Tecnoteca Rosario</span>
            <span className="badge">Nuevo</span>
          </div>
          <div className="slide-body">
            <div className="eyebrow">Herramienta esencial del programador</div>
            <h2 className="section-title">¿Qué es <span style={{ color: "var(--accent-teal)" }}>GitHub</span>?</h2>
            <div className="two-col">
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div className="card">
                  <div className="card-title">📁 ¿Qué es?</div>
                  <p>Es como <strong style={{ color: "var(--text-primary)" }}>Google Drive para código</strong>. Guardás tus proyectos en la nube, con historial de cambios. Si algo se rompe, podés volver atrás.</p>
                </div>
                <div className="card">
                  <div className="card-title">🤝 ¿Para qué sirve?</div>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 4 }}>
                    <li style={{ fontSize: 13, color: "var(--text-secondary)" }}>→ Guardar y versionar tu código</li>
                    <li style={{ fontSize: 13, color: "var(--text-secondary)" }}>→ Colaborar con otras personas</li>
                    <li style={{ fontSize: 13, color: "var(--text-secondary)" }}>→ Conectar con herramientas como Vercel</li>
                    <li style={{ fontSize: 13, color: "var(--text-secondary)" }}>→ Mostrar tu trabajo al mundo</li>
                  </ul>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div className="card" style={{ borderColor: "rgba(62,207,142,0.2)" }}>
                  <div className="card-title">🚀 Crear tu cuenta — 3 pasos</div>
                  <div className="steps" style={{ gap: 8, marginTop: 8 }}>
                    <div className="step" style={{ padding: "10px 14px", background: "var(--bg-dark)" }}>
                      <div className="step-num" style={{ width: 24, height: 24, fontSize: 11, borderRadius: 6 }}>1</div>
                      <div className="step-content"><strong>Ir a github.com</strong><span>Hacer click en &quot;Sign up&quot;</span></div>
                    </div>
                    <div className="step" style={{ padding: "10px 14px", background: "var(--bg-dark)" }}>
                      <div className="step-num" style={{ width: 24, height: 24, fontSize: 11, borderRadius: 6 }}>2</div>
                      <div className="step-content"><strong>Ingresar email y contraseña</strong><span>Elegir un nombre de usuario</span></div>
                    </div>
                    <div className="step" style={{ padding: "10px 14px", background: "var(--bg-dark)" }}>
                      <div className="step-num" style={{ width: 24, height: 24, fontSize: 11, borderRadius: 6 }}>3</div>
                      <div className="step-content"><strong>Verificar el email</strong><span>¡Listo! Ya tenés tu cuenta</span></div>
                    </div>
                  </div>
                </div>
                <div className="meta-chip" style={{ width: "fit-content", background: "rgba(34,211,238,0.08)", borderColor: "rgba(34,211,238,0.2)", color: "var(--accent-teal)" }}>
                  <span>💡</span> v0 y Vercel se conectan con GitHub automáticamente
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 5 - DEMO V0 */}
        <div className={`slide ${current === 4 ? "active" : ""} ${exitingSlide === 4 ? "exit" : ""}`}>
          <div className="top-bar">
            <span className="logo">eCloud · Tecnoteca Rosario</span>
            <span className="badge">Clase 2</span>
          </div>
          <div className="slide-body">
            <div className="eyebrow">Demo en vivo · Miramos antes de intentarlo</div>
            <h2 className="section-title">Así se usa v0 paso a paso</h2>
            <div className="steps">
              <div className="step">
                <div className="step-num">1</div>
                <div className="step-content"><strong>Abrimos v0.dev en el navegador</strong><span>No hace falta instalar nada</span></div>
              </div>
              <div className="step">
                <div className="step-num">2</div>
                <div className="step-content"><strong>Tomamos la idea grupal y armamos un prompt</strong><span>Lo ajustamos juntos antes de enviarlo</span></div>
              </div>
              <div className="step">
                <div className="step-num">3</div>
                <div className="step-content"><strong>Generamos la primera versión</strong><span>La interfaz aparece en segundos</span></div>
              </div>
              <div className="step">
                <div className="step-num">4</div>
                <div className="step-content"><strong>Pedimos un cambio: color, sección, texto</strong><span>El resultado se actualiza al instante</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 6 - LANDING EJERCICIO */}
        <div className={`slide ${current === 5 ? "active" : ""} ${exitingSlide === 5 ? "exit" : ""}`}>
          <div className="top-bar">
            <span className="logo">eCloud · Tecnoteca Rosario</span>
            <span className="badge">Ejercicio</span>
          </div>
          <div className="slide-body" style={{ padding: "28px 56px" }}>
            <div className="bloque-header">
              <span className="bloque-tag">Bloque 3</span>
              <span className="bloque-time">40 minutos</span>
            </div>
            <h2 className="section-title" style={{ marginBottom: 12 }}>Landing del <span style={{ color: "var(--accent-green)" }}>emprendimiento</span></h2>
            <div className="prompt-label">📋 Prompt base — copiá y completá con tu info</div>
            <div className="code-block">{`Creá una landing page para mi emprendimiento llamado [NOMBRE DEL EMPRENDIMIENTO].
Se trata de [QUÉ HACE O VENDE, ej: "tortas caseras artesanales"].
Debe tener: un header con el nombre y slogan, una sección de bienvenida,
una sección que explique qué ofrezco ([SERVICIO 1], [SERVICIO 2], [SERVICIO 3]),
y un footer con mis datos de contacto ([MAIL] / [INSTAGRAM]).
Usá un diseño moderno, colores [COLOR PRINCIPAL] y tipografía clara.`}</div>
            <div className="meta-row" style={{ marginTop: 14 }}>
              <div className="meta-chip"><span>👩‍🏫</span> Docente y ayudantes circulan entre los grupos</div>
              <div className="meta-chip accent"><span>✏️</span> Reemplazá todo lo que está entre [ ] con tu info real</div>
            </div>
          </div>
        </div>

        {/* SLIDE 7 - WHATSAPP */}
        <div className={`slide ${current === 6 ? "active" : ""} ${exitingSlide === 6 ? "exit" : ""}`}>
          <div className="top-bar">
            <span className="logo">eCloud · Tecnoteca Rosario</span>
            <span className="badge">Mejora 1/6</span>
          </div>
          <div className="slide-body" style={{ padding: "28px 56px" }}>
            <div className="eyebrow">Mejoras a la landing · Paso 1</div>
            <h2 className="section-title" style={{ fontSize: "clamp(18px,2.8vw,30px)", marginBottom: 10 }}>💬 Botón de <span style={{ color: "#25D366" }}>WhatsApp</span></h2>
            <div className="two-col" style={{ gap: 20, alignItems: "start" }}>
              <div>
                <div className="prompt-label">📋 Prompt</div>
                <div className="code-block" style={{ fontSize: "11.5px" }}>{`Agregá un botón flotante de WhatsApp a mi landing.
Al hacer click, debe abrir una conversación de WhatsApp
con el número [MI NÚMERO CON CÓDIGO DE PAÍS, ej: 5493413001234]
y el mensaje pre-cargado:
"Hola! Vi tu landing y quiero más información."
El botón debe tener el ícono de WhatsApp, estar fijo
en la esquina inferior derecha, y verse bien en celular.`}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div className="card" style={{ borderColor: "rgba(37,211,102,0.25)", background: "rgba(37,211,102,0.05)" }}>
                  <div className="card-title" style={{ color: "#25D366" }}>🔗 Cómo funciona</div>
                  <p>WhatsApp permite armar links del tipo:<br /><code style={{ fontSize: 11, color: "var(--accent-teal)", background: "var(--code-bg)", padding: "2px 6px", borderRadius: 4 }}>wa.me/NÚMERO?text=MENSAJE</code><br />v0 genera el botón y el link automáticamente.</p>
                </div>
                <div className="card">
                  <div className="card-title">💡 Tips</div>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 5 }}>
                    <li style={{ fontSize: 13, color: "var(--text-secondary)" }}>→ El número NO lleva el <strong style={{ color: "var(--text-primary)" }}>+</strong> ni espacios</li>
                    <li style={{ fontSize: 13, color: "var(--text-secondary)" }}>→ Argentina: <strong style={{ color: "var(--accent-teal)" }}>549</strong> + código de área + número</li>
                    <li style={{ fontSize: 13, color: "var(--text-secondary)" }}>→ El mensaje pre-cargado se puede personalizar</li>
                  </ul>
                </div>
                <div className="meta-chip accent" style={{ width: "fit-content" }}><span>⚡</span> Sin cuenta ni API — funciona al instante</div>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 8 - CARDS */}
        <div className={`slide ${current === 7 ? "active" : ""} ${exitingSlide === 7 ? "exit" : ""}`}>
          <div className="top-bar">
            <span className="logo">eCloud · Tecnoteca Rosario</span>
            <span className="badge">Mejora 2/6</span>
          </div>
          <div className="slide-body" style={{ padding: "28px 56px" }}>
            <div className="eyebrow">Mejoras a la landing · Paso 2</div>
            <h2 className="section-title" style={{ fontSize: "clamp(18px,2.8vw,30px)", marginBottom: 10 }}>🛍️ Cards de productos o servicios</h2>
            <div className="prompt-label">📋 Prompt</div>
            <div className="code-block" style={{ fontSize: 11 }}>{`Agregá una sección de productos/servicios a mi landing con cards.
Cada card debe mostrar: nombre, descripción corta y precio.
Los productos son:
- [NOMBRE 1] - [DESCRIPCIÓN 1] - $[PRECIO 1]
- [NOMBRE 2] - [DESCRIPCIÓN 2] - $[PRECIO 2]
- [NOMBRE 3] - [DESCRIPCIÓN 3] - $[PRECIO 3]
Usá un diseño en grilla, que se vea bien en celular también.`}</div>
            <div className="meta-row" style={{ marginTop: 14 }}>
              <div className="meta-chip accent"><span>📱</span> Responsive: se adapta a celular automáticamente</div>
              <div className="meta-chip"><span>💡</span> Podés agregar todos los productos que quieras</div>
            </div>
          </div>
        </div>

        {/* SLIDE 9 - CONTADOR */}
        <div className={`slide ${current === 8 ? "active" : ""} ${exitingSlide === 8 ? "exit" : ""}`}>
          <div className="top-bar">
            <span className="logo">eCloud · Tecnoteca Rosario</span>
            <span className="badge">Mejora 3/6</span>
          </div>
          <div className="slide-body" style={{ padding: "28px 56px" }}>
            <div className="eyebrow">Mejoras a la landing · Paso 3</div>
            <h2 className="section-title" style={{ fontSize: "clamp(18px,2.8vw,30px)", marginBottom: 10 }}>🔢 Contador de disponibilidad</h2>
            <div className="prompt-label">📋 Prompt</div>
            <div className="code-block" style={{ fontSize: 11 }}>{`Agregá a mi landing un badge o sección que muestre cuántos lugares
o unidades quedan disponibles.
Empezá con [NÚMERO] disponibles.
Cada vez que alguien haga click en "Reservar lugar" o "Lo quiero",
el número debe bajar en 1.
Cuando llegue a 0, mostrar un mensaje de "Sin stock" o "Completo".`}</div>
            <div className="meta-row" style={{ marginTop: 14 }}>
              <div className="meta-chip accent"><span>⚡</span> Crea urgencia: &quot;¡Solo quedan 3 lugares!&quot;</div>
              <div className="meta-chip"><span>💡</span> Perfecta para cursos, turnos o pedidos limitados</div>
            </div>
          </div>
        </div>

        {/* SLIDE 10 - CALCULADORA */}
        <div className={`slide ${current === 9 ? "active" : ""} ${exitingSlide === 9 ? "exit" : ""}`}>
          <div className="top-bar">
            <span className="logo">eCloud · Tecnoteca Rosario</span>
            <span className="badge">Mejora 4/6</span>
          </div>
          <div className="slide-body" style={{ padding: "28px 56px" }}>
            <div className="eyebrow">Mejoras a la landing · Paso 4</div>
            <h2 className="section-title" style={{ fontSize: "clamp(18px,2.8vw,30px)", marginBottom: 10 }}>🧮 Calculadora de presupuesto</h2>
            <div className="prompt-label">📋 Prompt</div>
            <div className="code-block" style={{ fontSize: 11 }}>{`Agregá una calculadora de presupuesto a mi landing.
El cliente debe poder elegir o completar:
- [VARIABLE 1, ej: "cantidad de porciones"]
- [VARIABLE 2, ej: "tipo de cobertura: simple o premium"]
Y al hacer click en "Calcular", mostrar el precio estimado.
Los precios base son: [PRECIO BASE 1] y [PRECIO BASE 2].
Diseño simple, que combine con el resto de la página.`}</div>
            <div className="meta-row" style={{ marginTop: 14 }}>
              <div className="meta-chip accent"><span>💰</span> Los clientes llegan sabiendo el precio aproximado</div>
              <div className="meta-chip"><span>💡</span> Ideal para servicios con variables (catering, diseño, etc.)</div>
            </div>
          </div>
        </div>

        {/* SLIDE 11 - TESTIMONIOS */}
        <div className={`slide ${current === 10 ? "active" : ""} ${exitingSlide === 10 ? "exit" : ""}`}>
          <div className="top-bar">
            <span className="logo">eCloud · Tecnoteca Rosario</span>
            <span className="badge">Mejora 5/6</span>
          </div>
          <div className="slide-body" style={{ padding: "28px 56px" }}>
            <div className="eyebrow">Mejoras a la landing · Paso 5</div>
            <h2 className="section-title" style={{ fontSize: "clamp(18px,2.8vw,30px)", marginBottom: 10 }}>⭐ Testimonios con estrellas</h2>
            <div className="prompt-label">📋 Prompt</div>
            <div className="code-block" style={{ fontSize: 11 }}>{`Agregá una sección de testimonios a mi landing.
Mostrá 3 tarjetas con opiniones de clientes, cada una con:
nombre del cliente, su comentario y una calificación en estrellas (del 1 al 5).
Los testimonios son:
- [NOMBRE 1] - "[COMENTARIO 1]" - [ESTRELLAS] estrellas
- [NOMBRE 2] - "[COMENTARIO 2]" - [ESTRELLAS] estrellas
- [NOMBRE 3] - "[COMENTARIO 3]" - [ESTRELLAS] estrellas`}</div>
            <div className="meta-row" style={{ marginTop: 14 }}>
              <div className="meta-chip accent"><span>🤝</span> La prueba social aumenta la confianza del visitante</div>
              <div className="meta-chip"><span>💡</span> Podés agregar foto de perfil también</div>
            </div>
          </div>
        </div>

        {/* SLIDE 12 - MODO OSCURO */}
        <div className={`slide ${current === 11 ? "active" : ""} ${exitingSlide === 11 ? "exit" : ""}`}>
          <div className="top-bar">
            <span className="logo">eCloud · Tecnoteca Rosario</span>
            <span className="badge">Mejora 6/6</span>
          </div>
          <div className="slide-body" style={{ padding: "28px 56px" }}>
            <div className="eyebrow">Mejoras a la landing · Paso 6</div>
            <h2 className="section-title" style={{ fontSize: "clamp(18px,2.8vw,30px)", marginBottom: 10 }}>🌙 Modo oscuro / claro</h2>
            <div className="prompt-label">📋 Prompt</div>
            <div className="code-block" style={{ fontSize: "11.5px" }}>{`Agregá un botón para alternar entre modo claro y modo oscuro en mi landing.
El botón debe estar en el header, con un ícono de sol o luna según el modo activo.
Que el cambio afecte todos los colores de la página y se vea suave
con una transición.`}</div>
            <div className="meta-row" style={{ marginTop: 14 }}>
              <div className="meta-chip accent"><span>🎨</span> Le da un toque profesional a la landing</div>
              <div className="meta-chip"><span>💡</span> Muchos usuarios prefieren el modo oscuro en celular</div>
            </div>
            <div className="divider" style={{ marginTop: 16 }} />
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 2 }} className="mejoras-done">
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>✅ Completaste las 6 mejoras:</span>
              <span className="meta-chip" style={{ fontSize: 11, padding: "3px 10px" }}>💬 WhatsApp</span>
              <span className="meta-chip" style={{ fontSize: 11, padding: "3px 10px" }}>🛍️ Cards</span>
              <span className="meta-chip" style={{ fontSize: 11, padding: "3px 10px" }}>🔢 Contador</span>
              <span className="meta-chip" style={{ fontSize: 11, padding: "3px 10px" }}>🧮 Calc.</span>
              <span className="meta-chip" style={{ fontSize: 11, padding: "3px 10px" }}>⭐ Testimonios</span>
              <span className="meta-chip" style={{ fontSize: 11, padding: "3px 10px" }}>🌙 Dark mode</span>
            </div>
          </div>
        </div>

        {/* SLIDE 13 - PUBLICAR */}
        <div className={`slide ${current === 12 ? "active" : ""} ${exitingSlide === 12 ? "exit" : ""}`}>
          <div className="top-bar">
            <span className="logo">eCloud · Tecnoteca Rosario</span>
            <span className="badge">Clase 2</span>
          </div>
          <div className="slide-body">
            <div className="bloque-header">
              <span className="bloque-tag">Bloque 4</span>
              <span className="bloque-time">25 minutos</span>
            </div>
            <h2 className="section-title">Primera publicación <span style={{ color: "var(--accent-green)" }}>en internet</span></h2>
            <div className="two-col">
              <div className="steps" style={{ gap: 10 }}>
                <div className="step">
                  <div className="step-num">1</div>
                  <div className="step-content"><strong>Crear cuenta en vercel.com</strong><span>Sign up con email o Google</span></div>
                </div>
                <div className="step">
                  <div className="step-num">2</div>
                  <div className="step-content"><strong>Exportar desde v0</strong><span>Botón &quot;Deploy&quot; dentro de v0</span></div>
                </div>
                <div className="step">
                  <div className="step-num">3</div>
                  <div className="step-content"><strong>¡Conectado!</strong><span>Tu app tiene una URL real en segundos</span></div>
                </div>
                <div className="step">
                  <div className="step-num">4</div>
                  <div className="step-content"><strong>Compartir el link</strong><span>Cada grupo comparte su URL con el resto</span></div>
                </div>
              </div>
              <div className="card" style={{ display: "flex", flexDirection: "column", gap: 14, justifyContent: "center" }}>
                <div className="card-title">🏠 La analogía</div>
                <p>El dominio es la <strong style={{ color: "var(--text-primary)" }}>dirección de tu casa</strong>. El servidor es donde vive. <strong style={{ color: "var(--accent-green)" }}>Vercel te da ambas cosas gratis.</strong></p>
                <div className="divider" style={{ margin: "4px 0" }} />
                <div className="card-title">💪 Si alguien no llega</div>
                <p>La interfaz generada ya es un logro. No es un problema, es el punto de partida.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 14 - CIERRE */}
        <div className={`slide ${current === 13 ? "active" : ""} ${exitingSlide === 13 ? "exit" : ""}`}>
          <div className="top-bar">
            <span className="logo">eCloud · Tecnoteca Rosario</span>
            <span className="badge">Cierre · 5 min</span>
          </div>
          <div className="slide-body">
            <div className="bg-glow" style={{ width: 400, height: 300, background: "rgba(62,207,142,0.05)", bottom: -50, right: -50 }} />
            <div className="eyebrow">Compartimos logros</div>
            <h2 className="section-title">Cada grupo: una cosa que <span style={{ color: "var(--accent-green)" }}>les gustó</span> y algo que cambiarían</h2>
            <div className="quote-block">
              <p>&quot;En 2 clases pasaron de idea a algo real publicado en internet. Eso no lo hacía nadie sin saber programar hace 5 años.&quot;</p>
            </div>
            <div className="divider" />
            <div className="two-col" style={{ gap: 16, marginTop: 0 }}>
              <div className="card">
                <div className="card-title">🎯 Lo lograron hoy</div>
                <ul>
                  <li>Primer interfaz web generada con IA</li>
                  <li>Publicada con una URL real</li>
                  <li>Sin escribir una sola línea de código</li>
                </ul>
              </div>
              <div className="card" style={{ borderColor: "rgba(62,207,142,0.2)" }}>
                <div className="card-title">🚀 Próxima clase</div>
                <p>&quot;Del Diseño a la Funcionalidad&quot;. La faz se ve bien, pero todavía no es inteligente. <strong style={{ color: "var(--accent-green)" }}>Le ponemos inteligencia adentro.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THUMBNAILS */}
      <div id="thumbnails">
        {slidesData.map((slide, i) => (
          <div
            key={slide.id}
            className={`thumb ${current === i ? "active-thumb" : ""}`}
            onClick={() => goTo(i)}
          >
            {slide.title}
          </div>
        ))}
      </div>

      <div className="kbd-hint">← → teclas de flecha · Barra espaciadora avanza · F para pantalla completa</div>

      <nav id="nav">
        <button id="prev-btn" disabled={current === 0} onClick={() => goTo(current - 1)}>←</button>
        <span id="slide-counter">{current + 1} / {total}</span>
        <button id="next-btn" disabled={current === total - 1} onClick={() => goTo(current + 1)}>→</button>
        <span style={{ width: 1, height: 16, background: "var(--border)", margin: "0 4px" }} />
        <button id="fullscreen-btn" title="Pantalla completa" onClick={toggleFullscreen}>⛶</button>
      </nav>
    </div>
  )
}
