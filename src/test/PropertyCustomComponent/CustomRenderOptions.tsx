import { IFormBuilderProps } from "../../formbuilder/components/FormBuilder";
import { MyFormItemCustomPropRender } from "./MyFormItemCustomPropRender";

export const customRenderOptions: IFormBuilderProps<MyFormItemCustomPropRender> = {
    itemType: MyFormItemCustomPropRender,
    item: { id: "test1", name: 'Esbend', age: 42, custom: "This is the value from the item property" } as MyFormItemCustomPropRender 
}