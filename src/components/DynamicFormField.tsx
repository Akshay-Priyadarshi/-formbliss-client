import { Component, For, JSX } from "solid-js"
import { createStore, SetStoreFunction, Store } from "solid-js/store"
import { IField, IForm } from "../interfaces"
import DynamicFormFieldInput from "./DynamicFormFieldInput"
import { AiOutlineCloseCircle } from "solid-icons/ai"
import { AiTwotonePlusCircle } from "solid-icons/ai"

interface Props {
    form: IForm
    field: IField
    index?: number
    deleteArrayField?: (index: number) => void
    setFormValues: SetStoreFunction<{
        [key: string]: any
    }>
    formValues: Store<{ [key: string]: any }>
    formPath: (string | number)[]
    inputSequenceTypes: (string | undefined)[]
}

const DynamicFormField: Component<Props> = (props: Props) => {
    console.log(`
        Field Name: ${props.field.name}
        Field Index: ${props.index}
        Field Length: ${props.field.fields.length}
        Form Path: ${props.formPath}
        Input Sequence Types: ${props.inputSequenceTypes}`)

    const [arrayFields, setArrayFields] = createStore<
        (JSX.Element | Element)[]
    >([])

    const deleteArrayField = (index?: number) => {
        // @ts-ignore
        props.setFormValues(...props.formPath, (prev: Array<any>) =>
            prev.filter((_: any, i: number) => i !== index)
        )
        setArrayFields(fields => fields.filter((_, i) => i !== index))
    }

    const addArrayField = (field: IField, label: string) => {
        const lengthBeforeAdding = arrayFields.length
        // @ts-ignore
        props.setFormValues(...props.formPath, lengthBeforeAdding, {})
        const newArrayField = (
            <div>
                <DynamicFormField
                    form={props.form}
                    field={field}
                    index={lengthBeforeAdding}
                    setFormValues={props.setFormValues}
                    deleteArrayField={deleteArrayField}
                    formValues={props.formValues}
                    formPath={[...props.formPath, lengthBeforeAdding]}
                    inputSequenceTypes={[
                        ...props.inputSequenceTypes,
                        field.inputType
                    ]}
                />
            </div>
        )
        setArrayFields([...arrayFields, newArrayField])
    }

    if (props.field.fields.length === 0) {
        // console.log("No fields found.")
        return (
            <DynamicFormFieldInput
                form={props.form}
                field={props.field}
                index={props.index}
                setFormValues={props.setFormValues}
                formValues={props.formValues}
                formPath={props.formPath}
            />
        )
    } else {
        // console.log("Fields found.")
        const complexFieldLabel = `${props.field.label} ${props.index !== undefined ? props.index + 1 : ""}`
        const complexFieldName = `${props.field.name}${props.index !== undefined ? props.index : ""}`
        if (props.field.inputType === "arrayForm") {
            // @ts-ignore
            props.setFormValues(...props.formPath, [])
        } else {
            if (props.formPath.at(-1) === props.field.name) {
                // Made sure the nestedForm is not a part of arrayForm
                props.setFormValues(complexFieldName, {})
            }
        }
        return (
            <div class="border border-gray-300 rounded-md p-2 my-2">
                <h1
                    class="w-full"
                    hidden={props.field.inputType === "nestedForm"}
                >
                    {complexFieldLabel}
                </h1>
                {props.field.fields.map((field: IField) => (
                    <>
                        <span hidden={props.field.inputType !== "arrayForm"}>
                            <button
                                type="button"
                                class="border border-gray-700 rounded-md p-1 flex justify-evenly items-center"
                                onClick={(e: Event) => {
                                    addArrayField(field, complexFieldLabel)
                                }}
                            >
                                Add More
                                <AiTwotonePlusCircle color="green" size={36} />
                            </button>
                        </span>
                        {props.field.inputType === "arrayForm" ? (
                            <For each={arrayFields}>
                                {(arrayField, i) => (
                                    <div class="border px-2 py-1 my-1 rounded-md border-gray-300">
                                        <div class="flex justify-between items-center">
                                            <h1
                                                class="w-full"
                                                hidden={
                                                    props.field.inputType ===
                                                    "nestedForm"
                                                }
                                            >
                                                {props.field.label} {i() + 1}
                                            </h1>
                                            <span>
                                                <AiOutlineCloseCircle
                                                    onClick={() =>
                                                        deleteArrayField(i())
                                                    }
                                                    color="red"
                                                    size={30}
                                                />
                                            </span>
                                        </div>
                                        {arrayField}
                                    </div>
                                )}
                            </For>
                        ) : (
                            <DynamicFormField
                                form={props.form}
                                field={field}
                                index={props.index}
                                setFormValues={props.setFormValues}
                                formValues={props.formValues}
                                formPath={[...props.formPath, field.name]}
                                inputSequenceTypes={[
                                    ...props.inputSequenceTypes,
                                    field.inputType
                                ]}
                            />
                        )}
                    </>
                ))}
            </div>
        )
    }
}

export default DynamicFormField
