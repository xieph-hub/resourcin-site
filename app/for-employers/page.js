export const metadata = {
  title: "For Employers | Resourcin",
};

export default function ForEmployersPage() {
  return (
    <div className="page-wrapper">
      <p className="page-eyebrow">For employers</p>
      <h1 className="page-title">Partners for high-stakes hiring.</h1>
      <p className="page-lede">
        We work as an extension of your leadership and HR teams to run critical
        searches, build repeatable hiring systems and keep a tight link between
        talent and business outcomes.
      </p>

      <div className="grid-2">
        <div className="card">
          <h3 className="card-title">Executive & senior recruitment</h3>
          <p className="card-body">
            From CEOs and GMs to Heads of Function, we support role definition,
            scorecards, market mapping, outreach, structured interviews and
            offer design. You get a shortlist you can defend to your Board and a
            process your team can reuse.
          </p>
        </div>

        <div className="card">
          <h3 className="card-title">Team builds & key hires</h3>
          <p className="card-body">
            Need to build a sales pod, a People function or an operations team?
            We help you design the structure, profiles and hiring sprints, then
            run the search end-to-end or shoulder-to-shoulder with your internal
            HR.
          </p>
        </div>
      </div>

      <div style={{ marginTop: "2rem" }} className="card">
        <h3 className="card-title">How we work</h3>
        <p className="card-body">
          We keep things simple: a clear brief, transparent timelines, agreed
          stages, structured feedback and a small number of high-signal
          candidates instead of an inbox of CVs. Every engagement is scoped
          around your context, not a generic template.
        </p>
      </div>
    </div>
  );
}
