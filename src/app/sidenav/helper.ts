export interface INavbarData{
    routeLink:string;
    label:string;
    icon?:string;
    expanded?:string;
    submenuLevel1?:INavbarData[];
}