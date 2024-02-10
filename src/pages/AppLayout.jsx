import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import styles from "./AppLayout.module.css";
import User from "../components/User";

function AppLayout() {
  return (
    <>
      <User />
      <div className={styles.app}>
        <Sidebar />
        <Map />
      </div>
    </>
  );
}

export default AppLayout;
