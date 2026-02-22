import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactPage() {
  return (
    <>
      {/* Compact Header */}
      <section className="relative bg-[#086770] py-16 sm:py-20 mt-16 sm:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-white mb-3">Contact Us</h1>
          <p className="text-lg text-white/90">
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-20 bg-[#F7F2E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 border border-[#086770]/10">
              <h2 className="text-2xl text-[#2C2417] mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm mb-2 text-[#2C2417]">Your Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-[#086770]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#086770]"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[#2C2417]">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-[#086770]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#086770]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[#2C2417]">Subject *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-[#086770]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#086770]"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[#2C2417]">Message *</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-[#086770]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#086770]"
                    placeholder="Tell us what you'd like to know..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#086770] text-white rounded-md hover:bg-[#065660] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl text-[#2C2417] mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E8D5B9] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#086770]" />
                    </div>
                    <div>
                      <h3 className="text-lg text-[#2C2417] mb-1">Email</h3>
                      <p className="text-[#4A6D3A]">info@impacttrailsafrica.org</p>
                      <p className="text-[#4A6D3A]">volunteer@impacttrailsafrica.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E8D5B9] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#086770]" />
                    </div>
                    <div>
                      <h3 className="text-lg text-[#2C2417] mb-1">Phone</h3>
                      <p className="text-[#4A6D3A]">+254 712 345 678</p>
                      <p className="text-[#4A6D3A]">+254 733 456 789</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E8D5B9] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#086770]" />
                    </div>
                    <div>
                      <h3 className="text-lg text-[#2C2417] mb-1">Location</h3>
                      <p className="text-[#4A6D3A]">
                        Nairobi, Kenya<br />
                        East Africa
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#E8D5B9] rounded-lg p-6">
                <h3 className="text-xl text-[#2C2417] mb-3">Office Hours</h3>
                <div className="space-y-2 text-[#4A6D3A]">
                  <p><span className="text-[#2C2417]">Monday - Friday:</span> 9:00 AM - 5:00 PM EAT</p>
                  <p><span className="text-[#2C2417]">Saturday:</span> 10:00 AM - 2:00 PM EAT</p>
                  <p><span className="text-[#2C2417]">Sunday:</span> Closed</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-[#086770]/10">
                <h3 className="text-xl text-[#2C2417] mb-3">Follow Us</h3>
                <p className="text-[#4A6D3A] mb-4">
                  Stay connected with our community and follow our journey on social media.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-[#E8D5B9] flex items-center justify-center hover:bg-[#086770] hover:text-white transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#E8D5B9] flex items-center justify-center hover:bg-[#086770] hover:text-white transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#E8D5B9] flex items-center justify-center hover:bg-[#086770] hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}