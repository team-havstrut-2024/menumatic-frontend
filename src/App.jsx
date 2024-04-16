import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePagePresenter from "./homepage/homePagePresenter"
import DanielTestPresenter from "./test/danielTestPresenter";
import RecommendationPagePresenter from "./recommendation_page/recommendationPagePresenter";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/daniel-test" element={<DanielTestPresenter/>}/>
        <Route path="/recommendation" element={<RecommendationPagePresenter/>}/>
        <Route path="/homepage-test" element={<HomePagePresenter/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
