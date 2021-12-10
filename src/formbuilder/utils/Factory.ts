export class Factory {
    create<T>(type: (new () => T)): T {
        return new type();
    }
}