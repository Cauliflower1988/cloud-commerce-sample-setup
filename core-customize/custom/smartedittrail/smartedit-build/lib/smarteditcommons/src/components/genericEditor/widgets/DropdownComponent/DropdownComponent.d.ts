import { Type } from '@angular/core';
import { GenericEditorWidgetData } from '../../types';
import { FetchAllStrategy, ItemComponentData, SelectItem } from '../../../../components/select';
export declare class DropdownItemPrinterComponent {
    data: ItemComponentData;
    constructor(data: ItemComponentData);
}
export declare class DropdownComponent {
    data: GenericEditorWidgetData<any>;
    itemComponent: Type<any>;
    fetchStrategy: {
        fetchAll: FetchAllStrategy<SelectItem>;
    };
    constructor(data: GenericEditorWidgetData<any>);
}
