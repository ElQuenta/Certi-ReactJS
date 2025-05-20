import ButtonComponent from "./ButtonComponent";

interface FormComponentProps {
    refran: string;
    refranes: string[];
    setRefran: (refran: string) => void;
    setRefranes: React.Dispatch<React.SetStateAction<string[]>>;
}

export const FormComponent: React.FC<FormComponentProps> = ({ refran, refranes, setRefran, setRefranes }) => {
    const addRefran = () => {
        if (refran.trim() === "") {
            alert("No se puede guardar un refrán vacío");
            return;
        }
        setRefranes((prevRefranes) => [...prevRefranes, refran]);
        setRefran("");
    };

    const clearRefran = () => {
        if (refranes.length === 0) {
            alert("No hay refranes para borrar");
            return;
        }
        setRefranes([]);
    }

    return (
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Ingrese un Refran
                        </label>
                        <input
                            type="text" name="refran" id="refran"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="ngrese las palabras sabias del minibusero"
                            value={refran}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRefran(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-row justify-center gap-2">
                        <ButtonComponent text="Guardar Refran" onClick={addRefran} type="submit" />
                        <ButtonComponent text="Borrar refranes" onClick={clearRefran} />
                    </div>
                </form>
            </div>
        </div>
    )
};