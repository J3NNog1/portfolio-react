

const Contact = (props) => {
    return (
      <div ref={props.contactRef} id="contactProfile">
        <section>
          <h1>Contact</h1>
          <p>Feel free to contact me for any projects or oppurtunities that might succeed from our collaboration through <a href="mailto:jenniferjuarezse@gmail.com">email</a> </p>
          <h3>Social Media</h3>
          <ul>
            <li><a href="https://www.linkedin.com/in/jennifer-juarez44/">LinkedIn</a></li>
            <li><a href="https://github.com/J3NNog1">Github</a></li>
          </ul>
        </section>
      </div>
    );
  }

export default Contact;