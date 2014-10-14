# Dart Charge

This is a prototype for Dart Charge...

It is viewable on <http://dart-charge.herokuapp.com> with the following authentication details:

- Username: `bridge`
- Passowrd: `tunnel`

## URLs

1. http://dart-charge.herokuapp.com/
2. http://dart-charge.herokuapp.com/account/setup/dart-tag
3. http://dart-charge.herokuapp.com/account/setup/personal
4. http://dart-charge.herokuapp.com/account/setup/local
5. http://dart-charge.herokuapp.com/account/setup/vehicle
6. http://dart-charge.herokuapp.com/account/setup/payment
7. http://dart-charge.herokuapp.com/account/setup/payment/direct-debit
8. http://dart-charge.herokuapp.com/account/setup/payment/card
9. http://dart-charge.herokuapp.com/account/setup/summary

Using the `?=debug` query string shows all hidden fields.

The JavaScript is NOT production-ready and will only work in modern browsers, so people with older versions of IE should use the `?=debug` switch and follow along with the notes below.

----------

## Start
- GDS will create a GOVUK start page, so this page (in its current form) is redundant
- It will become the signup/login page once I create the account prototype

## Dart Tag
- No changes
- Form is submittable if:
    - “No” is selected, or
    - “Yes” is selected and there is content is “account number” and “verification code”
- Leads to “Personal"

## Personal
- Added more addresses to the address select
- Local postcode triggers “Apply for local discount” checkbox
- Submit button now navigates to /local if there’s a local postcode and “Apply for local discount” is checked
- Disabled form submission by [enter] key to prevent unintentional form submissions
- Form is submittable once “find address” has been clicked
- Leads to “Vehicle” (or “Local” as described above)

## Local
- Now has 2 proof of residence file upload inputs
- Form is submittable if:
    - a file is attached for each proof, or
    - “apply later” is checked
- Leads to “Vehicle"

## Vehicle
- Disabled form submission by [enter] key to prevent unintentional form submissions
- Can now add non-found vehicles
- Max 5 vehicles, else hide input form
- Adding a vehicle hides the vehicle input fields and shows “add another vehicle” button
- Clicking “add another vehicle” button shows vehicle input
- Vehicle removal works, including hiding table and showing input if 0 vehicles
- Form is submittable once add least one vehicle has been added
- Leads to “Payment"

## Payment
- Direct debit changes, as per Jon’s email
- If “direct debit” is selected, form submission leads to “/direct-debit"
- Form is submittable once “terms” has been checked
- Leads to “Card” (or “Direct Debit” as described above)

## Direct debit
- This is where direct debit confirmation will live
- “Confirm” button is enabled
- Leads to “Card"

## Card
- No changes
- Leads to “Summary"

## Summary
- Was “/success”
- Will contain a summary of provided information
- End of flow (although will lead to GOVUK service complete in the future)
