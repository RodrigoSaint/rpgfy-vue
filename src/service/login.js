import getHttp from "./http";

function LoginService() 
{

}

LoginService.prototype.login = function(player)
{
    return getHttp().post('/login', player)
        then(result => result.data)
}

export default new LoginService(); 