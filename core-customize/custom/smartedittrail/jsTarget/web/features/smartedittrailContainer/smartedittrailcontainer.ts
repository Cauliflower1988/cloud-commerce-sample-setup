/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SeEntryModule } from 'smarteditcommons';
import { DummyInterceptor } from './DummyInterceptor';

@SeEntryModule('smartedittrailContainer')
@NgModule({
    imports: [BrowserModule, UpgradeModule],
    declarations: [],
    entryComponents: [],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: DummyInterceptor,
            multi: true
        }
    ]
})
export class SmartedittrailContainerModule {}
