import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Hi! Frappe</h1>
      <p className="text-fd-muted-foreground">
      Open Source Low Code Framework!
      </p>
    </main>
  );
}
