"use client";
import { useState } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import { IProduct } from "@/models";
import { getPubProductsAsync } from "@/services";
import { Products } from "./products";

export function LoadMore({ products }: { products: IProduct[] }) {
  const [pageData, setPageData] = useState<IProduct[]>(products);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    const newItems = await getPubProductsAsync(pageNum);
    await new Promise(resolve => setTimeout(resolve, 2000));
    if (newItems?.length > 0) {
      setPageData(prevItems => [...prevItems, ...newItems]);
      setPageNum(pageNum + 1);
    }
    setLoading(false);
  };

  return (
    <>
      <Products products={pageData} />
      <Box className="flex items-center justify-center my-10" sx={{ position: "relative" }}>
        <Button
          type="button"
          size="small"
          variant="contained"
          onClick={getProducts}
          disabled={loading}>
          Load More
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: "green",
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-12px",
              marginLeft: "-12px"
            }}
          />
        )}
      </Box>
    </>
  );
}
