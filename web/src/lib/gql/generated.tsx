import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddedBy = {
  __typename?: 'AddedBy';
  externalUrls?: Maybe<ExternalUrls>;
  followers?: Maybe<Followers>;
  href?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type Album = {
  __typename?: 'Album';
  albumType?: Maybe<Scalars['String']['output']>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  availableMarkets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  copyrights?: Maybe<Array<Maybe<Copyright>>>;
  externalIds?: Maybe<ExternalIds>;
  externalUrls?: Maybe<ExternalUrls>;
  genres?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  href?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  label?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  popularity?: Maybe<Scalars['Int']['output']>;
  releaseDate?: Maybe<Scalars['String']['output']>;
  releaseDatePrecision?: Maybe<Scalars['String']['output']>;
  restrictions?: Maybe<Restrictions>;
  totalTracks?: Maybe<Scalars['Int']['output']>;
  tracks?: Maybe<AlbumTracks>;
  type?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type AlbumTracks = {
  __typename?: 'AlbumTracks';
  href?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<SimplifiedTrack>>>;
  limit?: Maybe<Scalars['Int']['output']>;
  next?: Maybe<Scalars['String']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Artist = {
  __typename?: 'Artist';
  externalUrls?: Maybe<ExternalUrls>;
  followers?: Maybe<Followers>;
  genres?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  href?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  name?: Maybe<Scalars['String']['output']>;
  popularity?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type ComplexInput = {
  field1?: InputMaybe<Scalars['String']['input']>;
  field2?: InputMaybe<Scalars['Int']['input']>;
  field3?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Copyright = {
  __typename?: 'Copyright';
  text?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ExternalIds = {
  __typename?: 'ExternalIds';
  ean?: Maybe<Scalars['String']['output']>;
  isrc?: Maybe<Scalars['String']['output']>;
  upc?: Maybe<Scalars['String']['output']>;
};

export type ExternalUrls = {
  __typename?: 'ExternalUrls';
  spotify?: Maybe<Scalars['String']['output']>;
};

export type Followers = {
  __typename?: 'Followers';
  href?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Image = {
  __typename?: 'Image';
  height?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type LinkedFrom = {
  __typename?: 'LinkedFrom';
  externalUrls?: Maybe<ExternalUrls>;
  href?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type Owner = {
  __typename?: 'Owner';
  displayName?: Maybe<Scalars['String']['output']>;
  externalUrls?: Maybe<ExternalUrls>;
  followers?: Maybe<Followers>;
  href?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type Playlist = {
  __typename?: 'Playlist';
  collaborative?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  externalUrls?: Maybe<ExternalUrls>;
  followers?: Maybe<Followers>;
  href?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Owner>;
  public?: Maybe<Scalars['Boolean']['output']>;
  snapshotId?: Maybe<Scalars['String']['output']>;
  tracks?: Maybe<PlaylistTracks>;
  type?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type PlaylistTrack = {
  __typename?: 'PlaylistTrack';
  addedAt?: Maybe<Scalars['String']['output']>;
  addedBy?: Maybe<AddedBy>;
  isLocal?: Maybe<Scalars['Boolean']['output']>;
  track?: Maybe<Track>;
};

export type PlaylistTracks = {
  __typename?: 'PlaylistTracks';
  href?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<PlaylistTrack>>>;
  limit?: Maybe<Scalars['Int']['output']>;
  next?: Maybe<Scalars['String']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  playlist?: Maybe<Playlist>;
};


export type QueryPlaylistArgs = {
  id?: InputMaybe<ComplexInput>;
};

export type Restrictions = {
  __typename?: 'Restrictions';
  reason?: Maybe<Scalars['String']['output']>;
};

export type SimplifiedTrack = {
  __typename?: 'SimplifiedTrack';
  artists?: Maybe<Array<Maybe<Artist>>>;
  availableMarkets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  discNumber?: Maybe<Scalars['Int']['output']>;
  durationMs?: Maybe<Scalars['Int']['output']>;
  explicit?: Maybe<Scalars['Boolean']['output']>;
  externalUrls?: Maybe<ExternalUrls>;
  href?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isLocal?: Maybe<Scalars['Boolean']['output']>;
  isPlayable?: Maybe<Scalars['Boolean']['output']>;
  linkedFrom?: Maybe<LinkedFrom>;
  name?: Maybe<Scalars['String']['output']>;
  previewUrl?: Maybe<Scalars['String']['output']>;
  restrictions?: Maybe<Restrictions>;
  trackNumber?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type Track = {
  __typename?: 'Track';
  album?: Maybe<Album>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  availableMarkets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  discNumber?: Maybe<Scalars['Int']['output']>;
  durationMs?: Maybe<Scalars['Int']['output']>;
  explicit?: Maybe<Scalars['Boolean']['output']>;
  externalIds?: Maybe<ExternalIds>;
  externalUrls?: Maybe<ExternalUrls>;
  href?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isLocal?: Maybe<Scalars['Boolean']['output']>;
  isPlayable?: Maybe<Scalars['Boolean']['output']>;
  linkedFrom?: Maybe<LinkedFrom>;
  name?: Maybe<Scalars['String']['output']>;
  previewUrl?: Maybe<Scalars['String']['output']>;
  restrictions?: Maybe<Restrictions>;
  trackNumber?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type GetPlaylistQueryVariables = Exact<{
  plID: ComplexInput;
}>;


export type GetPlaylistQuery = { __typename?: 'Query', playlist?: { __typename?: 'Playlist', name?: string | null } | null };

export type PlaylistQueryVariables = Exact<{ [key: string]: never; }>;


export type PlaylistQuery = { __typename?: 'Query', playlist?: { __typename?: 'Playlist', tracks?: { __typename?: 'PlaylistTracks', items?: Array<{ __typename?: 'PlaylistTrack', track?: { __typename?: 'Track', name?: string | null, uri?: string | null, type?: string | null } | null } | null> | null } | null } | null };

export type TrackDetailsFragment = { __typename?: 'Track', name?: string | null, uri?: string | null, type?: string | null };

export const TrackDetailsFragmentDoc = gql`
    fragment TrackDetails on Track {
  name
  uri
  type
}
    `;
export const GetPlaylistDocument = gql`
    query getPlaylist($plID: ComplexInput!) {
  playlist(id: $plID) {
    name
  }
}
    `;

/**
 * __useGetPlaylistQuery__
 *
 * To run a query within a React component, call `useGetPlaylistQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlaylistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlaylistQuery({
 *   variables: {
 *      plID: // value for 'plID'
 *   },
 * });
 */
export function useGetPlaylistQuery(baseOptions: Apollo.QueryHookOptions<GetPlaylistQuery, GetPlaylistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlaylistQuery, GetPlaylistQueryVariables>(GetPlaylistDocument, options);
      }
export function useGetPlaylistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlaylistQuery, GetPlaylistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlaylistQuery, GetPlaylistQueryVariables>(GetPlaylistDocument, options);
        }
export function useGetPlaylistSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPlaylistQuery, GetPlaylistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPlaylistQuery, GetPlaylistQueryVariables>(GetPlaylistDocument, options);
        }
export type GetPlaylistQueryHookResult = ReturnType<typeof useGetPlaylistQuery>;
export type GetPlaylistLazyQueryHookResult = ReturnType<typeof useGetPlaylistLazyQuery>;
export type GetPlaylistSuspenseQueryHookResult = ReturnType<typeof useGetPlaylistSuspenseQuery>;
export type GetPlaylistQueryResult = Apollo.QueryResult<GetPlaylistQuery, GetPlaylistQueryVariables>;
export const PlaylistDocument = gql`
    query Playlist {
  playlist {
    tracks {
      items {
        track {
          ...TrackDetails
        }
      }
    }
  }
}
    ${TrackDetailsFragmentDoc}`;

/**
 * __usePlaylistQuery__
 *
 * To run a query within a React component, call `usePlaylistQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlaylistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlaylistQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlaylistQuery(baseOptions?: Apollo.QueryHookOptions<PlaylistQuery, PlaylistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlaylistQuery, PlaylistQueryVariables>(PlaylistDocument, options);
      }
export function usePlaylistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlaylistQuery, PlaylistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlaylistQuery, PlaylistQueryVariables>(PlaylistDocument, options);
        }
export function usePlaylistSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PlaylistQuery, PlaylistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PlaylistQuery, PlaylistQueryVariables>(PlaylistDocument, options);
        }
export type PlaylistQueryHookResult = ReturnType<typeof usePlaylistQuery>;
export type PlaylistLazyQueryHookResult = ReturnType<typeof usePlaylistLazyQuery>;
export type PlaylistSuspenseQueryHookResult = ReturnType<typeof usePlaylistSuspenseQuery>;
export type PlaylistQueryResult = Apollo.QueryResult<PlaylistQuery, PlaylistQueryVariables>;