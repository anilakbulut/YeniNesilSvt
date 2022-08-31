export interface IdeviceData{
    routeLink:string;
    label:string;
    icon?:string;
    expanded?:string;
    submenuLevel1?:IdeviceData[];
}