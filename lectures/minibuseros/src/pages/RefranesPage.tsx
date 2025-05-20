import { useState } from "react";
import TitleComponent from "../components/TitleComponent";
import { FormComponent } from "../components/FormComponent";
import { ListComponent } from "../components/ListComponent";

function RefranesPage() {
    const [refran, setRefran] = useState<string>("");
    const [refranes, setRefranes] = useState<string[]>([]);

    return (
        <>
            <div className="flex justify-center min-h-screen bg-gray-100 p-4">
                <div className="flex-col" >
                    <TitleComponent/>
                    <div className="flex flex-col gap-4 mb-4">
                        <FormComponent
                            refran={refran}
                            refranes={refranes}
                            setRefran={setRefran}
                            setRefranes={setRefranes}
                            />
                    </div>
                    <ListComponent refranes={refranes} />
                </div>
            </div>
        </>
    );
}

export default RefranesPage;