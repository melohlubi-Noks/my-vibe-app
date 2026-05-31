import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-900 py-8 px-6">
      <p className="text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} {profile.name} · Technology,
        Leadership &amp; Management
      </p>
    </footer>
  )
}
