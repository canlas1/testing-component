// import axios from 'axios'
import data from './data'

export default {

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

    getProjectIncentives(project_id, kwh_rate) {
        let surveyDatatArr = data.projects[project_id];
        let incentives = {};

        let sumPostOpCost = 0;
        let sumPreOpCost = 0;
        let project_cost =0;
        let rebate_ammount =0;
        let kwh_saved = 0;
        let existingMaintCost = 0;


        surveyDatatArr.map(function(survey){
            let{survey_id, quantity, post_watts, post_price, incentive_fix, hours_operation, pre_watts, } = survey;
            let postOpCost = ((quantity*post_watts*hours_operation)/1000)*kwh_rate;
            let preOpCost = ((quantity*pre_watts*hours_operation)/1000)*kwh_rate;

            sumPostOpCost += postOpCost;
            sumPreOpCost += preOpCost;
            project_cost += (quantity*post_price)
            rebate_ammount += (quantity*incentive_fix)
            kwh_saved += ((quantity*pre_watts*hours_operation)/1000)-((quantity*post_watts*hours_operation)/1000)
            existingMaintCost += (quantity*pre_watts*hours_operation)/1000
        })

        let annual_energy_savings = (sumPreOpCost - sumPostOpCost);
        let net_cost = (project_cost-rebate_ammount)
        let reduced_maintenance_cost = existingMaintCost*0.1 //new fixtures cost 1/10 of what old fixtures cost to maintain
        let maintenance_cost_savings = existingMaintCost*0.9 //you save the other 9/10's when switching
        let payback = net_cost/(annual_energy_savings-reduced_maintenance_cost)
        let roi = (annual_energy_savings+reduced_maintenance_cost)/net_cost
        let ten_year = (net_cost-((annual_energy_savings+reduced_maintenance_cost)*10))*roi

        incentives["sumPostOpCost"] = sumPostOpCost;
        incentives["sumPreOpCost"] = sumPreOpCost;
        incentives["project_cost"] = project_cost;
        incentives["annual_energy_savings"] = (annual_energy_savings);
        incentives["rebate_ammount"] = (rebate_ammount);
        incentives["net_cost"] = (net_cost);
        incentives["kwh_saved"] = kwh_saved;
        incentives["kwh_rate"] = kwh_rate;
        incentives["reduced_maintenance_cost"] = (reduced_maintenance_cost);
        incentives["payback"] = payback;
        incentives["roi"] = roi;
        incentives["ten_year"] = ten_year;

        return incentives
    },

    formatDollar(n) {
        // TODO: regex only handles numbers under 1,000,000.00, cannot handle numbers that need more than one comma.

        n = parseFloat(n).toFixed(2)
        let withCommas = Number(n).toLocaleString('en');
        function padding(str) {
            let parts = str.split(".")
            if (!parts[1]) {
                return str.concat(".00")
            } else if (parts[1].split("").length===1) {
                return str.concat("0")
            } else if ((parts[1].split("").length===0)){
                return str.concat("00")
            } 
        } 

        let withPadding = padding(withCommas);
        return withPadding
    }

};