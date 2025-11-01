'use client';

import * as React from 'react';
import { getMockCourseByDocumentId } from '@/mocks/courses';

export default function CoursePage({ params }: { params: Promise<{ documentId: string }> }) {
  const { documentId } = React.use(params);

  const course = getMockCourseByDocumentId(documentId);

  if (!course) return <p>Курс не найден</p>;

  return (
    <div className="max-w-3xl mx-auto py-12 mt-10">
      <div className="flex flex-row gap-8 items-start">
        {course.image?.url && (
          <img
            src={course.image.url.startsWith('http') ? course.image.url : `http://localhost:1337${course.image.url}`}
            alt={course.image.alternativeText || course.title}
            className="rounded-2xl shadow-md w-64 h-auto object-cover"
          />
        )}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="text-gray-700 mb-4">
            {typeof course.description === 'string'
              ? course.description
              : JSON.stringify(course.description)}
          </p>
          <p className="text-lg font-semibold">Цена: {course.price} ₽</p>
          <p className="text-sm text-gray-500">Длительность: {course.duration} часов</p>
        </div>
      </div>
    </div>
  );
}
