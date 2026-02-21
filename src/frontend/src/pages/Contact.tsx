import { useState } from 'react';
import { useContactData } from '@/hooks/useContactData';
import { useSubmitInquiry } from '@/hooks/useSubmitInquiry';
import { toast } from 'sonner';

const Contact = () => {
  const { data: contactData, isLoading } = useContactData();
  const { mutate: submitInquiry, isPending } = useSubmitInquiry();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    submitInquiry(
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      {
        onSuccess: () => {
          toast.success('Thank you! Your message has been sent successfully.');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        onError: (error) => {
          toast.error(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
        },
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Generate Google Maps embed URL with the location coordinates
  const getMapEmbedUrl = () => {
    if (!contactData?.location) return '';
    const { latitude, longitude } = contactData.location;
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${latitude},${longitude}&zoom=15`;
  };

  return (
    <div className="contact-page" style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="py-5 bg-dhaba-pattern">
        <div className="container">
          <div className="text-center">
            <h1 className="display-3 fw-bold">Visit Us</h1>
            <div className="dhaba-divider"></div>
            <p className="lead text-dhaba-text-light">
              We'd love to see you at Urban Rasoi Dhaba. Drop by or get in touch!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {/* Contact Information */}
            <div className="col-lg-6">
              <h2 className="h3 fw-bold mb-4">Contact Information</h2>
              
              <div className="dhaba-card p-4 mb-3">
                <div className="d-flex align-items-start">
                  <div className="dhaba-icon-box me-3" style={{ width: '50px', height: '50px', fontSize: '20px' }}>
                    📞
                  </div>
                  <div>
                    <h3 className="h5 fw-bold mb-1">Phone</h3>
                    <p className="text-dhaba-text-light mb-0">
                      {isLoading ? 'Loading...' : contactData?.phoneNumber || '123-456-7890'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="dhaba-card p-4 mb-3">
                <div className="d-flex align-items-start">
                  <div className="dhaba-icon-box me-3" style={{ width: '50px', height: '50px', fontSize: '20px' }}>
                    ✉️
                  </div>
                  <div>
                    <h3 className="h5 fw-bold mb-1">Email</h3>
                    <p className="text-dhaba-text-light mb-0">
                      {isLoading ? 'Loading...' : contactData?.email || 'hello@urbanrasoiDhaba.com'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="dhaba-card p-4 mb-3">
                <div className="d-flex align-items-start">
                  <div className="dhaba-icon-box me-3" style={{ width: '50px', height: '50px', fontSize: '20px' }}>
                    📍
                  </div>
                  <div>
                    <h3 className="h5 fw-bold mb-1">Location</h3>
                    <p className="text-dhaba-text-light mb-0">
                      {isLoading ? 'Loading...' : contactData?.location.address || '622, Ushanagar, Narendra Tiwari Marg, Annapurna Road, Indore'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="dhaba-card p-4 mb-3">
                <div className="d-flex align-items-start">
                  <div className="dhaba-icon-box me-3" style={{ width: '50px', height: '50px', fontSize: '20px' }}>
                    🕐
                  </div>
                  <div>
                    <h3 className="h5 fw-bold mb-2">Hours</h3>
                    {isLoading ? (
                      <p className="text-dhaba-text-light small mb-0">Loading...</p>
                    ) : (
                      contactData?.hours.map((hour, index) => (
                        <p key={index} className="text-dhaba-text-light small mb-0">
                          {hour}
                        </p>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="dhaba-card p-0 overflow-hidden">
                <div style={{ position: 'relative', width: '100%', height: '350px' }}>
                  {isLoading ? (
                    <div className="d-flex align-items-center justify-content-center h-100 bg-light">
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading map...</span>
                      </div>
                    </div>
                  ) : contactData?.location ? (
                    <iframe
                      src={getMapEmbedUrl()}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Urban Rasoi Dhaba Location"
                    />
                  ) : (
                    <div className="d-flex align-items-center justify-content-center h-100 bg-light">
                      <p className="text-muted">Map unavailable</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6">
              <h2 className="h3 fw-bold mb-4">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="dhaba-card p-4">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label fw-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-dhaba-primary w-100"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
