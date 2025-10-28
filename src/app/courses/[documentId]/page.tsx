'use client';

import * as React from 'react';
import { useCourse } from '@/hooks/useCourse';

export default function CoursePage({ params }: { params: Promise<{ documentId: string }> }) {
  const { documentId } = React.use(params); // ✅ новый API React 19

  const { data: course, isLoading, isError } = useCourse(documentId);

  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>Ошибка загрузки данных</p>;
  if (!course) return <p>Курс не найден</p>;

  return (
    <div className="max-w-3xl mx-auto py-12">
      {course.image?.url && (
        <img
          src={`http://localhost:1337${course.image.url}`}
          alt={course.image.alternativeText || course.title}
          className="rounded-2xl shadow-md mb-6"
        />
      )}
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-700 mb-4">
        {typeof course.description === 'string'
          ? course.description
          : JSON.stringify(course.description)}
      </p>
      <p className="text-lg font-semibold">Цена: {course.price} ₽</p>
      <p className="text-sm text-gray-500">Длительность: {course.duration} часов</p>
    </div>
  );
}
