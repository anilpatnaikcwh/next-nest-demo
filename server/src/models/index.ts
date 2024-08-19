import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
export class IResponse<T> {
  @ApiProperty()
  success?: boolean;

  @ApiProperty()
  resource?: T;
}

export class ILookup {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  code?: string;
}

export class IProduct {
  @ApiProperty({ description: "ID" })
  id?: string;

  @ApiProperty({ description: "Product Name" })
  name?: string;

  @ApiProperty({ description: "Product Price" })
  price?: number;

  @ApiProperty({ description: "Product Quantity" })
  quantity?: number;

  @ApiProperty({ description: "Product Hero Image" })
  photo?: string = faker.image.urlLoremFlickr({ category: "nature" });

  @ApiProperty({ description: "Category ID" })
  categoryId?: string;

  lastUpdated?: string;
}
