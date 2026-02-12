export default function TechStackSection() {
  return (
    <section className="px-6 lg:px-24 py-32 grid grid-cols-1 lg:grid-cols-3 gap-16 body-sm text-white/70">
      <div>
        <strong className="block mb-2 text-white">01 Design & Strategy</strong>
        UI/UX Design, Interactive Prototyping, Brand Identity
      </div>
      <div>
        <strong className="block mb-2 text-white">02 Technical Stack</strong>
        React Native, Expo SDK, JavaScript (ES6), NativeWind
      </div>
      <div>
        <strong className="block mb-2 text-white">
          03 Backend & Infrastructure
        </strong>
        Firebase / Google Cloud, Auth, Database, Deployment
      </div>
    </section>
  );
}
