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

    getProjectIncentives(project_id, kwh_rate) {
        let surveyDatatArr = data.projects[project_id];
        let incentives = {};

        let prefix_maintenance_percentage = 0.12 //estimated maintenance cost = 12% of operating cost for old fixtures
        let postfix_maintenance_percentage = 0.06 //estimated maintenance cost = 6% of operating cost for new fixtures
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
            // existingMaintCost += (quantity*pre_watts*hours_operation)/1000
        })

        let annual_energy_savings = (sumPreOpCost - sumPostOpCost);
        let net_cost = (project_cost-rebate_ammount)
        let prefix_reduced_maintenance_cost = sumPreOpCost*prefix_maintenance_percentage //prefix maintenance costs
        let postfix_reduced_maintenance_cost = sumPostOpCost*postfix_maintenance_percentage //postfix maintenance costs
        let total_maintenance_saving = prefix_reduced_maintenance_cost -postfix_reduced_maintenance_cost //how much you're saving on maintenance
        let payback = net_cost/(annual_energy_savings+total_maintenance_saving)
        let roi = (annual_energy_savings+total_maintenance_saving-net_cost)/net_cost //[gains-cost]/cost
        let ten_year = (((annual_energy_savings+total_maintenance_saving)*10)-net_cost)

        incentives["sumPostOpCost"] = sumPostOpCost;
        incentives["sumPreOpCost"] = sumPreOpCost;
        incentives["project_cost"] = project_cost;
        incentives["annual_energy_savings"] = (annual_energy_savings);
        incentives["rebate_ammount"] = (rebate_ammount);
        incentives["net_cost"] = (net_cost);
        incentives["kwh_saved"] = kwh_saved;
        incentives["kwh_rate"] = kwh_rate;
        incentives["total_maintenance_saving"] = (total_maintenance_saving);
        incentives["payback"] = payback;
        incentives["roi"] = roi;
        incentives["ten_year"] = ten_year;
        incentives["surveyDatatArr"] = surveyDatatArr;

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
            } else {
              return str
            }
        } 

        let withPadding = padding(withCommas);
        return withPadding
    },

    postNewForm(newProjectObj){
      //TODO: post object to db
      console.log('New Project submitted', newProjectObj)
    }

}


