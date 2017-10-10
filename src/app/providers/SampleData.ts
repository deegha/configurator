import {Element} from '../models/product';

export const sampleData: Element[] = [  
  {  
     "id":1,
     "product_name":"Union Parithyaga",
     "product_code":"001",
     "status":1,
     "config":0,
     "created_at":"2017-09-19 06:20:00",
     "updated_at":"2017-09-19 06:20:00",
     "created_by":0,
     "updated_by":0
  },
  {  
     "id":2,
     "product_name":"Union Jayamaga",
     "product_code":"010",
     "status":0,
     "config":0,
     "created_at":"2017-09-19 06:20:00",
     "updated_at":"2017-09-19 06:20:00",
     "created_by":0,
     "updated_by":0
  },
  {  
     "id":3,
     "product_name":"Union Advantage",
     "product_code":"014",
     "status":0,
     "config":1,
     "created_at":"2017-09-19 06:20:00",
     "updated_at":"2017-09-20 09:19:46",
     "created_by":0,
     "updated_by":0
  },
  {  
     "id":4,
     "product_name":"Union Super Benefit",
     "product_code":"025",
     "status":0,
     "config":0,
     "created_at":"2017-09-19 06:20:00",
     "updated_at":"2017-09-19 06:20:00",
     "created_by":0,
     "updated_by":0
  },
  {  
     "id":5,
     "product_name":"Union Builder",
     "product_code":"ILP-BLD",
     "status":0,
     "config":0,
     "created_at":"2017-09-19 06:20:00",
     "updated_at":"2017-09-19 06:20:00",
     "created_by":0,
     "updated_by":0
  },
  {  
     "id":6,
     "product_name":"Union Booster",
     "product_code":"ILP-BST",
     "status":0,
     "config":0,
     "created_at":"2017-09-19 06:20:00",
     "updated_at":"2017-09-19 06:20:00",
     "created_by":0,
     "updated_by":0
  },
  {  
     "id":8,
     "product_name":"Union Provider",
     "product_code":"ILP-PRV",
     "status":0,
     "config":0,
     "created_at":"2017-09-20 03:37:41",
     "updated_at":"2017-09-20 07:54:28",
     "created_by":0,
     "updated_by":0
  }
];

export const channels = [  
  {  
     "id":1,
     "name":"Test Channel",
     "code":"TC",
     "color_code":"#656738 ",
     "created_at":"2017-09-26 06:44:39",
     "updated_at":"2017-09-26 06:44:39",
     "created_by":0,
     "updated_by":0
  },
  {  
    "id":2,
    "name":"Nations Trust",
    "code":"NT",
    "color_code":"#656738 ",
    "created_at":"2017-09-26 06:44:39",
    "updated_at":"2017-09-26 06:44:39",
    "created_by":0,
    "updated_by":0
 }, 
  {  
    "id":3,
    "name":"Sampath",
    "code":"BA",
    "color_code":"#656738 ",
    "created_at":"2017-09-26 06:44:39",
    "updated_at":"2017-09-26 06:44:39",
    "created_by":0,
    "updated_by":0
  }
]

export const columns = [
    {"id" : "1", "value" :  "Column 1"},
    {"id" : "2", "value" :  "Column 2"},
    {"id" : "3", "value" :  "Column 3"}
]

export const heading = [
    {"id" : "1", "value" :  "Heading 1"},
    {"id" : "2", "value" :  "Heading 2"},
    {"id" : "3", "value" :  "Heading 3"}
]

export const lifeRelation = [{"id":1,"life_relation":"Main Life","code":"ml","image":"","created_at":"2017-09-26 11:35:14","updated_at":"2017-09-26 00:00:00","created_by":1,"updated_by":1},{"id":2,"life_relation":"Joint Life","code":"jl","image":"","created_at":"2017-09-26 11:46:49","updated_at":"2017-09-26 00:00:00","created_by":1,"updated_by":1},{"id":3,"life_relation":"Spouse","code":"sl","image":"","created_at":"2017-09-26 11:46:43","updated_at":"2017-09-26 00:00:00","created_by":1,"updated_by":1},{"id":4,"life_relation":"Children","code":"cl","image":"","created_at":"2017-09-26 11:46:36","updated_at":"2017-09-26 00:00:00","created_by":1,"updated_by":1}]

