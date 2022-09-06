describe('File upload', ()=>{
    it('uploading file', () =>{
     cy.visit('https://webdriveruniversity.com/')
     cy.get("#file-upload").invoke('removeAttr', 'target').click({force:true})

     //cy.fixture('')
    cy.fixture('IMG-3901.jpg', {encoding:null}).then((contents)=>{
        cy.get('#myFile').selectFile([
            {
            contents,
            filename: "IMG-3901.jpg",
            mimeType: 'image/png',
        lastModified: new Date('Sept 09 2022').valueOf(),
        }]
        )
        cy.get("#submit-button").click()
    })

})

})