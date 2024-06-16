import { type Component } from "solid-js"
import { createStore } from "solid-js/store"
import { IForm } from "../interfaces/form"
import DynamicFormField from "./DynamicFormField"

interface Props {
    form: IForm
}

const DynamicForm: Component<Props> = (props: Props) => {
    const [formValues, setFormValues] = createStore<{ [key: string]: any }>({})

    return (
        <div class="w-1/2 flex flex-col items-center bg-slate-100 border rounded-md border-green-400 p-4">
            <h1 class="text-3xl font-light">{props.form.label}</h1>
            <form
                id={props.form.id}
                name={props.form.name}
                action="http://localhost:3000/api/register"
                method="post"
                class="w-full"
            >
                {props.form.fields.map(field => (
                    <DynamicFormField
                        form={props.form}
                        field={field}
                        setFormValues={setFormValues}
                        formValues={formValues}
                        formPath={[field.name]}
                    />
                ))}
            </form>
        </div>
    )
}

export default DynamicForm
