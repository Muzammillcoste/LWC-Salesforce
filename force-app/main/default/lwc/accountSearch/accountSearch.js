import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class AccountSearch extends LightningElement {
    @track accounts;
    @track selectedAccountId;

    handleSearch(event) {
        const searchTerm = event.target.value.trim();

        // Check if search term is empty
        if (!searchTerm) {
            this.accounts = []; // Clear the account list if no search term
            this.selectedAccountId = null; // Clear selected account data in child component
            return;
        }

        getAccounts({ searchTerm })
            .then(result => {
                this.accounts = result;
            })
            .catch(error => {
                console.error("Error fetching accounts:", error);
            });
    }

    handleAccountSelect(event) {
        this.selectedAccountId = event.target.dataset.id;
    }
}
