import React from "react";

import List from "./components/List";
import CompareContainer from "./components/CompareContainer";
import styles from "./App.module.scss";

const App: React.FC = () => {
	return (
		<div className={styles.app}>
			<List />
			<CompareContainer />
		</div>
	);
};

export default App;
