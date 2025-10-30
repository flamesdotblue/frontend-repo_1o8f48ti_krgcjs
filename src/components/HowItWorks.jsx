import React from 'react';
import { Upload, Binary, BrainCircuit, Network, Sparkles } from 'lucide-react';

const steps = [
  { id: 1, icon: Upload, title: 'Entrée', desc: 'Importez un fichier ou collez un lien.' },
  { id: 2, icon: Binary, title: 'Extraction', desc: 'Normalisation et préparation des données.' },
  { id: 3, icon: BrainCircuit, title: 'Analyse', desc: 'Segmentation, émotions, concepts.' },
  { id: 4, icon: Sparkles, title: 'Génération', desc: 'Idées, scripts, contenus dérivés.' },
  { id: 5, icon: Network, title: 'Visualisation', desc: 'Carte mentale interactive et liens.' },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-xl font-semibold text-neutral-900 md:text-2xl">Un flux simple, une intelligence complète</h2>
        <p className="mx-auto mt-1 max-w-2xl text-center text-sm text-neutral-500">Entrée → Extraction → Analyse → Génération → Visualisation</p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <div key={s.id} className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-md bg-neutral-900 p-2 text-white"><s.icon className="h-5 w-5"/></div>
                <div className="font-medium text-neutral-900">{s.title}</div>
              </div>
              <p className="text-sm text-neutral-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
