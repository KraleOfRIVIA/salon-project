'use client';
import CourseCard from '@/components/course-card';
import { useCourses } from '@/hooks/useCourses';
import type { Course } from '@/types/Course';

export default function CoursesPage() {
    const { data: courses, isLoading, isError } = useCourses();
    if (isLoading) return <p>Загрузка курсов...</p>;
    if (isError) return <p>ошибка загрузки курсов</p>;
    if (!courses) return <p>Нет данных</p>;

    return (
        <main className="min-h-screen pt-28 pb-16 px-6 md:px-12 lg:px-24 bg-gray-50">
            <h1 className="text-4xl font-bold mb-12 text-center">Наши курсы</h1>
            <div className="grid md:grid-cols-3 gap-8">
                {courses.map((course: Course) => (
                    <CourseCard key={course.documentId || course.slug} {...course} />
                ))}
            </div>
        </main>
    );
}
