import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="bg-blue-primary py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-6">
        <h2 className="font-serif text-3xl font-semibold text-primary-foreground lg:text-4xl">
          <span className="text-balance">
            Prêt à redonner vie à votre véhicule ?
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
          Réservez dès maintenant et offrez à votre véhicule le traitement qu&apos;il mérite.
        </p>
        <a href="#reserver" className="mt-8 inline-block">
          <Button
            variant="secondary"
            className="rounded-xl bg-primary-foreground px-8 py-6 text-base font-semibold text-blue-primary hover:bg-primary-foreground/90"
          >
            Réserver maintenant
          </Button>
        </a>
      </div>
    </section>
  )
}
