'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient({
    // Optional: Configure default options here
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
        },
    },
});

export function ReactQueryProvider({ children }: { children: React.ReactNode }) {
    // Wrap your children with the QueryClientProvider
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
