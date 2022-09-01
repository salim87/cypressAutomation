describe('Handling data', ()=>{
    beforeEach(()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get("#data-table").invoke('removeAttr', 'target').click({force:true})
    })
    it('data handle from table', () =>{
    
    //  var userDetails=[];
    //  let numb=0;
     cy.get("#thumbnail-1 table[id='t02'] tr:nth-child(4)").each(($el, index, $list) =>{
        const text=$el.text()
        if (text.includes("Woods"))
        {
            cy.get("#thumbnail-1 table[id='t02'] tr:nth-child(4) td:nth-child(3)").eq(index).then((age)=>{
               const Age= Number(age.text())
               cy.log(Age)
               expect(Age).to.eq(80)
            })
        }
            })
    
         })

    
    })