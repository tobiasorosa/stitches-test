import { gql } from '@apollo/client';

import { MegaMenuFragment } from './fragments/menu';

/**
 * Get Calculator Post
 *
 */
export const GET_CALCULATOR = gql`
  query GET_CALCULATOR($uri: String) {
    calculadora: calculadoraBy(uri: $uri) {
      id
      slug
      uri
      link
      status
      date
      modified
      title
      excerpt
      customFieldCalculadoras {
        taxaSelic
        subtituloCalculadora
        urlConsulta
        conteudoCalcularResultado
        conteudoComplementar
        conteudoResultadoAnuncio
        tituloFormulario
        relacionadas {
          ... on Calculadora {
            id
            featuredImage {
              node {
                altText
                sourceUrl
                __typename
              }
            }
            link
            title
          }
        }
      }
      content(format: RAW)
      calculadorasCategorias {
        nodes {
          id
          name
          link
          slug
          uri
        }
      }
      seo {
        breadcrumbs {
          text
          url
        }
        canonical
        title
        metaDesc
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphAuthor
        opengraphDescription
        opengraphUrl
        opengraphTitle
        opengraphImage {
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
        opengraphSiteName
        opengraphPublishedTime
        opengraphModifiedTime
        twitterTitle
        twitterDescription
        twitterImage {
          sourceUrl
        }
      }
      saswpSchema {
        json_ld
      }
    }
    ${MegaMenuFragment}
  }
`;
