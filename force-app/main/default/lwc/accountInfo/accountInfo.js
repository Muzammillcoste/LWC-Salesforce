import { LightningElement, api, wire, track } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import BILLING_CITY_FIELD from '@salesforce/schema/Account.BillingCity';
import BILLING_STATE_FIELD from '@salesforce/schema/Account.BillingState';
import BILLING_COUNTRY_FIELD from '@salesforce/schema/Account.BillingCountry';

const FIELDS = [NAME_FIELD, PHONE_FIELD, WEBSITE_FIELD, INDUSTRY_FIELD, BILLING_CITY_FIELD, BILLING_STATE_FIELD, BILLING_COUNTRY_FIELD];

export default class AccountInfo extends LightningElement {
    @api accountId;
    @track account;

    @wire(getRecord, { recordId: '$accountId', fields: FIELDS })
    wiredAccount({ error, data }) {
        if (data) {
            this.account = data.fields;
        } else if (error) {
            console.error("Error fetching account details:", error);
        }
    }
}
