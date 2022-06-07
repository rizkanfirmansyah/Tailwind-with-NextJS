export default function NavItem({ href, scheme, children }) {
    const schemes = {
        light : "text-opacity-60 text-white hover:text-opacity-100",
        black : "text-black"
    }

    const pickedScheme = schemes[scheme]
  return (
    <li>
      <a href={href} className={`${pickedScheme} text-lgtransition font-semibold`}>
        {children}
      </a>
    </li>
  );
}
