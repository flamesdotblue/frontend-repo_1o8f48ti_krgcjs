import React from 'react';
import Spline from '@splinetool/react-spline';
import { Upload, Sparkles, ArrowRight, Link as LinkIcon } from 'lucide-react';

export default function Hero({ onImportClick }) {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-950 text-white">
      {/* Header */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 via-fuchsia-500 to-amber-300" />
          <span className="text-lg font-semibold tracking-tight">Synapse AI</span>
        </div>
        <div className="hidden items-center gap-6 md:flex">
          <a href="#templates" className="text-sm text-white/80 hover:text-white">Templates IA</a>
          <a href="#projects" className="text-sm text-white/80 hover:text-white">Projets récents</a>
          <a href="#how" className="text-sm text-white/80 hover:text-white">Comment ça marche</a>
        </div>
        <button
          onClick={onImportClick}
          className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow/50 shadow-sky-500/20 hover:shadow-md hover:shadow-sky-400/30"
        >
          <Upload className="h-4 w-4" /> Importer un média
        </button>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-4 md:grid-cols-2 md:pb-24">
        <div className="relative">
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Think visually. <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">Create intelligently.</span>
          </h1>
          <p className="mt-4 max-w-prose text-base text-white/80 md:text-lg">
            Importez du texte, des images, de l’audio ou des vidéos. Synapse AI analyse, segmente et génère instantanément des idées reliées dans une carte mentale interactive.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={onImportClick}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:brightness-110"
            >
              <Sparkles className="h-4 w-4" /> Démarrer l’analyse
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('how');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/5"
            >
              <ArrowRight className="h-4 w-4" /> Découvrir le flux
            </button>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs text-white/60">
            <div className="flex items-center gap-2"><LinkIcon className="h-4 w-4" /> Collez un lien</div>
            <div className="flex items-center gap-2"><Upload className="h-4 w-4" /> Déposez un fichier</div>
            <div className="flex items-center gap-2"><Sparkles className="h-4 w-4" /> Générez des idées</div>
          </div>
        </div>
        <div className="relative h-[420px] w-full rounded-2xl border border-white/10 bg-neutral-900/40">
          {/* 3D Spline Scene */}
          <Spline
            scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Soft gradients for depth (non-blocking) */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl [background:radial-gradient(60%_50%_at_80%_10%,rgba(56,189,248,0.12),transparent),radial-gradient(40%_40%_at_20%_90%,rgba(249,115,22,0.12),transparent)]" />
        </div>
      </div>

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>
    </section>
  );
}
