'use client';
import CourseCard from '@/components/course-card';
import { useCourses } from '@/hooks/useCourses';
import type { Course } from '@/types/Course';

const mockCourses: Course[] = [
    {
        documentId: 'mock1',
        slug: 'mock-course-1',
        title: 'Моковый курс 1',
        description: 'Описание мокового курса 1',
        imageUrl: 'https://salonline.lv/56983-large_default/nozhnicy-parikmakherskie-loyal-60.jpg',
        price: 0,
        duration: 0
    },
    {
        documentId: 'mock2',
        slug: 'mock-course-2',
        title: 'Моковый курс 2',
        description: 'Описание мокового курса 2',
        imageUrl: 'https://salonline.lv/56983-large_default/nozhnicy-parikmakherskie-loyal-60.jpg',
        price: 0,
        duration: 0
    },
];

export default function CoursesPage() {
    // const { data: courses, isLoading, isError } = useCourses();


    return (
        <main className="min-h-screen pt-28 pb-16 px-6 md:px-12 lg:px-24 bg-gray-50">
            <h1 className="text-4xl font-bold mb-12 text-center">
                Наши курсы
            </h1>
            <div className="grid md:grid-cols-3 gap-8">
                {mockCourses.map((course: Course) => (
                    <CourseCard key={course.documentId || course.slug} {...course} />
                ))}
            </div>
        </main>
    );
}
