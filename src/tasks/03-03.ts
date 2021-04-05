import {CityType} from "./02-02";

let city: CityType;

beforeEach(()=>{
    city={
        title: "New York",
        houses:[{buildedAt:2012, repaired:false,
            address:
                {number:100,
                    street:
                        {title:"Red street"}
                }
        },
            {buildedAt:2020, repaired:true,
                address:
                    {number:98,
                        street:
                            {title:"White street"}
                    }},
            {buildedAt:1988, repaired:true,
                address:
                    {number:20,
                        street:
                            {title:"Black street"}
                    }}
        ],
        governmentBuildings: [],
        citizensNumber:1000000
    }
})


