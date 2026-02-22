import { Check, X } from 'lucide-react';

export function WhatsIncluded() {
  const included = [
    'Accommodation (as specified)',
    'Meals (as specified)',
    'Orientation and local support',
    'Project coordination',
    'Emergency contact support',
  ];

  const notIncluded = [
    'Flights and visas',
    'Travel insurance',
    'Personal expenses',
    'Optional excursions',
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2C2417] mb-6">
            What's Included
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Included */}
          <div className="bg-[#F5EFE7] rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#5A7D5C] flex items-center justify-center">
                <Check className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl text-[#2C2417]">Included</h3>
            </div>
            <ul className="space-y-4">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#5A7D5C] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-[#2C2417]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Included */}
          <div className="bg-[#F5EFE7] rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#C45A3C] flex items-center justify-center">
                <X className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl text-[#2C2417]">Not Included</h3>
            </div>
            <ul className="space-y-4">
              {notIncluded.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-[#C45A3C] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-[#2C2417]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
