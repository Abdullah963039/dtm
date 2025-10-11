'use client'

import { useEffect, useRef } from 'react'

const clients = [
  { name: 'Chainlink', logo: 'chainlink.jpg' },
  { name: 'Polkadot', logo: 'polkadot.jpg' },
  { name: 'NEAR PROTOCOL', logo: 'near-protocol.jpg' },
  { name: 'Pepe', logo: 'pepe.jpg' },
  { name: 'Pi network', logo: 'pi-network.jpg' },
  { name: 'Globiance exchange', logo: 'globiance-exchange.jpg' },
  { name: 'Vcdao', logo: 'vcdao.jpg' },
  { name: 'Bitfinex', logo: 'bitfinex.jpg' },
  { name: 'Shiba inu', logo: 'shiba-inu.jpg' },
  { name: 'Zcash', logo: 'zcash.jpg' },
  { name: 'Nexo', logo: 'nexo.jpg' }
]

export function ClientsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="clients"
      className="overflow-hidden py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="scroll-reveal mb-16 space-y-4">
          <div className="border-brand/30 bg-brand/5 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <span className="text-brand text-sm font-medium">CLIENTS</span>
          </div>

          <h2 className="text-4xl leading-tight font-bold text-white lg:text-6xl">
            Our respected Clients
            <br />
            <span className="text-brand">/ Partnerships</span>
          </h2>
        </div>

        <div className="relative mx-8 overflow-hidden py-4">
          <div className="animate-scroll-x-seamless flex gap-8 px-4">
            {clients.map((client, index) => (
              <div
                key={`client-${index}`}
                className="group flex flex-col items-center justify-center gap-y-2"
              >
                <div className="border-brand/20 hover:border-brand/50 flex aspect-video h-32 w-48 flex-shrink-0 cursor-pointer items-center justify-center rounded-xl border bg-gradient-to-br from-[#0a0a0a] to-black transition-all duration-300 hover:scale-105">
                  <div className="bg-brand/10 group-hover:bg-brand/20 flex h-20 w-32 items-center justify-center rounded-lg transition-all">
                    <img
                      src={`/clients/${client.logo}`}
                      alt={`${client.name}-logo`}
                      className="aspect-video h-full w-full object-cover select-none"
                    />
                  </div>
                </div>

                <p className="text-primary group-hover:text-brand text-sm font-medium">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
