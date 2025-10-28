/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetCourseById($documentId: ID!) {\n    course(documentId: $documentId) {\n      documentId\n      title\n      price\n      duration\n      description\n      image {\n        url\n        alternativeText\n      }\n    }\n  }\n": typeof types.GetCourseByIdDocument,
    "\n    query Courses {\n        courses {\n            title\n            slug\n            price\n            duration\n            description\n            documentId\n            image {\n                alternativeText\n                url\n            }\n        }\n    }\n": typeof types.CoursesDocument,
};
const documents: Documents = {
    "\n  query GetCourseById($documentId: ID!) {\n    course(documentId: $documentId) {\n      documentId\n      title\n      price\n      duration\n      description\n      image {\n        url\n        alternativeText\n      }\n    }\n  }\n": types.GetCourseByIdDocument,
    "\n    query Courses {\n        courses {\n            title\n            slug\n            price\n            duration\n            description\n            documentId\n            image {\n                alternativeText\n                url\n            }\n        }\n    }\n": types.CoursesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCourseById($documentId: ID!) {\n    course(documentId: $documentId) {\n      documentId\n      title\n      price\n      duration\n      description\n      image {\n        url\n        alternativeText\n      }\n    }\n  }\n"): typeof import('./graphql').GetCourseByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Courses {\n        courses {\n            title\n            slug\n            price\n            duration\n            description\n            documentId\n            image {\n                alternativeText\n                url\n            }\n        }\n    }\n"): typeof import('./graphql').CoursesDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
