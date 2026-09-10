export default function Contact() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-bg-primary px-6 text-center pt-24">
      <div className="max-w-4xl mx-auto">
        <p className="text-text-secondary uppercase tracking-widest text-sm mb-12 font-medium">Start a project</p>
        <h1 className="text-5xl md:text-[120px] leading-[0.9] font-medium tracking-tighter mb-12">
          Let's build<br />something.
        </h1>
        <a 
          href="mailto:hello@novaaacode.com" 
          className="inline-block border-b-2 border-text-primary text-2xl md:text-4xl font-medium pb-2 hover:text-text-secondary hover:border-text-secondary transition-colors"
        >
          hello@novaaacode.com
        </a>
        
        <div className="mt-32 flex justify-center gap-12 text-sm uppercase tracking-widest font-medium">
          <a href="#" className="hover:opacity-60 transition-opacity">Twitter</a>
          <a href="#" className="hover:opacity-60 transition-opacity">LinkedIn</a>
          <a href="#" className="hover:opacity-60 transition-opacity">GitHub</a>
        </div>
      </div>
    </div>
  );
}
