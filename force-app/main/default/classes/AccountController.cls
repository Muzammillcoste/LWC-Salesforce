public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String searchTerm) {
        return [
            SELECT Id, Name, Phone, Website, Industry, BillingCity, BillingState, BillingCountry
            FROM Account
            WHERE Name LIKE :('%' + searchTerm + '%')
            LIMIT 200
        ];
    }
}
