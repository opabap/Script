var obj = JSON.parse($response.body);

function key() {
    obj[arguments[0]] = arguments[1]
    }

key("inAppStates", '[{"productId":"com.readdle.PDFExpert5.subscription.year50_pe6","subscriptionExpirationIntent":"userCancelled","receiptStatus":"ok","subscriptionExpirationDate":"13:15 03/11/2099","isEligibleForIntroPeriod":false,"originalTransactionId":"20000618444996","productName":"subscription","isInBillingRetryPeriod":false,"type":"subscription","subscriptionState":"active","subscriptionAutoRenewStatus":"autoRenewOff","isInGracePeriod":false}]');

$done({body: JSON.stringify(obj)});