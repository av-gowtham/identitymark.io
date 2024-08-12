import "../instantly.css";

function Instantly() {
  return (
    <section id="instantly">
      <div className="instantly">
        <h2>Instantly customize and export</h2>
        <p>Right in your browser, no designer or software needed</p>
        <div className="editor">
          <img className="editor-panel" src="/editor.png" alt="" />
          <div className="edit-text-1">
            <h6>Export to all major formats</h6>
            <p>Including SVG, EPS, PNG and PDF</p>
          </div>
          <div className="edit-text-2">
            <h6>Easily edit and customize</h6>
            <p>Double click to edit text</p>
          </div>
          <div className="edit-text-3">
            <h6>Adjust text and image size</h6>
            <p>Perfecly sized for web and print</p>
          </div>
          <img className="line1" src="/line.png" alt="" />
          <img className="line2" src="/line.png" alt="" />
          <img className="line3" src="/line.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Instantly;
