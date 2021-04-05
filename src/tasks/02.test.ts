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
test("test city should be constains 3 houses", ()=>{
    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("Red street");

    expect(city.houses[1].buildedAt).toBe(2020);
    expect(city.houses[1].repaired).toBe(true);
    expect(city.houses[1].address.number).toBe(98);
    expect(city.houses[1].address.street.title).toBe("White street");

    expect(city.houses[2].buildedAt).toBe(1988);
    expect(city.houses[2].repaired).toBe(true);
    expect(city.houses[2].address.number).toBe(20);
    expect(city.houses[2].address.street.title).toBe("Black street");
})

