import { useState } from "react";
import "./App.css";
import Node from "./Node";
import treeData from "./tree";
import Test from "./Test";
import Button from "./Button";

const calculateDeps = (data, parentDeps = 0) => {
    const newData = { ...data, deps: parentDeps + 1, isChecked: true };
    if (newData.chlid_menu_list.length !== 0) {
        newData.chlid_menu_list = newData.chlid_menu_list.map((el) => {
            return calculateDeps(el, newData.deps);
            // el.isChecked = true;
        });
    } else {
        newData.leaf = true;
    }
    return newData;
};

function App() {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount((pre) => pre + 1);
    };
    const decrease = () => {
        setCount((pre) => pre - 1);
    };

    const [calcTreeData, setCalcTreeData] = useState(calculateDeps(treeData));

    const changeTreeData = (nodes, e, find_numb) => {
        let result = changeIschecked(nodes, e, find_numb);
        setCalcTreeData(JSON.parse(JSON.stringify(result)));
    };

    const changeIschecked = (nodes, e, find_numb) => {
        if (nodes?.menu_numb === find_numb) {
            nodes.isChecked = e.target.checked;
            function loopCheckFn(node) {
                if (node.chlid_menu_list.length <= 0) return;
                for (let i = 0; i < node.chlid_menu_list.length; i++) {
                    node.chlid_menu_list[i].isChecked = e.target.checked;
                    if (!node.chlid_menu_list[i].leaf) {
                        loopCheckFn(node.chlid_menu_list[i]);
                    }
                    // return;
                }
            }
            loopCheckFn(nodes);
            return nodes;
        } else {
            if (nodes.leaf) return;

            for (let i = 0; i < nodes?.chlid_menu_list.length; i++) {
                let foundNode = changeIschecked(nodes?.chlid_menu_list[i], e, find_numb); //값을 찾았으니까 찾은 부모도 foundNode에 담기는게 아닐까
                if (foundNode) {
                    nodes.chlid_menu_list[i] = foundNode;
                    const isAllChecked = nodes?.chlid_menu_list.every((el) => el.isChecked === false);
                    isAllChecked ? (nodes.isChecked = false) : (nodes.isChecked = true);

                    return nodes;
                }
            }
            return nodes;
        }
    };

    return (
        <div>
            <Test key={Math.random()} num={count}></Test>
            <Button onClick={increase}>더하기</Button>
            <Button onClick={decrease}>빼기</Button>
            <br />
            <Node nodes={calcTreeData} data={calcTreeData} changeTreeData={changeTreeData} />
            <button
                onClick={() => {
                    console.log(calcTreeData);
                }}
            >
                데이터 확인
            </button>
        </div>
    );
}

export default App;
