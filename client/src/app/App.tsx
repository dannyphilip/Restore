import { useEffect, useState } from "react";
import { Product } from "./models/product";
import Catalog from "../features/catalog/Catalog";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import NavBar from "./layout/NavBar";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const palletteType = darkMode ? "dark" : "light";

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: palletteType,
      background: { default: palletteType === "light" ? "#eaeaea" : "#121212" },
    },
  });

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <Box
        sx={{
          minHeight: "100vh",
          background: darkMode
            ? "radial-gradient(circle,#1e3aba,#111b27)"
            : "radial-gradient(circle,#f0f9ff)",
          py: 6,
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 14 }}>
          <Catalog products={products} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
export default App;
