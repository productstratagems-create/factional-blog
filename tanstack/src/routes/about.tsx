import { createFileRoute } from '@tanstack/react-router';
import { Divider } from '../components/Divider';

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'Om oss — Norsk Luftvern' },
      {
        name: 'description',
        content:
          'Norsk Luftvern er et uavhengig nettsted viet til nyheter og analyser om norsk luftvern og missilforsvar.',
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="max-w-[45rem] mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-display text-4xl font-extrabold uppercase tracking-[0.06em] text-heading mb-4">
        Om Norsk Luftvern
      </h1>
      <Divider spacing="sm" className="mb-8" />

      <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:text-heading prose-a:text-navy prose-a:underline-offset-4 prose-p:font-body prose-p:leading-[1.8]">
        <p>
          Norsk Luftvern er et uavhengig nettsted viet til nyheter, analyser og
          bakgrunnsartikler om norsk luftvern, missilforsvar og relatert
          sikkerhetspolitikk.
        </p>
        <p>
          Vi dekker anskaffelsesprosesser, teknologiutvikling, NATO-samarbeid og
          historiske perspektiver på Norges luftvernskapasitet — fra NASAMS og
          Patriot til fremtidige systemer og doktriner.
        </p>
        <h2>Redaksjon</h2>
        <p>
          Redaksjonen består av faglig engasjerte bidragsytere med bakgrunn fra
          forsvaret, akademia og sikkerhetspolitisk journalistikk.
        </p>
        <h2>Kontakt</h2>
        <p>
          Spørsmål, tips eller samarbeid? Ta kontakt på{' '}
          <a href="mailto:redaksjon@norskluftvern.com">
            redaksjon@norskluftvern.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
