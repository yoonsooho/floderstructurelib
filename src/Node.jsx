import React, { useState } from "react";

const Node = ({ nodes, data, changeTreeData }) => {
    const [toggle, setToggle] = useState(true);
    return (
        <div style={{ paddingLeft: `${data.deps * 10}px` }}>
            <div>
                <input
                    type="checkbox"
                    onChange={(e) => {
                        changeTreeData(nodes, e, data.menu_numb);
                    }}
                    checked={data.isChecked}
                />
                {data.disp_name}
                {data.number}
                {data.leaf || <button onClick={() => setToggle((pre) => !pre)}>토글</button>}
            </div>
            {toggle &&
                data.chlid_menu_list &&
                data.chlid_menu_list.map((el, i) => (
                    <React.Fragment key={i}>
                        <div>
                            <Node nodes={nodes} data={el} changeTreeData={changeTreeData} />
                        </div>
                    </React.Fragment>
                ))}
        </div>
    );
};

export default Node;
