import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] items-center justify-center pt-16">
        <Container className="py-24 text-center">
          <p className="font-mono text-6xl font-bold text-accent">404</p>
          <h1 className="mt-4 text-2xl font-bold text-textPrimary">
            Page not found
          </h1>
          <p className="mt-3 text-textSecondary">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-background hover:bg-accent-bright"
          >
            Back to home
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}
