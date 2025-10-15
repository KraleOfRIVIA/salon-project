interface Course {
  documentId: string;
  title: string;
  description: string;
  price: number;
  duration: number;
  slug: string;
  imageUrl: string | null;
}
export type { Course };