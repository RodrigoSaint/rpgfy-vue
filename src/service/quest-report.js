import getHttp from "./http";

function QuestReportService() 
{

}

QuestReportService.prototype.get = function get() 
{
    return getHttp().get('/quest-report')
        .then(result => result.data)
}

export default new QuestReportService(); 