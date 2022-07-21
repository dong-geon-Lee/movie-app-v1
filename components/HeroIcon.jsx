export default function HeroIcon({ Icon, title }) {
  return (
    <div
      className="flex flex-col items-center justify-center 
    hover:text-white cursor-pointer"
    >
      <Icon className="h-8" />
      <p className="mt-1">{title}</p>
    </div>
  );
}
