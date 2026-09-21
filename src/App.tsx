import { useEffect, useState } from "react";

import exHortifruti from "@/assets/ex-hortifruti.jpg";
import exVinhos from "@/assets/ex-vinhos.jpg";
import exPadaria from "@/assets/ex-padaria.jpg";
import exCross from "@/assets/ex-cross.jpg";
import exCaixa from "@/assets/ex-caixa.jpg";
import book50Layouts from "@/assets/book-50-layouts.webp";
import bookProcessos from "@/assets/book-processos.webp";
import bookReposicao from "@/assets/book-reposicao.webp";
import bookCross from "@/assets/book-cross.webp";
import bookPrecificacao from "@/assets/book-precificacao.webp";
import printAnatomiaVertical from "@/assets/print-anatomia-vertical.webp";
import videoVendem1 from "@/assets/videos/video-vendem-1.mp4";
import posterVendem1 from "@/assets/videos/poster-vendem-1.webp";
import videoVendemMov from "@/assets/videos/video-vendem-mov.mp4";
import posterVendemMov from "@/assets/videos/poster-vendem-mov.webp";
import videoVendem2 from "@/assets/videos/video-vendem-2.mp4";
import posterVendem2 from "@/assets/videos/poster-vendem-2.webp";
import videoLayout01 from "@/assets/videos/video-layout-01.mp4";
import posterLayout01 from "@/assets/videos/poster-layout-01.webp";
import videoLayout02 from "@/assets/videos/video-layout-02.mp4";
import posterLayout02 from "@/assets/videos/poster-layout-02.webp";
import videoLayout03 from "@/assets/videos/video-layout-03.mp4";
import posterLayout03 from "@/assets/videos/poster-layout-03.webp";
import videoVendem3 from "@/assets/videos/video-vendem-3.mp4";
import posterVendem3 from "@/assets/videos/poster-vendem-3.webp";
import seloGarantia30Dias from "@/assets/selo-garantia-30-dias.webp";
import logoGondolasMagneticas from "@/assets/logo-gondolas-magneticas.webp";
import categoriasCollage from "@/assets/categorias-collage.webp";
import membrosPasso1Convite from "@/assets/membros-passo1-convite.webp";
import membrosPasso2Hub from "@/assets/membros-passo2-hub.webp";
import membrosPasso3Aula from "@/assets/membros-passo3-aula.webp";

// Checkout direto do +50 Layouts — nenhum CTA do site deve usar âncora (#),
// todo botão principal leva direto pro Hubla.
const CHECKOUT_URL = "https://pay.hub.la/me6I5FzSqrnBzr069QC9";
const EXIT_OFFER_URL = "https://pay.hub.la/d3NJkxjsN7WTwRB5sqRF";

function useCountdown() {
  const [secondsLeft, setSecondsLeft] = useState(15 * 60);
  useEffect(() => {
    const id = setInterval(
      () => setSecondsLeft((s) => (s <= 0 ? 15 * 60 : s - 1)),
      1000,
    );
    return () => clearInterval(id);
  }, []);
  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");
  return { mm, ss };
}

function PulseDot() {
  return <span className="size-2 rounded-full bg-cta gm-dot" />;
}

