export interface IProfile{
    routeLink:string;
    label:string;
    icon?:string;
    expanded?:string;
    submenuLevel1?:IProfile[];
}