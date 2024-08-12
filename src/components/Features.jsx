import "../features.css";

function Features() {
  return (
    <section id="features">
      <div className="features">
        <div className="features-list">
          <div className="features-list1">
            <div className="list-logo-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-airplay"
                >
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
                  <path d="m12 15 5 6H7Z" />
                </svg>
              </div>
            </div>
            <div className="list-text-1">
              <h5>No More Design Stress</h5>
              <p>Get your logo in minutes, not in weeks</p>
            </div>
          </div>

          <div className="features-list2">
            <div className="list-logo-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-app-window"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M10 4v4" />
                  <path d="M2 8h20" />
                  <path d="M6 4v4" />
                </svg>
              </div>
            </div>
            <div className="list-text-2">
              <h5>Need a Change to Your Design?</h5>
              <p>We'll handle it for you, completely free</p>
            </div>
          </div>

          <div className="features-list3">
            <div className="list-logo-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-anvil"
                >
                  <path d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" />
                  <path d="M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" />
                  <path d="M9 12v5" />
                  <path d="M15 12v5" />
                  <path d="M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" />
                </svg>
              </div>
            </div>
            <div className="list-text-3">
              <h5>No Recurring Fees</h5>
              <p> Pay once, enjoy lifetime access to our branding tools</p>
            </div>
          </div>

          <div className="features-list4">
            <div className="list-logo-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-badge-check"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
            </div>
            <div className="list-text-4">
              <h5>Complete Copyright Ownership</h5>
              <p>Use in both commercial and personal projects</p>
            </div>
          </div>

          <div className="features-list5">
            <div className="list-logo-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bookmark"
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                </svg>
              </div>
            </div>
            <div className="list-text-5">
              <h5> Endless Revisions</h5>
              <p>Change your logo whenever you like, even post-purchase</p>
            </div>
          </div>
        </div>
        <div className="features-bottom">
          <h2>Build Your Custom Logo Design</h2>
          <p>Create Unlimited Logos at No Cost</p>
          <a href="#">
            <button>Design my logo</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Features;
