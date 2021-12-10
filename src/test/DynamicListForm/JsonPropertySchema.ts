export interface IJsonPropertySchema {
    MemberType: string;
    Name: string;
    SourceId: string;
    Type: string;
    IsStandard: boolean;
    IsNullable: boolean;
    DataAnnotations: Array<any>; // what is this? (ewi)
    ElementType: IJsonMemberSchema;
    Values: Array<{ [name: string] : number; }>;
}

export interface IJsonMemberSchema extends IJsonPropertySchema {
    Properties: Array<IJsonPropertySchema>;
}