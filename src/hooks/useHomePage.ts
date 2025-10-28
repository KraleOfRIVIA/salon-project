'use client';

import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { graphqlClient } from '@/lib/graphql-client';

const GET_HOME_PAGE = gql`
  query HomePages {
    homePages {
      title
      slug
      sections {
        ... on ComponentUnderHeaderHero {
          __typename
          id
          title
          subtitle
          backgroundImage {
            alternativeText
            url
          }
        }
        ... on ComponentInfoAbout {
          __typename
          id
          title
          content
          image {
            alternativeText
            url
          }
        }
      }
    }
  }
`;

export function useHomePage() {
  return useQuery({
    queryKey: ['homePage'],
    queryFn: async () => {
      const data = await graphqlClient.request(GET_HOME_PAGE);
      return data.homePages?.[0];
    },
  });
}
