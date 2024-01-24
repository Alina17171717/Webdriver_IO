class OrganizationsPage {

    get title() { return $('.d-md-block') }
    get enterpriseCloud() { return $ ('.pricing-recommended-plan')}
   

   
    async clickOnEnterpriseCloudBtn() {
        await this.enterpriseCloud.click()
    }

   
}

export default new OrganizationsPage()