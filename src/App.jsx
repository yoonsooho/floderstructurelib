import "./App.css";
import FolderStructure from "./FolderStructure";
import treeData from "./tree";

function App() {
    return (
        <div>
            <FolderStructure data={treeData} />
        </div>
    );
}

export default App;
