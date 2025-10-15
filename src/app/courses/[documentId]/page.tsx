
import { getCourseBySlug } from "@/hooks/useCourse";

export default async function CoursePage({ params }: { params: Promise<{ documentId: string }> }) {
  const { documentId } = await params;
  const { data, loading, error } = await getCourseBySlug(documentId);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  console.log(data);
  const course = data?.cours
  if (!course) return <p>Курс не найден</p>;

  return (
    <div className="max-w-3xl mx-auto py-12">
      {course.image?.data && (
        <img
          src={`http://localhost:1337${course.image.data.attributes.url}`}
          alt={course.image.data.attributes.alternativeText || course.title}
          className="rounded-2xl shadow-md mb-6"
        />
      )}
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-700 mb-4">{course.description}</p>
      <p className="text-lg font-semibold">Цена: {course.price} ₽</p>
      <p className="text-sm text-gray-500">Длительность: {course.duration} часов</p>
    </div>
  );
}
