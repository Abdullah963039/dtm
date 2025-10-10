'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const team = [
  { name: 'Jan hana', image: '/team-1.jpg' },
  { name: 'Kai simon', image: '/team-2.jpg' },
  { name: 'Mark Jones', image: '/team-3.jpg' },
  { name: 'Alex dan', image: '/team-4.jpg' }
]

export function TeamSection() {
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
    <section ref={sectionRef} id="team" className="py-24 lg:py-32">
      <div className="container">
        <div className="scroll-reveal mb-16 space-y-4">
          <div className="border-brand/30 bg-brand/5 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <span className="text-brand text-sm font-medium">OUR EXPERTS</span>
          </div>

          <div className="flex items-end justify-between">
            <h2 className="text-primary text-4xl leading-tight font-bold lg:text-6xl">
              Meet our
              <br />
              <span className="text-brand">Creative team</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <MemberCard key={member.name} index={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MemberCard({
  image,
  name,
  index
}: {
  name: string
  image: string
  index: number
}) {
  return (
    <div
      className="scroll-reveal group cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative mb-4 aspect-square overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="space-y-1">
        <h3 className="text-primary group-hover:text-brand text-xl font-bold transition-colors">
          {name}
        </h3>
      </div>
    </div>
  )
}
