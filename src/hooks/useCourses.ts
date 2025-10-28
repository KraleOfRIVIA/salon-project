'use client';
import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { graphqlClient } from '@/lib/graphql-client';

const GET_ALL_COURSES = gql`
    query Courses {
        courses {
            title
            slug
            price
            duration
            description
            documentId
            image {
                alternativeText
                url
            }
        }
    }
`;

export function useCourses() {
    return useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const data = await graphqlClient.request(GET_ALL_COURSES);
            return data.courses;
        },
    });
}
