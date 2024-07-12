import { CreateProductData } from '@/dtos/create-product';
import { db } from '@/helpers/db';
import { ok } from '@/helpers/response';
import type { AppInstance } from '@/index';
import { object, string } from 'zod';

export async function getProduct(app: AppInstance) {
    app.get('/:id', {
        schema: {
            params: object({
                id: string()
            })
        }
    }, async (req, reply) => {
        const products = (db.get('products') ?? []) as CreateProductData[];
        const product = products.find(p => p.id === req.params.id);

        ok(reply, product);
    });
}
