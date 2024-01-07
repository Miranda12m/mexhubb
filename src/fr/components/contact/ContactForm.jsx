import React, { useState } from 'react';

function ContactFormFR() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/tours/api/v1/form/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data successfully sent!');
      } else {
        console.error('Error sending form data:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending form data:', error.message);
    }

    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <style>
        {`
          .button-hover:hover {
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
            transform: scale(1.02);
            transition: all 0.2s ease-in-out;
          }
        `}
      </style>
      <div className='card' style={{ borderBlockStartColor: '#FF3B19', borderBlockStartWidth: '5px', borderRadius: '1.2%', transform: 'translate(0%, -10%)', boxShadow: ' 0px 0px 15px rgba(0, 0, 0, 0.3)' }}>
        <form onSubmit={handleSubmit} style={{ maxWidth: '1200px', marginLeft: '45px', marginRight: '45px' }}>
          <br></br><br></br>
          <div className="row mb-3">
            <div className="form-group col-md-6" style={{ marginBottom: '3%' }}>
              <label htmlFor="name" className="form-label">
                Nom:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Entrez votre nom"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email" className="form-label">
                E-mail:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Entrer votre Email"
              />
              <small id="emailHelp" className="form-text text-muted">Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.</small>
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="message" className="form-label">
              Qu'est-ce qui préoccupe votre esprit?
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              placeholder="Veuillez fournir tous les détails afin que nous puissions vous aider"
              style={{ height: '140px' }}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary button-hover">
              Envoyer
            </button>
          </div>
          <br></br><br></br>
        </form>
      </div>
    </>
  );
}

export default ContactFormFR;
