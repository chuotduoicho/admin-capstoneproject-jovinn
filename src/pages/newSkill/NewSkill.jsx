import "./newSkill.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const NewSkill = ({ inputs, title }) => {

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                </div>
                <div className="right">
                    <form>
                        <div className="formInput">
                            <input
                                type="file"
                                id="file"

                                style={{ display: "none" }}
                            />
                        </div>

                        {inputs.map((input) => (
                            <div className="formInput" key={input.id}>
                                <label>{input.label}</label>
                                <input type={input.type} placeholder={input.placeholder} />
                            </div>
                        ))}
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewSkill;
