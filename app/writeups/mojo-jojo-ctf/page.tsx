"use client";

import { useEffect } from "react";

const MEDIUM_URL =
  "https://medium.com/@0xT4D/writeup-for-osint-tasks-mojo-jojo-ctf-508b5f892012";

export default function MojoJojoWriteupRedirect() {
  useEffect(() => {
    window.location.replace(MEDIUM_URL);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <p>
        Redirecting to the Mojo Jojo CTF writeup...
      </p>
    </main>
  );
}