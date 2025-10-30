import React from 'react';
import { FileText, Image, Video, Mic, Sparkles } from 'lucide-react';

const templates = [
  { id: 't1', icon: Video, name: 'Résumé de vidéo', desc: 'Synthèse + chapitres + insights', color: 'from-indigo-500 to-purple-500' },
  { id: 't2', icon: FileText, name: 'Post LinkedIn', desc: '3 angles + hooks + CTA', color: 'from-sky-500 to-cyan-500' },
  { id: 't3', icon: Image, name: 'Déclinaisons visuelles', desc: 'Moodboard + prompts', color: 'from-fuchsia-500 to-rose-500' },
  { id: 't4', icon: Mic, name: 'Script podcast', desc: 'Intro, sections, outro', color: 'from-emerald-500 to-teal-500' },
];

export default function TemplatesPanel() {
  return (
    <section id="templates" className="py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 md:text-2xl">Templates IA</h2>
            <p className="mt-1 text-sm text-neutral-500">Accélérez votre création avec des modèles intelligents.</p>
          </div>
          <button className="hidden items-center gap-2 rounded-lg bg-neutral-900 px-3 py-2 text-sm font-medium text-white shadow-sm hover:brightness-110 md:flex">
            <Sparkles className="h-4 w-4"/> Explorer tout
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {templates.map((t) => (
            <button key={t.id} className="group flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-4 text-left shadow-sm transition hover:shadow-md">
              <div className={`mt-0.5 rounded-md bg-gradient-to-br ${t.color} p-2 text-white shadow-sm`}>
                <t.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium text-neutral-900">{t.name}</div>
                <div className="text-xs text-neutral-500">{t.desc}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
