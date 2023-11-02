'use client'
import { ApolloProvider } from "@apollo/client";
import client from "~/lib/apolloClient";
import Layout from "~/lib/layout";
import { Providers } from "~/lib/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jb">
      <body>
        <ApolloProvider client={client}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </ApolloProvider>
      </body>
    </html>
  );
}