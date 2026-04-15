import { Nav } from "@/components/sections/nav"
import { Footer } from "@/components/sections/footer"

export default function MentionsLegales() {
  return (
    <>
      <Nav />
      <main className="bg-surface pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-6">
          <h1 className="font-serif text-4xl font-semibold text-ink mb-12">Mentions Légales</h1>
          
          <div className="space-y-12 prose prose-slate max-w-none">
            <section>
              <h2 className="font-serif text-2xl font-semibold text-ink mb-4">1. Présentation du site</h2>
              <p className="text-muted-foreground leading-relaxed">
                En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique, il est précisé aux utilisateurs du site eclatautodijon.fr l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
              </p>
              <ul className="list-disc pl-5 mt-4 text-muted-foreground space-y-2">
                <li><strong>Propriétaire :</strong> Éclat Auto Dijon – 21000 Dijon</li>
                <li><strong>Responsable publication :</strong> Éclat Auto Dijon</li>
                <li><strong>Webmaster :</strong> v0.app / editingmostafa1-design</li>
                <li><strong>Hébergeur :</strong> Vercel Inc. – 340 S Lemon Ave #1110 Walnut, CA 91789</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-ink mb-4">2. Conditions générales d&apos;utilisation</h2>
              <p className="text-muted-foreground leading-relaxed">
                L&apos;utilisation du site eclatautodijon.fr implique l&apos;acceptation pleine et entière des conditions générales d&apos;utilisation ci-après décrites. Ces conditions d&apos;utilisation sont susceptibles d&apos;être modifiées ou complétées à tout moment.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-ink mb-4">3. Description des services fournis</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site eclatautodijon.fr a pour objet de fournir une information concernant l&apos;ensemble des activités de la société. Éclat Auto Dijon s&apos;efforce de fournir sur le site des informations aussi précises que possible.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-ink mb-4">4. Propriété intellectuelle</h2>
              <p className="text-muted-foreground leading-relaxed">
                Éclat Auto Dijon est propriétaire des droits de propriété intellectuelle ou détient les droits d&apos;usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-ink mb-4">5. Gestion des données personnelles</h2>
              <p className="text-muted-foreground leading-relaxed">
                En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l&apos;article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
