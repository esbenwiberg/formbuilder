export interface IFormbuilderLanguage {
    texts: {
        areas: {
            form: {
                dateDefaultPlaceholder: string,
                dropdownFailedFetch: string
            },
            list: {
                searchDefaultPlaceholder: string
                validationRequirementsNotMet: {
                    title: string,
                    desctiption: string,
                    ok: string,
                    cancel: string,
                }
            },
            common: {
                create: string,
                save: string,
                cancel: string,
                schemaNotFound: string,
                loading: string
            }
        }
    },
    date: {
        startOfWeek: FormDateDayOfWeek.Monday,
        firsWeekOfYear: FormDateFirstWeekOfYear.FirstFourDayWeek
    }
}

export enum FormDateFirstWeekOfYear {
    FirstDay = 0,
    FirstFullWeek = 1,
    FirstFourDayWeek = 2
}

export enum FormDateDayOfWeek {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}