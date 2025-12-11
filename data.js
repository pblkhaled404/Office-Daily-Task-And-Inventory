const STARTUP_DATA = {
  "CardInventory": [
    {
      "CardId": "",
      "CardNo": "",
      "CardName": "TAKA PAY TEST CARD-1",
      "CardLinkAC": "",
      "CardValidity": "",
      "CardBrand": "",
      "CustID": "",
      "Password": "",
      "Date": ""
    }
  ],
  "Pending Task SDD": [
    {
      "SL No.": 1,
      "Topics": "A/C debit facility according to visa settlement file for Visa settled transaction which was not debited to customer: Example 1: We have received a transaction at AGODA.COM on 03-11-2022 by platinum credit card bearing number 400462******0022 with amount USD 820.26 and the transaction was successful, RRN is 230707721147 and UTR is 39948466. In the same day we have received system reversal for the transaction. After that, on 04-11-2022, visa settled/cleared the transaction with amount USD 781.2 but our reconciliation system could not identified the mismatch by matching in both table M1200_1210 and M1400_1410 Example 2: Customer enjoys the services but due to technical issue account neither was nor debited.",
      "Requested Via": "Mail",
      "Requested On": "11-08-2021 & 14-11-2022",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Partially Done",
      "Comments": ""
    },
    {
      "SL No.": 2,
      "Topics": "ATM Acquiring Transactions file EP 745 UPLOAD TO Reconciliation System and process and compared with CBS (Like M1200_1210. M1400_1410 etc) To identify POS Acquiring and ATM Acq need consider ENT MOD",
      "Requested Via": "Mail",
      "Requested On": "23-11-2022",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 3,
      "Topics": "Need a report which we have manually reversed from CMS and later on settle the transaction by visa.",
      "Requested Via": "Mail",
      "Requested On": "11-08-2021",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 4,
      "Topics": "Request for updating CBS to impose charge on receiving Credit Voucher/ Refund (Like Tax-free, refund) through our Cards against non transactional service (1%)",
      "Requested Via": "Mail",
      "Requested On": "30-05-2022",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 5,
      "Topics": "Request for updating CBS to impose charge on receiving Fund from MFS (Bkash, Nagad etc) through our Debit Cards service (BDT 9)",
      "Requested Via": "Mail",
      "Requested On": "29-05-2022",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 6,
      "Topics": "Network Fund transfer processing fee for credit card",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 7,
      "Topics": "Account Adjustment (Debir/Credit) module in Reconciliation System, like Chargeback declined charge",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 8,
      "Topics": "Reposting module require for system reversal from CMS which were not posted to CBS due to error in M1400_1410 table.",
      "Requested Via": "Mail",
      "Requested On": "26-04-2022",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 9,
      "Topics": "Upload EP 747 and calculate USD rate for Bangladesh Bank reporting: Clearing USD and Settlement BDT amount need to entry from EP 747 file to System and calculate USD rate",
      "Requested Via": "Mail",
      "Requested On": "26-04-2022",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 10,
      "Topics": "Duplicate settlement report which was settled by visa more than one time by EP 705 and EP 707----------partially done, ARN issue pending",
      "Requested Via": "Mail",
      "Requested On": "11-08-2021",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "partially done, ARN issue pending",
      "Comments": ""
    },
    {
      "SL No.": 11,
      "Topics": "EJ Process for ATM Settlement and Dispute Resolution",
      "Requested Via": "Mail",
      "Requested On": "14-10-2021",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 12,
      "Topics": "Request for ATM settlement module under card reconciliation system",
      "Requested Via": "Mail",
      "Requested On": "14-10-2021",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 13,
      "Topics": "Visa channel Dispute module where we can search by card and UTR number in EP 705, 707, 706, 725, 726 and 727 in separately but we need it in a single window.",
      "Requested Via": "Mail",
      "Requested On": "26-04-2022",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Partially done",
      "Comments": ""
    },
    {
      "SL No.": 14,
      "Topics": "Credit voucher received from merchant (like Bkash, Nagad etc) by EP 706 file for visa debit card need to match with CBS which was already credited and need to archives from reversal module.",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 15,
      "Topics": "Transaction search by RRN/UTR from v_card_transaction, M1200_1210 and M1400_1410 in one module",
      "Requested Via": "Mail",
      "Requested On": "26-04-2022",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 16,
      "Topics": "Archive the mismatch report which was already resolved",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 17,
      "Topics": "Process mismatch transactions which were already resolved-VISA",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 18,
      "Topics": "Visa Direct Credit (USD) Error Solving on PKG_CARD_TRANSACTION",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 19,
      "Topics": "Passport Endorsement (Branch ) Problem Solving",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 20,
      "Topics": "https://pblcard.pubalibank.com.bd/Card_endorsement.aspx same like cbs",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 21,
      "Topics": "https://reconciliation.pubalibank.com.bd/pdf/report_pos.php?ID=PBL0000013555001",
      "Requested Via": "Mail",
      "Requested On": "Card operation Division",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 22,
      "Topics": "BB Reporting Frontend From PIBS and PMS",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 23,
      "Topics": "NPSB Recpcode (94) Dispute Claim",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 24,
      "Topics": "Visa Reversal (706) currency mismatch Reversal problem sloving",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 25,
      "Topics": "QR (IRF) , POS (IRF) and Calculation of Bangla QR in CBS Part",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 26,
      "Topics": "PKG card Transaction Change for VISA Acquirer (International card TransactionProblem)",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 27,
      "Topics": "Request for implement a software module for debiting Launge facility availed customers account - letter dated 20th Sep 2021",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 28,
      "Topics": "Deployement Sub- Branch POS",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No. ": 29,
      "Topics": "Instant Debit Card-Reissue Process",
      "Requested Via": "Mail",
      "Requested On": "04-10-2023",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 30,
      "Topics": "All Transactional notification through email for both Debit and Credit Card",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 31,
      "Topics": "MasterCard settlement & Reconciliation issue",
      "Requested Via": "Mail",
      "Requested On": "09-12-2021",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 32,
      "Topics": "Customer AC & Merchant AC debit facility for varieties purpose",
      "Requested Via": "Mail",
      "Requested On": "05-10-2023",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 33,
      "Topics": "Aging status change for credit card payment",
      "Requested Via": "Mail",
      "Requested On": "17-05-2023",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 34,
      "Topics": "Requesting some restriction on dispute management of PI Application (need to block e.g. successful txn like 0, auto reversed like 78,96,91, 5)",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 35,
      "Topics": "Dispute Resolution issue for PI QR transactions",
      "Requested Via": "Mail",
      "Requested On": "24-07-2022",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 36,
      "Topics": "Reversed RC=94 if fund is not settled by BB and change RC 94 to RC 00 if fund is settled by BB (IBFT for PI and Remitt.)",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 37,
      "Topics": "Request for software modification for installing POS at our Islamic windows",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 38,
      "Topics": "Domestic Cash withdrawal transaction fee distribution for VISA & MasterCard (VC: BDT 25 to 579 and BDT 15 to 174; MC: 20=579 & 20=174)",
      "Requested Via": "Mail",
      "Requested On": "06-01-2022",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 39,
      "Topics": "International Cash withdrawal transaction fee distribution for VISA & MasterCard (processing fee 2% or $3 to GL 579)",
      "Requested Via": "Mail",
      "Requested On": "05-10-2023",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 40,
      "Topics": "Request for updating Card acknowledge module in core banking system (PIBS) Add delivery to Customer status (e.g. status -3)",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 41,
      "Topics": "MANCOM report, RIT report, Income calculation, Campaign reports by various conditions like duration, amount, number of Transaction, transaction types, domestic/International etc. parameter.",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 42,
      "Topics": "Unsuccessful OFFUS transaction reversal (no data in M1200_1210 & NULL in v_card_transaction)",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 43,
      "Topics": "Requesting for adding new credit card types in PIBS for the Elite Customer",
      "Requested Via": "Mail",
      "Requested On": "05-10-2023",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 44,
      "Topics": "Transaction alert (SMS) format change",
      "Requested Via": "Mail",
      "Requested On": "05-10-2023",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 45,
      "Topics": "Endorsement from Sub Branch",
      "Requested Via": "Mail",
      "Requested On": "03-10-2023",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": "Confirm by Joshim"
    },
    {
      "SL No.": 46,
      "Topics": "Request for software modification for installing POS at our Islamic windows",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 47,
      "Topics": "Campaign reports by various conditions like duration, amount, number of Transaction, transaction types, domestic/International etc. parameter",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 48,
      "Topics": "Modify Remittance reversal under card reconciliation system (solve case need to archive, date issue, date for reversed by, same day txn block)",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 49,
      "Topics": "Credit voucher from Nagad by EP 706 file for visa debit card need to match CBS which was already credited and need to archives from reversal module.",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 50,
      "Topics": "Processing .XML file for Bangladesh Bank International Card (IC) reporting",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 51,
      "Topics": "NPSB Settlement and Reconciliation",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    },
    {
      "SL No.": 52,
      "Topics": "Need to process EP 726 for Credit Voucher Reversal",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 53,
      "Topics": "Card type add for Bio-Xin Cosmeceuticals (1st 3 CW is free)",
      "Requested Via": "Mail",
      "Requested On": "25-10-2023",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 54,
      "Topics": "Need to Imposed Fee to \"Merchant POS Cashing\"",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 55,
      "Topics": "VAT on International CW processing fee for Debit Card",
      "Requested Via": "Mail",
      "Requested On": "27-02-2024",
      "Requested By": "Shid",
      "Last Reminder": "21-05-2025",
      "Status": "Done",
      "Comments": "Live date: 13-08-2025 on 08:04 AM"
    },
    {
      "SL No.": 56,
      "Topics": "Card type NORTH WEST POWER GENERATION (1st 4 CW is free)",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 57,
      "Topics": "Lounge key reversal as per circular",
      "Requested Via": "Mail",
      "Requested On": "18-12-2023",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 58,
      "Topics": "KPI related modification on PIBS",
      "Requested Via": "Mail",
      "Requested On": "08-01-2024",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 59,
      "Topics": "Requesting to configure system for introducing credit card against ERQ, FC, RFCD accounts",
      "Requested Via": "Mail",
      "Requested On": "09-01-2024",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 60,
      "Topics": "Done",
      "Requested Via": "Mail",
      "Requested On": "09-01-2024",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 61,
      "Topics": "CBS must use only UTRNNO as the sole UNIQUE KEY for M1200_1210 and M1400_1410, Index will be make to UTRRNO",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 62,
      "Topics": "Requesting some modification/restriction on dispute management of PI",
      "Requested Via": "Mail",
      "Requested On": "09-01-2024",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 63,
      "Topics": "Block the fee amount for Card Renewal if account has not sufficient balance",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 64,
      "Topics": "Account migration from BANGABANDHU AVENUE to DHAKA STADIUM BRANCH",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 65,
      "Topics": "Module require on PMS for statement and balance inquiry of sub head (12,27,44,70) of GL 921",
      "Requested Via": "Mail",
      "Requested On": "17-01-2024",
      "Requested By": "",
      "Last Reminder": "21-09-2025",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 66,
      "Topics": "Blocking the instant debit card tagging for card stages.",
      "Requested Via": "Mail",
      "Requested On": "11-01-2024",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 67,
      "Topics": "Card requisiton for SENIOR CITIZEN PDS (AC code is different with others)",
      "Requested Via": "Mail",
      "Requested On": "18-03-204",
      "Requested By": "Anindia",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 68,
      "Topics": "Requesting for reconfiguring SMS (Outside BD txn Currency to SMS, if txn crrency BDT then USD to SMS)",
      "Requested Via": "Mail",
      "Requested On": "25-03-204",
      "Requested By": "Anindia",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 69,
      "Topics": "Report requirement for instant debit card in PIBS",
      "Requested Via": "Mail",
      "Requested On": "14-05-2024",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 70,
      "Topics": "Upgrade Delivery System due to differ in branch for card issuance brance and mother branch",
      "Requested Via": "Mail",
      "Requested On": "15-05-2024",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 71,
      "Topics": "Separate Card forwarding letter for Sub-Branch",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": "Confirm by Farhad vai"
    },
    {
      "SL No.": 72,
      "Topics": "Revoke related issues for cancel card of islamic window card",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "",
      "Comments": "Confirm by Nannu vai"
    },
    {
      "SL No.": 73,
      "Topics": "Remove Batch field from IDC tagging module, insert Batch from Delivery table",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 74,
      "Topics": "Restriction for changing card type of instant debit card tagging in PIBS",
      "Requested Via": "Mail",
      "Requested On": "16-05-2025",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 75,
      "Topics": "Fuel Purchase transation type add to CBS",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 76,
      "Topics": "Waiver of charges against salary accounts of different payroll account",
      "Requested Via": "Mail",
      "Requested On": "09-06-2024",
      "Requested By": "Anindita",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 77,
      "Topics": "Information update request in the transaction alert email and OTP email",
      "Requested Via": "Mail",
      "Requested On": "10-06-2024",
      "Requested By": "Foyzar",
      "Last Reminder": "20-04-2025",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 78,
      "Topics": "Regarding endorsement related problem for visa reversal/refund issues",
      "Requested Via": "Mail",
      "Requested On": "01-07-2024",
      "Requested By": "Eshita",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 79,
      "Topics": "Card Types of TakaPay & Instant Debit Card",
      "Requested Via": "Mail",
      "Requested On": "28-07-2024",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 80,
      "Topics": "Report requirement of Branch wise account list for TakaPay card",
      "Requested Via": "Mail",
      "Requested On": "28-07-2024",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 81,
      "Topics": "Credit Card Bill Payment Module Upgrade Request (Masking issue, by cust ID, Mobile)",
      "Requested Via": "Mail",
      "Requested On": "04-09-2024",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": "Confirm by Branch"
    },
    {
      "SL No.": 82,
      "Topics": "Urgent: ISO Compliance - Password Policy Upgrade",
      "Requested Via": "Mail",
      "Requested On": "02-10-2024",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 83,
      "Topics": "Urgent Request for Inventory of Personalized Cards",
      "Requested Via": "Mail",
      "Requested On": "07-10-2024",
      "Requested By": "Foyzar",
      "Last Reminder": "02-03-2025",
      "Status": "Done",
      "Comments": "Confirm by feeroz vai"
    },
    {
      "SL No.": 84,
      "Topics": "Urgent: ISO and PCI DSS Compliance - Data Masking for Card Number",
      "Requested Via": "Mail",
      "Requested On": "09-10-2024",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 85,
      "Topics": "Urgent: Request to Upgrade System for Supplementary Debit Card Issuance",
      "Requested Via": "Mail",
      "Requested On": "09-10-2024",
      "Requested By": "Foyzar",
      "Last Reminder": "17-07-2025",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 86,
      "Topics": "Merchant category code (MCC) 6014 Issue on Remittance fund transfer through NPSB",
      "Requested Via": "Mail",
      "Requested On": "09-08-2023",
      "Requested By": "Anindita",
      "Last Reminder": "24-04-2025",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 87,
      "Topics": "Requesting for configure Fees and Charges for Corporate Credit Card",
      "Requested Via": "Mail",
      "Requested On": "06-02-2024",
      "Requested By": "Anindita",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 88,
      "Topics": "Interbank IBFT inward",
      "Requested Via": "Mail",
      "Requested On": "27-03-2024",
      "Requested By": "Ashim sir",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 89,
      "Topics": "Transaction Type Add Request",
      "Requested Via": "Mail",
      "Requested On": "21-04-2024",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 90,
      "Topics": "New VISA BINs",
      "Requested Via": "Mail",
      "Requested On": "25-04-2024",
      "Requested By": "Anindita",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 91,
      "Topics": "New Transaction Types added to NPSB",
      "Requested Via": "Mail",
      "Requested On": "12-9-2024",
      "Requested By": "Anindita",
      "Last Reminder": "24-04-2025",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 92,
      "Topics": "Transaction amount anomalies in FC account",
      "Requested Via": "Mail",
      "Requested On": "07-11-2024",
      "Requested By": "Anindita",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 93,
      "Topics": "VISA Original Credit Transaction_TIBFT_NPSB_INW",
      "Requested Via": "Mail",
      "Requested On": "05-12-2024",
      "Requested By": "Anindita",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 94,
      "Topics": "Requesting for shift Income head from 579 to 173 for seamless Year End",
      "Requested Via": "Mail",
      "Requested On": "26-12-2024",
      "Requested By": "Anindita",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 95,
      "Topics": "Card service through PI apps",
      "Requested Via": "Mail",
      "Requested On": "23-05-2024",
      "Requested By": "Foyzar",
      "Last Reminder": "07-10-2025 bu phone",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 96,
      "Topics": "Request for solving problem between Card initator branch and Islamic Banking Window.",
      "Requested Via": "Mail",
      "Requested On": "15-05-2024",
      "Requested By": "Kayum",
      "Last Reminder": "30-05-2024",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 97,
      "Topics": "Request for sending cards directly to Sub- Branch through courier",
      "Requested Via": "Mail",
      "Requested On": "30-05-2024",
      "Requested By": "Kayum",
      "Last Reminder": "30-05-2024",
      "Status": "Done",
      "Comments": "Confirm byForhad vai"
    },
    {
      "SL No.": 98,
      "Topics": "Transaction Issues for Credit Card Type 23 BCSIR",
      "Requested Via": "Mail",
      "Requested On": "09-07-2024",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 99,
      "Topics": "Card receiving issue at Branch and Sub Branches",
      "Requested Via": "Mail",
      "Requested On": "16-07-2024",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": "Confirm byForhad vai"
    },
    {
      "SL No.": 100,
      "Topics": "Disable the fee scheme dropdown menu of PIBS for card request/tagging",
      "Requested Via": "Mail",
      "Requested On": "12-08-2024",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "Tagging part done",
      "Comments": ""
    },
    {
      "SL No.": 101,
      "Topics": "Supplementary Statement (PDF and Transactions)",
      "Requested Via": "Mail",
      "Requested On": "28-08-2024",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 102,
      "Topics": "Request to Enhance Delivery System: Restrict Forwarding Letter Generation",
      "Requested Via": "Mail",
      "Requested On": "24-10-2024",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 103,
      "Topics": "Instant debit card issue",
      "Requested Via": "Mail",
      "Requested On": "25-11-2024",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 104,
      "Topics": "Account Debited Multiple Times for Card Renewal Charges",
      "Requested Via": "Mail",
      "Requested On": "17-11-2024",
      "Requested By": "Foyzar",
      "Last Reminder": "11-12-2024",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 105,
      "Topics": "Removal of Mandatory Photo and Signature Requirement (Requisition & Tagging) for Debit Cards",
      "Requested Via": "Mail",
      "Requested On": "28-11-2024",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "Tagging part done",
      "Comments": ""
    },
    {
      "SL No.": 106,
      "Topics": "New Account Code in Manual Debit/Credit Module",
      "Requested Via": "Mail",
      "Requested On": "16-01-2025",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 107,
      "Topics": "Revised Fees and Charges for NPSB_2025",
      "Requested Via": "Mail",
      "Requested On": "10-02-2025",
      "Requested By": "Anindita",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 108,
      "Topics": "Issue with IBFT Inward Transactions",
      "Requested Via": "Mail",
      "Requested On": "05-03-2025",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 109,
      "Topics": "Request to Mask Card Numbers of Reposting Transaction",
      "Requested Via": "Mail",
      "Requested On": "06-03-2025",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 110,
      "Topics": "Implementation of Real-Time Processing for Credit Card Bill Payments through Visa OCT Service.",
      "Requested Via": "Mail",
      "Requested On": "25-03-2025",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 111,
      "Topics": "Regarding the Submission of Cards’ Related Data as per Prescribed Data Templates through Web Portal",
      "Requested Via": "Mail",
      "Requested On": "27-03-2025",
      "Requested By": "Anindita",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 112,
      "Topics": "Launch of TakaPay Debit Card - Action Required",
      "Requested Via": "Mail",
      "Requested On": "08-04-2025",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 113,
      "Topics": "Passowrd Expiry Notification in CCMS",
      "Requested Via": "Mail",
      "Requested On": "09-04-2025",
      "Requested By": "Zahid (D/C)",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 114,
      "Topics": "Requesting for re-configuring module \"NPSB Fee Waiver Settings\"",
      "Requested Via": "Mail",
      "Requested On": "20-04-2025",
      "Requested By": "Anindita",
      "Last Reminder": "23-06-2025",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 115,
      "Topics": "Merging 05 conventional branches to Islamic branches",
      "Requested Via": "Mail",
      "Requested On": "24-04-2025",
      "Requested By": "Anindita",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 116,
      "Topics": "ATMFT01_Fees and Charges for NPSB_2025",
      "Requested Via": "Mail",
      "Requested On": "28-04-2025",
      "Requested By": "Anindita",
      "Last Reminder": "07-10-2025 by mail",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 117,
      "Topics": "Requesting to show the sender bank name and account number in beneficiary statement for IBFT Inward transactions",
      "Requested Via": "Mail",
      "Requested On": "05-05-2025",
      "Requested By": "Anindita",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 118,
      "Topics": "Simplified accounts TP validation",
      "Requested Via": "Mail",
      "Requested On": "",
      "Requested By": "",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 119,
      "Topics": "BRD for Confirmation Message on Requisition Module",
      "Requested Via": "Mail",
      "Requested On": "17-06-2025",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "Done",
      "Comments": ""
    },
    {
      "SL No.": 120,
      "Topics": "Requesting to show the beneficiary bank name in sender's statement for IBFT Outward transactions",
      "Requested Via": "Mail",
      "Requested On": "07-08-2025",
      "Requested By": "Anindita",
      "Last Reminder": "07-10-2025 by mail",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 121,
      "Topics": "BRD for New Card Requisition for Existing Cardholder",
      "Requested Via": "Mail",
      "Requested On": "07-08-2025",
      "Requested By": "Foyzar",
      "Last Reminder": "07-10-2025 by mail",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 122,
      "Topics": "BRD for Upgrading Manual Debit/Credit Module of CRS",
      "Requested Via": "Mail",
      "Requested On": "26-08-2025",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 123,
      "Topics": "\"Endorsement Limit Adjustment & SMS Format Enhancement for VISA Reversal/Refund/Cashback Transactions in Card Reconciliation System \"",
      "Requested Via": "Mail",
      "Requested On": "01-09-2025",
      "Requested By": "Foyzar",
      "Last Reminder": "18-11-2025 by mail",
      "Status": "",
      "Comments": "BRD"
    },
    {
      "SL No.": 124,
      "Topics": "BRD for service charge of POS cash advance",
      "Requested Via": "Mail",
      "Requested On": "11-09-2025",
      "Requested By": "Foyzar",
      "Last Reminder": "07-10-2025 by mail",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 125,
      "Topics": "Endorsement Related Issue",
      "Requested Via": "Mail",
      "Requested On": "15-10-2025",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 126,
      "Topics": "Suspend the Real-time Crediting of Visa Original Credit Transactions",
      "Requested Via": "Mail",
      "Requested On": "15-10-2025",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 127,
      "Topics": "BRD: Accepting reversal of international issuing transaction if the billing amount is higher than the mạin transaction.",
      "Requested Via": "Mail",
      "Requested On": "16-10-2025",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 128,
      "Topics": "Development of CCMS Front-End Menu for Credit Card Information Update",
      "Requested Via": "Mail",
      "Requested On": "29-10-2025",
      "Requested By": "Shid",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 129,
      "Topics": "Implementation of revised charges for debit card from international ATM balance inquiry transactions.",
      "Requested Via": "Mail",
      "Requested On": "29-10-2025",
      "Requested By": "Shid",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 130,
      "Topics": "BRD: Bulk processing of original credit transactions (OCT) through reconciliation system.",
      "Requested Via": "Mail",
      "Requested On": "10-11-2025",
      "Requested By": "Foyzar",
      "Last Reminder": "17-11-2025",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 131,
      "Topics": "BRD: Enabling of debit card requisition for foreign currency (FC) accounts through PIBS.",
      "Requested Via": "Mail",
      "Requested On": "10-11-2025",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 132,
      "Topics": "BRD: Change of GL account for international ATM balance inquiry transactions.",
      "Requested Via": "Mail",
      "Requested On": "10-11-2025",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 133,
      "Topics": "BRD: Implementation of charge for ATMFT01 (Interbank Fund Transfer) via another bank's terminal.",
      "Requested Via": "Mail",
      "Requested On": "10-11-2025",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 134,
      "Topics": "Delayed Email Delivery of Card Transaction Notifications",
      "Requested Via": "Mail",
      "Requested On": "20-11-2025",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": 135,
      "Topics": "Multiple debit card requisition issue",
      "Requested Via": "Mail",
      "Requested On": "26-11-2025",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "",
      "Comments": ""
    },
    {
      "SL No.": "136",
      "Topics": "\tRequest to Include MCC 7372 in VAT Deduction Process",
      "Requested Via": "Mail",
      "Requested On": "02-12-2025",
      "Requested By": "Foyzar",
      "Last Reminder": "",
      "Status": "Pending",
      "Comments": ""
    }
  ],
  "Pending Task Cynergon": [
    {
      "SL NO.": 1,
      "TASK DETAILS": "Fraud/Suspicious Transaction Monitoring System",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 2,
      "TASK DETAILS": "Summery report for total number of approved and declined transactions group by channel and Transaction types",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 3,
      "TASK DETAILS": "List of the Card which has the permission for more than 50K per day",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 4,
      "TASK DETAILS": "List of card which has E-com facility",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 5,
      "TASK DETAILS": "List of Card for USD permission with parameter <=",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 6,
      "TASK DETAILS": "Fee collection in Edit package",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 7,
      "TASK DETAILS": "Reposting module for system reversal",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 8,
      "TASK DETAILS": "Transaction profile for ATM FT and BRPOS",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 9,
      "TASK DETAILS": "Credential on File",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "22-12-2020",
      "LAST REMINDER": "17-11-2025",
      "STATUS": ""
    },
    {
      "SL NO.": 10,
      "TASK DETAILS": "Channel/Services UP/Down ON/Off notification by SMS",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 11,
      "TASK DETAILS": "ATM FT transactions status related issue",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 12,
      "TASK DETAILS": "System reversal for Host Txn Timeout",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 13,
      "TASK DETAILS": "OTP flag in transactions details report",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 14,
      "TASK DETAILS": "ATM sequence number in Off-Us transactions report",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 15,
      "TASK DETAILS": "Requesting to change some configuration in CMS for Elite Credit Card Holders",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "02-02-2023",
      "LAST REMINDER": "01-10-2024",
      "STATUS": ""
    },
    {
      "SL NO.": 16,
      "TASK DETAILS": "Credit card renewal fee weaver by various criteria",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 17,
      "TASK DETAILS": "Pre-Auth Transaction",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "30-05-2023",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 18,
      "TASK DETAILS": "777-MERCHANT POS CASHING",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "16-01-2023",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 19,
      "TASK DETAILS": "OTP present status for Ecommerce transaction",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "ANINDITA ROY",
      "REQUESTED ON": "16-08-2022",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 20,
      "TASK DETAILS": "Requirement: Report menu in CMS for list of cards for credential on file transaction",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "",
      "REQUESTED ON": "10-10-2022",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 21,
      "TASK DETAILS": "ATMFT/POS CHASING profile modification module",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 22,
      "TASK DETAILS": "PCI DSS Project",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "11-07-2023",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 23,
      "TASK DETAILS": "DataBase Migration Project",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 24,
      "TASK DETAILS": "CISCO Contact Center Project",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 25,
      "TASK DETAILS": "Transaction Monitoring System for Big Screen",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "10-01-2022",
      "LAST REMINDER": "06-08-2023",
      "STATUS": ""
    },
    {
      "SL NO.": 26,
      "TASK DETAILS": "Error name synchronisation between CMS & CBS",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 27,
      "TASK DETAILS": "Instant Debit Card",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "16-08-2023",
      "LAST REMINDER": "04-10-2023",
      "STATUS": "Done"
    },
    {
      "SL NO.": 28,
      "TASK DETAILS": "For logical renewal of card, if there is no sufficient balance, CBS will hold the amount and send approval to CMS. CBS will deduct the amount when the balance will be available.",
      "REQUESTED VIA": "Phone",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 29,
      "TASK DETAILS": "Need to redirection from quick find to any maintenance module like a) Service acive/deactive b) card re-issue c) PIN re-issue",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 30,
      "TASK DETAILS": "2FA to login in CMS/AMS",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 31,
      "TASK DETAILS": "ATMFT/POS CHASING profile modification module in CMS",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 32,
      "TASK DETAILS": "Card profile related issue for international transaction",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 33,
      "TASK DETAILS": "OTP mail format change like Bank name & Logo",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 34,
      "TASK DETAILS": "Requirement in transaction monitoring module: 1. Please add new parameter (Local transaction and Foreign transaction) in monitoring criteria 2. \"0640 - MOBILE/TOKEN WITHDRAWAL\" parameter do not working please look into it 3. Please add \"Actual Currency Code and Amount\" in \"Requested Amount\" in monitored tab. 4. If possible please add NPSB transactions like FT and QR through PI to this monitoring module",
      "REQUESTED VIA": "WhatsApp",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "05-11-2023",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 35,
      "TASK DETAILS": "Complementary credit card for Elite custome (Lifetime free and 2yrs free) need the parameter in CMS to faciliate the Anuual fee waiver. Otherhand CBS can not create card type",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "ANINDITA ROY",
      "REQUESTED ON": "05-10-2023",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 36,
      "TASK DETAILS": "Corpoerate credit card related card type require CMS ready but CBS can not create card type",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 37,
      "TASK DETAILS": "\"International POS purchase without PIN\" approved for nonchip purchase transaction (need to block)",
      "REQUESTED VIA": "WhatsApp",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "20-11-2023",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 38,
      "TASK DETAILS": "Check the fee deduction of Auto renewal card",
      "REQUESTED VIA": "Phone",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "07-12-2023",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 39,
      "TASK DETAILS": "Blocking all card present transactions via Magstripe only and Fall-Back",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "21-12-2023",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 40,
      "TASK DETAILS": "Settlement related issue for INDIGO, QATAR and EMIRATES",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "26-12-2023",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 41,
      "TASK DETAILS": "Waive the PIN CHANGE REQUIRE function of SQ CELSIUS card type 24",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "04-01-2024",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 42,
      "TASK DETAILS": "Waiver of EMV-ONLY mandate for manual-entry mobile roaming charge transactions",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "04-01-2024",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 43,
      "TASK DETAILS": "Request for DB View of card transactions",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "04-01-2024",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 44,
      "TASK DETAILS": "Card Replacement Fee\" to \"Instant Debit Card\"",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "24-12-2023",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 45,
      "TASK DETAILS": "Incorporate test Switch & CMS system to Encrypted test CBS",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "21-12-2023",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 46,
      "TASK DETAILS": "Deactivation of all MagStripe Cards of all BINs",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "06-10-2022",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 47,
      "TASK DETAILS": "Add column to the cms_card_acct_link view",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "13-12-2023",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 48,
      "TASK DETAILS": "NPSB Upgrade: Infrastructure Preparation and New IP Connectivity",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "06-12-2023",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 49,
      "TASK DETAILS": "Inclusion of “Tangail Region” in CMS",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "21-11-2023",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 50,
      "TASK DETAILS": "Card profile related issue for international transaction",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "24-09-2023",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 51,
      "TASK DETAILS": "Testing Schedule for NPSB Migration",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "05-11-2023",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 52,
      "TASK DETAILS": "Requirement of ATMFT/POS CHASING profile modification module in CMS",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "31-10-2023",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 53,
      "TASK DETAILS": "Database 19c Migration Questionaires",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "19-07-2023",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 54,
      "TASK DETAILS": "Card status for exclusive use by Card Division",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "21-02-2023",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 55,
      "TASK DETAILS": "Account migration from BANGABANDHU AVENUE to DHAKA STADIUM BRANCH",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "11-01-2024",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 56,
      "TASK DETAILS": "Replacement Fee to the Instant Debit Card",
      "REQUESTED VIA": "WhatsApp",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "11-01-2024",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 57,
      "TASK DETAILS": "Account migration from Bangabandhu Avenue branch to Dhaka Stadium branch",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "11-01-2024",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 58,
      "TASK DETAILS": "NFC Transaction Service related issue",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "22-01-2024",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 59,
      "TASK DETAILS": "add TERMINAL/MERCHANT NAME and TERMINAL/MERCHANT ADDRESS in the CSV file of card transaction history.",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "21-03-2024",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 60,
      "TASK DETAILS": "Interbank IBFT inward table change",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "15-04-2024",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 61,
      "TASK DETAILS": "PIN replacement charge not deducted",
      "REQUESTED VIA": "WhatsApp",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "16-04-2024",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 62,
      "TASK DETAILS": "Test CMS connection",
      "REQUESTED VIA": "WhatsApp",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "02-05-2024",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 63,
      "TASK DETAILS": "inclution of 710 transaction type in transaction history and transaction monitoring system",
      "REQUESTED VIA": "WhatsApp",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "09-05-2024",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 64,
      "TASK DETAILS": "Include 710 (QR) transaction type in transaction history and transaction monitoring system",
      "REQUESTED VIA": "WhatsApp",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "09-05-2024",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 65,
      "TASK DETAILS": "Same POS terminal id show many time in txn history dropdown",
      "REQUESTED VIA": "WhatsApp",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "12-05-2024",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 66,
      "TASK DETAILS": "MC POS acquiring declined by resp 91 and 30, terminal initiate reversal before timeout time 10 sec, now switch will wait till getting resp from MC",
      "REQUESTED VIA": "WhatsApp",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "14-05-2024",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 67,
      "TASK DETAILS": "VISA POS acquiring declined by resp 93, we have raise issue to Nabi vai by mail",
      "REQUESTED VIA": "WhatsApp",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "14-05-2024",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 68,
      "TASK DETAILS": "Card ID in CMS_CARD_ACCT_LINK view",
      "REQUESTED VIA": "MAil",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "08-08-2024",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 69,
      "TASK DETAILS": "PIN replacement charge issue",
      "REQUESTED VIA": "MAil",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "08-08-2024",
      "LAST REMINDER": "16-09-2025",
      "STATUS": ""
    },
    {
      "SL NO.": 70,
      "TASK DETAILS": "Adding CARD ID and CUSTOMER ID to the transaction table",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "12-08-2024",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 71,
      "TASK DETAILS": "Insert CARD ID/CSEQUENCE in the CMSMASTER.TCMS_CARD_REQ table",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "14-০8-2024",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 72,
      "TASK DETAILS": "Requesting to develop process to deduct VAT by debiting card holders account",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "22-08-2024",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 73,
      "TASK DETAILS": "Restriction to the system for Domestic Ecommerce Transactions",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "29-08-2024",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 74,
      "TASK DETAILS": "Tentative time frame to mitigate PCI DSS v4.0 Gap",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "30-08-2024",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 75,
      "TASK DETAILS": "Requesting to include a filed in M1200_1210 for other bank's Card and Account.",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "27-08-2024",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 76,
      "TASK DETAILS": "Temporary Block Card for consecutively wrong PIN attempts",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "09-09-2024",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 77,
      "TASK DETAILS": "New Transaction Types added to NPSB [RTP &TSI]",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "12-09-2024",
      "LAST REMINDER": "16-11-2025",
      "STATUS": ""
    },
    {
      "SL NO.": 78,
      "TASK DETAILS": "Default Services for Instant Debit Cards (BINs 409384 and 539949)",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "17-09-2024",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 79,
      "TASK DETAILS": "Issue with TCMS_CARD_REQ Table for Personalized Debit Card Requests",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "17-09-2024",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 80,
      "TASK DETAILS": "Urgent: CVV2 Issues for Ecommerce Transactions",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "22-09-2024",
      "LAST REMINDER": "",
      "STATUS": "Confirm by Jalal"
    },
    {
      "SL NO.": 81,
      "TASK DETAILS": "Operational Issues with 8-Digit BINs in CMS",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "23-09-2024",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 82,
      "TASK DETAILS": "Requesting to check POS transactions of Global Islami Bank PLC.",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "23-09-2024",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 83,
      "TASK DETAILS": "Ecommerce transaction authorization conditions",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "26-09-2024",
      "LAST REMINDER": "",
      "STATUS": "Confirm by Jalal"
    },
    {
      "SL NO.": 84,
      "TASK DETAILS": "Urgent: ISO Compliance - Password Policy Upgrade",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "03-10-2024",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 85,
      "TASK DETAILS": "Urgent: ISO and PCI DSS Compliance - Data Masking and Storage Restrictions",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "09-10-2024",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 86,
      "TASK DETAILS": "Request to Upgrade System for Supplementary Debit Card Issuance",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "09-10-2024",
      "LAST REMINDER": "17-07-2025",
      "STATUS": ""
    },
    {
      "SL NO.": 87,
      "TASK DETAILS": "Requesting to send SMS about NFC Transactions.",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "16-10-2024",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 88,
      "TASK DETAILS": "Urgent: Request to Disable Acquiring Services for Specified Banks",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "17-10-2024",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 89,
      "TASK DETAILS": "Request to Disable Acquiring Services for Two Banks",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "20-10-2024",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 90,
      "TASK DETAILS": "Need change card status in CMS",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "26-10-2024",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 91,
      "TASK DETAILS": "Waive the PIN CHANGE REQUIRE function of PRAN-RFL (GREEN PIN) cards",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "29-10-2024",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 92,
      "TASK DETAILS": "Minutes of Meeting - October 28, 2024",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "29-10-2024",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 93,
      "TASK DETAILS": "Card service through PI apps",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "11-06-2024",
      "LAST REMINDER": "06-11-2024",
      "STATUS": ""
    },
    {
      "SL NO.": 94,
      "TASK DETAILS": "Contact Center Related Issues",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "21-11-2024",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 95,
      "TASK DETAILS": "Information Update in OTP email",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "26-11-2024",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 96,
      "TASK DETAILS": "Facing shortfall of fund for Transtype 739 (Original Credit)",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "08-12-2024",
      "LAST REMINDER": "10-12-2024",
      "STATUS": ""
    },
    {
      "SL NO.": 97,
      "TASK DETAILS": "Requesting to change some configuration in CMS for new Fees & Charges",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "09-12-2024",
      "LAST REMINDER": "27-01-2025",
      "STATUS": ""
    },
    {
      "SL NO.": 98,
      "TASK DETAILS": "Request for set STTL_Flag=1",
      "REQUESTED VIA": "",
      "REQUESTED BY": "",
      "REQUESTED ON": "",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 99,
      "TASK DETAILS": "Readiness for Request to Pay & Transaction Enquiry Testing.",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "08-01-2025",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 100,
      "TASK DETAILS": "Readiness of Bank, MFS & PSP for Interoperability Testing that is fund transfer between Bank, MFS & PSP.",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "08-01-2025",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 101,
      "TASK DETAILS": "Revised Fees and Charges for NPSB_2025",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "10-02-2025",
      "LAST REMINDER": "19-02-2025",
      "STATUS": ""
    },
    {
      "SL NO.": 102,
      "TASK DETAILS": "Requesting to modify the relationship resource",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "10-02-2025",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 103,
      "TASK DETAILS": "Requesting to disable the restriction for PIN change (68﻿-SYED SPINNING & COTTON MILLS)",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "10-02-2025",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 104,
      "TASK DETAILS": "Requesting to reconfigure PIN mode for special card types",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "11-02-2025",
      "LAST REMINDER": "03-07-2025",
      "STATUS": ""
    },
    {
      "SL NO.": 105,
      "TASK DETAILS": "Fund not get from visa for original credit transaction",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "12-02-2025",
      "LAST REMINDER": "24-05-2025",
      "STATUS": ""
    },
    {
      "SL NO.": 106,
      "TASK DETAILS": "Requesting to disable the restriction for PIN change (73﻿-RENOWN APPARELS LTD)",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "02-03-2025",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 107,
      "TASK DETAILS": "Requesting to disable the restriction for PIN change (75-RAM APPARELS LTD)",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "06-03-2025",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 108,
      "TASK DETAILS": "Requesting to enhance transactionfrequency limit (Debit Card)",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "16-03-2025",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 109,
      "TASK DETAILS": "MasterCard Stand-In report",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "18-03-2025",
      "LAST REMINDER": "04-08-2025\treminder By phone",
      "STATUS": ""
    },
    {
      "SL NO.": 110,
      "TASK DETAILS": "Launch of TakaPay Debit Card - Action Required",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "08-04-2025",
      "LAST REMINDER": "20-04-2025",
      "STATUS": "Done"
    },
    {
      "SL NO.": 111,
      "TASK DETAILS": "Regarding production data for MIS Payroll Report",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "13-05-2025",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 112,
      "TASK DETAILS": "Inventory of all Cryptographic cipher suites and protocols for PCIDSS",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "20-05-2025",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 113,
      "TASK DETAILS": "Simplified accounts TP validation",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "21-05-2025",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 114,
      "TASK DETAILS": "Card Data Archiving up to December 31, 2020",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "26-05-2025",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 115,
      "TASK DETAILS": "Implementation of Updated NPSB Specifications",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "26-05-2025",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 116,
      "TASK DETAILS": "Opening of new 'Regional Office, Habigonj' of our Bank as on 19.06.2025",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "01-06-2025",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 117,
      "TASK DETAILS": "Request for Review of CHD Matrix for PCI DSS",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "18-06-2025",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 118,
      "TASK DETAILS": "Request for Log Screenshots as Part of PCI DSS v4 Evidence Collection",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "13-07-2025",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 119,
      "TASK DETAILS": "Request for testing (Allow to select issuing country code from system)",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Ashim sir",
      "REQUESTED ON": "13-07-2025",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 120,
      "TASK DETAILS": "Enable Pubali Wallet for inward NPSB transactions",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "Anindita Roy",
      "REQUESTED ON": "30-07-2025",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 121,
      "TASK DETAILS": "Urgent Update Required for SMS Notifications (Card Division)",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "03-08-2025",
      "LAST REMINDER": "24-11-2025",
      "STATUS": ""
    },
    {
      "SL NO.": 122,
      "TASK DETAILS": "TakaPay card transaction history BIN syncronosation",
      "REQUESTED VIA": "whatsapp",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "03-08-2025",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 123,
      "TASK DETAILS": "Report of Response Code 85 for IBFT Beneficiary Transactions",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "07-08-2025",
      "LAST REMINDER": "16-11-2025",
      "STATUS": ""
    },
    {
      "SL NO.": 124,
      "TASK DETAILS": "STTLDATE issue (No change in STTLDATE)",
      "REQUESTED VIA": "whatsapp",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "10-08-2025",
      "LAST REMINDER": "",
      "STATUS": "Done"
    },
    {
      "SL NO.": 125,
      "TASK DETAILS": "Request to Disable SMS Notifications for Instant Debit Cards",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "14-08-2025",
      "LAST REMINDER": "24-11-2025",
      "STATUS": ""
    },
    {
      "SL NO.": 126,
      "TASK DETAILS": "Migration Issues from Magstripe to EMV",
      "REQUESTED VIA": "whatsapp",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "25-08-2025",
      "LAST REMINDER": "Mail sent on 10-09-25 Done (16-9-25)",
      "STATUS": ""
    },
    {
      "SL NO.": 127,
      "TASK DETAILS": "Request for Monitoring Tools and Guidelines for Card-Related Systems",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "27-08-2025",
      "LAST REMINDER": "21-09-2025",
      "STATUS": ""
    },
    {
      "SL NO.": 128,
      "TASK DETAILS": "Fund Transfer Issue to Brac Bank through ATM/CRM",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "17-09-2025",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 129,
      "TASK DETAILS": "Limit increase issue  by  call center through CISCO",
      "REQUESTED VIA": "whatsapp",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "29-09-2025",
      "LAST REMINDER": "",
      "STATUS": "Done (05-10-25)"
    },
    {
      "SL NO.": 130,
      "TASK DETAILS": "Inquiry Regarding E-Commerce Transactions for Card ID 1038456",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "07-10-2025",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 131,
      "TASK DETAILS": "Fund Shortfall & Issuer Timeout (VROL 91) on Visa Original Credit (739) Transactions",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "08-10-2025",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 132,
      "TASK DETAILS": "Card expiry date–related issue during renewal with the new card.",
      "REQUESTED VIA": "whatsapp",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "08-10-2025",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 133,
      "TASK DETAILS": "Data Update Issue with TCMS_REPLACED_CARDS Table",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "09-10-2025",
      "LAST REMINDER": "10-11-2025",
      "STATUS": ""
    },
    {
      "SL NO.": 134,
      "TASK DETAILS": "Status: Card Masking Issues in CMS, AMS and CBS (Interface Tables)",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "14-10-2025",
      "LAST REMINDER": "19-11-2025",
      "STATUS": ""
    },
    {
      "SL NO.": 135,
      "TASK DETAILS": "Development of MFS through NPSB",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "16-10-2025",
      "LAST REMINDER": "",
      "STATUS": "Live as sender on 01-11-25"
    },
    {
      "SL NO.": 136,
      "TASK DETAILS": "Request for Investigation of Transaction Fluctuation",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "16-11-2025",
      "LAST REMINDER": "",
      "STATUS": ""
    },
    {
      "SL NO.": 137,
      "TASK DETAILS": "SMS transmission issue",
      "REQUESTED VIA": "Mail",
      "REQUESTED BY": "FOYZAR ALI",
      "REQUESTED ON": "27-11-2025",
      "LAST REMINDER": "",
      "STATUS": "Done"
    }
  ],
  "Pubali All BIN List": [
    {
      "SL": "1",
      "BIN": "409384",
      "Name": "VISA Debit",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "2",
      "BIN": "409380",
      "Name": "VISA GOLD CREDIT",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "3",
      "BIN": "409416",
      "Name": "VISA CLASSIC CREDIT",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "4",
      "BIN": "44778007",
      "Name": "VISA INSTANT DEBIT",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "5",
      "BIN": "44778005",
      "Name": "VISA CORPORATE CREDIT",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "6",
      "BIN": "400462",
      "Name": "Visa Platinum Credit",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "7",
      "BIN": "539949",
      "Name": "MasterCard Debit",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "8",
      "BIN": "52936089",
      "Name": "WORLD MASTER CARD",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "9",
      "BIN": "53670865",
      "Name": "Titanium  Master Card",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "10",
      "BIN": "52936072",
      "Name": "Debit Platinum Master card",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "11",
      "BIN": "901751",
      "Name": "BanglaQR Regular Merchants",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "12",
      "BIN": "901752",
      "Name": "BanglaQR Regular Micro-Merchants",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "13",
      "BIN": "63999629",
      "Name": "Taka Pay",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "14",
      "BIN": "400465",
      "Name": "Visa Business (Gold) Credit",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "15",
      "BIN": "400468",
      "Name": "Visa Classic Debit",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "16",
      "BIN": "400460",
      "Name": "Visa Classic  Credit",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "17",
      "BIN": "400461",
      "Name": "Visa Gold Credit",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "18",
      "BIN": "400463",
      "Name": "Visa Signature  Credit",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "19",
      "BIN": "400464",
      "Name": "Visa Business (Silver) Credit",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "20",
      "BIN": "400466",
      "Name": "Visa Business (Platinum) Credit",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "21",
      "BIN": "400467",
      "Name": "Visa Signature Business Credit",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "22",
      "BIN": "400471",
      "Name": "Visa Signature Debit",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "23",
      "BIN": "400472",
      "Name": "Visa Business Gold Debit",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "24",
      "BIN": "400473",
      "Name": "Visa Business Platinum Debit",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "25",
      "BIN": "400469",
      "Name": "Visa Gold Debit",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "26",
      "BIN": "548044",
      "Name": "MasterCard Standard Credit",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "27",
      "BIN": "533625",
      "Name": "MasterCard Prepaid",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "28",
      "BIN": "548418",
      "Name": "MasterCard Gold Credit",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "29",
      "BIN": "550093",
      "Name": "MasterCard Platinum Credit",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "30",
      "BIN": "917501",
      "Name": "QCash General Debit",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    },
    {
      "SL": "31",
      "BIN": "52936072",
      "Name": "Debit Platinum Master card",
      "Status": "Active",
      "Active Date": "",
      "Deactive Date": ""
    }
  ],
  "ITCL Bank List": [
    {
      "SL": "1",
      "NPSB Code": "000010",
      "Bank Name": "Agrani BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "2",
      "NPSB Code": "000065",
      "Bank Name": "Bank Al Falah",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "3",
      "NPSB Code": "000055",
      "Bank Name": "BASIC BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "4",
      "NPSB Code": "000070",
      "Bank Name": "BanK Asia PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "5",
      "NPSB Code": "000030",
      "Bank Name": "Bangladesh Commerce BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "6",
      "NPSB Code": "000035",
      "Bank Name": "Bangladesh Krishi BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "7",
      "NPSB Code": "000315",
      "Bank Name": "Bengal Commercial BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "8",
      "NPSB Code": "000310",
      "Bank Name": "Community BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "9",
      "NPSB Code": "000105",
      "Bank Name": "First Security Islamic BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "10",
      "NPSB Code": "000120",
      "Bank Name": "IFIC BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "11",
      "NPSB Code": "000230",
      "Bank Name": "ICB Islamic BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "12",
      "NPSB Code": "000135",
      "Bank Name": "Janata BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "13",
      "NPSB Code": "000130",
      "Bank Name": "Jamuna BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "14",
      "NPSB Code": "000285",
      "Bank Name": "Midland BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "15",
      "NPSB Code": "000275",
      "Bank Name": "Meghna BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "16",
      "NPSB Code": "000140",
      "Bank Name": "Mercantile BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "17",
      "NPSB Code": "000295",
      "Bank Name": "Modhumoti BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "18",
      "NPSB Code": "000150",
      "Bank Name": "National BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "19",
      "NPSB Code": "000260",
      "Bank Name": "NRB Commercial BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "20",
      "NPSB Code": "000300",
      "Bank Name": "NRB Global Islamic BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "21",
      "NPSB Code": "000160",
      "Bank Name": "NCC BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "22",
      "NPSB Code": "000165",
      "Bank Name": "One BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "23",
      "NPSB Code": "000185",
      "Bank Name": "Rupali BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "24",
      "NPSB Code": "000190",
      "Bank Name": "Shahjalal Islamic BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "25",
      "NPSB Code": "000305",
      "Bank Name": "Shimanto BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "26",
      "NPSB Code": "000200",
      "Bank Name": "Sonali BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "27",
      "NPSB Code": "000195",
      "Bank Name": "Social Islamic BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "28",
      "NPSB Code": "000270",
      "Bank Name": "SBAC BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "29",
      "NPSB Code": "000240",
      "Bank Name": "Trust BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "30",
      "NPSB Code": "000265",
      "Bank Name": "Union BanK PLC.",
      "Status": "Good",
      "Comment": ""
    },
    {
      "SL": "31",
      "NPSB Code": "000250",
      "Bank Name": "Uttara BanK PLC.",
      "Status": "Good",
      "Comment": ""
    }
  ],
  "Network Response List": [
    {
      "SL": "1",
      "Response Code": "0",
      "Description": "Approved or completed successfully"
    },
    {
      "SL": "2",
      "Response Code": "1",
      "Description": "Refer to card issuer"
    },
    {
      "SL": "3",
      "Response Code": "2",
      "Description": "Refer to card issuer's special conditions"
    },
    {
      "SL": "4",
      "Response Code": "3",
      "Description": "Invalid merchant"
    },
    {
      "SL": "5",
      "Response Code": "4",
      "Description": "Pick-up"
    },
    {
      "SL": "6",
      "Response Code": "5",
      "Description": "Do not honor"
    },
    {
      "SL": "7",
      "Response Code": "6",
      "Description": "Error"
    },
    {
      "SL": "8",
      "Response Code": "7",
      "Description": "Pick-up card, special condition"
    },
    {
      "SL": "9",
      "Response Code": "8",
      "Description": "Honour with identification"
    },
    {
      "SL": "10",
      "Response Code": "9",
      "Description": "Request in progress"
    },
    {
      "SL": "11",
      "Response Code": "10",
      "Description": "Approved for partial amount"
    },
    {
      "SL": "12",
      "Response Code": "11",
      "Description": "Approved (VIP)"
    },
    {
      "SL": "13",
      "Response Code": "12",
      "Description": "Invalid transaction"
    },
    {
      "SL": "14",
      "Response Code": "13",
      "Description": "Invalid amount"
    },
    {
      "SL": "15",
      "Response Code": "14",
      "Description": "Invalid card number (no such number)"
    },
    {
      "SL": "16",
      "Response Code": "15",
      "Description": "No such issuer"
    },
    {
      "SL": "17",
      "Response Code": "16",
      "Description": "Approved, update track 3"
    },
    {
      "SL": "18",
      "Response Code": "17",
      "Description": "Customer cancellation"
    },
    {
      "SL": "19",
      "Response Code": "18",
      "Description": "Customer dispute"
    },
    {
      "SL": "20",
      "Response Code": "19",
      "Description": "Re-enter transaction"
    },
    {
      "SL": "21",
      "Response Code": "20",
      "Description": "Invalid response"
    },
    {
      "SL": "22",
      "Response Code": "21",
      "Description": "No action taken"
    },
    {
      "SL": "23",
      "Response Code": "22",
      "Description": "Suspected malfunction"
    },
    {
      "SL": "24",
      "Response Code": "23",
      "Description": "Unacceptable transaction fee"
    },
    {
      "SL": "25",
      "Response Code": "24",
      "Description": "File update not supported by receiver"
    },
    {
      "SL": "26",
      "Response Code": "25",
      "Description": "Unable to locate record on file"
    },
    {
      "SL": "27",
      "Response Code": "26",
      "Description": "Duplicate file update record, old record replaced"
    },
    {
      "SL": "28",
      "Response Code": "27",
      "Description": "File update field edit error"
    },
    {
      "SL": "29",
      "Response Code": "28",
      "Description": "File update file locked out"
    },
    {
      "SL": "30",
      "Response Code": "29",
      "Description": "File update not successful, contact acquirer"
    },
    {
      "SL": "31",
      "Response Code": "30",
      "Description": "Format error"
    },
    {
      "SL": "32",
      "Response Code": "31",
      "Description": "Bank not supported by switch"
    },
    {
      "SL": "33",
      "Response Code": "32",
      "Description": "Completed partially"
    },
    {
      "SL": "34",
      "Response Code": "33",
      "Description": "Expired card"
    },
    {
      "SL": "35",
      "Response Code": "34",
      "Description": "Suspected fraud"
    },
    {
      "SL": "36",
      "Response Code": "35",
      "Description": "Card acceptor contact acquirer"
    },
    {
      "SL": "37",
      "Response Code": "36",
      "Description": "Restricted card"
    },
    {
      "SL": "38",
      "Response Code": "37",
      "Description": "Card acceptor call acquirer security"
    },
    {
      "SL": "39",
      "Response Code": "38",
      "Description": "Allowable PIN tries exceeded"
    },
    {
      "SL": "40",
      "Response Code": "39",
      "Description": "No credit account"
    },
    {
      "SL": "41",
      "Response Code": "40",
      "Description": "Requested function not supported"
    },
    {
      "SL": "42",
      "Response Code": "41",
      "Description": "Lost card"
    },
    {
      "SL": "43",
      "Response Code": "42",
      "Description": "No universal account"
    },
    {
      "SL": "44",
      "Response Code": "43",
      "Description": "Stolen card, pick-up"
    },
    {
      "SL": "45",
      "Response Code": "44",
      "Description": "No investment account"
    },
    {
      "SL": "46",
      "Response Code": "45-50",
      "Description": "Reserved for ISO use"
    },
    {
      "SL": "47",
      "Response Code": "51",
      "Description": "Not sufficient funds"
    },
    {
      "SL": "48",
      "Response Code": "52",
      "Description": "No checking account"
    },
    {
      "SL": "49",
      "Response Code": "53",
      "Description": "No savings account"
    },
    {
      "SL": "50",
      "Response Code": "54",
      "Description": "Expired card"
    },
    {
      "SL": "51",
      "Response Code": "55",
      "Description": "Incorrect personal identification number"
    },
    {
      "SL": "52",
      "Response Code": "56",
      "Description": "No card record"
    },
    {
      "SL": "53",
      "Response Code": "57",
      "Description": "Transaction not permitted to cardholder"
    },
    {
      "SL": "54",
      "Response Code": "58",
      "Description": "Transaction not permitted to terminal"
    },
    {
      "SL": "55",
      "Response Code": "59",
      "Description": "Suspected fraud"
    },
    {
      "SL": "56",
      "Response Code": "60",
      "Description": "Card acceptor contact acquirer"
    },
    {
      "SL": "57",
      "Response Code": "61",
      "Description": "Exceeds withdrawal amount limit"
    },
    {
      "SL": "58",
      "Response Code": "62",
      "Description": "Restricted card"
    },
    {
      "SL": "59",
      "Response Code": "63",
      "Description": "Security violation"
    },
    {
      "SL": "60",
      "Response Code": "64",
      "Description": "Original amount incorrect"
    },
    {
      "SL": "61",
      "Response Code": "65",
      "Description": "Exceeds withdrawal frequency limit"
    },
    {
      "SL": "62",
      "Response Code": "66",
      "Description": "Card acceptor call acquirer's security department"
    },
    {
      "SL": "63",
      "Response Code": "67",
      "Description": "Hard capture (requires that card be picked up at ATM)"
    },
    {
      "SL": "64",
      "Response Code": "68",
      "Description": "Response received too late"
    },
    {
      "SL": "65",
      "Response Code": "69-74",
      "Description": "Reserved for ISO use"
    },
    {
      "SL": "66",
      "Response Code": "75",
      "Description": "Allowable number of PIN tries exceeded"
    },
    {
      "SL": "67",
      "Response Code": "78",
      "Description": "Card not activated"
    },
    {
      "SL": "68",
      "Response Code": "80",
      "Description": "Visa transactions: credit issuer unavailable"
    },
    {
      "SL": "69",
      "Response Code": "82",
      "Description": "Invalid card expiration date"
    },
    {
      "SL": "70",
      "Response Code": "82",
      "Description": "CVN Mismatch: Negative CAM, dCVV, iCVV, or CVV results"
    },
    {
      "SL": "71",
      "Response Code": "85",
      "Description": "Success: address verification"
    },
    {
      "SL": "72",
      "Response Code": "76-89",
      "Description": "Reserved for private use"
    },
    {
      "SL": "73",
      "Response Code": "90",
      "Description": "Cutoff is in process"
    },
    {
      "SL": "74",
      "Response Code": "",
      "Description": "(switch ending a day's business and starting the next. Transaction can be sent again in a few minutes)"
    },
    {
      "SL": "75",
      "Response Code": "91",
      "Description": "Issuer or switch is inoperative"
    },
    {
      "SL": "76",
      "Response Code": "92",
      "Description": "Financial institution or intermediate network facility cannot be found for routing"
    },
    {
      "SL": "77",
      "Response Code": "93",
      "Description": "Transaction cannot be completed. Violation of law"
    },
    {
      "SL": "78",
      "Response Code": "94",
      "Description": "Duplicate transmission"
    },
    {
      "SL": "79",
      "Response Code": "95",
      "Description": "Reconcile error"
    },
    {
      "SL": "80",
      "Response Code": "96",
      "Description": "System malfunction"
    },
    {
      "SL": "81",
      "Response Code": "97-99",
      "Description": "Reserved for national use"
    },
    {
      "SL": "82",
      "Response Code": "Zero A-9Z",
      "Description": "Reserved for ISO use"
    },
    {
      "SL": "83",
      "Response Code": "A Zero-MZ",
      "Description": "Reserved for national use"
    },
    {
      "SL": "84",
      "Response Code": "N Zero-ZZ",
      "Description": "Reserved for private use"
    }
  ],
  "MCC Block List": [
    {
      "SL": "1",
      "Block MC COde": "6012",
      "Description": "Financial Institution - Merchandise And Service. International OFF and Local ON"
    },
    {
      "SL": "2",
      "Block MC COde": "6051",
      "Description": "Non-Financial Institutions - Cryptocurrency Purchases, Foreign Currency, Money Orders (not wire transfer) and Travelers Cheques and other similar service."
    },
    {
      "SL": "3",
      "Block MC COde": "6211",
      "Description": "Security Brokers / Dealers. International OFF Local  ON"
    },
    {
      "SL": "4",
      "Block MC COde": "7399",
      "Description": "Business Services Not Elsewhere Classified. International OFF and Local ON"
    },
    {
      "SL": "5",
      "Block MC COde": "7800",
      "Description": "Government-Owned Lottery (US Region Only)"
    },
    {
      "SL": "6",
      "Block MC COde": "7801",
      "Description": "Government-Licensed Casinos (Online or Internet Gambling)"
    },
    {
      "SL": "7",
      "Block MC COde": "7802",
      "Description": "Government-Licensed Horse / Dog Racing."
    },
    {
      "SL": "8",
      "Block MC COde": "7995",
      "Description": "Gambling Transactions,Betting (Sportsbook,fantasy,social gamming; when regulated and not covered by other MCCs)"
    },
    {
      "SL": "9",
      "Block MC COde": "4829",
      "Description": "Wire transfers and money orders. Only Block for International"
    },
    {
      "SL": "10",
      "Block MC COde": "6540",
      "Description": "Non-Financial Institutions Stored Value Card Purchase/ Load. Only Block For International"
    },
    {
      "SL": "11",
      "Block MC COde": "9406",
      "Description": "Lottery Selling (Physical or Online)"
    }
  ],
  "Transaction Type List": [
    {
      "SL": "1",
      "Txn. Name": "CASH WITHDRAWAL",
      "Txn. Code": "700",
      "Finincial/Non Fin.": "Finincial",
      "Txn Short Code": "A1",
      "Comment": "CW"
    },
    {
      "SL": "2",
      "Txn. Name": "BALANCE INQUIRY",
      "Txn. Code": "702",
      "Finincial/Non Fin.": "Non Fin.",
      "Txn Short Code": "BQ",
      "Comment": "BI"
    },
    {
      "SL": "3",
      "Txn. Name": "MINI STATEMENT",
      "Txn. Code": "731",
      "Finincial/Non Fin.": "Non Fin.",
      "Txn Short Code": "MS",
      "Comment": "MS"
    },
    {
      "SL": "4",
      "Txn. Name": "PURCHASE",
      "Txn. Code": "774",
      "Finincial/Non Fin.": "FININCIAL",
      "Txn Short Code": "R1",
      "Comment": ""
    },
    {
      "SL": "5",
      "Txn. Name": "IBFT (BENEFICIARY)",
      "Txn. Code": "703",
      "Finincial/Non Fin.": "FININCIAL",
      "Txn Short Code": "T0",
      "Comment": ""
    },
    {
      "SL": "6",
      "Txn. Name": "ATMFT (BENEFICIARY)",
      "Txn. Code": "703",
      "Finincial/Non Fin.": "",
      "Txn Short Code": "",
      "Comment": ""
    },
    {
      "SL": "7",
      "Txn. Name": "ATMFT (SENDER)",
      "Txn. Code": "737",
      "Finincial/Non Fin.": "",
      "Txn Short Code": "",
      "Comment": ""
    },
    {
      "SL": "8",
      "Txn. Name": "INTERACTIVE FT",
      "Txn. Code": "736",
      "Finincial/Non Fin.": "FININCIAL",
      "Txn Short Code": "N/A",
      "Comment": "N/A"
    },
    {
      "SL": "9",
      "Txn. Name": "E-COMMARCE",
      "Txn. Code": "670",
      "Finincial/Non Fin.": "FININCIAL",
      "Txn Short Code": "N/A",
      "Comment": ""
    },
    {
      "SL": "10",
      "Txn. Name": "POS CASHING",
      "Txn. Code": "687",
      "Finincial/Non Fin.": "FININCIAL",
      "Txn Short Code": "N/A",
      "Comment": "N/A"
    }
  ],
  "ECom. Txn. Auth Conditions": [
    {
      "SL": "1",
      "Description": "3D Secure+CVV2 NULL = Approved",
      "Comment": "Domestic ECOM when ON"
    },
    {
      "SL": "2",
      "Description": "3D Secure+CVV2 Right= Approved",
      "Comment": "Domestic ECOM when ON"
    },
    {
      "SL": "3",
      "Description": "3D Secure+CVV2 Wrong= Declined",
      "Comment": "Domestic ECOM when ON"
    },
    {
      "SL": "4",
      "Description": "Not 3D Secure+CVV2 Null= Declined",
      "Comment": "Domestic ECOM when ON"
    },
    {
      "SL": "5",
      "Description": "Not 3D Secure+CVV2 Right = Declined",
      "Comment": "Domestic ECOM when ON"
    },
    {
      "SL": "6",
      "Description": "Not 3D Secure+CVV2 Wrong = Declined",
      "Comment": "Domestic ECOM when ON"
    },
    {
      "SL": "7",
      "Description": "3D Secure+CVV2 NULL = Approved (427404994469)",
      "Comment": "Domestic ECOM when OFF"
    },
    {
      "SL": "8",
      "Description": "3D Secure+CVV2 Right= Approved (427504320468)",
      "Comment": "Domestic ECOM when OFF"
    },
    {
      "SL": "9",
      "Description": "3D Secure+CVV2 Wrong= Declined",
      "Comment": "Domestic ECOM when OFF"
    },
    {
      "SL": "10",
      "Description": "Not 3D Secure+CVV2 Null= Declined",
      "Comment": "Domestic ECOM when OFF"
    },
    {
      "SL": "11",
      "Description": "Not 3D Secure+CVV2 Right = Declined (427404369227)",
      "Comment": "Domestic ECOM when OFF"
    },
    {
      "SL": "12",
      "Description": "Not 3D Secure+CVV2 Wrong = Declined (427405751609)",
      "Comment": "Domestic ECOM when OFF"
    },
    {
      "SL": "13",
      "Description": "3D Secure+CVV2 NULL = Approved",
      "Comment": "International ECOM when ON"
    },
    {
      "SL": "14",
      "Description": "3D Secure+CVV2 Right= Approved",
      "Comment": "International ECOM when ON"
    },
    {
      "SL": "15",
      "Description": "3D Secure+CVV2 Wrong= Declined",
      "Comment": "International ECOM when ON"
    },
    {
      "SL": "16",
      "Description": "Not 3D Secure+CVV2 Null= Declined",
      "Comment": "International ECOM when ON"
    },
    {
      "SL": "17",
      "Description": "Not 3D Secure+CVV2 Right = Approved",
      "Comment": "International ECOM when ON"
    },
    {
      "SL": "18",
      "Description": "Not 3D Secure+CVV2 Wrong = Declined",
      "Comment": "International ECOM when ON"
    },
    {
      "SL": "19",
      "Description": "Declined in all cases",
      "Comment": "International ECOM when OFF"
    }
  ],
  "Card Type Lists": [
    {
      "SL": "1",
      "Card Type": "Debit",
      "Card Type Code": "000",
      "Card Title": "Default",
      "Branch": "N/A",
      "Brand": "N/A",
      "PIN": "N/A",
      "Comments": ""
    },
    {
      "SL": "2",
      "Card Type": "Debit",
      "Card Type Code": "001",
      "Card Title": "DEBIT (Consumer)",
      "Branch": "ALL",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "3",
      "Card Type": "Debit",
      "Card Type Code": "002",
      "Card Title": "INTERNATIONAL DEBIT (CONSUMER) [P]",
      "Branch": "N/A",
      "Brand": "N/A",
      "PIN": "N/A",
      "Comments": ""
    },
    {
      "SL": "4",
      "Card Type": "Debit",
      "Card Type Code": "010",
      "Card Title": "DEBIT (STAFF)",
      "Branch": "ALL",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "5",
      "Card Type": "Debit",
      "Card Type Code": "011",
      "Card Title": "NEW PRODUCT [P]",
      "Branch": "N/A",
      "Brand": "N/A",
      "PIN": "N/A",
      "Comments": ""
    },
    {
      "SL": "6",
      "Card Type": "Debit",
      "Card Type Code": "012",
      "Card Title": "DEBIT (DNMC)",
      "Branch": "1441",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "7",
      "Card Type": "Debit",
      "Card Type Code": "013",
      "Card Title": "SP GARMENTS & WASHING (HARD PIN)",
      "Branch": "4481",
      "Brand": "MC & VISA Debit",
      "PIN": "Hard",
      "Comments": ""
    },
    {
      "SL": "8",
      "Card Type": "Debit",
      "Card Type Code": "014",
      "Card Title": "RIANT ENGINEERS LTD",
      "Branch": "2714",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "9",
      "Card Type": "Debit",
      "Card Type Code": "015",
      "Card Title": "SP Garments & Wasing",
      "Branch": "4481",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "10",
      "Card Type": "Debit",
      "Card Type Code": "016",
      "Card Title": "STARLET & MOTALEB MONOWARA",
      "Branch": "2905",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "11",
      "Card Type": "Debit",
      "Card Type Code": "017",
      "Card Title": "NASIR FIOAT GLASS INDUSTRIES",
      "Branch": "2905",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "12",
      "Card Type": "Debit",
      "Card Type Code": "018",
      "Card Title": "BROKERAGE HOUSE/TREC",
      "Branch": "2905",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "13",
      "Card Type": "Debit",
      "Card Type Code": "019",
      "Card Title": "POPULAR PHARMA (PPL)",
      "Branch": "",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "14",
      "Card Type": "Debit",
      "Card Type Code": "020",
      "Card Title": "ATM SUPERVISOR CARD",
      "Branch": "N/A",
      "Brand": "N/A",
      "PIN": "Hard",
      "Comments": ""
    },
    {
      "SL": "15",
      "Card Type": "Debit",
      "Card Type Code": "022",
      "Card Title": "DEBIT (WOMEN CARD)",
      "Branch": "",
      "Brand": "VISA DEBIT",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "16",
      "Card Type": "Debit",
      "Card Type Code": "023",
      "Card Title": "BHL CERAMICS CO. LTD",
      "Branch": "1690",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "17",
      "Card Type": "Debit",
      "Card Type Code": "024",
      "Card Title": "SQ CELSIUS LTD",
      "Branch": "4481",
      "Brand": "MC & VISA Debit",
      "PIN": "Hard",
      "Comments": "Initial PIN change waive"
    },
    {
      "SL": "18",
      "Card Type": "Debit",
      "Card Type Code": "025",
      "Card Title": "REMA TEA ESTATE",
      "Branch": "2722",
      "Brand": "MC & VISA Debit",
      "PIN": "Hard",
      "Comments": ""
    },
    {
      "SL": "19",
      "Card Type": "Debit",
      "Card Type Code": "026",
      "Card Title": "BIO XIN COSMECEUTICALS",
      "Branch": "0565",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "20",
      "Card Type": "Debit",
      "Card Type Code": "027",
      "Card Title": "NORTH WEST POWER GENERATION",
      "Branch": "0581",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "21",
      "Card Type": "Debit",
      "Card Type Code": "028",
      "Card Title": "DEBIT (DAB)",
      "Branch": "2897",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "22",
      "Card Type": "Debit",
      "Card Type Code": "29",
      "Card Title": "AKIJ JUTE MILLS",
      "Branch": "5229",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "23",
      "Card Type": "Debit",
      "Card Type Code": "030",
      "Card Title": "DEBIT (PRAN-RFL STAFF)",
      "Branch": "0600, 0894, 2030, 4717",
      "Brand": "MC & VISA Debit",
      "PIN": "Hard",
      "Comments": ""
    },
    {
      "SL": "24",
      "Card Type": "Debit",
      "Card Type Code": "31",
      "Card Title": "LANTABUR GROUP",
      "Branch": "4500",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": "Initial PIN change waive"
    },
    {
      "SL": "25",
      "Card Type": "Debit",
      "Card Type Code": "32",
      "Card Title": "LANTABUR (HARD PIN)",
      "Branch": "4500",
      "Brand": "MC & VISA Debit",
      "PIN": "Hard",
      "Comments": "Initial PIN change waive"
    },
    {
      "SL": "26",
      "Card Type": "Debit",
      "Card Type Code": "033",
      "Card Title": "INT DEBIT (VIP)",
      "Branch": "N/A",
      "Brand": "N/A",
      "PIN": "N/A",
      "Comments": ""
    },
    {
      "SL": "27",
      "Card Type": "Debit",
      "Card Type Code": "34",
      "Card Title": "SENIOR CITIZEN PDS [P]",
      "Branch": "",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "28",
      "Card Type": "Debit",
      "Card Type Code": "035",
      "Card Title": "DEBIT(BANGLADESHBANKSTAFF)",
      "Branch": "0340",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "29",
      "Card Type": "Debit",
      "Card Type Code": "36",
      "Card Title": "SQ CELSIUS (GREEN PIN)",
      "Branch": "4481",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "30",
      "Card Type": "Debit",
      "Card Type Code": "37",
      "Card Title": "MUDARABA SENIOR CITIZEN PDS",
      "Branch": "ALL BR.",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "31",
      "Card Type": "Debit",
      "Card Type Code": "038",
      "Card Title": "DEBIT (BSMMU)",
      "Branch": "0947",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "32",
      "Card Type": "Debit",
      "Card Type Code": "39",
      "Card Title": "BSMMC",
      "Branch": "",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "33",
      "Card Type": "Debit",
      "Card Type Code": "040",
      "Card Title": "DEBIT (SCHOOL BANKING)",
      "Branch": "",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "34",
      "Card Type": "Debit",
      "Card Type Code": "041",
      "Card Title": "DEBIT (EVINCE GROUP)",
      "Branch": "4500",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "35",
      "Card Type": "Debit",
      "Card Type Code": "042",
      "Card Title": "DEBIT (SCHOLARSHOME SCHOOL)",
      "Branch": "3685",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "36",
      "Card Type": "Debit",
      "Card Type Code": "44",
      "Card Title": "KALLOL TRADING LIMITED [P]",
      "Branch": "All",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "37",
      "Card Type": "Debit",
      "Card Type Code": "045",
      "Card Title": "DEBIT (DDCL STAFF)",
      "Branch": "1345",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "38",
      "Card Type": "Debit",
      "Card Type Code": "46",
      "Card Title": "PERSONALIZED DEBIT (POSH GARMENTS LTD)",
      "Branch": "3555",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "39",
      "Card Type": "Debit",
      "Card Type Code": "047",
      "Card Title": "TECHLAND",
      "Branch": "1345/3494",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "40",
      "Card Type": "Debit",
      "Card Type Code": "048",
      "Card Title": "ERQ DEBIT",
      "Branch": "N/A",
      "Brand": "N/A",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "41",
      "Card Type": "Debit",
      "Card Type Code": "049",
      "Card Title": "J. K SHIRT & FABRICS LTD",
      "Branch": "ALL",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "42",
      "Card Type": "Debit",
      "Card Type Code": "050",
      "Card Title": "DEBIT(SQUARE DENIMS STAFF)",
      "Branch": "4717",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "43",
      "Card Type": "Debit",
      "Card Type Code": "051",
      "Card Title": "DRAGONI FASHIONS LIMITED",
      "Branch": "0260",
      "Brand": "MC & VISA Debit(INSTANT)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "44",
      "Card Type": "Debit",
      "Card Type Code": "052",
      "Card Title": "DEBIT (DMC)",
      "Branch": "2966",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "45",
      "Card Type": "Debit",
      "Card Type Code": "055",
      "Card Title": "DEBIT (KIMBERLEY STAFF)",
      "Branch": "3677",
      "Brand": "MC & VISA Debit",
      "PIN": "Hard",
      "Comments": ""
    },
    {
      "SL": "46",
      "Card Type": "Debit",
      "Card Type Code": "043",
      "Card Title": "DEBIT(BANGLADESH RAILWAY STAFF)",
      "Branch": "ALL",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "47",
      "Card Type": "Debit",
      "Card Type Code": "53",
      "Card Title": "PRAN-RFL Staff with Green PIN",
      "Branch": "ALL",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": "Waive the PIN CHANGE REQUIRE function"
    },
    {
      "SL": "48",
      "Card Type": "Debit",
      "Card Type Code": "54",
      "Card Title": "Khan Bahadur Ahsanullah University",
      "Branch": "1948",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "49",
      "Card Type": "Debit",
      "Card Type Code": "57",
      "Card Title": "LEATHREX FOOTWEAR INDUSTRIES LTD",
      "Branch": "4709",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "50",
      "Card Type": "Debit",
      "Card Type Code": "59",
      "Card Title": "M. T. SWEATERS LTD",
      "Branch": "4839",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "51",
      "Card Type": "Debit",
      "Card Type Code": "60",
      "Card Title": "DR TOWER",
      "Branch": "24381",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "52",
      "Card Type": "Debit",
      "Card Type Code": "63",
      "Card Title": "MIR CERAMIC LTD",
      "Branch": "ALL",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "53",
      "Card Type": "Debit",
      "Card Type Code": "64",
      "Card Title": "ARROWTECH SPORTSWEAR",
      "Branch": "ALL",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "54",
      "Card Type": "Debit",
      "Card Type Code": "65",
      "Card Title": "TMMS PUBLIC SCHOOL & COLLAGE",
      "Branch": "ALL",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "55",
      "Card Type": "Debit",
      "Card Type Code": "68",
      "Card Title": "SYED SPINNING & COTTON MILLS",
      "Branch": "0114",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "56",
      "Card Type": "Debit",
      "Card Type Code": "69",
      "Card Title": "HIGHSPEED SHIPBUILDING & ENG",
      "Branch": "5062",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "57",
      "Card Type": "Debit",
      "Card Type Code": "70",
      "Card Title": "EAGLE'S EYE & PEOPLE'S HOSPITAL",
      "Branch": "",
      "Brand": "",
      "PIN": "",
      "Comments": ""
    },
    {
      "SL": "58",
      "Card Type": "Debit",
      "Card Type Code": "72",
      "Card Title": "THAT’S IT SPORTS",
      "Branch": "3762",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "59",
      "Card Type": "Debit",
      "Card Type Code": "73",
      "Card Title": "RENOWN  APPARELS  LTD",
      "Branch": "0817",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": "disable the restriction for PIN change."
    },
    {
      "SL": "60",
      "Card Type": "Debit",
      "Card Type Code": "75",
      "Card Title": "RAM APPARLES LTD",
      "Branch": "4500",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": "disable the restriction for PIN change."
    },
    {
      "SL": "61",
      "Card Type": "Debit",
      "Card Type Code": "77",
      "Card Title": "NATIONAL HEALTHCARE NETWORK",
      "Branch": "ALL",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "62",
      "Card Type": "Debit",
      "Card Type Code": "79",
      "Card Title": "MATADOR GROUP",
      "Branch": "4717,2871",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "63",
      "Card Type": "Debit",
      "Card Type Code": "80",
      "Card Title": "ALLIED MOTHER CHILD HOSPITAL",
      "Branch": "ALL",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "64",
      "Card Type": "Debit",
      "Card Type Code": "81",
      "Card Title": "INSTITUTE OF ENGINEERS BANGLADESH",
      "Branch": "ALL",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "65",
      "Card Type": "Debit",
      "Card Type Code": "83",
      "Card Title": "SODESH HOSPITAL PVT LTD.",
      "Branch": "2056",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "66",
      "Card Type": "Debit",
      "Card Type Code": "84",
      "Card Title": "BANASREE NATIONAL IDEAL",
      "Branch": "4030",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "67",
      "Card Type": "Debit",
      "Card Type Code": "85",
      "Card Title": "INTERLOOP BD AND NEEDLE APPEAREL",
      "Branch": "2438",
      "Brand": "MC & VISA Debit",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "68",
      "Card Type": "Credit",
      "Card Type Code": "11",
      "Card Title": "CORPORATE CREDIT",
      "Branch": "",
      "Brand": "PLATINUM CREDIT (VISA)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "69",
      "Card Type": "Credit",
      "Card Type Code": "12",
      "Card Title": "CORPORATE CREDIT SUPP [S]",
      "Branch": "",
      "Brand": "PLATINUM CREDIT (VISA)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "70",
      "Card Type": "Credit",
      "Card Type Code": "13",
      "Card Title": "CO-BRANDED PLATINUM SUPP (BSMMU)",
      "Branch": "0947",
      "Brand": "ALL",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "71",
      "Card Type": "Credit",
      "Card Type Code": "14",
      "Card Title": "CO-BRANDED PLATINUM SUPP (BSMMU)",
      "Branch": "0947",
      "Brand": "ALL",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "72",
      "Card Type": "Credit",
      "Card Type Code": "13",
      "Card Title": "CO-BRANDED GOLD (BSMMU)",
      "Branch": "0947",
      "Brand": "ALL",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "73",
      "Card Type": "Credit",
      "Card Type Code": "14",
      "Card Title": "CO-BRANDED GOLD SUPP (BSMMU)",
      "Branch": "0947",
      "Brand": "ALL",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "74",
      "Card Type": "Credit",
      "Card Type Code": "13",
      "Card Title": "CO-BRANDED CLASSIC (BSMMU)",
      "Branch": "0947",
      "Brand": "ALL",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "75",
      "Card Type": "Credit",
      "Card Type Code": "14",
      "Card Title": "CO-BRANDED CLASSIC SUPP (BSMMU)",
      "Branch": "0947",
      "Brand": "ALL",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "76",
      "Card Type": "Credit",
      "Card Type Code": "15",
      "Card Title": "PAN-PACIFIC SONARGAON",
      "Branch": "3539",
      "Brand": "ALL",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "77",
      "Card Type": "Credit",
      "Card Type Code": "16",
      "Card Title": "PAN-PACIFIC SONARGAON (SUPP)",
      "Branch": "3539",
      "Brand": "ALL",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "78",
      "Card Type": "Credit",
      "Card Type Code": "17",
      "Card Title": "ST. JOSEPH HSS",
      "Branch": "2706",
      "Brand": "ALL",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "79",
      "Card Type": "Credit",
      "Card Type Code": "18",
      "Card Title": "ST. JOSEPH HSS (SUPP)",
      "Branch": "2706",
      "Brand": "ALL",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "80",
      "Card Type": "Credit",
      "Card Type Code": "19",
      "Card Title": "BANGLADESH RAILWAY SAFF",
      "Branch": "ALL",
      "Brand": "ALL",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "81",
      "Card Type": "Credit",
      "Card Type Code": "20",
      "Card Title": "BANGLADESH RAILWAY SAFF (SUPP)",
      "Branch": "ALL",
      "Brand": "ALL",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "82",
      "Card Type": "Credit",
      "Card Type Code": "21",
      "Card Title": "GREEN DELTA INSURANCE PLC",
      "Branch": "ALL",
      "Brand": "ALL",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "83",
      "Card Type": "Credit",
      "Card Type Code": "22",
      "Card Title": "GREEN DELTA INSURANCE PLC(SUPP)",
      "Branch": "ALL",
      "Brand": "ALL",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "84",
      "Card Type": "Credit",
      "Card Type Code": "23",
      "Card Title": "BCSIR [P]",
      "Branch": "ALL",
      "Brand": "All",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "85",
      "Card Type": "Credit",
      "Card Type Code": "24",
      "Card Title": "BCSIR SUPP [S]",
      "Branch": "ALL",
      "Brand": "All",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "86",
      "Card Type": "Credit",
      "Card Type Code": "25",
      "Card Title": "NARAYANGANJ CLUB MEMBERS [P]",
      "Branch": "AA",
      "Brand": "61- PLATINUM CREDIT",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "87",
      "Card Type": "Credit",
      "Card Type Code": "26",
      "Card Title": "NARAYANGANJ CLUB MEMBERS SUPP [S]",
      "Branch": "A",
      "Brand": "61- PLATINUM CREDIT",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "88",
      "Card Type": "Credit",
      "Card Type Code": "027",
      "Card Title": "NORTH WEST POWER GENERATION",
      "Branch": "0581",
      "Brand": "CLASSIC CREDIT",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "89",
      "Card Type": "Credit",
      "Card Type Code": "027",
      "Card Title": "NORTH WEST POWER GENERATION",
      "Branch": "0581",
      "Brand": "GOLD CREDIT",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "90",
      "Card Type": "Credit",
      "Card Type Code": "027",
      "Card Title": "NORTH WEST POWER GENERATION",
      "Branch": "0581",
      "Brand": "PLATINUM CREDIT",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "91",
      "Card Type": "Credit",
      "Card Type Code": "028",
      "Card Title": "NORTH WEST POWER GENERATION",
      "Branch": "0581",
      "Brand": "CLASSIC SUPPLEMENTARY",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "92",
      "Card Type": "Credit",
      "Card Type Code": "028",
      "Card Title": "NORTH WEST POWER GENERATION",
      "Branch": "0581",
      "Brand": "GOLD SUPPLEMENTARY",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "93",
      "Card Type": "Credit",
      "Card Type Code": "028",
      "Card Title": "NORTH WEST POWER (SUPPLE)",
      "Branch": "0581",
      "Brand": "PLATINUM SUPPLEMENTARY",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "94",
      "Card Type": "Credit",
      "Card Type Code": "029",
      "Card Title": "ISPAHANI ISLAMIA EYE",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "95",
      "Card Type": "Credit",
      "Card Type Code": "030",
      "Card Title": "ISPAHANI ISLAMIA EYE SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "96",
      "Card Type": "Credit",
      "Card Type Code": "31",
      "Card Title": "KGS GROUP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "97",
      "Card Type": "Credit",
      "Card Type Code": "32",
      "Card Title": "KGS GROUP SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "98",
      "Card Type": "Credit",
      "Card Type Code": "33",
      "Card Title": "CONCORD GROUP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "99",
      "Card Type": "Credit",
      "Card Type Code": "34",
      "Card Title": "CONCORD GROUP SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "100",
      "Card Type": "Credit",
      "Card Type Code": "35",
      "Card Title": "GREEN DELTA SECURITIES",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "101",
      "Card Type": "Credit",
      "Card Type Code": "36",
      "Card Title": "GREEN DELTA SECURITIES SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "102",
      "Card Type": "Credit",
      "Card Type Code": "45",
      "Card Title": "SENIOR CITIZEN PDS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "103",
      "Card Type": "Credit",
      "Card Type Code": "59",
      "Card Title": "CARMICHAEL COLLAGE",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "104",
      "Card Type": "Credit",
      "Card Type Code": "57",
      "Card Title": "SWADHIN SANCHAY SWAPNA PURAN",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "105",
      "Card Type": "Credit",
      "Card Type Code": "58",
      "Card Title": "SWADHIN SANCHAY SWAPNA PURAN",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "106",
      "Card Type": "Credit",
      "Card Type Code": "60",
      "Card Title": "CARMICHAEL COLLAGE SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "107",
      "Card Type": "Credit",
      "Card Type Code": "061",
      "Card Title": "CLASSIC (CONSUMER)",
      "Branch": "ALL",
      "Brand": "CLASSIC CREDIT",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "108",
      "Card Type": "Credit",
      "Card Type Code": "061",
      "Card Title": "GOLD (CONSUMER)",
      "Branch": "ALL",
      "Brand": "GOLD CREDIT",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "109",
      "Card Type": "Credit",
      "Card Type Code": "061",
      "Card Title": "PLATINUM (CONSUMER)",
      "Branch": "ALL",
      "Brand": "PLATINUM CREDIT",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "110",
      "Card Type": "Credit",
      "Card Type Code": "062",
      "Card Title": "CLASSIC SUPP (CONSUMER)",
      "Branch": "ALL",
      "Brand": "CLASSIC",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "111",
      "Card Type": "Credit",
      "Card Type Code": "062",
      "Card Title": "GOLD SUPP (CONSUMER)",
      "Branch": "ALL",
      "Brand": "GOLD SUPPLEMENTARY",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "112",
      "Card Type": "Credit",
      "Card Type Code": "062",
      "Card Title": "PLATINUM SUPP (CONSUMER)",
      "Branch": "ALL",
      "Brand": "PLATINUM",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "113",
      "Card Type": "Credit",
      "Card Type Code": "063",
      "Card Title": "PLATINUM (FC CONSUMER)",
      "Branch": "ALL",
      "Brand": "PLATINUM CREDIT",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "114",
      "Card Type": "Credit",
      "Card Type Code": "064",
      "Card Title": "PLATINUM SUPP (FC CONSUMER)",
      "Branch": "ALL",
      "Brand": "PLATINUM",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "115",
      "Card Type": "Credit",
      "Card Type Code": "065",
      "Card Title": "CLASSIC ELITE (LIFE TIME)",
      "Branch": "ALL",
      "Brand": "CLASSIC CREDIT",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "116",
      "Card Type": "Credit",
      "Card Type Code": "065",
      "Card Title": "GOLD ELITE (LIFE TIME)",
      "Branch": "ALL",
      "Brand": "GOLD CREDIT",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "117",
      "Card Type": "Credit",
      "Card Type Code": "065",
      "Card Title": "PLATINUM ELITE (LIFE TIME)",
      "Branch": "ALL",
      "Brand": "PLATINUM CREDIT",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "118",
      "Card Type": "Credit",
      "Card Type Code": "066",
      "Card Title": "CLASSIS SUPP ELITE (LIFE TIME)",
      "Branch": "ALL",
      "Brand": "CLASSIC",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "119",
      "Card Type": "Credit",
      "Card Type Code": "066",
      "Card Title": "GOLD SUPP ELITE (LIFE TIME)",
      "Branch": "ALL",
      "Brand": "GOLD SUPPLEMENTARY",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "120",
      "Card Type": "Credit",
      "Card Type Code": "066",
      "Card Title": "PLATINUM SUPP ELITE (LIFE TIME)",
      "Branch": "ALL",
      "Brand": "PLATINUM",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "121",
      "Card Type": "Credit",
      "Card Type Code": "067",
      "Card Title": "CLASSIC ELITE (2 YEARS)",
      "Branch": "ALL",
      "Brand": "CLASSIC CREDIT",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "122",
      "Card Type": "Credit",
      "Card Type Code": "067",
      "Card Title": "GOLD ELITE (2 YEARS)",
      "Branch": "ALL",
      "Brand": "GOLD CREDIT",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "123",
      "Card Type": "Credit",
      "Card Type Code": "067",
      "Card Title": "PLATINUM ELITE (2 YEARS)",
      "Branch": "ALL",
      "Brand": "PLATINUM CREDIT",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "124",
      "Card Type": "Credit",
      "Card Type Code": "068",
      "Card Title": "CLASSIC SUPP ELITE (2 YEARS)",
      "Branch": "ALL",
      "Brand": "CLASSIC",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "125",
      "Card Type": "Credit",
      "Card Type Code": "068",
      "Card Title": "GOLD SUPP ELITE (2 YEARS)",
      "Branch": "ALL",
      "Brand": "GOLD SUPPLEMENTARY",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "126",
      "Card Type": "Credit",
      "Card Type Code": "068",
      "Card Title": "PLATINUM SUPP ELITE (2 YEARS)",
      "Branch": "ALL",
      "Brand": "PLATINUM",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "127",
      "Card Type": "Credit",
      "Card Type Code": "070",
      "Card Title": "CLASSIC (STAFF)",
      "Branch": "ALL",
      "Brand": "CLASSIC CREDIT (STAFF)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "128",
      "Card Type": "Credit",
      "Card Type Code": "070",
      "Card Title": "GOLD (STAFF)",
      "Branch": "ALL",
      "Brand": "GOLD CREDIT (STAFF)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "129",
      "Card Type": "Credit",
      "Card Type Code": "070",
      "Card Title": "PLATINUM (STAFF)",
      "Branch": "ALL",
      "Brand": "PLATINUM CREDIT",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "130",
      "Card Type": "Credit",
      "Card Type Code": "071",
      "Card Title": "CLASSIC SUPP (STAFF)",
      "Branch": "ALL",
      "Brand": "CLASSIC",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "131",
      "Card Type": "Credit",
      "Card Type Code": "071",
      "Card Title": "GOLD SUPP (STAFF)",
      "Branch": "ALL",
      "Brand": "GOLD SUPPLEMENTARY",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "132",
      "Card Type": "Credit",
      "Card Type Code": "071",
      "Card Title": "PLATINUM SUPP (STAFF)",
      "Branch": "ALL",
      "Brand": "PLATINUM",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "133",
      "Card Type": "Credit",
      "Card Type Code": "076",
      "Card Title": "ROOTDEVS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "134",
      "Card Type": "Credit",
      "Card Type Code": "082",
      "Card Title": "DHAKA GOVT MUSLIM(Teacher)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "135",
      "Card Type": "Credit",
      "Card Type Code": "083",
      "Card Title": "DHAKA GOVT MUSLIM SUPP(Teacher)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "136",
      "Card Type": "Credit",
      "Card Type Code": "084",
      "Card Title": "DHAKA GOVT MUSLIM(Others)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "137",
      "Card Type": "Credit",
      "Card Type Code": "085",
      "Card Title": "DHAKA GOVT MUSLIM SUPP(Others)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": "shahabuddin medical collage hospital ,dhaka"
    },
    {
      "SL": "138",
      "Card Type": "Credit",
      "Card Type Code": "090",
      "Card Title": "SMCH(DOCTORS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "139",
      "Card Type": "Credit",
      "Card Type Code": "091",
      "Card Title": "SMCH SUPP(DOCTORS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "140",
      "Card Type": "Credit",
      "Card Type Code": "092",
      "Card Title": "SMCH(OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "141",
      "Card Type": "Credit",
      "Card Type Code": "093",
      "Card Title": "SMCH SUPP(OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "142",
      "Card Type": "Credit",
      "Card Type Code": "094",
      "Card Title": "POPULAR MEDICAL(DOCTORS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": "popular medical collage"
    },
    {
      "SL": "143",
      "Card Type": "Credit",
      "Card Type Code": "095",
      "Card Title": "POPULAR MEDICAL SUPP (DOCTORS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "144",
      "Card Type": "Credit",
      "Card Type Code": "096",
      "Card Title": "POPULAR MEDICAL(OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "145",
      "Card Type": "Credit",
      "Card Type Code": "097",
      "Card Title": "POPULAR MEDICAL SUPP (OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "146",
      "Card Type": "Credit",
      "Card Type Code": "098",
      "Card Title": "RUET(TEACHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "147",
      "Card Type": "Credit",
      "Card Type Code": "099",
      "Card Title": "RUET SUPP(TEACHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "148",
      "Card Type": "Credit",
      "Card Type Code": "100",
      "Card Title": "RUET (OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "149",
      "Card Type": "Credit",
      "Card Type Code": "101",
      "Card Title": "RUET SUPP(OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "150",
      "Card Type": "Credit",
      "Card Type Code": "102",
      "Card Title": "UITS(TEACHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": "University of Information Technology And Science"
    },
    {
      "SL": "151",
      "Card Type": "Credit",
      "Card Type Code": "103",
      "Card Title": "UITS SUPP(TEACHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "152",
      "Card Type": "Credit",
      "Card Type Code": "104",
      "Card Title": "UITS(OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "153",
      "Card Type": "Credit",
      "Card Type Code": "105",
      "Card Title": "UITS SUPP (OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "154",
      "Card Type": "Credit",
      "Card Type Code": "106",
      "Card Title": "ONLINE(PERSONAL GUARANTEE)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "155",
      "Card Type": "Credit",
      "Card Type Code": "107",
      "Card Title": "ONLINE SUPP(PERSONAL GUARANTEE)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "156",
      "Card Type": "Credit",
      "Card Type Code": "108",
      "Card Title": "ONLINE(CHEQUE)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "157",
      "Card Type": "Credit",
      "Card Type Code": "109",
      "Card Title": "ONLINE SUPP(CHEQUE)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "158",
      "Card Type": "Credit",
      "Card Type Code": "110",
      "Card Title": "ONLINE(FDR)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "159",
      "Card Type": "Credit",
      "Card Type Code": "111",
      "Card Title": "ONLINE SUPP(FDR)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "160",
      "Card Type": "Credit",
      "Card Type Code": "112",
      "Card Title": "NIENT(DOCTORS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "161",
      "Card Type": "Credit",
      "Card Type Code": "114",
      "Card Title": "NIENT SUPP (DOCTORS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "162",
      "Card Type": "Credit",
      "Card Type Code": "113",
      "Card Title": "NIENT (OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "163",
      "Card Type": "Credit",
      "Card Type Code": "115",
      "Card Title": "NIENT SUPP (OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "164",
      "Card Type": "Credit",
      "Card Type Code": "116",
      "Card Title": "DHAKA DENTAL (DOCTORS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "165",
      "Card Type": "Credit",
      "Card Type Code": "117",
      "Card Title": "DHAKA DENTAL SUPP (DOCTORS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "166",
      "Card Type": "Credit",
      "Card Type Code": "118",
      "Card Title": "DHAKA DENTAL (OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "167",
      "Card Type": "Credit",
      "Card Type Code": "119",
      "Card Title": "DHAKA DENTAL SUPP (OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "168",
      "Card Type": "Credit",
      "Card Type Code": "120",
      "Card Title": "NAWAB SIRAJUDDOWLA(TEACHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "169",
      "Card Type": "Credit",
      "Card Type Code": "121",
      "Card Title": "NAWAB SIRAJUDDOWLA SUPP(TEACHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "170",
      "Card Type": "Credit",
      "Card Type Code": "122",
      "Card Title": "NAWAB SIRAJUDDOWLA(OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "171",
      "Card Type": "Credit",
      "Card Type Code": "123",
      "Card Title": "NAWAB SIRAJUDDOWLA(OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "172",
      "Card Type": "Credit",
      "Card Type Code": "124",
      "Card Title": "CUMILLA VICTORIA (TEACHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "173",
      "Card Type": "Credit",
      "Card Type Code": "125",
      "Card Title": "CUMILLA VICTORIA SUPP (TEACHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "174",
      "Card Type": "Credit",
      "Card Type Code": "126",
      "Card Title": "CUMILLA VICTORIA (OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "175",
      "Card Type": "Credit",
      "Card Type Code": "127",
      "Card Title": "CUMILLA VICTORIA SUPP (OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "176",
      "Card Type": "Credit",
      "Card Type Code": "128",
      "Card Title": "BUET",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": "Employees of Bangladesh University of engineering & technology"
    },
    {
      "SL": "177",
      "Card Type": "Credit",
      "Card Type Code": "129",
      "Card Title": "BUET SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "178",
      "Card Type": "Credit",
      "Card Type Code": "130",
      "Card Title": "DHAKA NATIONAL MEDICAL",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "179",
      "Card Type": "Credit",
      "Card Type Code": "131",
      "Card Title": "DHAKA NATIONAL MEDICAL SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "180",
      "Card Type": "Credit",
      "Card Type Code": "132",
      "Card Title": "BRB DOCTORS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "181",
      "Card Type": "Credit",
      "Card Type Code": "133",
      "Card Title": "BRB DOCTORS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "182",
      "Card Type": "Credit",
      "Card Type Code": "134",
      "Card Title": "BRB OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "183",
      "Card Type": "Credit",
      "Card Type Code": "135",
      "Card Title": "BRB OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "184",
      "Card Type": "Credit",
      "Card Type Code": "136",
      "Card Title": "GOVT AZIZUL(TEACHER)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": "Government Azizul Haque Collage Bogura"
    },
    {
      "SL": "185",
      "Card Type": "Credit",
      "Card Type Code": "137",
      "Card Title": "GOVT AZIZUL SUPP (TEACHER)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "186",
      "Card Type": "Credit",
      "Card Type Code": "138",
      "Card Title": "GOVT AZIZUL(OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "187",
      "Card Type": "Credit",
      "Card Type Code": "139",
      "Card Title": "GOVT AZIZUL SUPP (OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "188",
      "Card Type": "Credit",
      "Card Type Code": "140",
      "Card Title": "CVASU",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": "Chattogram Veterinary and Animal Sciences university"
    },
    {
      "SL": "189",
      "Card Type": "Credit",
      "Card Type Code": "141",
      "Card Title": "CVASU SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "190",
      "Card Type": "Credit",
      "Card Type Code": "142",
      "Card Title": "CVASU(OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "191",
      "Card Type": "Credit",
      "Card Type Code": "143",
      "Card Title": "CVASU SUPP(OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "192",
      "Card Type": "Credit",
      "Card Type Code": "144",
      "Card Title": "GHMMC (TEACHER)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": "Govt Hazi Muhammad Mohsin collage, Chattogram"
    },
    {
      "SL": "193",
      "Card Type": "Credit",
      "Card Type Code": "145",
      "Card Title": "GHMMC SUPP (TEACHER)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "194",
      "Card Type": "Credit",
      "Card Type Code": "146",
      "Card Title": "GHMMC (OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "195",
      "Card Type": "Credit",
      "Card Type Code": "147",
      "Card Title": "GHMMC SUPP (OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "196",
      "Card Type": "Credit",
      "Card Type Code": "148",
      "Card Title": "CTG COLLAGE(TEACHER)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": "Chattogram collage,Chattogram"
    },
    {
      "SL": "197",
      "Card Type": "Credit",
      "Card Type Code": "149",
      "Card Title": "CTG COLLAGE SUPP (TEACHER)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "198",
      "Card Type": "Credit",
      "Card Type Code": "150",
      "Card Title": "CTG COLLAGE(OTHER)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "199",
      "Card Type": "Credit",
      "Card Type Code": "151",
      "Card Title": "CTG COLLAGE SUPP (OTHER)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "200",
      "Card Type": "Credit",
      "Card Type Code": "152",
      "Card Title": "KHULNA MEDICAL (TEACHER)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "201",
      "Card Type": "Credit",
      "Card Type Code": "153",
      "Card Title": "KHULNA MEDICAL SUPP (TEACHER)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "202",
      "Card Type": "Credit",
      "Card Type Code": "154",
      "Card Title": "KHULNA MEDICAL (OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "203",
      "Card Type": "Credit",
      "Card Type Code": "155",
      "Card Title": "KHULNA MEDICAL SUPP (OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "204",
      "Card Type": "Credit",
      "Card Type Code": "156",
      "Card Title": "NOTREDAME COLLAGE TEACHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": "Notre Dame Collage"
    },
    {
      "SL": "205",
      "Card Type": "Credit",
      "Card Type Code": "157",
      "Card Title": "NOTREDAME COLLAGE  SUPP TEACHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "206",
      "Card Type": "Credit",
      "Card Type Code": "158",
      "Card Title": "NOTREDAME COLLAGE OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "207",
      "Card Type": "Credit",
      "Card Type Code": "159",
      "Card Title": "NOTREDAME COLLAGE SUPP OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "208",
      "Card Type": "Credit",
      "Card Type Code": "160",
      "Card Title": "TEJGAON COLLAGE TEACHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "209",
      "Card Type": "Credit",
      "Card Type Code": "161",
      "Card Title": "TEJGAON COLLAGE SUPP TEACHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "210",
      "Card Type": "Credit",
      "Card Type Code": "162",
      "Card Title": "TEJGAON COLLAGE OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "211",
      "Card Type": "Credit",
      "Card Type Code": "163",
      "Card Title": "TEJGAON COLLAGE SUPP OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "212",
      "Card Type": "Credit",
      "Card Type Code": "164",
      "Card Title": "ALLIED MOTHER CHILD HOSPITAL",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "213",
      "Card Type": "Credit",
      "Card Type Code": "165",
      "Card Title": "ALLIED MOTHER CHILD HOSPITAL SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "214",
      "Card Type": "Credit",
      "Card Type Code": "166",
      "Card Title": "CO-BRANDED DNMIH",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": "Dhaka National Medical Institute Hospital"
    },
    {
      "SL": "215",
      "Card Type": "Credit",
      "Card Type Code": "167",
      "Card Title": "CO-BRANDED DNMIH SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "216",
      "Card Type": "Credit",
      "Card Type Code": "168",
      "Card Title": "HOLY FAMILY",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": "Holy Family Red Crescent Medical Collage Hospital"
    },
    {
      "SL": "217",
      "Card Type": "Credit",
      "Card Type Code": "169",
      "Card Title": "HOLY FAMILY SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "218",
      "Card Type": "Credit",
      "Card Type Code": "170",
      "Card Title": "HOLY FAMILY OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "219",
      "Card Type": "Credit",
      "Card Type Code": "171",
      "Card Title": "HOLY FAMILY OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "220",
      "Card Type": "Credit",
      "Card Type Code": "172",
      "Card Title": "SSMCH",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": "Salimullah Medical Collage Mitford Hospital"
    },
    {
      "SL": "221",
      "Card Type": "Credit",
      "Card Type Code": "173",
      "Card Title": "SSMCH SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "222",
      "Card Type": "Credit",
      "Card Type Code": "174",
      "Card Title": "TONGI GOVT COLLEGE TEACHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "223",
      "Card Type": "Credit",
      "Card Type Code": "175",
      "Card Title": "TONGI GOVT COLLEGE TEACHER SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "224",
      "Card Type": "Credit",
      "Card Type Code": "176",
      "Card Title": "TONGI GOVT COLLEGE OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "225",
      "Card Type": "Credit",
      "Card Type Code": "177",
      "Card Title": "TONGI GOVT COLLEGE OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "226",
      "Card Type": "Credit",
      "Card Type Code": "178",
      "Card Title": "MODEL GROUP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "227",
      "Card Type": "Credit",
      "Card Type Code": "179",
      "Card Title": "MODEL GROUP SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "228",
      "Card Type": "Credit",
      "Card Type Code": "180",
      "Card Title": "EASTERN REFINERY",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "229",
      "Card Type": "Credit",
      "Card Type Code": "181",
      "Card Title": "EASTERN REFINERY SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "230",
      "Card Type": "Credit",
      "Card Type Code": "182",
      "Card Title": "EASTERN REFINERY OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "231",
      "Card Type": "Credit",
      "Card Type Code": "183",
      "Card Title": "EASTERN REFINERY OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "232",
      "Card Type": "Credit",
      "Card Type Code": "184",
      "Card Title": "EDEN MOHILA COL (TEACHER)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "233",
      "Card Type": "Credit",
      "Card Type Code": "185",
      "Card Title": "EDEN MOHILA COL SUPP (TEACHER)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "234",
      "Card Type": "Credit",
      "Card Type Code": "186",
      "Card Title": "EDEN MOHILA COL (OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "235",
      "Card Type": "Credit",
      "Card Type Code": "187",
      "Card Title": "EDEN MOHILA COL SUPP (OTHERS)",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "236",
      "Card Type": "Credit",
      "Card Type Code": "188",
      "Card Title": "DIU",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "237",
      "Card Type": "Credit",
      "Card Type Code": "189",
      "Card Title": "DIU SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "238",
      "Card Type": "Credit",
      "Card Type Code": "190",
      "Card Title": "IUT",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "239",
      "Card Type": "Credit",
      "Card Type Code": "191",
      "Card Title": "IUT SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "240",
      "Card Type": "Credit",
      "Card Type Code": "192",
      "Card Title": "NSU",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "241",
      "Card Type": "Credit",
      "Card Type Code": "193",
      "Card Title": "NSU SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "242",
      "Card Type": "Credit",
      "Card Type Code": "194",
      "Card Title": "DHAKA POLYTECHNIC TEACHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "243",
      "Card Type": "Credit",
      "Card Type Code": "195",
      "Card Title": "DHAKA POLYTECHNIC SUPP TEACHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "244",
      "Card Type": "Credit",
      "Card Type Code": "196",
      "Card Title": "DHAKA POLYTECHNIC OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "245",
      "Card Type": "Credit",
      "Card Type Code": "197",
      "Card Title": "DHAKA POLYTECHNIC SUPP OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "246",
      "Card Type": "Credit",
      "Card Type Code": "198",
      "Card Title": "NUBT TEACHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "247",
      "Card Type": "Credit",
      "Card Type Code": "199",
      "Card Title": "NUBT SUPP TEACHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "248",
      "Card Type": "Credit",
      "Card Type Code": "200",
      "Card Title": "NUBT OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "249",
      "Card Type": "Credit",
      "Card Type Code": "201",
      "Card Title": "NUBT SUPP OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "250",
      "Card Type": "Credit",
      "Card Type Code": "202",
      "Card Title": "BAU",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "251",
      "Card Type": "Credit",
      "Card Type Code": "203",
      "Card Title": "BAU SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "252",
      "Card Type": "Credit",
      "Card Type Code": "204",
      "Card Title": "CITY UNIVERSITY TEACHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "253",
      "Card Type": "Credit",
      "Card Type Code": "205",
      "Card Title": "CITY UNIVERSITY TEACHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "254",
      "Card Type": "Credit",
      "Card Type Code": "206",
      "Card Title": "CITY UNIVERSITY OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "255",
      "Card Type": "Credit",
      "Card Type Code": "207",
      "Card Title": "CITY UNIVERSITY OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "256",
      "Card Type": "Credit",
      "Card Type Code": "208",
      "Card Title": "BARISHAL UNIVERSITY TEACHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "257",
      "Card Type": "Credit",
      "Card Type Code": "209",
      "Card Title": "BARISHAL UNIVERSITY TEACHER SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "258",
      "Card Type": "Credit",
      "Card Type Code": "210",
      "Card Title": "BARISHAL UNIVERSITY OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "259",
      "Card Type": "Credit",
      "Card Type Code": "211",
      "Card Title": "BARISHAL UNIVERSITY OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "260",
      "Card Type": "Credit",
      "Card Type Code": "212",
      "Card Title": "KURIGRAM GOVT TEACHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "261",
      "Card Type": "Credit",
      "Card Type Code": "213",
      "Card Title": "KURIGRAM GOVT TEACHER SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "262",
      "Card Type": "Credit",
      "Card Type Code": "214",
      "Card Title": "KURIGRAM GOVT OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "263",
      "Card Type": "Credit",
      "Card Type Code": "215",
      "Card Title": "KURIGRAM GOVT OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "264",
      "Card Type": "Credit",
      "Card Type Code": "216",
      "Card Title": "STAMC TEACHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "265",
      "Card Type": "Credit",
      "Card Type Code": "217",
      "Card Title": "STAMC TEACHER SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "266",
      "Card Type": "Credit",
      "Card Type Code": "218",
      "Card Title": "STAMC OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "267",
      "Card Type": "Credit",
      "Card Type Code": "219",
      "Card Title": "STAMC OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "268",
      "Card Type": "Credit",
      "Card Type Code": "220",
      "Card Title": "IEB FELLOW",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "269",
      "Card Type": "Credit",
      "Card Type Code": "221",
      "Card Title": "IEB FELLOW SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "270",
      "Card Type": "Credit",
      "Card Type Code": "222",
      "Card Title": "IEB OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "271",
      "Card Type": "Credit",
      "Card Type Code": "223",
      "Card Title": "IEB OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "272",
      "Card Type": "Credit",
      "Card Type Code": "01",
      "Card Title": "UNIVERSITY OF CHITTAGONG",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "273",
      "Card Type": "Credit",
      "Card Type Code": "02",
      "Card Title": "UNIVERSITY OF CHITTAGONG",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "274",
      "Card Type": "Credit",
      "Card Type Code": "224",
      "Card Title": "GURUDAYAL GOVT COL TEACHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "275",
      "Card Type": "Credit",
      "Card Type Code": "225",
      "Card Title": "GURUDAYAL GOVT COL TEACHER SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "276",
      "Card Type": "Credit",
      "Card Type Code": "226",
      "Card Title": "GURUDAYAL GOVT COL OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "277",
      "Card Type": "Credit",
      "Card Type Code": "227",
      "Card Title": "GURUDAYAL GOVT COL OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "278",
      "Card Type": "Credit",
      "Card Type Code": "228",
      "Card Title": "SIRAJGANJ GOVT COL TEACHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "279",
      "Card Type": "Credit",
      "Card Type Code": "229",
      "Card Title": "SIRAJGANJ GOVT COL TEACHER SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "280",
      "Card Type": "Credit",
      "Card Type Code": "230",
      "Card Title": "SIRAJGANJ GOVT COL OTHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "281",
      "Card Type": "Credit",
      "Card Type Code": "231",
      "Card Title": "SIRAJGANJ GOVT COL OTHER SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "282",
      "Card Type": "Credit",
      "Card Type Code": "232",
      "Card Title": "BUBT TEACHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "283",
      "Card Type": "Credit",
      "Card Type Code": "233",
      "Card Title": "BUBT TEACHER SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "284",
      "Card Type": "Credit",
      "Card Type Code": "234",
      "Card Title": "BUBT OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "285",
      "Card Type": "Credit",
      "Card Type Code": "235",
      "Card Title": "BUBT OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "286",
      "Card Type": "Credit",
      "Card Type Code": "236",
      "Card Title": "SBPGC TEACHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "287",
      "Card Type": "Credit",
      "Card Type Code": "237",
      "Card Title": "SBPGC TEACHER SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "288",
      "Card Type": "Credit",
      "Card Type Code": "238",
      "Card Title": "SBPGC OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "289",
      "Card Type": "Credit",
      "Card Type Code": "239",
      "Card Title": "SBPGC OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "290",
      "Card Type": "Credit",
      "Card Type Code": "240",
      "Card Title": "HSTU",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "291",
      "Card Type": "Credit",
      "Card Type Code": "241",
      "Card Title": "HSTU SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "292",
      "Card Type": "Credit",
      "Card Type Code": "242",
      "Card Title": "CO-BRANDED CU",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "293",
      "Card Type": "Credit",
      "Card Type Code": "243",
      "Card Title": "CO-BRANDED CU SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "294",
      "Card Type": "Credit",
      "Card Type Code": "244",
      "Card Title": "CUMILLA GOVT COL TEACHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "295",
      "Card Type": "Credit",
      "Card Type Code": "245",
      "Card Title": "CUMILLA GOVT COL TEACHER SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "296",
      "Card Type": "Credit",
      "Card Type Code": "246",
      "Card Title": "CUMILLA GOVT COL OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "297",
      "Card Type": "Credit",
      "Card Type Code": "247",
      "Card Title": "CUMILLA GOVT COL OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "298",
      "Card Type": "Credit",
      "Card Type Code": "248",
      "Card Title": "RMSTU TEACHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "299",
      "Card Type": "Credit",
      "Card Type Code": "249",
      "Card Title": "RMSTU TEACHER SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "300",
      "Card Type": "Credit",
      "Card Type Code": "250",
      "Card Title": "RMSTU OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "301",
      "Card Type": "Credit",
      "Card Type Code": "251",
      "Card Title": "RMSTU OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "302",
      "Card Type": "Credit",
      "Card Type Code": "252",
      "Card Title": "GOVT BANGLA COL TEACHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "303",
      "Card Type": "Credit",
      "Card Type Code": "253",
      "Card Title": "GOVT BANGLA COL TEACHER SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "304",
      "Card Type": "Credit",
      "Card Type Code": "254",
      "Card Title": "GOVT BANGLA COL OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "305",
      "Card Type": "Credit",
      "Card Type Code": "255",
      "Card Title": "GOVT BANGLA COL OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "306",
      "Card Type": "Credit",
      "Card Type Code": "256",
      "Card Title": "BD SPECIALIZED HOSPITAL",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "307",
      "Card Type": "Credit",
      "Card Type Code": "257",
      "Card Title": "BD SPECIALIZED HOSPITAL SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "308",
      "Card Type": "Credit",
      "Card Type Code": "258",
      "Card Title": "GOVT BROJOMOHUN TEACHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "309",
      "Card Type": "Credit",
      "Card Type Code": "259",
      "Card Title": "GOVT BROJOMOHUN TEACHER SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "310",
      "Card Type": "Credit",
      "Card Type Code": "260",
      "Card Title": "GOVT BROJOMOHUN OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "311",
      "Card Type": "Credit",
      "Card Type Code": "261",
      "Card Title": "GOVT BROJOMOHUN OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "312",
      "Card Type": "Credit",
      "Card Type Code": "264",
      "Card Title": "RNGDC TEACHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "313",
      "Card Type": "Credit",
      "Card Type Code": "265",
      "Card Title": "RNGDC TEACHER SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "314",
      "Card Type": "Credit",
      "Card Type Code": "266",
      "Card Title": "RNGDC OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "315",
      "Card Type": "Credit",
      "Card Type Code": "267",
      "Card Title": "RNGDC OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "316",
      "Card Type": "Credit",
      "Card Type Code": "262",
      "Card Title": "SGFL",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "317",
      "Card Type": "Credit",
      "Card Type Code": "263",
      "Card Title": "SGFL SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "318",
      "Card Type": "Credit",
      "Card Type Code": "268",
      "Card Title": "INMAS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "319",
      "Card Type": "Credit",
      "Card Type Code": "269",
      "Card Title": "INMAS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "320",
      "Card Type": "Credit",
      "Card Type Code": "270",
      "Card Title": "SIDDESWARI COL TEACHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "321",
      "Card Type": "Credit",
      "Card Type Code": "271",
      "Card Title": "SIDDESWARI COL TEACHER SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "322",
      "Card Type": "Credit",
      "Card Type Code": "272",
      "Card Title": "SIDDESWARI COL OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "323",
      "Card Type": "Credit",
      "Card Type Code": "273",
      "Card Title": "SIDDESWARI COL OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "324",
      "Card Type": "Credit",
      "Card Type Code": "274",
      "Card Title": "AUST TEACHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "325",
      "Card Type": "Credit",
      "Card Type Code": "275",
      "Card Title": "AUST TEACHER SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "326",
      "Card Type": "Credit",
      "Card Type Code": "276",
      "Card Title": "AUST OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "327",
      "Card Type": "Credit",
      "Card Type Code": "277",
      "Card Title": "AUST OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "328",
      "Card Type": "Credit",
      "Card Type Code": "278",
      "Card Title": "THAKURGAON GOVT COL TEACHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "329",
      "Card Type": "Credit",
      "Card Type Code": "279",
      "Card Title": "THAKURGAON GOVT COL TEACHER SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "330",
      "Card Type": "Credit",
      "Card Type Code": "280",
      "Card Title": "THAKURGAON GOVT COL OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "331",
      "Card Type": "Credit",
      "Card Type Code": "281",
      "Card Title": "THAKURGAON GOVT COL OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "332",
      "Card Type": "Credit",
      "Card Type Code": "282",
      "Card Title": "BAUST",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "333",
      "Card Type": "Credit",
      "Card Type Code": "283",
      "Card Title": "BAUST SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "334",
      "Card Type": "Credit",
      "Card Type Code": "284",
      "Card Title": "TMC RCH DOCTORS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "335",
      "Card Type": "Credit",
      "Card Type Code": "285",
      "Card Title": "TMC RCH DOCTORS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "336",
      "Card Type": "Credit",
      "Card Type Code": "286",
      "Card Title": "TMC RCH OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "337",
      "Card Type": "Credit",
      "Card Type Code": "287",
      "Card Title": "TMC RCH OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "338",
      "Card Type": "Credit",
      "Card Type Code": "288",
      "Card Title": "GOVT TOLARAM COL TEACHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "339",
      "Card Type": "Credit",
      "Card Type Code": "289",
      "Card Title": "289- GOVT TOLARAM COL TEACHER SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "340",
      "Card Type": "Credit",
      "Card Type Code": "290",
      "Card Title": "GOVT TOLARAM COL OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "341",
      "Card Type": "Credit",
      "Card Type Code": "291",
      "Card Title": "GOVT TOLARAM COL OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "342",
      "Card Type": "Credit",
      "Card Type Code": "292",
      "Card Title": "STAMFORD UNI BD TEACHER",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "343",
      "Card Type": "Credit",
      "Card Type Code": "293",
      "Card Title": "STAMFORD UNI BD TEACHER SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "344",
      "Card Type": "Credit",
      "Card Type Code": "294",
      "Card Title": "STAMFORD UNI BD OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "345",
      "Card Type": "Credit",
      "Card Type Code": "295",
      "Card Title": "STAMFORD UNI BD OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "346",
      "Card Type": "Credit",
      "Card Type Code": "296",
      "Card Title": "CDA",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "347",
      "Card Type": "Credit",
      "Card Type Code": "297",
      "Card Title": "CDA SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "348",
      "Card Type": "Credit",
      "Card Type Code": "298",
      "Card Title": "EASTERN MEDICAL COL DOCTORS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "349",
      "Card Type": "Credit",
      "Card Type Code": "299",
      "Card Title": "EASTERN MEDICAL COL DOCTORS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "350",
      "Card Type": "Credit",
      "Card Type Code": "300",
      "Card Title": "EASTERN MEDICAL COL OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "351",
      "Card Type": "Credit",
      "Card Type Code": "301",
      "Card Title": "EASTERN MEDICAL COL OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "352",
      "Card Type": "Credit",
      "Card Type Code": "302",
      "Card Title": "xx",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "353",
      "Card Type": "Credit",
      "Card Type Code": "303",
      "Card Title": "xx",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "354",
      "Card Type": "Credit",
      "Card Type Code": "304",
      "Card Title": "SHER E BANGLA MED COLLEGE",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "355",
      "Card Type": "Credit",
      "Card Type Code": "305",
      "Card Title": "SHER E BANGLA MED COLLEGE SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "356",
      "Card Type": "Credit",
      "Card Type Code": "306",
      "Card Title": "SHER E BANGLA MED HOSPITAL",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "357",
      "Card Type": "Credit",
      "Card Type Code": "307",
      "Card Title": "SHER E BANGLA MED HOSPITAL SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "358",
      "Card Type": "Credit",
      "Card Type Code": "308",
      "Card Title": "AHSANIA MISSION TEACHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "359",
      "Card Type": "Credit",
      "Card Type Code": "309",
      "Card Title": "AHSANIA MISSION TEACHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "360",
      "Card Type": "Credit",
      "Card Type Code": "310",
      "Card Title": "AHSANIA MISSION OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "361",
      "Card Type": "Credit",
      "Card Type Code": "311",
      "Card Title": "AHSANIA MISSION OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "362",
      "Card Type": "Credit",
      "Card Type Code": "312",
      "Card Title": "COMILLA CADET TEACHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "363",
      "Card Type": "Credit",
      "Card Type Code": "313",
      "Card Title": "COMILLA CADET TEACHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "364",
      "Card Type": "Credit",
      "Card Type Code": "314",
      "Card Title": "COMILLA CADET OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "365",
      "Card Type": "Credit",
      "Card Type Code": "315",
      "Card Title": "COMILLA CADET OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "366",
      "Card Type": "Credit",
      "Card Type Code": "316",
      "Card Title": "CUET TEACHERS OFFICERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "367",
      "Card Type": "Credit",
      "Card Type Code": "317",
      "Card Title": "CUET TEACHERS OFFICERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "368",
      "Card Type": "Credit",
      "Card Type Code": "318",
      "Card Title": "CUET OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "369",
      "Card Type": "Credit",
      "Card Type Code": "319",
      "Card Title": "CUET OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "370",
      "Card Type": "Credit",
      "Card Type Code": "320",
      "Card Title": "SHIKALBAHA POWER ENGR OFF",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "371",
      "Card Type": "Credit",
      "Card Type Code": "321",
      "Card Title": "SHIKALBAHA POWER ENGR OFF SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "372",
      "Card Type": "Credit",
      "Card Type Code": "322",
      "Card Title": "SHIKALBAHA POWER OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "373",
      "Card Type": "Credit",
      "Card Type Code": "323",
      "Card Title": "SHIKALBAHA POWER OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "374",
      "Card Type": "Credit",
      "Card Type Code": "324",
      "Card Title": "324 PREMIER UNIVERSITY",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "375",
      "Card Type": "Credit",
      "Card Type Code": "325",
      "Card Title": "325 PREMIER UNIVERSITY SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "376",
      "Card Type": "Credit",
      "Card Type Code": "326",
      "Card Title": "326 KUET",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "377",
      "Card Type": "Credit",
      "Card Type Code": "327",
      "Card Title": "327 KUET SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "378",
      "Card Type": "Credit",
      "Card Type Code": "328",
      "Card Title": "328 BUTEX TEACHERS OFFICERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "379",
      "Card Type": "Credit",
      "Card Type Code": "329",
      "Card Title": "329 BUTEX TEACHERS OFFICERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "380",
      "Card Type": "Credit",
      "Card Type Code": "330",
      "Card Title": "330 BUTEX OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "381",
      "Card Type": "Credit",
      "Card Type Code": "331",
      "Card Title": "331 BUTEX OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "382",
      "Card Type": "Credit",
      "Card Type Code": "332",
      "Card Title": "332 NU TEACHERS OFFICERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "383",
      "Card Type": "Credit",
      "Card Type Code": "333",
      "Card Title": "333 NU TEACHERS OFFICERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "384",
      "Card Type": "Credit",
      "Card Type Code": "334",
      "Card Title": "334 NU OTHERS",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "385",
      "Card Type": "Credit",
      "Card Type Code": "335",
      "Card Title": "335 NU OTHERS SUPP",
      "Branch": "ALL",
      "Brand": "ALL(VSCC,VSCG,VSCP)",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "386",
      "Card Type": "Taka Pay",
      "Card Type Code": "23",
      "Card Title": "BHL GROUP",
      "Branch": "",
      "Brand": "Taka Pay",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "387",
      "Card Type": "Taka Pay",
      "Card Type Code": "86",
      "Card Title": "MALLICK SUPER CHICKS",
      "Branch": "",
      "Brand": "Taka Pay",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "388",
      "Card Type": "Taka Pay",
      "Card Type Code": "87",
      "Card Title": "PROTEIN SOURCE",
      "Branch": "",
      "Brand": "Taka Pay",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "389",
      "Card Type": "Taka Pay",
      "Card Type Code": "88",
      "Card Title": "FOCALLURE BANGLADESH",
      "Branch": "",
      "Brand": "Taka Pay",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "390",
      "Card Type": "Taka Pay",
      "Card Type Code": "89",
      "Card Title": "HERITAGE SCHOOL",
      "Branch": "",
      "Brand": "Taka Pay",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "391",
      "Card Type": "Taka Pay",
      "Card Type Code": "90",
      "Card Title": "ALMA FEED INDUSTRIES LTD.",
      "Branch": "",
      "Brand": "Taka Pay",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "392",
      "Card Type": "Taka Pay",
      "Card Type Code": "91",
      "Card Title": "BALISHIR RESORT LTD.",
      "Branch": "",
      "Brand": "Taka Pay",
      "PIN": "Green",
      "Comments": ""
    },
    {
      "SL": "393",
      "Card Type": "Taka Pay",
      "Card Type Code": "92",
      "Card Title": "BANOFUL & CO",
      "Branch": "",
      "Brand": "",
      "PIN": "",
      "Comments": ""
    }
  ]
};
