import * as ProductsController from '@/controllers/products';
import type { AppInstance } from '@/index';

export async function productsRouter(app: AppInstance) {
  app.register(ProductsController.createProduct);
  app.register(ProductsController.getProducts);
  app.register(ProductsController.getProduct);
}
