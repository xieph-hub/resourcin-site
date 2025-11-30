export const metadata = {
  title: "About | Resourcin",
};

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <p className="page-eyebrow">About</p>
      <h1 className="page-title">A small team obsessed with better hires.</h1>
      <p className="page-lede">
        Resourcin was created to give founders and business leaders a sharper,
        more honest partner on hiring. We blend hands-on operating experience,
        structured search and a clear point of view on what good looks like.
      </p>

      <div className="card">
        <h3 className="card-title">What this looks like in practice</h3>
        <p className="card-body">
          We have led and supported searches across growth-stage technology,
          financial services, education, energy and more — from Country
          Managers and GMs to functional heads and critical individual
          contributors. Every mandate is treated as a design problem, not just a
          CV-matching exercise.
        </p>
      </div>
    </div>
  );
}
