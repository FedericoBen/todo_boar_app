import styles from "./App.module.scss";
import LoginPage from "./pages/LoginPage/LoginPage";
import PageTodoList from "./pages/TodoListPage/PageTodoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//#252B48 #445069 #5B9A8B #F7E987

function App() {
  return (
    <div className={styles.container_app}>
      <div className={styles.container_components}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/list" element={<PageTodoList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
