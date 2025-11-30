export default function HomePage() {
  return (
    <div className="page-wrapper">
      <section className="grid-2">
        <div>
          <div className="hero-highlight">
            <span>Recruitment & people advisory</span>
          </div>
          <h1 className="hero-title">
            Sharper, faster and more honest hiring decisions.
          </h1>
          <p className="hero-subtitle">
            Resourcin works with founders, CEOs and HR leaders to design senior
            searches, build hiring pipelines and stay honest about talent in
            Nigeria, Africa and beyond.
          </p>
          <div className="hero-actions">
            <a href="/for-employers" className="btn btn-primary">
              Talk to us about a role
            </a>
            <a href="/for-candidates" className="btn btn-outline">
              Join our talent network
            </a>
          </div>
          <div className="tag-row">
            <span className="tag-pill">Executive & senior hiring</span>
            <span className="tag-pill">Startup & growth-stage</span>
            <span className="tag-pill">Africa-focused roles</span>
          </div>
        </div>

        <div className="card">
          <div className="badge">
            <span className="badge-dot" />
            <span>Typical engagement</span>
          </div>
          <h3 className="card-title" style={{ marginTop: "0.75rem" }}>
            “We need a trusted partner on this search.”
          </h3>
          <p className="card-body">
            Maybe you are hiring a General Manager, building a sales team or
            replacing a quietly underperforming leader. We help you define the
            brief, design the interview process, run a structured search and
            give you an honest view of the market.
          </p>
        </div>
      </section>
    </div>
  );
}
