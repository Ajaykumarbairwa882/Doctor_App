import "../App.css";

export default function Contact(){

return(

<div className="page contact-page">

<h1>Book Appointment</h1>

<p className="contact-text">
Fill out the form below to contact our hospital or book an appointment
with our experienced doctors.
</p>

<div className="contact-form">

<input type="text" placeholder="Full Name" />

<input type="email" placeholder="Email Address" />

<input type="tel" placeholder="Phone Number" />

<select>
<option>Select Department</option>
<option>General Medicine</option>
<option>Cardiology</option>
<option>Orthopedics</option>
<option>Gynecology</option>
<option>Pediatrics</option>
</select>

<input type="date" />

<textarea rows="5" placeholder="Describe your problem"></textarea>

<button className="contact-btn">Book Appointment</button>

</div>

</div>

)

}