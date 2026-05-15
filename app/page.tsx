"use client";

export default function TimeOnHomepage() {
  const contactEmail = "demiankerlous6@gmail.com";
  const contactPhone = "7328819104";

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

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

          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#161616] text-white px-5 py-2 rounded-full font-medium hover:scale-105 transition-transform"
          >
            Contact Us
          </button>
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
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#161616] text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform"
              >
                Get Started
              </button>

              <button
                onClick={() => scrollToSection("demo")}
                className="border border-black/20 px-8 py-4 rounded-2xl font-semibold hover:bg-[#161616] hover:text-white transition-all"
              >
                See Demo
              </button>
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
    </div>
  );
}