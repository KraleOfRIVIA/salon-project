// Mock course data shared across components
export interface MockCourse {
  documentId: string;
  title: string;
  description: any;
  price: number;
  duration: number;
  slug: string;
  imageUrl?: string | null;
  image?: { url?: string; alternativeText?: string } | null;
}

export const mockCourse: MockCourse = {
  documentId: '1',
  title: 'Основы парикмахерского искусства',
  description: [
    {
      children: [{ text: 'Научитесь базовым техникам стрижки и укладки.' }],
    },
  ],
  price: 5000,
  duration: 30,
  slug: 'osnovy-parikmaher',
  imageUrl: 'https://www.hitekgroup.ru/upload/medialibrary/6eb/nozhnitci_01.jpeg',
  image: {
    url: 'https://www.hitekgroup.ru/upload/medialibrary/6eb/nozhnitci_01.jpeg',
    alternativeText: 'Курс по основам парикмахерского искусства',
  },
};

export const mockCourses: MockCourse[] = [mockCourse];

export function getMockCourseByDocumentId(documentId: string) {
  return mockCourses.find((c) => c.documentId === documentId) ?? null;
}
