import axios from 'axios'
import data from './data'

      

export default{

               



    // getProjectSummary(project_id) {
    //     let queryURL = `https://energy-logan.herokuapp.com/api/projects/${project_id}`

    //     return axios.get(queryURL).then(function(response) {
    //             console.log("response.data", response.data)
    //             if (response.data) {
    //                 // console.log("formatted", response.data.response.docs)
    //                 return response.data
    //             }
    //             // If we don't get any results, return an empty string
    //             return "";
    //     });
    // }

    getUserProjects(user_id) {

        let projArr = data.userObj.projects
        return projArr

        // return axios.get(queryURL).then(function(response) {
        //         console.log("response.data", response.data)
        //         if (response.data) {
        //             // console.log("formatted", response.data.response.docs)
        //             return response.data
        //         }
        //         // If we don't get any results, return an empty string
        //         return "";
        // });
    },

    getProjectIncentives(project_id) {
        let project = data.projects.project_id
        console.log("PROJECT",project)
    },






};