// Ícones inline dos cards de plano (Básico/Avançado) — sem lib externa,
// só os 3 traços que precisamos.
function BoltIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor" />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m3 8 4 3 5-6 5 6 4-3-1.5 10h-15L3 8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CheckIcon({ strong = false }: { strong?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={strong ? "text-brand" : "text-onbrand/60"}
    >
      <path
        d="m5 13 4 4 10-10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-onbrand/25">
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CtaButton({
  children,
  className = "",
  href = CHECKOUT_URL,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 bg-cta text-onbrand font-space font-bold uppercase tracking-wide text-base px-7 py-4 rounded-lg shadow-lg shadow-cta/30 hover:brightness-95 transition cta-pulse ${className}`}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`font-mono font-semibold text-sm uppercase tracking-widest ${dark ? "text-cta" : "text-branddark"}`}
    >
      {children}
    </p>
  );
}

function SectionTitle({
  children,
  dark = false,
  className = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`mt-3 font-display uppercase text-3xl md:text-4xl leading-tight ${dark ? "text-onbrand" : "text-ink"} ${className}`}
    >
      {children}
    </h2>
  );
}

// Páginas reais do +50 Layouts — a capa é o mockup 3D gerado, o resto são
// fotos do material impresso com o conteúdo real do PDF (nada de fake).
const PREVIEW_PAGES = [
  { img: book50Layouts, label: "Capa do guia" },
  { img: printAnatomiaVertical, label: "Anatomia da gôndola magnética" },
];

function MaterialShowcase() {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div>
      <p className="text-center text-[11px] uppercase tracking-widest text-ink/40 font-mono font-semibold mb-4">
        Veja o material por dentro · arraste pro lado
      </p>
      {/* Carrossel de arrastar — funciona igual no toque (mobile) e no
          mouse/trackpad (desktop). Sem setas: a interação é o próprio
          gesto de "virar a página". */}
      <div
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 px-1 -mx-1 scroll-smooth [-webkit-overflow-scrolling:touch] [scrollbar-width:thin]"
        onScroll={(e) => {
          const el = e.currentTarget;
          const i = Math.round(el.scrollLeft / (el.scrollWidth / PREVIEW_PAGES.length));
          setActive(Math.min(PREVIEW_PAGES.length - 1, Math.max(0, i)));
        }}
      >
        {PREVIEW_PAGES.map((page, i) => (
          <button
            key={page.label}
            type="button"
            onClick={() => setSelected(i)}
            aria-label={`Ver ${page.label}`}
            className="snap-start shrink-0 w-[72%] sm:w-56 md:w-52 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            <img
              loading="lazy"
              decoding="async"
              src={page.img}
              alt={page.label}
              className="w-full aspect-[3/4] object-contain bg-white rounded-md outline-1 -outline-offset-1 outline-ink/10 pointer-events-none drop-shadow-[0_18px_22px_rgba(20,25,31,0.28)]"
            />
          </button>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-1.5">
        {PREVIEW_PAGES.map((page, i) => (
          <span
            key={page.label}
            className={`size-1.5 rounded-full transition-colors ${i === active ? "bg-brand" : "bg-ink/15"}`}
          />
        ))}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ink/80 flex items-center justify-center p-5"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-card rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              loading="lazy"
              decoding="async"
              src={PREVIEW_PAGES[selected].img}
              alt={PREVIEW_PAGES[selected].label}
              className="w-full rounded-md drop-shadow-[0_18px_22px_rgba(20,25,31,0.28)]"
            />
            <p className="mt-4 font-bold text-ink">{PREVIEW_PAGES[selected].label}</p>
            <p className="mt-1 font-display text-2xl text-cta">R$ 47,90</p>
            <CtaButton href="#oferta" className="mt-4 w-full" onClick={() => setSelected(null)}>Quero este</CtaButton>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mt-3 text-xs text-ink/50 underline"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Vídeos reais de aplicação — 2 novos + 3 já usados na LP principal.
// Ordem pedida: vendem-1 primeiro, depois os da LP principal, com o .mov
// no meio do carrossel.
const VIDEO_ITEMS = [
  {
    src: videoVendem1,
    poster: posterVendem1,
    label: "Aplicação real: gôndola de bebidas organizada com o guia",
  },
  {
    src: videoLayout01,
    poster: posterLayout01,
    label: "Layout real de gôndola: exposição de produtos para cabelos",
  },
  {
    src: videoVendemMov,
    poster: posterVendemMov,
    label: "Depoimento real: resultado do layout aplicado no mercado",
  },
  {
    src: videoLayout02,
    poster: posterLayout02,
    label: "Layout real de gôndola: organização por marcas e categorias",
  },
  {
    src: videoLayout03,
    poster: posterLayout03,
    label: "Layout real de gôndola: exposição vertical e pontos extras",
  },
  {
    src: videoVendem2,
    poster: posterVendem2,
    label: "Antes e depois real: gôndola de cabelos e beleza reorganizada",
  },
];

function VideoCarousel() {
  return (
    <div className="mt-10">
      <p className="text-center text-xs text-ink/50 mb-4">
        (aperte o play pra ver os detalhes do layout)
      </p>
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 px-1 -mx-1 scroll-smooth [-webkit-overflow-scrolling:touch] [scrollbar-width:thin]">
        {VIDEO_ITEMS.map((v) => (
          <div key={v.label} className="relative snap-start shrink-0 w-[62%] sm:w-44 md:w-48">
            <video
              controls
              playsInline
              preload="none"
              poster={v.poster}
              aria-label={v.label}
              className="w-full aspect-[9/16] rounded-xl object-cover bg-ink outline-1 -outline-offset-1 outline-ink/10"
            >
              <source src={v.src} type="video/mp4" />
              Seu navegador não oferece suporte à reprodução deste vídeo.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}


// Pop-up de saída (exit intent): no desktop dispara quando o mouse sai por
// cima da viewport (indo pra aba/voltar do navegador); no mobile/touch,
// intercepta o botão de voltar via history.pushState + popstate. Mostra só
// uma vez por sessão.
function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("gm_exit_shown")) return;

    const trigger = () => {
      if (sessionStorage.getItem("gm_exit_shown")) return;
      sessionStorage.setItem("gm_exit_shown", "1");
      setVisible(true);
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };
    document.addEventListener("mouseleave", onMouseLeave);

    // Clicar num link âncora da própria página (ex: os CTAs que levam pra
    // #oferta) também dispara popstate no Chrome/Firefox — não é o usuário
    // voltando. Marca a intenção ANTES da navegação (o listener de clique
    // roda antes do popstate resultante) pra ignorar esse popstate.
    let ignoreNextPopstate = false;
    const onAnchorClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement)?.closest?.('a[href^="#"]');
      if (link) ignoreNextPopstate = true;
    };
    document.addEventListener("click", onAnchorClick, true);

    window.history.pushState(null, "", window.location.href);
    const onPopState = () => {
      window.history.pushState(null, "", window.location.href);
      if (ignoreNextPopstate) {
        ignoreNextPopstate = false;
        return;
      }
      trigger();
    };
    window.addEventListener("popstate", onPopState);

    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("click", onAnchorClick, true);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-ink/85 flex items-center justify-center p-5"
      onClick={() => setVisible(false)}
    >
      <div
        className="relative bg-card rounded-2xl p-7 max-w-sm w-full text-center shadow-2xl border-2 border-cta"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Fechar"
          className="absolute top-3 right-3 text-ink/40 hover:text-ink text-lg leading-none"
        >
          ✕
        </button>
        <span className="inline-block px-3 py-1 rounded-md bg-danger text-onbrand text-xs font-bold uppercase tracking-wide">
          Espera!
        </span>
        <p className="mt-4 font-display uppercase text-2xl text-ink leading-tight">
          Oferta exclusiva antes de você sair
        </p>
        <p className="mt-2 text-sm text-ink/70">
          Leve o +50 Layouts agora por um preço que não vai se repetir.
        </p>
        <p className="mt-4 font-display text-5xl text-cta">R$ 27,90</p>
        <p className="text-xs text-ink/50">Pagamento único · Acesso vitalício</p>
        <a
          href={EXIT_OFFER_URL}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-cta text-onbrand font-space font-bold uppercase tracking-wide text-base px-7 py-4 rounded-lg shadow-lg shadow-cta/30 hover:brightness-95 transition cta-pulse"
        >
          Quero essa oferta agora
        </a>
      </div>
    </div>
  );
}

// Dispara InitiateCheckout no Meta Pixel sempre que um link de checkout
// (Hubla) é clicado — mesmo padrão usado na LP original.
// Repassa pro checkout (Hubla) todos os parâmetros da URL da LP (utm_*,
// fbclid, gclid, etc.) — sem isso a venda chega na Hubla "limpa" e o
// tracking de origem se perde. Reescreve o href do link no clique, antes
// da navegação, pra funcionar em qualquer link (estático ou renderizado
// dentro de modal) sem precisar sincronizar múltiplos listeners.
function useCheckoutTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement)?.closest?.(
        'a[href^="https://pay.hub.la/"]',
      ) as HTMLAnchorElement | null;
      if (!link) return;

      const currentParams = new URLSearchParams(window.location.search);
      if ([...currentParams.keys()].length > 0) {
        const url = new URL(link.href);
        currentParams.forEach((value, key) => {
          url.searchParams.set(key, value);
        });
        link.href = url.toString();
      }

      if (typeof (window as any).fbq === "function") {
        (window as any).fbq("track", "InitiateCheckout");
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}

export default function App() {
  const { mm, ss } = useCountdown();
  useCheckoutTracking();

  return (
    <div className="bg-paper font-sans text-ink">
      {/* FAIXA DE ATENÇÃO — vermelho de urgência, cor psicologicamente distinta
          do laranja de CTA e do verde de marca, só usada aqui */}
      <div className="bg-gradient-to-br from-danger to-danger-deep py-3.5 px-5 shadow-[0_4px_18px_rgba(200,30,30,0.35)]">
        <p
          className="max-w-4xl mx-auto text-center text-onbrand font-black text-base md:text-lg uppercase leading-snug"
          style={{ fontFamily: "var(--font-space)" }}
        >
          <span
            className="inline-block bg-warn text-black px-2.5 py-0.5 rounded-md font-black mr-2 align-middle"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Atenção:
          </span>
          Aumente as vendas por impulso do seu mercado ou supermercado através dos
          layouts de gôndola.
        </p>
      </div>

      {/* HERO */}
      <section>
        <div className="max-w-6xl mx-auto px-5 py-12 md:py-16 grid md:grid-cols-2 md:grid-rows-[auto_auto] gap-10 items-center">
          {/* No mobile o DOM empilha na ordem física: texto, material, CTA
              (pedido explícito — o CTA precisa ficar abaixo do carrossel do
              material no mobile). No desktop, o grid explícito recoloca o
              CTA de volta junto ao texto, na coluna 1. */}
          <div className="md:col-start-1 md:row-start-1 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-branddark text-xs font-mono font-semibold uppercase tracking-wider">
              <PulseDot /> +50 layouts de gôndolas magnéticas
            </div>
            <h1 className="font-display uppercase leading-[1.15] text-3xl md:text-5xl text-ink text-balance">
              Os +50{" "}
              <span className="inline-block bg-gradient-to-br from-cta to-[#c73f10] text-onbrand px-2 py-0.5 rounded-md">
                layouts
              </span>{" "}
              que aumentaram o{" "}
              <span className="inline-block bg-gradient-to-br from-brand to-branddark text-onbrand px-2 py-0.5 rounded-md">
                faturamento e o lucro
              </span>{" "}
              de mais de 350 mercados e supermercados no Brasil, na palma da sua
              mão!
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink/70 leading-relaxed max-w-xl">
              Não importa o porte da sua operação: <strong className="text-ink">pequeno, médio ou grande</strong>, em qualquer um deles vai dar certo. São processos validados em{" "}
              <strong className="text-branddark">mais de 350 mercados e supermercados</strong> em todo o Brasil.
            </p>
          </div>

          <div className="md:col-start-2 md:row-start-1 md:row-span-2">
            <MaterialShowcase />
          </div>

          <div className="md:col-start-1 md:row-start-2 text-center flex flex-col items-center">
            <CtaButton href="#oferta">Quero aumentar minhas vendas</CtaButton>
            <p className="mt-3 text-xs text-ink/50">
              Pagamento único · Acesso vitalício · Garantia de 30 dias
            </p>
          </div>
        </div>
      </section>

      <div className="stripe-cta h-2 w-full" />

      {/* O QUE VOCÊ RECEBE + PROVA EM VÍDEO */}
      <section className="bg-card">
        <div className="max-w-6xl mx-auto px-5 py-14">
          <div className="max-w-2xl mx-auto text-center">
            <SectionLabel>O que você recebe</SectionLabel>
            <SectionTitle className="mx-auto">
              Um guia que você aplica hoje, não amanhã.
            </SectionTitle>
            <p className="mt-4 text-ink/70 leading-relaxed">
              Guia digital em PDF com mais de 50 layouts prontos e catalogados
              pro seu mercado. Cada layout vem com diagrama visual, o problema
              que ele resolve, o passo a passo de aplicação e uma dica extra.
              Serve pra loja pequena, média ou grande, sozinho ou com equipe.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["Acesso vitalício", "Pagamento único", "PDF + diagramas"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1.5 rounded-full bg-paper border border-line text-xs font-semibold text-ink/70"
                  >
                    {chip}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="mt-10 max-w-3xl mx-auto">
            <video
              controls
              playsInline
              preload="none"
              poster={posterVendem3}
              aria-label="Os layouts que fizeram sucesso a nível Brasil"
              className="w-full aspect-video rounded-xl object-cover bg-ink outline-1 -outline-offset-1 outline-ink/10"
            >
              <source src={videoVendem3} type="video/mp4" />
              Seu navegador não oferece suporte à reprodução deste vídeo.
            </video>
          </div>

          <div className="mt-10 max-w-3xl mx-auto grid grid-cols-2 gap-4">
            {[
              { value: "50+", color: "text-brand", text: "layouts prontos e catalogados por área da loja" },
              { value: "4", color: "text-ink", text: "itens em cada layout: diagrama, problema, passo a passo e dica" },
              { value: "1", color: "text-cta", text: "material serve pra loja de pequeno, médio e grande porte" },
              { value: "∞", color: "text-ink", text: "acesso vitalício, sem mensalidade" },
            ].map((stat) => (
              <div
                key={stat.value + stat.text.slice(0, 8)}
                className="bg-paper rounded-xl border border-line p-5"
              >
                <p className={`font-display text-3xl ${stat.color}`}>{stat.value}</p>
                <p className="mt-1 text-sm text-ink/70">{stat.text}</p>
              </div>
            ))}
          </div>

          <VideoCarousel />

          <img
            loading="lazy"
            decoding="async"
            src={categoriasCollage}
            alt="Layouts reais aplicados em diferentes categorias do supermercado"
            className="mt-10 w-full rounded-xl outline-1 -outline-offset-1 outline-ink/10"
          />

          <div className="mt-8 flex justify-center">
            <CtaButton href="#oferta">Quero aumentar minhas vendas</CtaButton>
          </div>
        </div>
      </section>

      {/* POR QUE ESCOLHER */}
      <section className="bg-ink">
        <div className="max-w-6xl mx-auto px-5 py-14">
          <div className="max-w-2xl mx-auto text-center">
            <SectionLabel dark>Por que escolher nosso material</SectionLabel>
            <SectionTitle dark className="mx-auto">
              Feito pra quem vende, não pra quem dá aula.
            </SectionTitle>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { n: "01", t: "Vendas por impulso", d: "Posicionar estrategicamente produtos de alto valor e itens populares em áreas de alta visibilidade aumenta a probabilidade de compras por impulso." },
              { n: "02", t: "Navegação do cliente", d: "Um layout bem planejado ajuda os clientes a encontrar facilmente os produtos que procuram, melhorando a satisfação e a experiência de compra." },
              { n: "03", t: "Maximiza o uso do espaço", d: "Um layout eficiente utiliza melhor o espaço disponível, permitindo uma exposição adequada de produtos e facilitando a reposição e a manutenção das prateleiras." },
              { n: "04", t: "Melhor fluxo de tráfego", d: "Direcionar o fluxo de clientes através de zonas específicas ajuda a reduzir congestionamentos e criar um ambiente de compra mais agradável." },
              { n: "05", t: "Aprimora experiência de compra", d: "Um ambiente bem organizado e esteticamente agradável melhora a percepção da marca e fideliza clientes." },
              { n: "06", t: "Aumenta a eficiência operacional", d: "Um layout lógico facilita o trabalho dos funcionários com reabastecimento, limpeza e atendimento, tornando as operações mais eficientes." },
            ].map((item) => (
              <div
                key={item.n}
                className="rounded-xl border border-onbrand/10 bg-onbrand/5 p-6"
              >
                <p className="font-display text-brand text-2xl">{item.n}</p>
                <p className="mt-2 font-semibold text-onbrand">{item.t}</p>
                <p className="mt-1 text-sm text-onbrand/60">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA — prints reais da área de membros, logo após "por
          que escolher", pra reduzir a ansiedade de "como eu recebo isso"
          antes mesmo de chegar na oferta. Telas com fundo escuro, então
          usamos object-contain num card também escuro pra não sobrar
          borda visível. */}
      <section className="bg-card">
        <div className="max-w-6xl mx-auto px-5 py-14">
          <div className="max-w-2xl mx-auto text-center">
            <SectionLabel>Como funciona</SectionLabel>
            <SectionTitle className="mx-auto">
              Do pagamento ao layout aplicado, em 3 passos.
            </SectionTitle>
            <p className="mt-4 text-ink/70 leading-relaxed">
              Organizamos o conteúdo pra você aplicar direto na prática,
              conforme a sua necessidade. É só receber e colocar em prática.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                n: "Passo 1",
                t: "Receba o acesso na hora",
                d: "Assim que o pagamento é aprovado, você recebe um convite por e-mail pra acessar o produto, sem espera.",
                img: membrosPasso1Convite,
                pos: "object-top",
              },
              {
                n: "Passo 2",
                t: "Entre na sua área de membros",
                d: "Sua central completa com todos os guias, organizados por tema. Acesse pelo celular ou computador, quando quiser.",
                img: membrosPasso2Hub,
                pos: "object-top",
              },
              {
                n: "Passo 3",
                t: "Aplique com a Bia tirando suas dúvidas",
                d: "Cada aula vem com a Bia, uma IA especialista em layoutização: pergunte, gere resumos e mapas mentais na hora.",
                img: membrosPasso3Aula,
                pos: "object-top",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="rounded-2xl border border-line overflow-hidden bg-ink shadow-lg"
              >
                <div className="h-[420px] bg-ink overflow-hidden">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={step.img}
                    alt={step.t}
                    className={`w-full h-full object-cover ${step.pos}`}
                  />
                </div>
                <div className="p-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-brand font-semibold">
                    {step.n}
                  </span>
                  <p className="mt-2 font-display text-xl text-onbrand uppercase">
                    {step.t}
                  </p>
                  <p className="mt-2 text-sm text-onbrand/60 leading-relaxed">
                    {step.d}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <CtaButton href="#oferta">Quero acessar meus layouts</CtaButton>
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="bg-paper">
        <div className="max-w-6xl mx-auto px-5 py-14">
          <div className="max-w-2xl mx-auto text-center">
            <SectionLabel>Bônus inclusos</SectionLabel>
            <SectionTitle className="mx-auto">Vem com 3 bônus prontos pra usar.</SectionTitle>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {[
              { n: "Bônus 01", t: "Checklist de Aplicação Rápida", d: "1 página pra imprimir e usar direto no mercado." },
              { n: "Bônus 02", t: "Guia de bolso: Erros Mais Comuns", d: "Os erros mais comuns na layoutização de supermercado (e como evitar)." },
              { n: "Bônus 03", t: "Atualizações futuras", d: "Acesso a todas as atualizações do guia, sem pagar de novo." },
            ].map((b) => (
              <div key={b.n} className="bg-card rounded-xl border border-line p-6">
                <span className="inline-block px-2.5 py-1 rounded-md bg-cta text-onbrand text-xs font-bold uppercase tracking-wide">
                  {b.n}
                </span>
                <p className="mt-4 font-bold text-ink text-lg">{b.t}</p>
                <p className="mt-1.5 text-sm text-ink/65">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA — 2 planos (Básico / Avançado) lado a lado, no molde de
          pricing card de SaaS, mas pagamento único (sem toggle mensal/anual,
          sem "assinar" — aqui é comprar e ter acesso vitalício). Substitui o
          antigo bloco único de preço + o card avulso "Acesso Completo" da
          Biblioteca, unificando numa única decisão de 2 opções. */}
      <section id="oferta" className="bg-navy scroll-mt-4">
        <div className="max-w-5xl mx-auto px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-onbrand/10 text-onbrand text-xs font-bold uppercase tracking-wider">
            <PulseDot /> Oferta por tempo limitado
          </div>
          <p className="mt-6 text-onbrand/70">A oferta acaba em</p>
          <div className="mt-3 flex items-center justify-center gap-3">
            <div className="bg-ink/80 rounded-lg px-4 py-3 min-w-[72px] tabular-nums">
              <p className="font-display text-3xl text-onbrand">{mm}</p>
              <p className="text-[10px] uppercase tracking-widest text-onbrand/60">min</p>
            </div>
            <span className="font-display text-2xl text-onbrand">:</span>
            <div className="bg-ink/80 rounded-lg px-4 py-3 min-w-[72px] tabular-nums">
              <p className="font-display text-3xl text-onbrand">{ss}</p>
              <p className="text-[10px] uppercase tracking-widest text-onbrand/60">seg</p>
            </div>
          </div>

          <SectionTitle dark className="mt-8 mx-auto">
            Escolha o plano ideal pro seu mercado.
          </SectionTitle>
          <p className="mt-3 text-onbrand/70 max-w-xl mx-auto">
            Pagamento único, sem mensalidade — o acesso é vitalício nos dois planos.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6 items-stretch text-left">
            {/* PLANO BÁSICO */}
            <div className="rounded-2xl border border-onbrand/15 bg-onbrand/[0.04] p-6 md:p-8 flex flex-col">
              <div className="size-10 rounded-lg bg-onbrand/10 flex items-center justify-center text-onbrand">
                <BoltIcon />
              </div>
              <p className="mt-4 font-display text-xl text-onbrand uppercase">Plano Básico</p>
              <p className="mt-1 text-sm text-onbrand/60">+50 Layouts de Gôndolas Magnéticas</p>
              <div className="mt-5 flex items-end gap-1">
                <span className="font-display text-4xl text-onbrand">R$ 47,90</span>
              </div>
              <p className="mt-1 text-xs text-onbrand/50">Pagamento único · Acesso vitalício</p>

              <ul className="mt-6 space-y-3 flex-1">
                {[
                  { t: "+50 layouts prontos de gôndola", on: true },
                  { t: "Diagrama + passo a passo por setor", on: true },
                  { t: "Acesso vitalício, sem mensalidade", on: true },
                  { t: "Garantia de 30 dias", on: true },
                  { t: "Processos de Layout completo", on: false },
                  { t: "Reposição de Supermercado (FIFO, frequência)", on: false },
                  { t: "+300 Tipos de Cross-merchandising", on: false },
                  { t: "Guia de Precificação na Prática", on: false },
                ].map((item) => (
                  <li
                    key={item.t}
                    className={`flex items-start gap-2.5 text-sm ${
                      item.on ? "text-onbrand/85" : "text-onbrand/35 line-through"
                    }`}
                  >
                    <span className="mt-0.5 shrink-0">
                      {item.on ? <CheckIcon /> : <XIcon />}
                    </span>
                    {item.t}
                  </li>
                ))}
              </ul>

              <a
                href="https://pay.hub.la/0hxHS8uGbsIASlRloWH0"
                className="mt-7 inline-flex items-center justify-center gap-2 bg-onbrand/10 border border-onbrand/25 text-onbrand font-space font-bold uppercase tracking-wide text-sm px-6 py-3.5 rounded-lg hover:bg-onbrand/15 transition"
              >
                Quero o plano básico
              </a>
            </div>

            {/* PLANO AVANÇADO — destacado */}
            <div className="relative rounded-2xl border-2 border-brand bg-onbrand/[0.06] p-6 md:p-8 flex flex-col shadow-[0_18px_48px_rgba(20,147,74,0.25)] md:-translate-y-2">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand text-onbrand text-[11px] font-bold uppercase tracking-wider">
                Recomendado
              </span>
              <div className="size-10 rounded-lg bg-brand/20 flex items-center justify-center text-brand">
                <CrownIcon />
              </div>
              <p className="mt-4 font-display text-xl text-onbrand uppercase">Plano Avançado</p>
              <p className="mt-1 text-sm text-onbrand/60">Acesso Completo — todos os guias</p>
              <div className="mt-5 flex items-end gap-2">
                <span className="font-display text-4xl text-onbrand">R$ 167,90</span>
              </div>
              <p className="mt-1 text-xs text-onbrand/50">
                De <s>R$ 265,90</s> · Pagamento único · Acesso vitalício
              </p>

              <ul className="mt-6 space-y-3 flex-1">
                {[
                  "+50 layouts prontos de gôndola",
                  "Diagrama + passo a passo por setor",
                  "Acesso vitalício, sem mensalidade",
                  "Garantia de 30 dias",
                  "Processos de Layout completo",
                  "Reposição de Supermercado (FIFO, frequência)",
                  "+300 Tipos de Cross-merchandising",
                  "Guia de Precificação na Prática",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-onbrand/90">
                    <span className="mt-0.5 shrink-0">
                      <CheckIcon strong />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>

              <a
                href="https://pay.hub.la/XwLWcsSURH3p0nZiEvqj"
                className="mt-7 inline-flex items-center justify-center gap-2 bg-brand text-onbrand font-space font-bold uppercase tracking-wide text-sm px-6 py-3.5 rounded-lg shadow-lg shadow-brand/30 hover:brightness-105 transition cta-pulse-green"
              >
                Quero o plano avançado
              </a>
            </div>
          </div>

          <p className="mt-8 text-xs text-onbrand/60">
            Pix ou cartão em até 12x · Compra 100% segura
          </p>
        </div>
      </section>

      {/* GUIAS AVULSOS — pra quem quer só um item específico do Avançado,
          fora dos 2 planos principais. Cores repensadas: verde pros itens
          avulsos (confiança/dinheiro), laranja fica só pro botão de ação
          principal — evita tudo competir pelo mesmo tom. */}
      {/* TODO (próximo passo de tracking): trocar os hrefs abaixo pelos links
          com withTracking() quando o rastreamento client-side for adicionado
          a esse projeto — por enquanto são os links diretos de checkout. */}
      <section
        className="relative overflow-hidden bg-navy"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(232,191,79,0.16), transparent 42%)",
        }}
      >
        <div className="relative max-w-6xl mx-auto px-5 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-mono font-semibold text-sm uppercase tracking-widest text-warn">
              Biblioteca Gôndola Magnética
            </p>
            <SectionTitle dark className="mx-auto">
              Ou monte seu combo, item por item.
            </SectionTitle>
            <p className="mt-4 text-onbrand/70">
              Prefere só um guia específico em vez do Acesso Completo? Escolha
              avulso abaixo. Pagamento único, sem mensalidade, acesso vitalício.
            </p>
          </div>

          {/* Guias individuais — verde de confiança, cada card com o mockup 3D */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Processos de Layout",
                desc: "Quem faz, quando faz e como aplicar sozinho ou em equipe.",
                price: "27,90",
                href: "https://pay.hub.la/M8TywBbM8IhxR5QbjBDA",
                img: bookProcessos,
              },
              {
                title: "Reposição de Supermercado",
                desc: "Frequência certa, controle de validade e ponto de pedido.",
                price: "67,90",
                href: "https://pay.hub.la/nZmlcOcE4WnszLP4S9vP",
                img: bookReposicao,
              },
              {
                title: "+300 Tipos de Cross",
                desc: "Combinações reais de cross-merchandising prontas pra aplicar.",
                price: "37,90",
                href: "https://pay.hub.la/lQiwPm0JZJvNRjqoXls8",
                img: bookCross,
              },
              {
                title: "Guia de Precificação na Prática",
                desc: "Planilha + passo a passo pra precificar sem perder margem.",
                price: "87,90",
                href: "https://pay.hub.la/KYupphModAA8WjxK1GJo",
                img: bookPrecificacao,
              },
            ].map((p) => (
              <div
                key={p.title}
                className="bg-onbrand/[0.07] border border-onbrand/15 rounded-xl p-5 flex flex-col text-center items-center"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={p.img}
                  alt={p.title}
                  className="w-44 aspect-[3/2] object-contain drop-shadow-[0_14px_18px_rgba(0,0,0,0.4)]"
                />
                <p className="mt-3 font-bold text-onbrand">{p.title}</p>
                <p className="mt-1.5 text-sm text-onbrand/60 flex-1">{p.desc}</p>
                <div className="mt-4 flex flex-col items-center gap-1">
                  <span className="text-xs text-onbrand/60">por apenas</span>
                  <span className="font-display text-2xl text-brand">R$ {p.price}</span>
                  <span className="text-[10px] uppercase tracking-wide text-onbrand/50 font-mono">
                    Pagamento único · Acesso vitalício
                  </span>
                </div>
                <a
                  href={p.href}
                  className="mt-3 w-full inline-flex items-center justify-center gap-1.5 bg-brand/15 border border-brand/40 text-brand font-space font-bold uppercase tracking-wide text-sm px-4 py-2.5 rounded-lg hover:bg-brand/25 transition cta-pulse-green"
                >
                  Quero este e-book
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXEMPLOS */}
      <section className="bg-card">
        <div className="max-w-6xl mx-auto px-5 py-14">
          <div className="max-w-2xl mx-auto text-center">
            <SectionLabel>Exemplos do material</SectionLabel>
            <SectionTitle className="mx-auto">Layout aplicado no supermercado.</SectionTitle>
          </div>
          <div className="mt-8 flex gap-4 overflow-x-auto pb-4 snap-x">
            {[
              { img: exHortifruti, label: "Hortifruti" },
              { img: exVinhos, label: "Vinhos e cervejas" },
              { img: exPadaria, label: "Padaria" },
              { img: exCross, label: "Cross-merchandising" },
              { img: exCaixa, label: "Frente de caixa" },
            ].map((ex) => (
              <figure key={ex.label} className="snap-start shrink-0 w-64">
                <img
                  loading="lazy"
                  decoding="async"
                  src={ex.img}
                  alt={`Exemplo de layout de gôndola aplicado: ${ex.label}`}
                  width={896}
                  height={1152}
                  className="w-full aspect-[3/4] object-cover rounded-xl outline-1 -outline-offset-1 outline-ink/5"
                />
                <figcaption className="mt-3 font-semibold text-ink">
                  {ex.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper">
        <div className="max-w-3xl mx-auto px-5 py-14">
          <div className="text-center">
            <SectionLabel>Perguntas frequentes</SectionLabel>
            <SectionTitle className="mb-8 mx-auto">Ficou com dúvida?</SectionTitle>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {[
              { q: "O que é o guia de layoutização?", a: "Um guia digital em PDF com mais de 50 layouts prontos de gôndola, cada um com diagrama visual, o problema que resolve, o passo a passo de aplicação e uma dica extra." },
              { q: "Para quem é indicado?", a: "Para donos e gestores de mercados e supermercados de qualquer porte (pequeno, médio ou grande) que querem organizar as gôndolas e vender mais por impulso, sozinhos ou com equipe." },
              { q: "Que tipo de conteúdo vem dentro?", a: "Mais de 50 layouts catalogados por área da loja, do hortifruti à frente de caixa, cada um com diagrama, problema resolvido, passo a passo e dica extra." },
              { q: "Como isso ajuda a vender mais?", a: "Layout errado esconde produto e derruba a venda por impulso. Com os layouts prontos, você expõe o produto certo na altura certa e corrige isso direto na gôndola." },
              { q: "Funciona pra mercado pequeno e supermercado grande?", a: "Sim. Os layouts foram pensados pra adaptar do mercadinho de bairro ao supermercado de médio porte." },
            ].map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-ink">
                  {item.q}
                  <span className="text-brand text-xl group-open:rotate-45 transition">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm text-ink/65 max-w-[60ch]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIA — fecha a página, selo em SVG em vez de foto genérica */}
      <section className="bg-ink">
        <div className="max-w-2xl mx-auto px-5 py-16 text-center flex flex-col items-center">
          <img
            loading="lazy"
            decoding="async"
            src={seloGarantia30Dias}
            alt="Selo de garantia incondicional de 30 dias"
            className="w-40 h-40 md:w-48 md:h-48 object-contain"
          />
          <h2 className="mt-6 font-display uppercase text-3xl text-onbrand">
            Garantia incondicional
          </h2>
          <p className="mt-3 text-onbrand/70 leading-relaxed">
            Nós acreditamos tanto na qualidade do nosso material que oferecemos
            uma garantia incondicional de <strong className="text-onbrand">30 dias</strong>. Se por qualquer
            motivo você não estiver totalmente satisfeito, devolvemos 100% do
            seu investimento.
          </p>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-ink text-onbrand/60 border-t border-onbrand/10">
        <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <img
            loading="lazy"
            decoding="async"
            src={logoGondolasMagneticas}
            alt="Gôndolas Magnéticas"
            className="h-14 sm:h-16 w-auto"
          />
          <p>© 2026 Gôndola Magnética. Todos os direitos reservados.</p>
        </div>
      </footer>

      <ExitIntentPopup />
    </div>
  );
}
