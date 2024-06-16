import { Component, createSignal } from "solid-js"
import { SetStoreFunction, Store } from "solid-js/store"
import { IField } from "../interfaces/form-field"
import DynamicFormFieldInput from "./DynamicFormFieldInput"
import { IForm } from "../interfaces/form"

interface Props {
    form: IForm
    field: IField
    instance?: number
    setFormValues: SetStoreFunction<{
        [key: string]: any
    }>
    formValues: Store<{ [key: string]: any }>
    formPath: (string | number)[]
}

const DynamicFormField: Component<Props> = (props: Props) => {
    const instanceString =
        props.instance !== undefined ? props.instance.toString() : ""
    console.log(`
        Field Name: ${props.field.name}
        Field Instance: ${instanceString}
        Field Length: ${props.field.fields.length}
        Form Path: ${props.formPath}`)
    const [getCount, setCount] = createSignal<number>(1)
    if (props.field.fields.length === 0) {
        // console.log("No fields found.")
        return (
            <DynamicFormFieldInput
                form={props.form}
                field={props.field}
                instance={props.instance}
                setFormValues={props.setFormValues}
                formValues={props.formValues}
                formPath={props.formPath}
            />
        )
    } else {
        // console.log("Fields found.")
        const formFieldLabel = `${props.field.label} ${instanceString}`
        const formFieldName = `${props.field.name}${instanceString}`
        if (props.field.inputType === "arrayForm") {
            props.setFormValues(formFieldName, [])
        } else {
            if (props.formPath.at(-1) === props.field.name) {
                // Made sure the nestedForm is not a part of arrayForm
                props.setFormValues(formFieldName, {})
            }
        }
        return (
            <div class="border-gray-400 border rounded p-2 my-2">
                {props.field.inputType === "arrayForm" ? (
                    // If the input type is an arrayForm, render the fields as an array
                    <div>
                        {props.field.fields.map((field: IField) => {
                            return (
                                <div>
                                    <div class="flex justify-between items-center">
                                        <h1 class="w-full">{formFieldLabel}</h1>
                                        <button
                                            class="border rounded-full px-4 py-2 bg-black text-white text-lg"
                                            type="button"
                                            onClick={(e: Event) => {
                                                setCount(getCount() + 1)
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                    {Array.from(
                                        { length: getCount() },
                                        (x, i) => i
                                    ).map(i => {
                                        props.setFormValues(
                                            formFieldName,
                                            i,
                                            {}
                                        )
                                        return (
                                            <DynamicFormField
                                                form={props.form}
                                                field={field}
                                                instance={i + 1}
                                                setFormValues={
                                                    props.setFormValues
                                                }
                                                formValues={props.formValues}
                                                formPath={[
                                                    ...props.formPath,
                                                    i
                                                ]}
                                            />
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    // If the input type is nestedForm, render the fields as nested forms
                    <div>
                        <h1 class="w-full">{formFieldLabel}</h1>
                        {props.field.fields.map((field: IField) => (
                            <DynamicFormField
                                form={props.form}
                                field={field}
                                instance={props.instance}
                                setFormValues={props.setFormValues}
                                formValues={props.formValues}
                                formPath={[...props.formPath, field.name]}
                            />
                        ))}
                    </div>
                )}
            </div>
        )
    }
}

export default DynamicFormField
