export const metadata = {
  title: "Insights | Resourcin",
};

export default function InsightsPage() {
  return (
    <div className="page-wrapper">
      <p className="page-eyebrow">Insights</p>
      <h1 className="page-title">Thinking about hiring, talent and work.</h1>
      <p className="page-lede">
        We publish practical notes on senior hiring, interview design,
        scorecards, compensation and the realities of the talent market across
        Nigeria, Africa and beyond.
      </p>

      <div className="card">
        <h3 className="card-title">Where are the articles?</h3>
        <p className="card-body">
          We are in the middle of migrating previously published pieces into
          this new site. For now, you can reach out to{" "}
          <a href="mailto:hello@resourcin.com">hello@resourcin.com</a> if you
          would like examples of past work, playbooks or case studies.
        </p>
      </div>
    </div>
  );
}
