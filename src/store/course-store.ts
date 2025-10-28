import { create } from 'zustand';

interface Course {
    id: string;
    title: string;
    description: string;
    duration: number;
}

interface CourseStore {
    courses: Course[];
    fetchCourses: () => Promise<void>;
}

export const useCourseStore = create<CourseStore>((set) => ({
    courses: [],
    fetchCourses: async () => {
        const response = await fetch('/api/courses');
        const data = await response.json();
        set({ courses: data });
    },
}));
