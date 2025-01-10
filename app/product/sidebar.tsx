import Link from "next/link";
const Sidebar = () => {
  return (
    <div className="w-[20%] hidden md:block">
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="/product/t_shirt">T-Shirt</Link>
        </li>
        <li>
          <Link href="/product/jersey">Jersey</Link>
        </li>
        <li>
          <Link href="/product/vintage">Vintage</Link>
        </li>
        <li>
          <Link href="/product/custom">Custom</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
