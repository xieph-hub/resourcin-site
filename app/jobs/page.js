export const metadata = {
  title: "Jobs | Resourcin",
};

export default function JobsPage() {
  return (
    <div className="page-wrapper">
      <p className="page-eyebrow">Jobs</p>
      <h1 className="page-title">Open roles and mandates.</h1>
      <p className="page-lede">
        We are setting up a new job platform to make it easier to browse and
        apply for roles we manage. While we finish that work, here is the
        simplest way to get on our radar.
      </p>

      <div className="card">
        <h3 className="card-title">Share your profile</h3>
        <p className="card-body">
          Send your CV and a short note on what you are looking for to{" "}
          <a href="mailto:talent@resourcin.com">talent@resourcin.com</a>. We
          review every profile we receive and reach out if there is a strong
          match with live or upcoming searches.
        </p>
        <p className="card-body">
          As soon as our ATS is fully live, this page will show a list of roles
          you can apply to directly.
        </p>
      </div>
    </div>
  );
}
