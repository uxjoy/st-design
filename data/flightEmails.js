const flightEmails = [
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
        subject: "B2C Flight One Way International Flight Booking Confirmation",
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
];

export default flightEmails;
