export enum InputTypes {
    BUTTON = "button",
    CHECKBOX = "checkbox",
    COLOR = "color",
    DATE = "date",
    DATETIME_LOCAL = "datetime-local",
    EMAIL = "email",
    FILE = "file",
    HIDDEN = "hidden",
    IMAGE = "image",
    MONTH = "month",
    NUMBER = "number",
    PASSWORD = "password",
    RADIO = "radio",
    RANGE = "range",
    RESET = "reset",
    SEARCH = "search",
    SUBMIT = "submit",
    TEL = "tel",
    TEXT = "text",
    TIME = "time",
    URL = "url",
    WEEK = "week",
    ARRAY_INPUT = "array-input",
    OBJECT_INPUT = "object-input"
}

export enum DataTypes {
    STRING = "string",
    NUMBER = "number",
    BOOLEAN = "boolean",
    OBJECT = "object",
    ARRAY = "array"
}

export interface IField {
    id: string
    name: string
    label: string
    placeholder?: string
    inputType?: InputTypes
    dataType?: DataTypes
    dataSubType?: DataTypes
    choices?: string[]
    regex?: string
    minLength?: number
    maxLength?: number
    min?: number
    max?: number
    parentFieldId?: string
    createdAt: string
    updatedAt: string
    nestedFields?: IField[]
}
