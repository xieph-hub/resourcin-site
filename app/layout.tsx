import "./globals.css";

export const metadata = {
  title: "Resourcin | Recruitment & people advisory",
  description:
    "Resourcin helps founders and business leaders make sharper hiring decisions across Nigeria, Africa and beyond.",
};

function Header() {
  return (
    <header className="site-header">
      <div className="nav-inner">
        <div className="brand">RESOURCIN</div>
        <nav className="nav-links">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/for-employers" className="nav-link">
            For Employers
          </a>
          <a href="/for-candidates" className="nav-link">
            For Candidates
          </a>
          <a href="/jobs" className="nav-link">
            Jobs
          </a>
          <a href="/insights" className="nav-link nav-pill">
            Insights
          </a>
          <a href="/about" className="nav-link">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Resourcin. All rights reserved.</span>
        <span>Based in Lagos. Working with teams across Africa and beyond.</span>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main-layout">
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
