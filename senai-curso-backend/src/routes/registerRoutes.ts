import type { AppInstance } from '..';
import { productsRouter } from './products';

export async function registerRoutes(app: AppInstance) {
  app.register(productsRouter, { prefix: '/products' });
}
