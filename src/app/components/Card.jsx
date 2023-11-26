import Image from 'next/image';

export default function Card({
  title = 'Placeholder Title',
  subtitle = 'Placeholder subtitle',
  imageUrl = '',
  description = 'Placeholder description',
}) {
  const hoverEffect =
    'px-2 py-2 rounded-lg mx-2 shadow-md hover:shadow-lg m-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 max-w-sm max-h-sm';
  return (
    <>
      <a className={hoverEffect}>
        <div className="bg-white shadow-md rounded-lg px-10 py-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <h2 className="text-md font-semibold text-gray-800">{subtitle}</h2>
          <Image src={imageUrl} alt={imageUrl} height={150} width={150} className="w-full" />
          <p className="text-m font-bold text-gray-800">{description}</p>
        </div>
      </a>
    </>
  );
}
