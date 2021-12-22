export const factory = {
    create: <T>(type: (new () => T)): T => {
        return new type();
    }
}