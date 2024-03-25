import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchParams from "./pages/SearchParams";
import Details from "./pages/Details";
function App() {
  const queryClient = new QueryClient();
  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <h1>Adopt Me!</h1>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;