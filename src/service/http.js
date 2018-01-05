import * as axios from "axios";
import CredentialService from "./credential";

export default function GetHttp() 
{
    // var axiosOption = {baseURL: 'https://59f246f5a118a000126fbe97.mockapi.io/' };
    //var axiosOption = {baseURL: 'http://localhost:3000/' };
    var axiosOption = {baseURL: 'https://rpgfy-node.azurewebsites.net/' };    
    var credential = CredentialService.getCredential();
    if(credential) axiosOption.headers = { 'X-Auth-Token': credential }
    return axios.create(axiosOption);
}