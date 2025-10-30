import React from 'react';
import { Image, Video, FileText, Mic } from 'lucide-react';

const demoProjects = [
  {
    id: 'p1',
    title: 'Démo YouTube — IA multimodale',
    type: 'video',
    thumb: 'video',
    updatedAt: 'Il y a 2h',
  },
  {
    id: 'p2',
    title: 'Rapport de recherche — LLMs 2025',
    type: 'pdf',
    thumb: 'pdf',
    updatedAt: 'Hier',
  },
  {
    id: 'p3',
    title: 'Podcast — Créativité et stratégie',
    type: 'audio',
    thumb: 'audio',
    updatedAt: 'Il y a 3j',
  },
  {
    id: 'p4',
    title: 'Moodboard — Campagne Q4',
    type: 'image',
    thumb: 'image',
    updatedAt: 'Il y a 5j',
  },
];

function Thumb({ kind }) {
  const base = 'flex h-32 w-full items-center justify-center rounded-xl';
  if (kind === 'video') return <div className={`${base} bg-gradient-to-br from-purple-200 to-indigo-200`}><Video className="h-8 w-8 text-indigo-700"/></div>;
  if (kind === 'pdf') return <div className={`${base} bg-gradient-to-br from-amber-200 to-rose-200`}><FileText className="h-8 w-8 text-rose-700"/></div>;
  if (kind === 'audio') return <div className={`${base} bg-gradient-to-br from-emerald-200 to-teal-200`}><Mic className="h-8 w-8 text-emerald-700"/></div>;
  return <div className={`${base} bg-gradient-to-br from-sky-200 to-cyan-200`}><Image className="h-8 w-8 text-sky-700"/></div>;
}

export default function RecentProjects() {
  return (
    <section id="projects" className="bg-[#F6F8FB] py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 md:text-2xl">Projets récents</h2>
            <p className="mt-1 text-sm text-neutral-500">Reprenez là où vous étiez. Sauvegarde continue et reprise rapide.</p>
          </div>
          <button className="hidden rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 shadow-sm hover:bg-neutral-50 md:block">
            Voir tout
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {demoProjects.map((p) => (
            <div key={p.id} className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md">
              <Thumb kind={p.thumb} />
              <div className="p-4">
                <div className="line-clamp-1 font-medium text-neutral-900">{p.title}</div>
                <div className="mt-1 text-xs text-neutral-500">{p.updatedAt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
