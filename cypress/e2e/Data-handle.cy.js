describe('Handling data', ()=>{
    beforeEach(()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get("#data-table").invoke('removeAttr', 'target').click({force:true})
    })
    it('data handle from table', () =>{
    
     var userDetails=[];
     let numb=0;
     cy.get('#thumbnail-1 td').each(($el, index, $list) =>{
        userDetails[index]=$el.text()
     }).then(()=>{
        var i;
        for(i =0; userDetails.length; i++){
            if(Number(userDetails[i])){
                numb+= Number(userDetails[i])
            }
           
        }
        cy.log('found the total age '+ numb)
        //expect(numb).to.eql(322)
             })
    
         })

    
    })