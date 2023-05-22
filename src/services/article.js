import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';



export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '37e67c2e7emsh1eae83ee2f16daap1f485ajsn71b7292e51cb');
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => 'test'})
    }),

});