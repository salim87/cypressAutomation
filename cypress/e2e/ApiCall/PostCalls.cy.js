
describe("different ways of Post calls", ()=>{
    it.skip('approach one-hard coded value', ()=>{
        const requestBody={
                
                "agent_name": "asiami",
                 "agent_email": "rastik1@gmail.com",
                 "agent_location": "Rangpur" 

                    }
  

        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/TravelAgent',
            body: requestBody
        }).then((response)=>{
            expect(response.status).to.eq(201);
            expect(response.body.agent_name).to.eq('rastik1@gmail.com')
        })
    })

    it('approach two-dynamic value', ()=>{
        const requestBody={
        
            "agent_name": Math.random().toString(10).substring(2,8),
                "agent_email": Math.random().toString(10).substring(2,8)+ "@gmail.com",
                "agent_location": "Rangpur"      
        }
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/TravelAgent',
            body: requestBody
        }).then((response)=>{
            expect(response.status).to.eq(201);
            expect(response.body.agent_name).to.eq(requestBody.agent_email)
        })
    })

    it('Approach 3- read data from fixure', ()=>{

        cy.fixture('travel').then((data)=>{
            const requestBody=data;

            cy.request({
                method: 'POST',
                url: 'http://restapi.adequateshop.com/api/TravelAgent',
                body: requestBody
            }).then((response)=>{
                expect(response.body.agent_email).to.eq(requestBody.agent_name)
            })


        })
    })

    
})