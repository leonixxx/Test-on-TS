import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootInterface } from './type';

export const baseApi = createApi({
	reducerPath: 'baseApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://test.dev-relabs.ru/api/users/list?',
	}),
	endpoints: builder => ({
		getBaseByName: builder.query<RootInterface, number>({
			query: offset => `limit=5&offset=${offset}`,
		}),
		refetchBase: builder.mutation({
			query: ({ offset }) => ({
				url: `limit=5&offset=${offset}`,
				method: 'GET',
			}),
		}),
	}),
});

export const { useGetBaseByNameQuery, useRefetchBaseMutation } = baseApi;
