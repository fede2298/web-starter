type Props = { title: string; description: string }
export default function FeatureCard({title, description}: Props){
  return (
    <div className="p-6 border rounded-lg shadow-sm bg-white">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  )
}
