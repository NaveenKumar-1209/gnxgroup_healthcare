import styles from "./app.module.css";
import Header from "./components/Header";
import TreatmentSection from "./components/TreatmentSection";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <TreatmentSection />
    </div>
  );
}

export default App;
