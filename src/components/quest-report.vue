<template>
  <div>
    <table>
        <thead>
            <tr>
                <td>Between</td>
                <td>Completed</td>
                <td>Failed</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="questReport in questReportCollection">
                <td>{{questReport.range.start}} {{questReport.range.end}}</td>
                <td>{{questReport.completed}}</td>
                <td>{{questReport.failed}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
import QuestReportService from "../service/quest-report";
export default {
    data()
    {
        return { questReportCollection :[] }
    },
    beforeCreate()
    {
        return QuestReportService.get('/quest-report')
            .then(questReportCollection => this.questReportCollection = questReportCollection)
    }
}
</script>
