export const Card = ({icon, title, content}) => {
  const Icon = icon;
  return (
    <div className="flex flex-col items-center shadow-lg rounded-xl w-full px-4 py-8 bg-white">
      <div className="mb-6">
        <Icon />
      </div>
      <p className="font-anDemi text-center text-xl mb-6">
        {title}
      </p>
      <p className="text-lg text-[#666666] text-center">
        {content}
      </p>
    </div>
  );
}