export default function ProjectItem({ name, description, image, link }) {
  return (
    <article className="text-center">
      {link !== null && (
        <a href={link} target="_blank" rel="noreferrer">
          <img src={image} className="w-full rounded-lg h-[350px] object-cover" />
          <h3 className="text-xl font-semibold mb-1 mt-4">{name}</h3>
          <p className="text-lg text-gray-400 ">{description}</p>
        </a>
      )}
      {link === null && (
        <>
          <img src={image} className="w-full rounded-lg h-[350px] object-cover" />
          <h3 className="text-xl font-semibold mb-1 mt-4">{name}</h3>
          <p className="text-lg text-gray-400 ">{description}</p>
        </>
      )}
    </article>
  );
}
