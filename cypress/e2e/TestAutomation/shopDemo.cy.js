describe('open demo shop', function(){
    
    // before('reading the data via fixure',  function(data){

    //     this.timeout(10000);
    //     cy.fixture('testData').then(function(data){
    //         this.data=data;
    //     })
    // })

    it('understanding fixures', function(){
        cy.visit('https://shop.demoqa.com/my-account/');
        const title=cy.title();
        cy.log(title);
        // cy.title().then(function(text){
        //     console.log("text title"+ text);
        // });
        
        cy.fixture('testData').then((data)=>{
        cy.get('#reg_username').type(data.Username);
        cy.get('#reg_email').type(data.Email);
        cy.get('#reg_password').type(data.Password)
        })

         

    })
})

