import React from 'react'

import Title from '../Global/Title'

const Contact = () => {
  return <section className="contact">
    <Title title="contact us" />
    <div className="row">
      <div className="col-10 col-sm-8 col-md-6 mx-auto mb-5">
        <form action="https://formspree.io/boloyde@gmail.com" method="POST" >
          <div className="form-group">
            <label htmlFor="name">
              Name
            </label>
            <input type="text" className="form-control" name="name" id="name" placeholder="John Smith"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>
            <input type="email" className="form-control" name="email" id="email" placeholder="email@email.com"/>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Message
            </label>
            <textarea name="message" id="message" rows="5" className="form-control" placeholder="your message" />
          </div>
          <button className="btn btn-yellow btn-block text-capitalize mt-5" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </section>
}

export default Contact
