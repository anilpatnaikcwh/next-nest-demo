import NextLink from "next/link";
import { Breadcrumbs, Container } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { getPubProductsAsync } from "@/services";
import { SuspenseComp } from "@/components";
import { LoadMore } from "./loadmore";
import { NavType } from "@/utils";

const getProducts = async () => {
  const products = await getPubProductsAsync();
  await new Promise(resolve => setTimeout(resolve, 2000));
  return products;
};

async function ProductsPage() {
  const products = await getProducts();
  return (
    <SuspenseComp>
      <Container>
        <Breadcrumbs className="my-10" separator={<NavigateNextIcon fontSize="small" />}>
          <NextLink href={NavType.Home} className="no-underline text-inherit">
            Home
          </NextLink>
          <NextLink href={NavType.Products} className="no-underline text-inherit font-bold">
            Products
          </NextLink>
        </Breadcrumbs>
        <LoadMore products={products} />
      </Container>
    </SuspenseComp>
  );
}

export default ProductsPage;
