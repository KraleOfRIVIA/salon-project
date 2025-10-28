import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export function PageRenderer({ sections }: { sections: any[] }) {
  return (
    <>
      {sections.map((section, index) => {
        switch (section.__typename) {
          case 'ComponentSectionsHero':
            return (
              <section key={index} className="py-32 text-center bg-gray-50">
                <h1 className="text-5xl font-bold mb-4">{section.title}</h1>
                <BlocksRenderer content={section.subtitle} />
                <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                  {section.buttonText}
                </button>
              </section>
            );

          case 'ComponentSectionsAbout':
            return (
              <section key={index} className="py-24 grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-semibold mb-4">{section.title}</h2>
                  <BlocksRenderer content={section.content} />
                </div>
                {section.image && (
                  <img
                    src={`http://localhost:1337${section.image.url}`}
                    alt=""
                    className="rounded-2xl shadow-md"
                  />
                )}
              </section>
            );

          case 'ComponentSectionsCourses':
            return (
              <section key={index} className="py-24 bg-gray-50 text-center">
                <h2 className="text-3xl font-semibold mb-12">{section.title}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {section.courses?.data.map((c: any) => (
                    <div key={c.id} className="bg-white rounded-2xl shadow-md p-6">
                      <img
                        src={`http://localhost:1337${c.attributes.image?.url}`}
                        alt=""
                        className="rounded-xl mb-4"
                      />
                      <h3>{c.attributes.title}</h3>
                      <p>{c.attributes.price} ₽</p>
                    </div>
                  ))}
                </div>
              </section>
            );

          default:
            return null;
        }
      })}
    </>
  );
}
