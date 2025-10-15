export default function HomePage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
            {/* Hero Section */}
            <section
                id="hero"
                className="w-full flex flex-col items-center justify-center py-32 text-center bg-gray-50 mt-20"
            >
                <h1 className="text-5xl font-bold mb-4">[Hero Title]</h1>
                <p className="text-lg mb-8 max-w-2xl">[Hero Subtitle or Content]</p>
                <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                    [Call to Action]
                </button>
            </section>

            {/* About Section */}
            <section
                id="about"
                className="w-full py-24 px-6 md:px-12 lg:px-24 bg-white grid md:grid-cols-2 gap-12 items-center"
            >
                <div>
                    <h2 className="text-3xl font-semibold mb-4">[About Title]</h2>
                    <p className="text-lg leading-relaxed">[About Content]</p>
                </div>
                <div className="w-full h-72 bg-gray-200 rounded-2xl flex items-center justify-center">
                    [About Image]
                </div>
            </section>

            {/* Courses Section */}
            <section
                id="courses"
                className="w-full py-24 px-6 md:px-12 lg:px-24 bg-gray-50 text-center"
            >
                <h2 className="text-3xl font-semibold mb-12">[Courses Title]</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center"
                        >
                            <div className="w-full h-40 bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
                                [Course {i} Image]
                            </div>
                            <h3 className="text-xl font-semibold mb-2">[Course {i} Title]</h3>
                            <p className="text-gray-600 mb-4">[Course {i} Description]</p>
                            <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                                [Enroll Button]
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section
                id="testimonials"
                className="w-full py-24 px-6 md:px-12 lg:px-24 bg-white text-center"
            >
                <h2 className="text-3xl font-semibold mb-12">[Testimonials Title]</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-6 bg-gray-50 rounded-2xl shadow-sm">
                            <p className="italic mb-4">“[Testimonial {i} Content]”</p>
                            <h4 className="font-semibold">[Testimonial {i} Name]</h4>
                            <p className="text-gray-500 text-sm">[Testimonial {i} Role]</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="w-full py-24 px-6 md:px-12 lg:px-24 bg-gray-50 text-center"
            >
                <h2 className="text-3xl font-semibold mb-4">[Contact Title]</h2>
                <p className="max-w-2xl mx-auto mb-8">[Contact Description]</p>
                <form className="max-w-lg mx-auto grid gap-4">
                    <input className="border rounded-xl px-4 py-3" placeholder="[Name Input]" />
                    <input className="border rounded-xl px-4 py-3" placeholder="[Email Input]" />
                    <textarea
                        className="border rounded-xl px-4 py-3"
                        rows={4}
                        placeholder="[Message Input]"
                    />
                    <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                        [Submit Button]
                    </button>
                </form>
            </section>

            {/* Footer */}
            <footer className="w-full py-12 text-center bg-black text-white">
                <p>[Footer Content / © Year]</p>
            </footer>
        </main>
    );
}
