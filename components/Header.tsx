export default function Header(){
  return (
    <header className="py-4">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <div className="text-xl font-bold">Coordinatore</div>
        <ul className="flex gap-4">
          <li><a href="#features" className="hover:underline">Features</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
