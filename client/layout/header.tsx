import NextLink from "next/link";
import { Box, Toolbar } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { NavType } from "@/utils";

const pages = [
  { name: "home", url: NavType.Home },
  { name: "products", url: NavType.Products }
];

export function Header() {
  return (
    <Toolbar>
      <AdbIcon className="mr-2" />
      <NextLink href={NavType.Home} className="no-underline text-inherit">
        NEXT NEST DEMO
      </NextLink>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          gap: 2,
          marginLeft: "2rem"
        }}>
        {pages.map(page => (
          <NextLink key={page.name} href={page.url} className="no-underline uppercase text-inherit">
            {page.name}
          </NextLink>
        ))}
      </Box>
    </Toolbar>
  );
}
