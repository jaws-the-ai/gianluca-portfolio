"use client";

import { useState, useRef, useEffect } from "react";

const RESUME_PASSWORD = "gianluca2026";

export default function ResumeGate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setValue("");
      setError(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (value === RESUME_PASSWORD) {
      setOpen(false);
      window.open("/resume.pdf", "_blank", "noopener,noreferrer");
    } else {
      setError(true);
      setShake(true);
      setValue("");
      setTimeout(() => setShake(false), 500);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="border border-stone-300 text-stone-700 px-8 py-3 rounded-full text-sm font-medium hover:border-stone-500 transition-colors"
      >
        Download resume
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold text-stone-900 mb-1">
              Resume access
            </h3>
            <p className="text-sm text-stone-500 mb-6">
              Enter the password to download my resume.
            </p>

            <form onSubmit={submit} className={shake ? "animate-shake" : ""}>
              <input
                ref={inputRef}
                type="password"
                value={value}
                onChange={(e) => { setValue(e.target.value); setError(false); }}
                placeholder="Password"
                className={`w-full border rounded-xl px-4 py-2.5 text-sm text-stone-900 outline-none transition-colors mb-1 ${
                  error
                    ? "border-red-400 focus:border-red-400"
                    : "border-stone-300 focus:border-stone-500"
                }`}
              />
              {error && (
                <p className="text-xs text-red-500 mb-4">
                  Incorrect password. Try again.
                </p>
              )}
              {!error && <div className="mb-4" />}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex-1 border border-stone-300 text-stone-700 px-4 py-2.5 rounded-xl text-sm font-medium hover:border-stone-500 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-stone-900 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-stone-700 transition-colors"
                >
                  Download
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
