import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddISOYearsComponent} from "./add-isoyears/add-isoyears.component";
import {DifferenceInCalendarISOYearsComponent} from "./difference-in-calendar-isoyears/difference-in-calendar-isoyears.component";
import {DifferenceInISOYearsComponent} from "./difference-in-isoyears/difference-in-isoyears.component";
import {EndOfISOYearComponent} from "./end-of-isoyear/end-of-isoyear.component";
import {GetISOWeeksInYearComponent} from "./get-isoweeks-in-year/get-isoweeks-in-year.component";
import {GetISOYearComponent} from "./get-isoyear/get-isoyear.component";
import {IsSameISOYearComponent} from "./is-same-isoyear/is-same-isoyear.component";
import {IsThisISOYearComponent} from "./is-this-isoyear/is-this-isoyear.component";
import {LastDayOfISOYearComponent} from "./last-day-of-isoyear/last-day-of-isoyear.component";
import {SetISOYearComponent} from "./set-isoyear/set-isoyear.component";
import {SubISOYearsComponent} from "./sub-isoyears/sub-isoyears.component";
import {StartOfISOYearComponent} from "./start-of-isoyear/start-of-isoyear.component";

const routes: Routes = [
  {path: 'addISOYears', component: AddISOYearsComponent, data: { info: 'iSO-Week-Numbering/addISOYears'}},
  {path: 'differenceInCalendarISOYears', component: DifferenceInCalendarISOYearsComponent, data: { info: 'iSO-Week-Numbering/differenceInCalendarISOYears'}},
  {path: 'differenceInISOYears', component: DifferenceInISOYearsComponent, data: { info: 'iSO-Week-Numbering/differenceInISOYears'}},
  {path: 'endOfISOYear', component: EndOfISOYearComponent, data: { info: 'iSO-Week-Numbering/endOfISOYear'}},
  {path: 'getISOWeeksInYear', component: GetISOWeeksInYearComponent, data: { info: 'iSO-Week-Numbering/getISOWeeksInYear'}},
  {path: 'getISOYear', component: GetISOYearComponent, data: { info: 'iSO-Week-Numbering/getISOYear'}},
  {path: 'isSameISOYear', component: IsSameISOYearComponent, data: { info: 'iSO-Week-Numbering/isSameISOYear'}},
  {path: 'isThisISOYear', component: IsThisISOYearComponent, data: { info: 'iSO-Week-Numbering/isThisISOYear'}},
  {path: 'lastDayOfISOYear', component: LastDayOfISOYearComponent, data: { info: 'iSO-Week-Numbering/lastDayOfISOYear'}},
  {path: 'setISOYear', component: SetISOYearComponent, data: { info: 'iSO-Week-Numbering/setISOYear'}},
  {path: 'subISOYears', component: SubISOYearsComponent, data: { info: 'iSO-Week-Numbering/subISOYears'}},
  {path: 'startOfISOYear', component: StartOfISOYearComponent, data: { info: 'iSO-Week-Numbering/startOfISOYear'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IsoWeekNumberRoutingModule { }
