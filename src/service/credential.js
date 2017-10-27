function CredentialService() 
{
    
}

CredentialService.prototype.getCredential = function getCredential()
{
    return localStorage['token'];
}

CredentialService.prototype.setCredential = function setCredential(token)
{
    localStorage['token'] = token;
}

export default new CredentialService();