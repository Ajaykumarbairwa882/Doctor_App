// import image from '../assets/p.png'
import image from '../assets/j.png'
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Your Trusted Healthcare Partner</h1>

        <p>
          Book appointments with experienced doctors, get the best medical
          consultation, and order medicines online with ease.
        </p>

        <div className="hero-icons">
          <span>🩺 Doctor Consultation</span>
          <span>💊 Medicine</span>
          <span>🚑 Emergency</span>
          <span>🏥 Hospital Care</span>
        </div>

        <button className="hero-btn">Book Appointment</button>
      </div>

      <div className="hero-right">
        <img src={image} style={{}}/>
      </div>
    </section>
  );
}
