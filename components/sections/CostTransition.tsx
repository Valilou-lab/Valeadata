import Image from "next/image";

export function CostTransition() {
  return (
    <section
      className="bg-white px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24"
    >
      <div className="mx-auto flex max-w-6xl justify-center">
        <Image
          src="/images/transition-cout.png"
          alt="Personnage inquiet qui demande : Mais combien ça va coûter tout ça !"
          width={819}
          height={816}
          sizes="(min-width: 640px) 36rem, 100vw"
          className="h-auto w-full max-w-[22rem] object-contain sm:max-w-[32rem] lg:max-w-[36rem]"
        />
      </div>
    </section>
  );
}
