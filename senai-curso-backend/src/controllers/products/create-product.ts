import { CreateProductData, CreateProductDto } from '@/dtos/create-product';
import { db } from '@/helpers/db';
import { created } from '@/helpers/response';
import type { AppInstance } from '@/index';
import { v4 as uuidv4 } from 'uuid';

export async function createProduct(app: AppInstance) {
  app.post(
    '/',
    {
      schema: {
        body: CreateProductDto
      }
    },
    async (request, reply) => {
      const products = (db.get('products') ?? []) as CreateProductData[];

      products.push({
        id: uuidv4(),
        ...request.body
      });

      db.set('products', products)

      created(reply);
    }
  );
}
