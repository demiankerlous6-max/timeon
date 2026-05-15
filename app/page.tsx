export default function TimeOnHomepage() {
  const emailLink =
    "mailto:demiankerlous6@gmail.com?subject=TimeOn Inquiry&body=Hi Kerlous, I am interested in learning more about TimeOn.";
  const phoneLink = "tel:7328819104";

  const services = [
    {
      title: "Answer Customer Questions",
      description:
        "Give website visitors fast answers instead of making them wait for a call, email, or text back.",
    },
    {
      title: "Collect The Right Details",
      description:
        "Capture names, phone numbers, emails, service needs, preferred times, and customer requests.",
    },
    {
      title: "Log Every Inquiry",
      description:
        "Turn conversations into organized lead records so your business knows exactly who to follow up with.",
    },
  ];

  const steps = [
    "A visitor asks a question",
    "The chatbot handles the conversation",
    "Customer details are collected",
    "The business gets a clear lead record",
  ];

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#161616] font-sans">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f3ec]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-bold tracking-tight">
            TimeOn
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#555] md:flex">
            <a href="#services" className="transition-colors hover:text-black">
              Services
            </a>
            <a href="#demo" className="transition-colors hover:text-black">
              Demo
            </a>
            <a href="#contact" className="transition-colors hover:text-black">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#161616] px-5 py-2 font-medium text-white transition-transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-[#d8c7ad]/40 blur-[120px]" />
        <div className="pointer-events-none absolute left-0 top-[480px] h-[420px] w-[420px] rounded-full bg-white/70 blur-[120px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium text-[#7a5c35] shadow-sm">
              Businesses are changing the way they communicate with customers. This is how you stay ahead.
            </p>

            <h1 className="mb-8 max-w-2xl text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
              Never Miss Another Customer Inquiry.
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-[#5f5f5f] md:text-xl">
              TimeOn gives your website a chatbot that can answer customer questions, collect the right details, log the inquiry, and send your business a complete lead record.
            </p>

            <div className="mb-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-2xl bg-[#161616] px-8 py-4 text-center font-semibold text-white transition-transform hover:scale-105"
              >
                Get Started
              </a>

              <a
                href="#demo"
                className="rounded-2xl border border-black/20 px-8 py-4 text-center font-semibold transition-all hover:bg-[#161616] hover:text-white"
              >
                See Demo
              </a>
            </div>

            <div className="grid max-w-md grid-cols-2 gap-4 text-sm text-[#5f5f5f]">
              <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                <p className="text-2xl font-bold text-[#161616]">24/7</p>
                <p>Handles inquiries</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                <p className="text-2xl font-bold text-[#161616]">Logged</p>
                <p>Customer details</p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-black/10 bg-white/95 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm text-[#777]">Website Chatbot</p>
                <h2 className="text-xl font-semibold">Live Inquiry</h2>
              </div>
              <div className="rounded-full bg-[#f1ece3] px-4 py-2 text-sm">
                Online now
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="mb-2 text-sm text-[#777]">Visitor</p>
                <div className="inline-block max-w-[85%] rounded-2xl border border-black/10 bg-[#f1ece3] p-4">
                  Do you have appointments available this week?
                </div>
              </div>

              <div className="flex justify-end">
                <div className="max-w-[85%]">
                  <p className="mb-2 text-right text-sm text-[#7a5c35]">TimeOn</p>
                  <div className="rounded-2xl bg-[#161616] p-5 text-white shadow-lg">
                    Yes — I can answer your questions, collect your details, and log the appointment request for the business.
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm text-[#777]">Visitor</p>
                <div className="inline-block max-w-[85%] rounded-2xl border border-black/10 bg-[#f1ece3] p-4">
                  Can someone contact me today?
                </div>
              </div>

              <div className="flex justify-end">
                <div className="max-w-[85%]">
                  <p className="mb-2 text-right text-sm text-[#7a5c35]">TimeOn</p>
                  <div className="rounded-2xl bg-[#161616] p-5 text-white shadow-lg">
                    Absolutely. I can log your name, phone number, service needed, preferred time, and conversation details.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-[#fbf8f2] p-4">
                <p className="text-sm text-[#666]">Inquiry Status</p>
                <h3 className="text-xl font-bold">Handled + Logged</h3>
              </div>
              <div className="rounded-2xl border border-black/10 bg-[#fbf8f2] p-4">
                <p className="text-sm text-[#666]">Lead Record</p>
                <h3 className="text-xl font-bold">Ready For Follow-Up</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-[#161616] p-8 text-white shadow-xl md:p-10">
          <div className="grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="mb-3 text-sm text-white/50">Step {index + 1}</p>
                <p className="font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-black/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-2xl">
            <p className="mb-5 text-sm font-medium text-[#7a5c35]">What We Build</p>
            <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              A Better System For Handling Customers
            </h2>
            <p className="text-lg leading-relaxed text-[#5f5f5f]">
              We build chatbots that guide the conversation, collect customer details, log the inquiry, and make sure the business knows exactly who to follow up with.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[28px] border border-black/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mb-6 h-12 w-12 rounded-2xl bg-[#d8c7ad]" />
                <h3 className="mb-4 text-2xl font-semibold">{service.title}</h3>
                <p className="leading-relaxed text-[#5f5f5f]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="border-t border-black/10 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-5 text-sm font-medium text-[#7a5c35]">Demo</p>
          <h2 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">
            See How It Works
          </h2>

          <div className="mx-auto max-w-3xl rounded-[32px] border border-black/10 bg-white p-8 text-left shadow-sm">
            <div className="space-y-6">
              <div>
                <p className="mb-2 text-sm text-[#777]">Visitor</p>
                <div className="inline-block max-w-[85%] rounded-2xl bg-[#f1ece3] p-4">
                  Hi, do you have availability this week?
                </div>
              </div>

              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl bg-[#161616] p-4 text-white">
                  Yes. I can answer your questions, collect your details, and log the request for the business.
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-black/10 bg-[#fbf8f2] p-5">
                <p className="mb-2 text-sm text-[#777]">Inquiry saved</p>
                <p className="font-semibold">
                  The chatbot logs the customer’s name, phone number, service needed, preferred time, and conversation details so the business has a clear record.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-black/10 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-5 text-sm font-medium text-[#7a5c35]">Why TimeOn</p>
          <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Built To Help Businesses Respond Faster
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#5f5f5f]">
            Customers expect fast responses. TimeOn helps businesses handle inquiries, organize customer information, and follow up without missing opportunities.
          </p>
        </div>
      </section>

      <section id="contact" className="border-t border-black/10 px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-[40px] border border-black/10 bg-white p-12 text-center shadow-sm md:p-16">
          <p className="mb-5 text-sm font-medium text-[#7a5c35]">Contact</p>
          <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Ready To Scale Your Business?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#5f5f5f]">
            Reach out to talk about building a system that helps your business respond faster, capture more leads, and handle customer inquiries automatically.
          </p>

          <div className="mb-10 space-y-4 text-lg text-[#444]">
            <p className="font-semibold text-[#161616]">Kerlous Demian</p>
            <a
              href={emailLink}
              className="block underline underline-offset-4 transition-colors hover:text-[#7a5c35]"
            >
              demiankerlous6@gmail.com
            </a>
            <a
              href={phoneLink}
              className="block underline underline-offset-4 transition-colors hover:text-[#7a5c35]"
            >
              (732) 881-9104
            </a>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={emailLink}
              className="rounded-2xl bg-[#161616] px-8 py-4 text-center font-semibold text-white transition-transform hover:scale-105"
            >
              Email Me
            </a>
            <a
              href={phoneLink}
              className="rounded-2xl border border-black/20 px-8 py-4 text-center font-semibold transition-all hover:bg-[#161616] hover:text-white"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
npm run build