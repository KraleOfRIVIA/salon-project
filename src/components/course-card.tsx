'use client';

import { mockCourse } from '@/mocks/courses';

interface CourseCardProps {
    documentId: string;
    title: string;
    description: any;
    price: number;
    duration: number;
    slug: string;
    imageUrl?: string | null;
}

export default function CourseCard() {
    // 🧩 Достаём текст из первого параграфа (если это rich text)
    const previewText = Array.isArray(mockCourse.description)
        ? (mockCourse.description[0]?.children?.[0]?.text ?? '')
        : mockCourse.description;

    return (
        <div className="cursor-pointer bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition flex flex-col">
            <div className="w-full h-40 bg-gray-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                {mockCourse.imageUrl ? (
                    <img
                        src={mockCourse.imageUrl}
                        alt={mockCourse.title}
                        className="object-cover w-full h-full rounded-xl"
                    />
                ) : (
                    <span className="text-gray-400">Нет изображения</span>
                )}
            </div>

            <h3 className="text-xl font-semibold mb-2">{mockCourse.title}</h3>

            <p className="text-gray-600 mb-4 line-clamp-3">{previewText}</p>

            <button
                className="mt-auto px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
                Подробнее
            </button>
        </div>
    );
}
