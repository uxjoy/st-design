// All email data organized by slug (folder name)
// Each key matches the sidebar href and the app/emails/[slug] folder name

const emailsData = {
  flight: [
    {
      section: "Void",
      frames: [
        {
          name: "b2cFlightAutoVoidAccountsSettled",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6719-12960",
          subject: "Void processed as per payment modality",
        },
        {
          name: "b2cFlightManualVoidAccountsSettled",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6720-17605",
          subject: "Void processed as per payment modality",
        },
        {
          name: "b2cAutoVoidFailedEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6746-352690",
          subject: "Manual VOID Investigation Required",
        },
        {
          name: "b2cFlightRefundVoidSettledCompleted",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6746-352725",
          subject: "Successful Void Settlement",
        },
        {
          name: "b2cFlightAutoVoid",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6746-352764",
          subject: "Your Void Request has been Processed",
        },
        {
          name: "b2cFlightManualVoid",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6746-352840",
          subject: "Your Void Request is Completed",
        },
        {
          name: "b2cFlightManualVoidQuoted",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6719-13069",
          subject: "Your Void Request is Quoted",
        },
        {
          name: "b2cFlightManualVoidSettled",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6719-13158",
          subject: "Successful Void Settlement",
        },
        {
          name: "b2cFlightAutoVoidSettled",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6719-13274",
          subject: "Successful Void Settlement",
        },
      ],
    },
    {
      section: "Re-Issue",
      frames: [
        {
          name: "b2cFlightManualReissueQuotedEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6720-17790",
          subject: "Reissue Quoted",
        },
        {
          name: "b2cflightManualReissuePaymentNotificationEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6720-17890",
          subject: "Payment Notification",
        },
        {
          name: "b2cFlightManualReissueConfirmedEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6720-17982",
          subject: "Reissue Confirmed",
        },
        {
          name: "b2cFlightReissuePaymentReversalCompleted",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6720-18076",
          subject: "Payment Reversal Completed",
        },
        {
          name: "b2cFlightBookingReissuedQuotedEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6746-349340",
          subject: "Reissue Quoted",
        },
        {
          name: "b2cFlightBookingReissuedBookedEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6746-349431",
          subject: "Reissue Booked",
        },
        {
          name: "b2cFlightBookingReissuedConfirmationEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6746-349522",
          subject: "Reissue Confirmed",
        },
        {
          name: "b2cFlightBookingReissuedCancelledEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6746-349613",
          subject: "Reissue Quotation Cancelled",
        },
        {
          name: "b2cFlightAutoReissueBookedEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6720-18184",
          subject: "Reissue Booked",
        },
        {
          name: "b2cFlightAutoReissueConfirmedEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6720-18275",
          subject: "Reissue Confirmed",
        },
      ],
    },
    {
      section: "Refund",
      frames: [
        {
          name: "b2cFlightManualRefundQuoted",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6720-18367",
          subject: "Your Refund Request is Quoted",
        },
        {
          name: "b2cFlightManualRefundSettled",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6720-18457",
          subject: "Successful Refund Settlement",
        },
        {
          name: "b2cFlightManualRefundAccountsSettled",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6720-18572",
          subject: "Refund processed as per payment modality",
        },
        {
          name: "b2cFlightManualRefund",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6746-353377",
          subject: "Your Refund Quotation is Ready",
        },
        {
          name: "b2cFlightAutoRefund",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6746-353580",
          subject: "Your Refund Request is Completed",
        },
        {
          name: "b2cFlightAutoRefundSettled",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6720-18680",
          subject: "Successful Refund Settlement",
        },
        {
          name: "b2cFlightAutoRefundAccountsSettled",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6720-18796",
          subject: "Refund processed as per payment modality",
        },
      ],
    },
    {
      section: "Booking Emails",
      frames: [
        {
          name: "b2cFlightBookingConfirmationEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6727-31807",
          subject: "Your booking is Confirmed!",
        },
        {
          name: "b2cFlightBookingIssuedEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6727-32743",
          subject: "Confirmation of your E-ticket and PNR",
        },
        {
          name: "b2cFlightBookingCancelEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6727-32474",
          subject: "Your Booking has been Cancelled!",
        },
        {
          name: "b2cFlightUnpaidBookingCancelEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6727-32644",
          subject: "Your Unpaid Booking has been Cancelled!",
        },
        {
          name: "b2cBookingOnHoldCardPrefixMismatch",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6726-6416",
          subject: "Your Booking is on Hold",
        },
        {
          name: "b2cFlightOneWayInternationalFlightBookingConfirmation",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6727-34912",
          subject:
            "B2C Flight One Way International Flight Booking Confirmation",
        },
        {
          name: "b2cFlightPaidIssueFailedEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6746-354524",
          subject: "Update on Your Ticket Issuance",
        },
        {
          name: "b2cFlightPaidIssueFailedAttachment",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6746-354588",
          subject: "Update on Your Ticket Issuance",
        },
        {
          name: "b2cFlightOneWayInternationalFlightBookingConfirmationAttachment",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6746-356079",
          subject:
            "B2C Flight One Way International Flight Booking Confirmation Attachment",
        },
        {
          name: "b2cFlightPostBookingConfirmationEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6769-37717",
          subject: "Your Extra Baggage has been Confirmed!",
        },
      ],
    },
    {
      section: "Vouchers",
      frames: [
        {
          name: "b2cFlightBookingIssuedVoucher",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6741-38072",
          subject: "B2C Flight Booking Issued Voucher",
        },
        {
          name: "b2cFlightBookingReissuedConfirmationVoucher",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6730-36911",
          subject: "B2C Flight Booking Reissued Confirmation Voucher",
        },
        {
          name: "b2cFlightBookingTripOnServiceVoucher",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6730-37260",
          subject: "B2C Flight Booking Trip On Service Voucher",
        },
        {
          name: "b2cFlightBookingCovidVoucher",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6740-37726",
          subject: "B2C Flight Booking Covid Voucher",
        },
        {
          name: "b2cFlightTravelInsuranceVoucher",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6740-37805",
          subject: "B2C Flight Travel Insurance Voucher",
        },
        {
          name: "b2cFlightBaggageProtectionVoucher",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6740-37865",
          subject: "B2C Flight Baggage Protection Voucher",
        },
        {
          name: "b2cFlightBookingIssuedT&CVoucher",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6729-35549",
          subject: "B2C Flight Booking Issued T&C Voucher",
        },
      ],
    },
    {
      section: "Seat",
      frames: [
        {
          name: "b2cFlightSeatSelectionConfirmation",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6725-40978",
          subject: "Your Seats has been Confirmed!",
        },
        {
          name: "b2cFlightPreBookingSeatSelectionConfirmation",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6725-41079",
          subject: "Your Seats has been Confirmed!",
        },
        {
          name: "b2cFlightPreBookingSeatSelectionRefund",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6725-41184",
          subject: "Your Seat Refund Has Been Processed",
        },
      ],
    },
    {
      section: "Lounge Access",
      frames: [
        {
          name: "b2cFlightLoungeAccessConfirmation",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6727-34558",
          subject: "Congratulations! Here's Your VIP Pass to the BHN Lounge!",
        },
        {
          name: "b2cFlightBookingloungeAccessConfirmationEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6727-35069",
          subject: "Confirmation of Lounge Access Purchase",
        },
        {
          name: "b2cFlightBookingLoungeAccessConfirmationAttachment",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6743-39777",
          subject: "B2C Flight Booking Lounge Access Confirmation Attachment",
        },
        {
          name: "b2cFlightLoungeAccessAttachment",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6742-38916",
          subject: "B2C Flight Lounge Access Attachment",
        },
      ],
    },
    {
      section: "Add-on Services",
      frames: [
        {
          name: "b2cFlightTripOnServiceRequestConfirmation",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6725-40806",
          subject: "TripOn  [Current Date] [Current Time] [PNR]",
        },
        {
          name: "b2cFlightWheelchairRequestConfirmation",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6725-41592",
          subject: "Your Wheelchair Request has been Received!",
        },
        {
          name: "b2cFlightMealRequestConfirmation",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6725-41838",
          subject: "Your Meal Request has been Received!",
        },
      ],
    },
    {
      section: "Payment",
      frames: [
        {
          name: "b2cFlightPaymentConfirmationEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6726-7152",
          subject: "Your Flight to Dubai Awaits You!",
        },
        {
          name: "b2cFlightBookNowPayLaterNotification",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6725-40477",
          subject: "Booking Confirmed - Secure your Ticket with Quick Payment",
        },
        {
          name: "b2cFlightManualPaymentReversalNotification",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6746-354199",
          subject: "Payment Reversal Notification",
        },
        {
          name: "b2cFlightPartialPayDueReminder",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6769-37893",
          subject: "Reminder on Due Amount for Partial Payment",
        },
        {
          name: "b2cFlightPartialPayConfirmationOfFullPaymentEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6769-37996",
          subject: "Confirmation of Full Payment",
        },
        {
          name: "b2cFlightPartialPaymentRequestEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6769-38051",
          subject: "Partial Payment Request Received",
        },
        {
          name: "b2cFlightPartialPayReminderEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6769-38109",
          subject: "Partial Payment Reminder",
        },
      ],
    },
    {
      section: "Others",
      frames: [
        {
          name: "b2cFlightBusinessClassAcknowledgement",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6724-40202",
          subject: "Your Travel Request is Confirmed – Leave the Details to Us",
        },
      ],
    },
  ],

  hotel: [
    {
      section: "Booking Email",
      frames: [
        {
          name: "b2cHotelBookingConfirmationEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6800-26242",
          subject: "Your booking is Confirmed!",
        },
        {
          name: "b2cHotelBookingCancellationEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6800-26805",
          subject: "Your Booking has been Cancelled!",
        },
        {
          name: "b2cHotelBookingOnHoldCardPrefixMismatch",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6800-26893",
          subject: "Your Booking is on Hold",
        },
      ],
    },
    {
      section: "Attachments",
      frames: [
        {
          name: "b2cHotelBookingConfirmationEmailWithAttachment",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6800-26453",
          subject: "Your booking is Reconfirmed !",
        },
        {
          name: "b2cHotelBookingConfirmationVouchers",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6800-26664",
          subject: "B2C Hotel Booking Confirmation Vouchers",
        },
      ],
    },
    {
      section: "Reviews",
      frames: [
        {
          name: "b2cHotelReviewAsking",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6800-26947",
          subject: "Share Your Flight Review & Win 50 Trip Coin",
        },
        {
          name: "b2cHotelReviewDone",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6800-27006",
          subject: "B2C Hotel Review Done",
        },
      ],
    },
  ],

  lifestyle: [
    {
      section: "Shop",
      frames: [
        {
          name: "b2cShopOrderPlacementVendor",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6862-35942",
          subject: "Shop Order Placement Vendor",
        },
        {
          name: "b2cShopOrderPlacementCustomer",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6863-36087",
          subject: "Shop Order Placement Customer",
        },
        {
          name: "b2cShopMultiStoreOrderPlacementCustomer",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6863-36954",
          subject: "Shop Multi Store Order Placement Customer",
        },
        {
          name: "b2cShopOrderShippedCustomer",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6862-32004",
          subject: "Shop Order Shipped Customer",
        },
        {
          name: "b2cShopOrderDeliveredCustomer",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6862-31636",
          subject: "Shop Order Delivered Customer",
        },
        {
          name: "b2cShopOrderUserCancelled",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6863-37052",
          subject: "Shop Order User Cancelled",
        },
        {
          name: "b2cShopOrderSellerCancelled",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6863-37319",
          subject: "Shop Order Seller Cancelled",
        },
        {
          name: "b2cShopDonationOrderPurchaseConfirmation",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6863-38252",
          subject: "Shop Donation Order Purchase Confirmation",
        },
        {
          name: "b2cShopFullRefundInitiation",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6863-38348",
          subject: "Shop Full Refund Initiation",
        },
        {
          name: "b2cShopPartialRefundInitiation",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6863-38443",
          subject: "Shop Partial Refund Initiation",
        },
      ],
    },
    {
      section: "Voucher",
      frames: [
        {
          name: "b2cVoucherPurchaseConfirmation",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6862-32224",
          subject: "Voucher Purchase Confirmation",
        },
        {
          name: "b2cVoucherPurchaseAsGift",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6862-32717",
          subject: "Voucher Purchase As Gift",
        },
        {
          name: "b2cVoucherGiftsReceived",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6862-32547",
          subject: "Voucher Gifts Received",
        },
        {
          name: "b2cVoucherPartnerNotification",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6862-33320",
          subject: "Voucher Partner Notification",
        },
        {
          name: "b2cVoucherOtp",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6862-33639",
          subject: "Voucher Otp",
        },
        {
          name: "b2cVoucherOtpInGiftReceiver",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6862-33838",
          subject: "Voucher Otp In Gift Receiver",
        },
        {
          name: "b2cVoucherRedemptionBuyer",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6862-34126",
          subject: "Voucher Redemption Buyer",
        },
        {
          name: "b2cVoucherRedemptionGiftReceiver",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6862-34671",
          subject: "Voucher Redemption Gift Receiver",
        },
      ],
    },
    {
      section: "Mobile Recharge",
      frames: [
        {
          name: "b2cMobileRechargeConfirmation",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6862-32891",
          subject: "Mobile Recharge Confirmation",
        },
        {
          name: "b2cMobileRechargeRefundInitiation",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6863-38535",
          subject: "Mobile Recharge Refund Initiation",
        },
      ],
    },
    {
      section: "Utility",
      frames: [
        {
          name: "b2cUtilityPaymentConfirmation",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6862-34772",
          subject: "Utility Payment Confirmation",
        },
        {
          name: "b2cUtilityBillPaymentRefundInitiation",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6863-38627",
          subject: "Utility Bill Payment Refund Initiation",
        },
      ],
    },
    {
      section: "Partner",
      frames: [
        {
          name: "stPartnerActivationEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6862-35594",
          subject: "Partner Activation Email",
        },
        {
          name: "stPartnerForgetPassword",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6862-35171",
          subject: "Forgot Password?",
        },
        {
          name: "b2cVendorPanelGeneralPurposeTemplate",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6863-36474",
          subject: "Vendor Panel General Purpose Template",
        },
      ],
    },
    {
      section: "Refund + Reminder",
      frames: [
        {
          name: "b2cLifestyleShopRefundRequestEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6874-2407",
          subject: "Refund Request || Shop - [Booking Code]",
        },
        {
          name: "b2cLifestyleShopRefundRequestFollowUpEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6874-2539",
          subject: "Reminder- Refund Request || Shop - [Booking Code]",
        },
        {
          name: "b2cLifestyleMobileRechargeRefundRequestEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6874-2672",
          subject: "Refund Request || Mobile Recharge - [Booking Code]",
        },
        {
          name: "b2cLifestyleMobileRechargeRefundRequestFollowUpEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6874-2794",
          subject:
            "Reminder- Refund Request || Mobile Recharge- [Booking Code]",
        },
        {
          name: "b2cLifestylePaybillRefundRequestEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6874-2917",
          subject: "Refund Request || Pay Bill - [Booking Code]",
        },
        {
          name: "b2cLifestylePaybillRefundRequestFollowUpEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6874-3039",
          subject: "Reminder- Refund Request || Pay Bill - [Booking Code]",
        },
      ],
    },
    {
      section: "Attachment & Others",
      frames: [
        {
          name: "b2cLifestyleSalesSummary",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6863-37657",
          subject: "Lifestyle Sales Summary",
        },
        {
          name: "b2cShopOrderPlacementVendorAttachment",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6864-42467",
          subject: "Shop Order Placement Vendor Attachment",
        },
        {
          name: "b2cShopOrderPlacementCustomerAttachment",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6864-42550",
          subject: "Shop Order Placement Customer Attachment",
        },
        {
          name: "b2cShopMultiStoreOrderPlacementCustomerAttachment",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6864-42672",
          subject: "Shop Multi Store Order Placement Customer Attachment",
        },
      ],
    },
  ],

  visa: [
    {
      section: "Booking",
      frames: [
        {
          name: "b2cVisaBookingConfirmationEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6864-43899",
          subject: "Your booking is Confirmed!",
        },
        {
          name: "b2cVisaBookingCancellationEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6864-44493",
          subject: "Your Visa Booking has been Cancelled!",
        },
        {
          name: "b2cVisaBookingSuccessEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6864-44766",
          subject: "Your Visa Booking is Successful!",
        },
        {
          name: "b2cVisaBookingRejectedEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6864-45039",
          subject: "Your Visa Booking is Rejected!",
        },
      ],
    },
    {
      section: "Voucher",
      frames: [
        {
          name: "b2cVisaBookingConfirmationVoucher",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6864-44278",
          subject: "B2C Visa Booking Confirmation Voucher",
        },
      ],
    },
    {
      section: "OPS",
      frames: [
        {
          name: "opsVisaProposalMailBodyTemplate",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6864-45312",
          subject: "Ops Visa Proposal Mail Body Template",
        },
        {
          name: "opsVisaProposalMailAttachmentTemplate",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6864-45503",
          subject: "Ops Visa Proposal Mail Attachment Template",
        },
      ],
    },
  ],

  holiday: [
    {
      section: "Booking",
      frames: [
        {
          name: "b2cHolidayBookingConfirmationEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6864-46930",
          subject: "Your booking is Confirmed!",
        },
        {
          name: "b2cHolidayBookingCancellationEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6864-47317",
          subject: "Your Booking has been Cancelled!",
        },
      ],
    },
    {
      section: "Voucher",
      frames: [
        {
          name: "b2cHolidayBookingConfirmationVoucher",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6864-48408",
          subject: "B2C Holiday Booking Confirmation Voucher",
        },
      ],
    },
  ],

  car: [
    {
      section: "Booking",
      frames: [
        {
          name: "carTransferBookingConfirmationEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6875-7619",
          subject: "Car Transfer Booking Successful",
        },
      ],
    },
  ],

  "e-sim": [
    {
      section: "Booking",
      frames: [
        {
          name: "ESimBookingConfirmationEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6875-8430",
          subject: "E-Sim Purchase Successful",
        },
      ],
    },
    {
      section: "Attachments",
      frames: [
        {
          name: "ESimBookingConfirmationAttachment",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6875-8619",
          subject: "E-Sim Booking Confirmation Attachment",
        },
      ],
    },
  ],

  "gift-card": [
    {
      section: "Booking",
      frames: [
        {
          name: "b2cGiftCardRedemptionEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6875-12387",
          subject: "Your Gift Card Order Has Been Redeemed",
        },
        {
          name: "b2cGiftCardCancellationEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6875-12462",
          subject: "Your Gift Card Order Has Been Cancelled",
        },
        {
          name: "b2cGiftCardConfirmationEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6875-12609",
          subject: "Your Gift Card is Ready! 🎉",
        },
        {
          name: "b2cGiftCardConfirmationReceiverEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6875-12805",
          subject: "Look What's Waiting for You – A ShareTrip Gift Card!",
        },
      ],
    },
    {
      section: "Attachments",
      frames: [
        {
          name: "b2cGiftCardSenderAttachment",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6875-12597",
          subject: "Gift Card Sender Attachment",
        },
        {
          name: "b2cGiftCardReceiverAttachment",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6875-12603",
          subject: "Gift Card Receiver Attachment",
        },
      ],
    },
  ],

  lounge: [
    {
      section: "Booking",
      frames: [
        {
          name: "loungeBookingSuccessful",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6711-8003",
          subject: "Lounge Booking Successful",
        },
      ],
    },
  ],

  tour: [],

  bus: [
    {
      section: "Booking Emails",
      frames: [
        {
          name: "b2cBusConfirmationEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6876-37927",
          subject: "Your booking is Confirmed!",
        },
        {
          name: "b2cBusCancellationEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6876-38117",
          subject: "Your Booking has been Cancelled!",
        },
      ],
    },
    {
      section: "Voucher",
      frames: [
        {
          name: "b2cBusConfirmationVouchers",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6876-38014",
          subject: "Bus Confirmation Vouchers",
        },
      ],
    },
  ],

  generic: [
    {
      section: "User",
      frames: [
        {
          name: "otpVerificationEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6789-34207",
          subject: "One Time Password for your B2B Admin Login",
        },
        {
          name: "panelUserForgotPassword",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6789-35568",
          subject: "Forgot Password?",
        },
      ],
    },
    {
      section: "Payment Invoice",
      frames: [
        {
          name: "paymentInvoice",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6789-251",
          subject: "Payment Invoice",
        },
        {
          name: "paymentInvoiceAttachment",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6789-153",
          subject: "Payment Invoice Attachment",
        },
      ],
    },
    {
      section: "Bank Transfer",
      frames: [
        {
          name: "bankTransferNotificationEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6789-36417",
          subject: "Payment Notification - Bank Transfer",
        },
        {
          name: "bankTransferApprovedEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6789-36536",
          subject: "Your Bank Transfer has been Approved",
        },
        {
          name: "bankTransferRejectedEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6789-36644",
          subject: "Issue with your Bank Transfer Submission",
        },
      ],
    },
    {
      section: "Other",
      frames: [
        {
          name: "dailyTransactionReportEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6789-36708",
          subject: "Daily Transaction Report",
        },
        {
          name: "stAdQueryEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6789-36771",
          subject: "Daily Transaction Report",
        },
        {
          name: "ThankYouforYourDonation",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6813-28277",
          subject: "Thank You for Your Donation",
        },
      ],
    },
  ],

  profile: [
    {
      section: "Auth Emails",
      frames: [
        {
          name: "b2cOtp",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6876-26464",
          subject: "Forgot Password?",
        },
        {
          name: "b2cWheelReward",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6876-26808",
          subject: "Wheel Reward",
        },
        {
          name: "b2cAccountDeletion",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6876-26922",
          subject: "Account Deletion",
        },
        {
          name: "b2cUserBirthdayWish",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6876-27273",
          subject: "Your password has been updated",
        },
        {
          name: "b2cUserUpdatePassword",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6876-27389",
          subject: "Your password has been updated",
        },
        {
          name: "b2cUserForgetPassword",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6876-27742",
          subject: "Forgot Password?",
        },
        {
          name: "b2cAuthSignUp",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6876-28088",
          subject: "Greetings from ShareTrip",
        },
      ],
    },
  ],

  tour: [
    {
      section: "Booking Emails",
      frames: [
        {
          name: "b2cTourBookingConfirmationEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=413-2988",
          subject: "Your booking is Confirmed!",
        },
        {
          name: "b2cTourBookingCancelEmail",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=413-3039",
          subject: "Your Booking has been Cancelled!",
        },
      ],
    },
    {
      section: "Attachments",
      frames: [
        {
          name: "b2cTourBookingConfirmationAttachtment",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=413-3061",
          subject: "Tour Booking Confirmation Attachtment",
        },
      ],
    },
  ],

  "st-rooms": [
    {
      section: "Booking Emails",
      frames: [
        {
          name: "stRoomsBookingConfirmation",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6886-53081",
          subject: "Booking Confirmation",
        },
        {
          name: "stRoomsBookingCancel",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6886-53292",
          subject: "Booking has been Cancelled!",
        },
      ],
    },
    {
      section: "Voucher",
      frames: [
        {
          name: "stRoomsBookingConfirmationVoucher",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6886-52635",
          subject: "Booking Confirmation",
        },
        {
          name: "stRoomsBookingCancelVoucher",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6886-52846",
          subject: "Booking has been Cancelled!",
        },
      ],
    },
    {
      section: "Registration",
      frames: [
        {
          name: "stRoomsRegSubmit",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6886-49829",
          subject: "Registration request received",
        },
        {
          name: "stRoomsRegFailed",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6886-50143",
          subject: "Registration Failed!",
        },
        {
          name: "stRoomsRegSuccessful",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6886-50192",
          subject: "Registration Successful",
        },
      ],
    },
    {
      section: "Password",
      frames: [
        {
          name: "stRoomsPasswordResetRequest",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6886-50151",
          subject: "Request to reset your password for ST Rooms",
        },
        {
          name: "stRoomsPasswordResetSuccessful",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6886-50162",
          subject: "Password has been changed successfully",
        },
      ],
    },
    {
      section: "Others",
      frames: [
        {
          name: "stRoomsGeneric",
          link: "https://www.figma.com/design/DARvblwD3MEoBADqu8AKDa?node-id=6886-50171",
          subject: "General Query",
        },
      ],
    },
  ],
};

export default emailsData;
