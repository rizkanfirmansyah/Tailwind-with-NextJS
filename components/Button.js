export default function Button({href,  className, variant, children, pill }) {
  const addClassName = className ? `${className}` : "";

  const variants = {
    "outline-yellow": `border border-yellow-500 text-yellow-500 hover:text-black hover:bg-yellow-500`,
    "yellow" : `bg-yellow-500 text-black hover:bg-yellow-600 `,
    "black" : `bg-black text-white hover:bg-opacity-90`
  };

  const pickedVariant = variants[variant];

  return (
    <a
      href={href} className={`${addClassName} ${pickedVariant} ${pill ? "rounded-full" : ""} transition py-3 px-10 font-semibold text-lg inline-block`}
    >
      {children}
    </a>
  );
}
