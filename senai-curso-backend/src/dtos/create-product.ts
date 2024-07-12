import z, { boolean, number, array, object, string } from 'zod';

const PaymentMethods = z.enum(['pix', 'card', 'boleto']);

export type CreateProductData = z.infer<typeof CreateProductDto> & {
  id: string;
};

export const CreateProductDto = object({
  name: string({ message: 'Product name must be a string' })
    .min(1, {
      message: 'Product name is required'
    })
    .max(255, {
      message: 'Product name must be less than 255 characters'
    }),
  description: string({ message: 'Missing product description' }),
  price: number({
    message: 'Price must be set'
  })
    .min(0.01)
    .max(50_000),
  imageBase64: string(),
  freight: number(),
  quantity: number().min(0).max(10_000),
  hasWarranty: boolean().default(false),
  paymentMethods: array(PaymentMethods)
});
