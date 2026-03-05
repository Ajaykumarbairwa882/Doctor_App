export default function Services() {
  return (
    <section className="services">

      <h2 className="section-title">Our Medical Services</h2>

      <p className="center-text">
        We provide high quality healthcare services with experienced doctors,
        modern equipment, and 24/7 patient support.
      </p>

      <div className="service-cards">

        <div className="card">
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef" alt="Doctor Consultation"/>
          <h3>Doctor Consultation</h3>
          <p>Consult with experienced doctors for accurate diagnosis and treatment.</p>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b" alt="Online Pharmacy"/>
          <h3>Online Pharmacy</h3>
          <p>Order medicines easily with our trusted online pharmacy service.</p>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7" alt="Emergency Care"/>
          <h3>Emergency Care</h3>
          <p>24/7 emergency medical services with quick response and care.</p>
        </div>

      </div>

    </section>
  );
}