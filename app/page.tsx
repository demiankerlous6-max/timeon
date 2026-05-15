"use client";

export default function TimeOnHomepage() {
  const contactEmail = "demiankerlous6@gmail.com";
  const contactPhone = "7328819104";

    const openEmail = () => {
    window.location.href = `mailto:${contactEmail}?subject=TimeOn Inquiry&body=Hi Kerlous, I am interested in learning more about TimeOn.`;
  };

  const callNow = () => {
    window.location.href = `tel:${contactPhone}`;
  };

  const services = [
    {
      title: "Answer Questions",
      description:
        "Let the chatbot respond to common customer questions in real time.",
    },
    {
      title: "Capture Leads",
      description:
        "Log the customer’s name, phone number, email, service needed, and reason for reaching out.",
    },
    {
      title: "Book Appointments",
      description:
        "Help the customer complete the next step instead of leaving the website confused.",
    },
  ];

  const processSteps = [
    "Visitor asks a question",
    "Chatbot handles the conversation",
    "Customer details are logged",
    "Business gets a complete lead record",
  ];

  return (
    <div className="min-h-screen bg-[#f7f3ec] text-[#161616] overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f7f3ec_0%,#efe7da_48%,#f7f3ec_100%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-[#d8c7ad]/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[520px] left-0 w-[420px] h-[420px] bg-white/60 blur-[120px] rounded-full pointer-events-none" />

      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-black/10 bg-[#f7f3ec]/85">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">TimeOn</h1>

          <nav className="hidden md:flex items-center gap-8 text-sm text-[#555]">
            <a href="#services" className="hover:text-black transition-colors">
              Services
            </a>
            <a href="#demo" className="hover:text-black transition-colors">
              Demo
            </a>
            <a href="#contact" className="hover:text-black transition-colors">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="bg-[#161616] text-white px-5 py-2 rounded-full font-medium hover:scale-105 transition-transform"
          >
            Contact Us
          </a>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="inline-flex bg-white/70 border border-black/10 rounded-full px-4 py-2 text-sm font-medium text-[#7a5c35] mb-6 shadow-sm">
              Businesses are changing the way they communicate with customers. This is how you stay ahead.
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] mb-8 tracking-tight">
              Never Miss Another Customer Inquiry.
            </h1>

            <p className="text-lg md:text-xl text-[#5f5f5f] leading-relaxed max-w-xl mb-10">
              TimeOn gives your website a chatbot that can handle customer questions, collect the right details, log the inquiry, and send your business a complete lead record.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="bg-[#161616] text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform text-center"
              >
                Get Started
              </a>

              <a
                href="#demo"
                className="border border-black/20 px-8 py-4 rounded-2xl font-semibold hover:bg-[#161616] hover:text-white transition-all text-center"
              >
                See Demo
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-md text-sm text-[#5f5f5f]">
              <div className="bg-white/70 border border-black/10 rounded-2xl p-4">
                <p className="text-2xl font-bold text-[#161616]">24/7</p>
                <p>Handles inquiries</p>
              </div>
              <div className="bg-white/70 border border-black/10 rounded-2xl p-4">
                <p className="text-2xl font-bold text-[#161616]">More</p>
                <p>Logged leads</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/95 border border-black/10 rounded-[32px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-[#777]">Website Assistant</p>
                  <h2 className="text-xl font-semibold">Live Inquiry</h2>
                </div>
                <div className="text-sm bg-[#f1ece3] px-4 py-2 rounded-full">
                  Online now
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-[#777] text-sm mb-2">Visitor</p>
                  <div className="bg-[#f1ece3] border border-black/10 rounded-2xl p-4 inline-block max-w-[85%]">
                    Do you have any appointments available this week?
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="max-w-[85%]">
                    <p className="text-[#7a5c35] text-sm mb-2 text-right">
                      TimeOn
                    </p>
                    <div className="bg-[#161616] rounded-2xl p-5 text-white shadow-lg">
                      Yes — I can answer your questions, collect your details, and log the appointment request for the business.
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[#777] text-sm mb-2">Visitor</p>
                  <div className="bg-[#f1ece3] border border-black/10 rounded-2xl p-4 inline-block max-w-[85%]">
                    Can someone contact me today?
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="max-w-[85%]">
                    <p className="text-[#7a5c35] text-sm mb-2 text-right">
                      TimeOn
                    </p>
                    <div className="bg-[#161616] rounded-2xl p-5 text-white shadow-lg">
                      Absolutely. I can log your request with your name, phone number, service needed, and preferred time.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="bg-[#fbf8f2] border border-black/10 rounded-2xl p-4">
                  <p className="text-sm text-[#666]">Inquiry Status</p>
                  <h3 className="text-xl font-bold">Handled + Logged</h3>
                </div>
                <div className="bg-[#fbf8f2] border border-black/10 rounded-2xl p-4">
                  <p className="text-sm text-[#666]">Lead Record</p>
                  <h3 className="text-xl font-bold">Ready For Follow-Up</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-24">
        <div className="max-w-6xl mx-auto bg-[#161616] text-white rounded-[36px] p-8 md:p-10 shadow-xl">
          <div className="grid md:grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <div key={step} className="border border-white/10 rounded-2xl p-5 bg-white/5">
                <p className="text-sm text-white/50 mb-3">Step {index + 1}</p>
                <p className="font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="relative px-6 py-24 border-t border-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-medium text-[#7a5c35] mb-5">
              What We Build
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
              A Better System For Handling Customers
            </h2>

            <p className="text-[#5f5f5f] text-lg leading-relaxed">
              We build chatbots that guide the conversation, collect customer details, log the inquiry, and make sure the business knows exactly who to follow up with.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white border border-black/10 rounded-[28px] p-8 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#d8c7ad] mb-6" />

                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>

                <p className="text-[#5f5f5f] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="px-6 py-24 border-t border-black/10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-medium text-[#7a5c35] mb-5">
            Demo
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            See How It Works
          </h2>

          <div className="bg-white border border-black/10 rounded-[32px] p-8 text-left max-w-3xl mx-auto shadow-sm">
            <div className="space-y-6">
              <div>
                <p className="text-[#777] text-sm mb-2">Visitor</p>
                <div className="bg-[#f1ece3] rounded-2xl p-4 inline-block max-w-[85%]">
                  Hi, do you have availability this week?
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-[#161616] text-white rounded-2xl p-4 max-w-[85%]">
                  Yes. I can answer your questions, collect your details, and log the request for the business.
                </div>
              </div>

              <div className="bg-[#fbf8f2] border border-black/10 rounded-2xl p-5 mt-8">
                <p className="text-sm text-[#777] mb-2">Inquiry saved</p>
                <p className="font-semibold">
                  The chatbot logs the customer’s name, phone number, service needed, preferred time, and conversation details so the business has a clear record.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="px-6 py-24 border-t border-black/10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-medium text-[#7a5c35] mb-5">
            Why TimeOn
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
            Built To Help Businesses Respond Faster
          </h2>

          <p className="text-[#5f5f5f] text-lg max-w-3xl mx-auto leading-relaxed">
            Customers expect fast responses. TimeOn helps businesses handle inquiries, organize customer information, and follow up without missing opportunities.
          </p>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 border-t border-black/10">
        <div className="max-w-4xl mx-auto text-center bg-white border border-black/10 rounded-[40px] p-12 md:p-16 shadow-sm">
          <p className="text-sm font-medium text-[#7a5c35] mb-5">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
            Ready To Scale Your Business?
          </h2>

          <p className="text-[#5f5f5f] text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Reach out to talk about building a system that helps your business respond faster, capture more leads, and handle customer inquiries automatically.
          </p>

          <div className="space-y-4 text-lg text-[#444] mb-10">
            <p>Kerlous Demian</p>
            <a
              href="mailto:demiankerlous6@gmail.com?subject=TimeOn Inquiry&body=Hi Kerlous, I am interested in learning more about TimeOn."
              className="block mx-auto hover:text-[#7a5c35] transition-colors underline underline-offset-4"
            >
              demiankerlous6@gmail.com
            </a>
            <a
              href="tel:7328819104"
              className="block mx-auto hover:text-[#7a5c35] transition-colors underline underline-offset-4"
            >
              (732) 881-9104
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:demiankerlous6@gmail.com?subject=TimeOn Inquiry&body=Hi Kerlous, I am interested in learning more about TimeOn."
              className="bg-[#161616] text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform text-center"
            >
              Email Me
            </a>

            <a
              href="tel:7328819104"
              className="border border-black/20 px-8 py-4 rounded-2xl font-semibold hover:bg-[#161616] hover:text-white transition-all text-center"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
