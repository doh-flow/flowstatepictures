/* ─── PAGE TITLE ──────────────────────────────────────────────────── */
#reel-title {
  font-size: clamp(63px, 9vw, 132px);
  padding: 6rem var(--side) 2rem;
  border-bottom: 1px solid var(--ink-mid);
}

/* ─── SECTION LABELS ──────────────────────────────────────────────── */

.gallery {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
}

.section-label {
    position: relative;
}

.section-desc {
    position: relative;
    padding: 1rem 0rem;
}

/* ─── GALLERY SECTION ─────────────────────────────────────────────── */

/* Flex row — same height, aspect ratio preserved, wraps naturally */

/*
#stills (entire gallery)
    .still-item #stillbox_
        .still-img
        .still-desc
*/
#stills {
  position: relative;
  padding: 1rem 0rem;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: flex-start;
  background: var(--ref2);
}

/* ─── STILL ITEM ──────────────────────────────────────────────────── */
.still-item {
  position: relative;
  display: flex;
  align-items: flex-end;
  height: clamp(100px,35vw,260px);          /* all rows share this height */
  cursor: crosshair;
  /* width is driven by the image's natural aspect ratio */
}

.still-img {
  z-index: 1;
  position: relative;
  display: block;
  height: 100%;
  width: auto;            /* preserves aspect ratio */
  /* object-fit: cover; */
  transition: filter 0.35s ease;
}

/* Description overlay — hidden by default */
.still-desc {
  z-index: 2;
  position: absolute;
  width: 100%;
  text-align: right;
  word-wrap: break-word;
  padding: 1rem 1rem 1.1rem;
  font-family: "Gruppo", sans-serif;
  font-size: 0.95rem;
  color: var(--paper);
  background: var(--ref1);
  line-height: 1.4;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  /* pointer-events: none; */
}

.still-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--accent);
  transition: width 0.35s ease;
}

/* Dim image on hover */
.still-item:hover .still-img {
  filter: brightness(0.35);
}

.still-desc:hover {
    opacity: 1;
}

.still-item:hover .still-desc {
  opacity: 1;
  transform: translateY(0);
}

/* Accent line that appears on hover — bottom-left edge detail */


.still-item:hover::after {
  width: 100%;
}


/* ─── SCREENING SECTION ───────────────────────────────────────────── */
.screening

/* 2x2 grid */
#videos {
  position: relative;
  padding: 1rem 0rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
}

.video-item {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  background-color: var(--ink);
  padding: 0;
  overflow: hidden;
}

.video-item iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: none;
  display: block;
}

.video-desc {
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  color: var(--paper);
  opacity: 0.6;
  padding: 0.5rem 0.8rem 0.7rem;
  text-transform: uppercase;
}

/* ─── CTA STRIP ───────────────────────────────────────────────────── */


/* About CTA — the editorial pull-quote style link */
.reel-cta {
  z-index: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 0;
  padding: 1rem 0rem 2rem;
  /* padding added from the anchor box itself */
}

.reel-cta a {
    position: relative;
    display: flex;
    background: var(--ref1);
}

/* Underline bar on the CTA */
.cta-talk p2::before {
  z-index: 2;
  content: '';
  position: absolute;
  bottom: clamp(0px,1vw,6px);
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--ink);
  transform: scaleX(1);
  transform-origin: left;
  transition: background-color 0.25s ease;
}

.cta-talk p2{
    position: relative;
    transition: color 0.25s ease;
    z-index: 1;
    margin-bottom: 2rem;
    background: var(--ref2);
}
.cta-talk p2:hover {color: var(--accent);}
.cta-talk p2:hover::before { background-color: var(--accent); }

/* Underline bar on the CTA */
.cta-double p1::before {
  z-index: 2;
  content: '';
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--ink);
  transform: scaleX(1);
  transform-origin: left;
  transition: background-color 0.25s ease;
}

.cta-double p1{
    position: relative;
    transition: color 0.25s ease;
    z-index: 1;
    background: var(--ref2);
}
.cta-double p1:hover {color: var(--accent);}
.cta-double p1:hover::before { background-color: var(--accent); }