export const params = [  
    {  
       "id":1,
       "lable_name":"Title",
       "param_name":"title",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":2,
       "lable_name":"Insured Name",
       "param_name":"name",
       "input_type":"1",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":3,
       "lable_name":"NIC No",
       "param_name":"nic",
       "input_type":"1",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":4,
       "lable_name":"Date Of Birth",
       "param_name":"dob",
       "input_type":"4",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":5,
       "lable_name":"Age",
       "param_name":"age",
       "input_type":"5",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":6,
       "lable_name":"Mobile Number",
       "param_name":"mobile",
       "input_type":"1",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":7,
       "lable_name":"Gender",
       "param_name":"gender",
       "input_type":"3",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":8,
       "lable_name":"Smoking",
       "param_name":"smorking",
       "input_type":"3",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":9,
       "lable_name":"Occupation",
       "param_name":"occ_categery",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":10,
       "lable_name":"Primary Need",
       "param_name":"primary_need",
       "input_type":"2",
       "flag":"plan",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":11,
       "lable_name":"Annual Premium",
       "param_name":"annual_premium",
       "input_type":"1",
       "flag":"plan",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":12,
       "lable_name":"Term",
       "param_name":"term",
       "input_type":"2",
       "flag":"plan",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":13,
       "lable_name":"Frequency",
       "param_name":"frequency",
       "input_type":"2",
       "flag":"plan",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":14,
       "lable_name":"Cover multiple",
       "param_name":"cover_multiple",
       "input_type":"2",
       "flag":"plan",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":15,
       "lable_name":"Paying Term",
       "param_name":"paying_term",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":16,
       "lable_name":"Premium for BSA",
       "param_name":"premium_bsa",
       "input_type":"1",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":17,
       "lable_name":"Benefit Paying Term",
       "param_name":"benefit_paying_term",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":18,
       "lable_name":"Retirement Age",
       "param_name":"retirement_age",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":19,
       "lable_name":"Plan Type",
       "param_name":"plan_type",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":20,
       "lable_name":"Date",
       "param_name":"date",
       "input_type":"5",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":21,
       "lable_name":"Policy Term",
       "param_name":"policy_term",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":22,
       "lable_name":"Construction Term",
       "param_name":"construction_term",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":23,
       "lable_name":"Loan Amount",
       "param_name":"loan_amount",
       "input_type":"1",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":24,
       "lable_name":"Loan Interest %",
       "param_name":"loan_interest",
       "input_type":"1",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":25,
       "lable_name":"TPS Cover",
       "param_name":"tps_cover",
       "input_type":"1",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":26,
       "lable_name":"Lending Institute",
       "param_name":"lending_institute",
       "input_type":"1",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":27,
       "lable_name":"Floating Rates",
       "param_name":"floating_rates",
       "input_type":"3",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":28,
       "lable_name":"Life OE (Percentage)",
       "param_name":"life_oe",
       "input_type":"5",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":29,
       "lable_name":"TPS OE (Percentage)",
       "param_name":"tps_oe",
       "input_type":"5",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":30,
       "lable_name":"Relationship",
       "param_name":"relationship",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":31,
       "lable_name":"Quotation Date",
       "param_name":"quotation_date",
       "input_type":"5",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":32,
       "lable_name":"Mode",
       "param_name":"mode",
       "input_type":"5",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":33,
       "lable_name":"Main Plan",
       "param_name":"main_plan",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":34,
       "lable_name":"Main Plan OE",
       "param_name":"main_plan_oe",
       "input_type":"5",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":35,
       "lable_name":"Rider Plan",
       "param_name":"rider_plan",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":36,
       "lable_name":"Rider Plan OE",
       "param_name":"rider_plan_oe",
       "input_type":"5",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":37,
       "lable_name":"Staff Terms",
       "param_name":"staff_terms",
       "input_type":"3",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":38,
       "lable_name":"Area Of Need",
       "param_name":"area_of_need",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":39,
       "lable_name":"Single Premium",
       "param_name":"single_premium",
       "input_type":"1",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":40,
       "lable_name":"Withdrawals to commence from age",
       "param_name":"withdrawals_commence",
       "input_type":"1",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":41,
       "lable_name":"Age to which withdrawals required",
       "param_name":"withdrawals_required",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":42,
       "lable_name":"Expected Monthly Retirement Income (in today's money)",
       "param_name":"retirement_income",
       "input_type":"1",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":43,
       "lable_name":"Annual Inflation Assumed",
       "param_name":"annual_assumed",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":44,
       "lable_name":"Initial single Premium top-up",
       "param_name":"initial_single",
       "input_type":"1",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":45,
       "lable_name":"Target Fund",
       "param_name":"target_fund",
       "input_type":"1",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":46,
       "lable_name":"Assumed Growth Rate",
       "param_name":"growth_rate",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":47,
       "lable_name":"Equity",
       "param_name":"equity",
       "input_type":"1",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":48,
       "lable_name":"Managed",
       "param_name":"managed",
       "input_type":"1",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":49,
       "lable_name":"Fixed Income",
       "param_name":"fixed_income",
       "input_type":"1",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":50,
       "lable_name":"Life OE",
       "param_name":"life_oe",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":51,
       "lable_name":"Term of the policy",
       "param_name":"term_of_policy",
       "input_type":"1",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":52,
       "lable_name":"Expecting to retire at",
       "param_name":"expecting_to_at",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":53,
       "lable_name":"Premium Frequency",
       "param_name":"premium_frequency",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":54,
       "lable_name":"Basic Premium",
       "param_name":"basic_premium",
       "input_type":"1",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":55,
       "lable_name":"Premium Payment Term",
       "param_name":"premium_payment_term",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":56,
       "lable_name":"Intial SP Topup",
       "param_name":"intial_sp_topup",
       "input_type":"1",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":57,
       "lable_name":"WOP",
       "param_name":"wop",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":58,
       "lable_name":"WOP EM",
       "param_name":"wop_em",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":59,
       "lable_name":"Premium Escalator",
       "param_name":"premium_escalator",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":60,
       "lable_name":"Life Pkg",
       "param_name":"life_pkg",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":61,
       "lable_name":"Waiver Pkg",
       "param_name":"waiver_pkg",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    },
    {  
       "id":62,
       "lable_name":"Health Pkg",
       "param_name":"health_pkg",
       "input_type":"2",
       "flag":"life",
       "status":1,
       "created_at":"2017-09-26 15:14:00",
       "updated_at":"2017-08-08 00:00:00"
    }
 ]

