export function Footer() {
  return (
    <footer className="bg-bg-dark text-text-inverse px-6 py-24 flex flex-col md:flex-row justify-between items-end">
      <div>
        <h2 className="text-4xl md:text-8xl font-medium tracking-tight mb-8">Let's Talk.</h2>
        <a href="mailto:hello@novaaacode.com" className="text-lg hover:underline underline-offset-4">hello@novaaacode.com</a>
      </div>
      <div className="mt-12 md:mt-0 text-sm text-text-inverse-secondary">
        <p>© {new Date().getFullYear()} Novaaacode Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}
