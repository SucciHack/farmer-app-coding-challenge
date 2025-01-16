export type categoryProps ={
        id: string,
        title: string,
        slug: string,
        image: string,
        description: string,
        createdAt: string,
        updatedAt: string
}

export type ProductsProps = {
        id: string,
        title: string,
        slug: string,
        description: string,
        rating: string[],
        price: number,
        quantity: number,
        images: string[],
        createdAt: string,
        updatedAt: string,
        categoryId: string
        }