export const product = {
  "clientRequestId": null,
  "clientRequestTime": null,
  "result": 1,
  "messages": null,
  "exceptions": null,
  "serviceReqTime": null,
  "serviceResTime": null,
  "productInfo": {
      "productId": 2000159,
      "benefitType": "41",
      "maininfo": {
          "mainPlan": "Y",
          "orgId": 1,
          "currency": 29,
          "familyType": "0",
          "startDate": "2007-05-07T00:00:00",
          "indexIndi": "N",
          "endDate": null,
          "productName": "Union Advantage",
          "productCode": "014",
          "productDescription": "Fund accumulation type product.",
          "productAbbreviation": "Union Advantage",
          "salesCategory": null
      },
      "premSaCalc": {
          "ageBase": "1",
          "unitFlag": "6",
          "waiver": false,
          "premiumFrequency": [
              "1",
              "2",
              "3",
              "4"
          ]
      },
      "bonus": {
          "cashBonus": false,
          "cashBonusVestYear": 0,
          "cashBonusUnitAmount": null,
          "cashBonusOptions": null
      },
      "liability": {
          "annuity": false,
          "survivalBenefitOptions": null,
          "liabilities": []
      },
      "attachedRiders": [
          {
              "masterProductId": 2000159,
              "masterProductCode": "014",
              "riderProductId": 2000157,
              "riderProductCode": "USH",
              "attachType": "1",
              "attachRelation": "N",
              "maxAttachedSa": 9999999999999999,
              "minAttachSa2MainSaRate": 0,
              "maxTotalSa2MainSaRate": null,
              "maxAttachSa2MainSaRate": 99,
              "riderSa2MainPremRate": 9999,
              "saNoEqual": "W",
              "minAthAge": 0,
              "maxAthAge": 999,
              "minAthMastAge": 0,
              "maxAthMastAge": 999,
              "minMastSaAmount": 0,
              "totalOverRate": 99
          },
          {
              "masterProductId": 2000159,
              "masterProductCode": "014",
              "riderProductId": 2000165,
              "riderProductCode": "HCB",
              "attachType": "1",
              "attachRelation": "N",
              "maxAttachedSa": 9999999999999999,
              "minAttachSa2MainSaRate": 0,
              "maxTotalSa2MainSaRate": null,
              "maxAttachSa2MainSaRate": 1,
              "riderSa2MainPremRate": 0.1,
              "saNoEqual": "W",
              "minAthAge": 0,
              "maxAthAge": 999,
              "minAthMastAge": 0,
              "maxAthMastAge": 999,
              "minMastSaAmount": 0,
              "totalOverRate": 2
          },
          {
              "masterProductId": 2000159,
              "masterProductCode": "014",
              "riderProductId": 2000166,
              "riderProductCode": "SPB",
              "attachType": "1",
              "attachRelation": "N",
              "maxAttachedSa": 9999999999999999,
              "minAttachSa2MainSaRate": 0,
              "maxTotalSa2MainSaRate": null,
              "maxAttachSa2MainSaRate": 1,
              "riderSa2MainPremRate": 9999,
              "saNoEqual": "W",
              "minAthAge": 0,
              "maxAthAge": 999,
              "minAthMastAge": 0,
              "maxAthMastAge": 999,
              "minMastSaAmount": 0,
              "totalOverRate": 99
          },
          {
              "masterProductId": 2000159,
              "masterProductCode": "014",
              "riderProductId": 2000186,
              "riderProductCode": "ADB",
              "attachType": "1",
              "attachRelation": "N",
              "maxAttachedSa": 9999999999999999,
              "minAttachSa2MainSaRate": 1,
              "maxTotalSa2MainSaRate": null,
              "maxAttachSa2MainSaRate": 2,
              "riderSa2MainPremRate": 0,
              "saNoEqual": "W",
              "minAthAge": 0,
              "maxAthAge": 999,
              "minAthMastAge": 0,
              "maxAthMastAge": 999,
              "minMastSaAmount": 0,
              "totalOverRate": 99
          },
          {
              "masterProductId": 2000159,
              "masterProductCode": "014",
              "riderProductId": 2000187,
              "riderProductCode": "EPD",
              "attachType": "1",
              "attachRelation": "N",
              "maxAttachedSa": 9999999999999999,
              "minAttachSa2MainSaRate": 1,
              "maxTotalSa2MainSaRate": null,
              "maxAttachSa2MainSaRate": 2,
              "riderSa2MainPremRate": 0,
              "saNoEqual": "W",
              "minAthAge": 0,
              "maxAthAge": 999,
              "minAthMastAge": 0,
              "maxAthMastAge": 999,
              "minMastSaAmount": 0,
              "totalOverRate": 99
          },
          {
              "masterProductId": 2000159,
              "masterProductCode": "014",
              "riderProductId": 2000188,
              "riderProductCode": "TPA",
              "attachType": "1",
              "attachRelation": "N",
              "maxAttachedSa": 9999999999999999,
              "minAttachSa2MainSaRate": 1,
              "maxTotalSa2MainSaRate": null,
              "maxAttachSa2MainSaRate": 2,
              "riderSa2MainPremRate": 0,
              "saNoEqual": "W",
              "minAthAge": 0,
              "maxAthAge": 999,
              "minAthMastAge": 0,
              "maxAthMastAge": 999,
              "minMastSaAmount": 0,
              "totalOverRate": 99
          },
          {
              "masterProductId": 2000159,
              "masterProductCode": "014",
              "riderProductId": 2000189,
              "riderProductCode": "TPS",
              "attachType": "1",
              "attachRelation": "N",
              "maxAttachedSa": 9999999999999999,
              "minAttachSa2MainSaRate": 1,
              "maxTotalSa2MainSaRate": null,
              "maxAttachSa2MainSaRate": 2,
              "riderSa2MainPremRate": 0,
              "saNoEqual": "W",
              "minAthAge": 0,
              "maxAthAge": 999,
              "minAthMastAge": 0,
              "maxAthMastAge": 999,
              "minMastSaAmount": 0,
              "totalOverRate": 99
          },
          {
              "masterProductId": 2000159,
              "masterProductCode": "014",
              "riderProductId": 2000190,
              "riderProductCode": "LTB",
              "attachType": "1",
              "attachRelation": "N",
              "maxAttachedSa": 9999999999999999,
              "minAttachSa2MainSaRate": 0,
              "maxTotalSa2MainSaRate": null,
              "maxAttachSa2MainSaRate": 5,
              "riderSa2MainPremRate": 0,
              "saNoEqual": "W",
              "minAthAge": 0,
              "maxAthAge": 999,
              "minAthMastAge": 0,
              "maxAthMastAge": 999,
              "minMastSaAmount": 0,
              "totalOverRate": 99
          },
          {
              "masterProductId": 2000159,
              "masterProductCode": "014",
              "riderProductId": 2000191,
              "riderProductCode": "FEB",
              "attachType": "1",
              "attachRelation": "N",
              "maxAttachedSa": 9999999999999999,
              "minAttachSa2MainSaRate": 0,
              "maxTotalSa2MainSaRate": null,
              "maxAttachSa2MainSaRate": 0.5,
              "riderSa2MainPremRate": 0,
              "saNoEqual": "W",
              "minAthAge": 0,
              "maxAthAge": 999,
              "minAthMastAge": 0,
              "maxAthMastAge": 999,
              "minMastSaAmount": 0,
              "totalOverRate": 99
          },
          {
              "masterProductId": 2000159,
              "masterProductCode": "014",
              "riderProductId": 2000192,
              "riderProductCode": "FIB",
              "attachType": "1",
              "attachRelation": "N",
              "maxAttachedSa": 9999999999999999,
              "minAttachSa2MainSaRate": 0,
              "maxTotalSa2MainSaRate": null,
              "maxAttachSa2MainSaRate": 1,
              "riderSa2MainPremRate": 5,
              "saNoEqual": "W",
              "minAthAge": 0,
              "maxAthAge": 999,
              "minAthMastAge": 0,
              "maxAthMastAge": 999,
              "minMastSaAmount": 0,
              "totalOverRate": 2
          },
          {
              "masterProductId": 2000159,
              "masterProductCode": "014",
              "riderProductId": 2000193,
              "riderProductCode": "SMB",
              "attachType": "1",
              "attachRelation": "N",
              "maxAttachedSa": 9999999999999999,
              "minAttachSa2MainSaRate": 0,
              "maxTotalSa2MainSaRate": null,
              "maxAttachSa2MainSaRate": 1,
              "riderSa2MainPremRate": 0,
              "saNoEqual": "W",
              "minAthAge": 0,
              "maxAthAge": 999,
              "minAthMastAge": 0,
              "maxAthMastAge": 999,
              "minMastSaAmount": 0,
              "totalOverRate": 99
          },
          {
              "masterProductId": 2000159,
              "masterProductCode": "014",
              "riderProductId": 2000197,
              "riderProductCode": "HCC",
              "attachType": "1",
              "attachRelation": "N",
              "maxAttachedSa": 9999999999999999,
              "minAttachSa2MainSaRate": 0,
              "maxTotalSa2MainSaRate": null,
              "maxAttachSa2MainSaRate": 1,
              "riderSa2MainPremRate": 0.1,
              "saNoEqual": "W",
              "minAthAge": 0,
              "maxAthAge": 999,
              "minAthMastAge": 0,
              "maxAthMastAge": 999,
              "minMastSaAmount": 0,
              "totalOverRate": 2
          },
          {
              "masterProductId": 2000159,
              "masterProductCode": "014",
              "riderProductId": 2000198,
              "riderProductCode": "CSB",
              "attachType": "1",
              "attachRelation": "N",
              "maxAttachedSa": 9999999999999999,
              "minAttachSa2MainSaRate": 0,
              "maxTotalSa2MainSaRate": null,
              "maxAttachSa2MainSaRate": 1,
              "riderSa2MainPremRate": 0,
              "saNoEqual": "W",
              "minAthAge": 0,
              "maxAthAge": 999,
              "minAthMastAge": 0,
              "maxAthMastAge": 999,
              "minMastSaAmount": 0,
              "totalOverRate": 99
          },
          {
              "masterProductId": 2000159,
              "masterProductCode": "014",
              "riderProductId": 2000199,
              "riderProductCode": "CHB",
              "attachType": "1",
              "attachRelation": "N",
              "maxAttachedSa": 9999999999999999,
              "minAttachSa2MainSaRate": 0,
              "maxTotalSa2MainSaRate": null,
              "maxAttachSa2MainSaRate": 1,
              "riderSa2MainPremRate": 0,
              "saNoEqual": "W",
              "minAthAge": 0,
              "maxAthAge": 999,
              "minAthMastAge": 0,
              "maxAthMastAge": 999,
              "minMastSaAmount": 0,
              "totalOverRate": 99
          },
          {
              "masterProductId": 2000159,
              "masterProductCode": "014",
              "riderProductId": 2000200,
              "riderProductCode": "WP",
              "attachType": "1",
              "attachRelation": "N",
              "maxAttachedSa": 9999999999999999,
              "minAttachSa2MainSaRate": 0,
              "maxTotalSa2MainSaRate": null,
              "maxAttachSa2MainSaRate": 99,
              "riderSa2MainPremRate": 9999,
              "saNoEqual": "W",
              "minAthAge": 0,
              "maxAthAge": 999,
              "minAthMastAge": 0,
              "maxAthMastAge": 999,
              "minMastSaAmount": 0,
              "totalOverRate": 99
          }
      ],
      "productCoverMultiple": {
          "coverMultipleItems": [
              {
                  "productCode": "014",
                  "ageRange": "[18,46)",
                  "termRange": "[10,15)",
                  "minValue": 5,
                  "maxValue": 10
              },
              {
                  "productCode": "014",
                  "ageRange": "[18,46)",
                  "termRange": "[15,20)",
                  "minValue": 5,
                  "maxValue": 15
              },
              {
                  "productCode": "014",
                  "ageRange": "[18,46)",
                  "termRange": "[20,31)",
                  "minValue": 5,
                  "maxValue": 20
              },
              {
                  "productCode": "014",
                  "ageRange": "[46,51)",
                  "termRange": "[10,15)",
                  "minValue": 5,
                  "maxValue": 8
              },
              {
                  "productCode": "014",
                  "ageRange": "[46,51)",
                  "termRange": "[15,20)",
                  "minValue": 5,
                  "maxValue": 10
              },
              {
                  "productCode": "014",
                  "ageRange": "[46,51)",
                  "termRange": "[20,31)",
                  "minValue": 5,
                  "maxValue": 18
              },
              {
                  "productCode": "014",
                  "ageRange": "[51,56)",
                  "termRange": "[10,15)",
                  "minValue": 5,
                  "maxValue": 6
              },
              {
                  "productCode": "014",
                  "ageRange": "[51,56)",
                  "termRange": "[15,20)",
                  "minValue": 5,
                  "maxValue": 10
              },
              {
                  "productCode": "014",
                  "ageRange": "[51,56)",
                  "termRange": "[20,31)",
                  "minValue": 5,
                  "maxValue": 15
              },
              {
                  "productCode": "014",
                  "ageRange": "[56,61)",
                  "termRange": "[10,15)",
                  "minValue": 5,
                  "maxValue": 5
              },
              {
                  "productCode": "014",
                  "ageRange": "[56,61)",
                  "termRange": "[15,20)",
                  "minValue": 5,
                  "maxValue": 8
              },
              {
                  "productCode": "014",
                  "ageRange": "[61,66)",
                  "termRange": "[10,15)",
                  "minValue": 5,
                  "maxValue": 5
              }
          ]
      },
      "listProductFund": [
          {
              "productId": 2000159,
              "fundCode": "40",
              "minPartialWithdralval": 0,
              "minPartialWithdralRemainingVal": 0,
              "minSwitOutVal": 0,
              "minSwitRemainVal": 0,
              "switchPeriodUnit": "1",
              "maxSwitInTimes": 2,
              "maxSwitOutTimes": 2,
              "maxPartialWithdralVal": null,
              "settleRatePeriodUnit": "1",
              "settleYearType": 0,
              "settleFreq": "4",
              "settleMonth": null,
              "settleDay": 1,
              "settleMethod": 1,
              "guaranteedRateOption": 2,
              "settleSimpleCompound": "2",
              "bonusSettleType": 1
          }
      ]
  }
}