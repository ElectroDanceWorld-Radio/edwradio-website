interface CollaborationCard {
  title: string;
  text: string;
  button: string;
  linkText?: string;
  linkUrl?: string;
}

interface CollaborationsSectionProps {
  title: string;
  description: string;
  cards: CollaborationCard[];
}

export default function CollaborationsSection({
  title,
  description,
  cards,
}: CollaborationsSectionProps) {
  return (
    <section className="py-[50px] bg-subtle-gradient bg-grid-pattern relative overflow-hidden">
      {/* Decorative background orbs */}
      <div className="bg-orb bg-orb-blue w-96 h-96 -top-48 -left-48" />
      <div className="bg-orb bg-orb-pink w-80 h-80 -bottom-40 -right-40" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-6 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gradient mb-3 title-bg">{title}</h2>
          <div className="section-divider max-w-xs mx-auto mb-6" />
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">{description}</p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="glass-light rounded-xl p-8 card-hover flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {card.linkText && card.linkUrl ? (
                    <>
                      {card.text.split(card.linkText)[0]}
                      <a href={card.linkUrl} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline decoration-purple-400/30 hover:decoration-purple-300 transition-colors">
                        {card.linkText}
                      </a>
                      {card.text.split(card.linkText)[1] || ''}
                    </>
                  ) : card.text}
                </p>
              </div>
              <div className="flex justify-end mt-6">
                <button className="px-6 py-2.5 btn-primary text-white rounded-lg font-medium">
                  {card.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
