export enum InputTypes {
    Button = "button",
    Checkbox = "checkbox",
    Color = "color",
    Date = "date",
    DatetimeLocal = "datetime-local",
    Email = "email",
    File = "file",
    Hidden = "hidden",
    Image = "image",
    Month = "month",
    Number = "number",
    Password = "password",
    Radio = "radio",
    Range = "range",
    Reset = "reset",
    Search = "search",
    Submit = "submit",
    Tel = "tel",
    Text = "text",
    Time = "time",
    Url = "url",
    Week = "week"
}

export interface IFieldOptions {
    required?: boolean | null
    arrayMin?: number | null
    arrayMax?: number | null
}

export interface IField {
    id: string
    name: string
    label?: string
    inputType?: string
    dataType?: string
    fields: IField[] | any[]
    options?: IFieldOptions
}
