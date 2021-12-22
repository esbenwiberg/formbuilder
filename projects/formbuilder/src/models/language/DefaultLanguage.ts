import { FormDateDayOfWeek, FormDateFirstWeekOfYear, IFormbuilderLanguage } from "./ILanguage";

export const formbuilderDefaultLanguage: IFormbuilderLanguage = {
    texts: {
        areas: {
            form: {
                dateDefaultPlaceholder: "Select date..",
                dropdownFailedFetch: "Failed fetching options!"
            },
            list: {
                searchDefaultPlaceholder: "Search..",
                validationRequirementsNotMet: {
                    title: "Requirements are not met!",
                    desctiption: "Requirements are not met! Are you sure you want to save anyways?",
                    ok: "Yes",
                    cancel: "No"
                }
            },
            common: {
                create: "Create",
                save: "Save",
                cancel: "Cancel",
                schemaNotFound: "Schema not found!",
                loading: "Loading.."
            }
        }
    },
    date: {
        startOfWeek: FormDateDayOfWeek.Monday,
        firsWeekOfYear: FormDateFirstWeekOfYear.FirstFourDayWeek
    }
}