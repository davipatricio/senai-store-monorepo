import { z } from 'zod';

export const env = z
  .object({
    WEBSITE_URL: z.string().min(1).default('http://localhost:3000')
  })
  .parse(process.env);
