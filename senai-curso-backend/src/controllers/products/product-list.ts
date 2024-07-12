import { CreateProductData } from '@/dtos/create-product';
import { db } from '@/helpers/db';
import { ok } from '@/helpers/response';
import type { AppInstance } from '@/index';

export async function getProducts(app: AppInstance) {
  app.get('/', async (_request, reply) => {
    const products = (db.get('products') ?? []) as CreateProductData[];

    ok(reply, products);
  });
}
