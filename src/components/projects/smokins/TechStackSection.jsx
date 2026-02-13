import Button from "@/components/ui/Button";

export default function TechStackSection() {
  return (
    <section className="container">
      <div className="min-h-180 flex flex-col items-end justify-center gap-8">
        <h1 className="h1 font-bold max-w-xl text-end">Smokins Loyalty App</h1>
        <Button>Następny Projekt</Button>
      </div>

      <div className="absolute left-10 bottom-0 flex flex-col gap-8 py-16 text-lg text-n-1 max-w-md">
        <div>
          <strong className="block mb-2">01 Design & Strategy</strong>
          <p className="body-sm">
            UI/UX Design, Interactive Prototyping, Brand Identity
          </p>
        </div>
        <div>
          <strong className="block mb-2">02 Technical Stack</strong>
          <p className="body-sm">
            React Native, Expo SDK, JavaScript (ES6), NativeWind
          </p>
        </div>
        <div>
          <strong className="block mb-2">03 Backend & Infrastructure</strong>
          <p className="body-sm">
            Firebase / Google Cloud, Auth, Database, Deployment
          </p>
        </div>
      </div>
    </section>
  );
}
