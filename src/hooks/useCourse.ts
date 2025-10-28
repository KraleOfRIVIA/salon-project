import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { graphqlClient } from '@/lib/graphql-client';

const GET_COURSE_BY_ID = gql`
  query GetCourseById($documentId: ID!) {
    course(documentId: $documentId) {
      documentId
      title
      price
      duration
      description
      image {
        url
        alternativeText
      }
    }
  }
`;

export function useCourse(documentId: string) {
  return useQuery({
    queryKey: ['course', documentId],
    queryFn: async () => {
      const { course } = await graphqlClient.request(GET_COURSE_BY_ID, { documentId });
      return course;
    },
  });
}
