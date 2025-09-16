import { useCallback, useEffect, useRef, useState } from "react";

const LINKS = [
  { name: "Buy", href: "#" },
  { name: "Sell", href: "#" },
  { name: "Finance", href: "#" },
  { name: "Bank Valuation", href: "#" },
  { name: "Our Team", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Contact Us", href: "#" },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        btnRef.current &&
        !btnRef.current.contains(target)
      ) {
        close();
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [open, close]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [close]);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) close();
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [close]);

  return (
    <nav className="p-4 flex items-center justify-between bg-white sticky top-0 z-50">
      <div className="text-2xl font-bold text-orange-600">{`MyBrand`}</div>
      <ul className="hidden md:flex gap-6 items-center text-gray-700 font-medium">
        {LINKS.map((l) => (
          <li key={l.name}>
            <a
              href={l.href}
              className="hover:text-orange-600 transition-colors duration-200"
            >
              {l.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex items-center gap-4">
        <a
          href="#"
          className="px-4 py-2 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition"
        >
          {`Sign in`}
        </a>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          ref={btnRef}
          onClick={toggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-md bg-white border"
        >
          <span
            className={`block h-0.5 w-6 transform bg-gray-800 transition duration-200 ${
              open ? "rotate-45 translate-y-0.5" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-all duration-200 absolute ${
              open ? "opacity-0" : "opacity-100"
            }`}
            aria-hidden
          />
          <span
            className={`block h-0.5 w-6 transform bg-gray-800 transition duration-200 ${
              open ? "-rotate-45 -translate-y-0.5" : "translate-y-1.5"
            }`}
          />
        </button>

        {/* Mobile menu (panel) */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`absolute right-4 top-16 z-40 w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform transition-all duration-200 md:hidden
            ${
              open
                ? "scale-100 opacity-100 translate-y-0"
                : "scale-95 opacity-0 -translate-y-2 pointer-events-none"
            }
          `}
        >
          <div className="px-4 py-3">
            <div className="flex items-center justify-between mb-3">
              <div className="text-lg font-semibold text-orange-600">
                {`MyBrand`}
              </div>
              <button
                onClick={close}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav>
              <ul className="flex flex-col gap-2">
                {LINKS.map((l) => (
                  <li key={l.name}>
                    <a
                      href={l.href}
                      onClick={close} // close on selection
                      className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-600 transition"
                    >
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-3 border-t pt-3">
                <a
                  href="#"
                  className="block w-full text-center rounded-md px-3 py-2 bg-orange-600 text-white font-medium hover:bg-orange-700 transition"
                  onClick={close}
                >
                  {`Sign in`}
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
