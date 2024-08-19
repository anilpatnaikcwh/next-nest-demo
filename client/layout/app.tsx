import { AppBar, Container } from "@mui/material";
import { Header } from "@/layout";

export function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppBar position="sticky" color="default" elevation={0}>
        <Container maxWidth="lg">
          <Header />
        </Container>
      </AppBar>
      <Container maxWidth="lg" className="mt-10">
        {children}
      </Container>
    </>
  );
}
