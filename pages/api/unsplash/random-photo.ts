// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {createApi} from 'unsplash-js';

const PER_PAGE = 10;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const username = process.env.UNSPLASH_USERNAME ?? 'jstncno';
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;
  if (!accessKey) {
    const errMsg = 'Missing Unsplash API Access Key';
    console.error(errMsg);
    return res.status(500).send(errMsg);
  }

  const unsplash = createApi({ accessKey });

  const total = await unsplash.users.getLikes({username, perPage: 1});
  if (!total.response || total.errors) {
    const errMsg = total.errors[0];
    console.error(errMsg);
    return res.status(500).send(errMsg);
  }

  const page = Math.floor(Math.random()*(total.response.total / PER_PAGE));
  const likes = await unsplash.users.getLikes({username, page});
  if (!likes.response || likes.errors) {
    const errMsg = likes.errors[0];
    console.error(errMsg);
    return res.status(500).send(errMsg);
  }

  const {results} = likes.response;
  const photo = results[Math.floor(Math.random()*results.length)];

  return res.status(200).json(photo);
};
