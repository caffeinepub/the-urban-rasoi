const Footer = () => {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'urban-rasoi-dhaba';

  return (
    <footer className="dhaba-border-top bg-dhaba-cream py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-2 text-dhaba-text-light">
              © {currentYear} URBAN RASOI DHABA. All rights reserved.
            </p>
            <p className="mb-0 text-dhaba-text-light">
              Built with <span className="text-danger">❤</span> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dhaba-primary fw-semibold text-decoration-none"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
