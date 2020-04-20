import { getRepository } from 'typeorm';

import Category from '../models/Category';

class CreateCategoryService {
  public async execute(title: string): Promise<Category> {
    const categoryRepository = getRepository(Category);

    let categoryFind = await categoryRepository.findOne({
      where: { title },
    });

    if (!categoryFind) {
      categoryFind = categoryRepository.create({ title });

      categoryFind = await categoryRepository.save(categoryFind);
    }

    return categoryFind;
  }
}

export default CreateCategoryService;
