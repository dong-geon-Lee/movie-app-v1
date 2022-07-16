export default function HeaderIcon({ Icon, title }) {
  return (
    <div className="hover:text-white active:text-red-400 mx-4 flex flex-col cursor-pointer">
      <Icon className="h-8 mb-1" />
      <p>{title}</p>
    </div>
  );
}
