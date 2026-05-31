import { profile } from '../data/profile'
import profilePic from '../assets/profile-pic.jpg'

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-slate-800/60 bg-slate-950 pt-28 pb-24 px-6"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div className="order-2 md:order-1">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#059669]">
            About Me
          </p>
          <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            {profile.title}
          </h1>
          <p className="border-l-2 border-[#059669]/50 pl-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            {profile.bio}
          </p>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="relative h-64 w-64 sm:h-72 sm:w-72">
            <div
              className="absolute inset-0 rounded-2xl bg-[#059669]/15 blur-md"
              aria-hidden="true"
            />
            <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-[#059669]/50 bg-slate-900 p-1 shadow-2xl shadow-black/40 ring-1 ring-[#059669]/25">
              <img
                src={profilePic}
                alt={`Portrait of ${profile.name}`}
                className="h-full w-full rounded-xl object-cover object-center"
                width={288}
                height={288}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
