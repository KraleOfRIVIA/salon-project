'use client';

import { useQuery } from '@tanstack/react-query';
import { graphqlClient } from '@/lib/graphql-client';
import { GetAllCoursesDocument } from '@/graphql/graphql';

export function useCourses() {
  return useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const data = await graphqlClient.request(GetAllCoursesDocument);
      return data.courses;
    },
  });
}
