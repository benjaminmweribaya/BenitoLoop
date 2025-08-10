import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/marketplace", label: "Marketplace" },
    { to: "/impact", label: "Impact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span
            className="inline-block h-3 w-3 rounded-full bg-primary shadow-glow"
            aria-hidden
          />
          <span>BenitoLoop</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground transition-colors"
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button asChild variant="hero" size="sm">
            <Link to="/donate">Donate Now</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-muted"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background px-4 pb-4">
          <div className="flex flex-col gap-4 mt-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground transition-colors"
                }
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild variant="hero" size="sm" className="w-full">
              <Link to="/donate" onClick={() => setIsOpen(false)}>
                Donate Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

