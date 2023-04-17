/* eslint-disable sonarjs/prefer-immediate-return */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import jwt_decode from 'jwt-decode';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import { Auth } from '@/api/auth';
import { IDecodeToken, IUserData, IUserDataError } from '@/types/DTO/Auth';

const GOOGLE_AUTHORIZATION_URL =
  'https://accounts.google.com/o/oauth2/v2/auth?' +
  new URLSearchParams({
    prompt: 'consent',
    access_type: 'offline',
    response_type: 'code',
  });

const refreshAccessToken = async (token: any, provider: any) => {
  const refreshTokens = await Auth.refreshToken({
    Authorization: token.refresh_token,
  })
    .then((res) => ({
      ...token,
      access_token: res.data.data.access_token,
    }))
    .catch((err) => ({
      ...token,
      error: 'RefreshAccessTokenError',
    }));
  return refreshTokens;
};

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: GOOGLE_AUTHORIZATION_URL as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      //@ts-ignore
      async authorize(credentials: { email: string; password: string }) {
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };
        const user = await Auth.loginWithCredential(payload)
          .then((res: { data: IUserData }) => res.data)
          .catch((err: { response: { data: IUserDataError } }) =>
            console.log(err.response.data, 'err')
          );
        return user;
      },
    }),
  ],
  callbacks: {
    //@ts-ignore
    async jwt({ token, user, account }) {
      if (account && user) {
        if (account.provider === 'credentials') {
          return user.data;
        } else {
          const OAuthInfo = {
            access_token: account.access_token as string,
            provider: account.provider as 'facebook' | 'google',
          };
          await Auth.loginWithOAuth(OAuthInfo)
            .then((res) => {
              token.access_token = res.data.data.access_token;
              token.refresh_token = res.data.data.refresh_token;
            })
            .catch((err) => console.log(err, 'err'));
        }
      }

      // Return previous token if the access token has not expired yet
      //@ts-ignore
      const decoded: IDecodeToken = jwt_decode(token.access_token);
      if (new Date().getTime() / 1000 < decoded.exp) {
        return token;
      }

      // Access token has expired, try to update it
      return refreshAccessToken(token, account);
    },

    async session({ session, token }) {
      session.accessToken = token.access_token as string;
      session.refreshToken = token.refresh_token as string;

      return session;
    },
  },

  theme: {
    colorScheme: 'auto', // "auto" | "dark" | "light"
    brandColor: '#875AE7', // Hex color code
    logo: '', // Absolute URL to image
    buttonText: '#FFFFFF', // Hex color code
  },
};
export default NextAuth(authOptions);
