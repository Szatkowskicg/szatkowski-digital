"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

const LANGUAGES = [
  { code: "pl", label: "Polski", icon: "/pl_icon.svg" },
  { code: "en", label: "English", icon: "/en_icon.svg" },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const current = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const changeLanguage = (code) => {
    if (code === locale) {
      setOpen(false);
      return;
    }

    router.replace(pathname, { locale: code });
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative text-sm">
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="
          flex items-center justify-between
          rounded-full
          border border-white/10
          hover:border-white/60
          transition
        "
      >
        <div className="flex items-center gap-2">
          <Image
            src={current.icon}
            alt={current.label}
            className="object-contain"
            height={24}
            width={24}
          />
        </div>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute left-10 bottom-0 w-35
            rounded-xl
            border border-white/10
            bg-n-8 backdrop-blur
            shadow-xl
            overflow-hidden
            z-50
          "
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="
                flex items-center gap-3
                w-full px-4 py-3
                hover:bg-white/10
                transition
                text-left
              "
            >
              <Image
                src={lang.icon}
                alt={lang.label}
                className="object-contain"
                height={20}
                width={20}
              />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
