// src/routes/+page.server.ts

import prisma from '$lib/prisma';
import type { PageServerLoad } from '../.svelte-kit/types/src/routes/$types';

export const load = (async () => {
// 1.
const response = await prisma.post.findMany({
    where: { published: true },
    include: { author: true },
  })

  console.log(`response`, response);

// 2.
return { feed: response };
}) satisfies PageServerLoad;