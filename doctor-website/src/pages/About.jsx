import "../App.css";

export default function About() {

  return (

    <section className="about-page">

      <div className="about-container">

        <h1>About Our Hospital</h1>

        <p className="about-text">
          Our hospital is dedicated to providing high-quality healthcare
          services using advanced medical technology and experienced doctors.
          We focus on patient safety, comfort, and effective treatment.
        </p>

        <div className="about-features">

          <div className="feature">
            <h3>Experienced Doctors</h3>
            <p>
              Our team includes highly qualified specialists across multiple
              medical departments.
            </p>
          </div>

          <div className="feature">
            <h3>Modern Equipment</h3>
            <p>
              We use advanced medical technology for accurate diagnosis and
              world-class treatment.
            </p>
          </div>

          <div className="feature">
            <h3>24/7 Emergency</h3>
            <p>
              Our emergency department is available 24 hours for urgent
              medical care and quick response.
            </p>
          </div>

        </div>

      </div>

    </section>

  );

}