"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/kurse-preise", label: "Classes & Pricing" },
  { href: "/termine", label: "Schedule" },
  { href: "/ueber-uns", label: "About Us" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-dark-green/90 backdrop-blur-md py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
           <Leaf className="text-white w-6 h-6 group-hover:text-sage transition-colors" />
           <span className="font-sans font-bold text-xl text-white tracking-wide">FlexZen</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button className="bg-white text-dark-green hover:bg-white/90 rounded-full px-6 font-semibold" size="sm" asChild>
            <Link href="/kontakt">Contact</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-green border-t border-white/10 p-6 flex flex-col gap-6 shadow-xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => {
                setIsOpen(false);
              }}
              className="text-lg font-medium text-white/90 hover:text-sage"
            >
              {link.label}
            </Link>
          ))}
          <Button className="bg-white text-dark-green w-full rounded-full" asChild>
            <Link
              href="/kontakt"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Contact
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
