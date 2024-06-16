import { Component, createSignal } from "solid-js"
import { SetStoreFunction, Store } from "solid-js/store"
import { IField, IForm } from "../interfaces"

interface Props {
    form: IForm
    field: IField
    index?: number
    setFormValues: SetStoreFunction<{
        [key: string]: any
    }>
    formValues: Store<{ [key: string]: any }>
    formPath: (string | number)[]
}

const DynamicFormFieldInput: Component<Props> = (props: Props) => {
    const inputId = `${props.form.id}-${props.field.id}${props.index !== undefined ? props.index + 1 : ""}`
    const inputName = `${props.field.name}${props.index !== undefined ? props.index + 1 : ""}`
    switch (props.field.inputType) {
        case "submit":
            return (
                <div class="w-full my-4">
                    <input
                        id={inputId}
                        name={inputName}
                        class="border-gray-500 border rounded w-full bg-blue-500 text-white"
                        type={props.field.inputType}
                        value={props.field.label}
                        onclick={(e: Event) => {
                            e.preventDefault()
                            console.log("Clicked and submitted form!")
                            console.log("Below is the form values:")
                            console.log(props.formValues)
                        }}
                    />
                </div>
            )
        default:
            const [getInputValue, setInputValue] = createSignal<
                string | number | undefined
            >("")
            return (
                <div class="w-full my-4">
                    <label
                        class="w-full my-2"
                        for={inputId}
                        hidden={props.field.inputType === "submit"}
                    >
                        {props.field.label}
                        {/* Put in the * mark if the field is required */}
                        <span
                            hidden={
                                !(
                                    props.field.options !== undefined &&
                                    props.field.options.required !==
                                        undefined &&
                                    props.field.options.required === true
                                )
                            }
                        >
                            *
                        </span>
                    </label>
                    <br />
                    <input
                        class="border-gray-500 border rounded w-full"
                        type={props.field.inputType}
                        id={inputId}
                        name={inputName}
                        value={getInputValue()}
                        onInput={e => {
                            setInputValue((e.target as HTMLInputElement).value)
                            console.log(props.formPath)
                            props.setFormValues(
                                // @ts-ignore
                                ...props.formPath,
                                (e.target as HTMLInputElement).value
                            )
                            console.log(props.formValues)
                        }}
                        autocomplete="on"
                    />
                </div>
            )
    }
}

export default DynamicFormFieldInput
