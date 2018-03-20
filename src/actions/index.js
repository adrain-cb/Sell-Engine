import Axios from 'axios'

//http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-NAME=FindingService&SERVICE-VERSION=1.11.0&SECURITY-APPNAME=AdrianSm-sellengi-PRD-0d937783c-a1291068&RESPONSE-DATA-FORMAT=JSON&GLOBAL-ID=EBAY-US&REST-PAYLOAD&paginationInput.entriesPerPage=3&keywords=gold
const APP_NAME = 'AdrianSm-sellengi-PRD-0d937783c-a1291068'
const ENTRIES_PER_PAGE = 15
// Root URL for completedItems
const ROOT_URL = `http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-NAME=FindingService&SERVICE-VERSION=1.11.0&RESPONSE-DATA-FORMAT=JSON&GLOBAL-ID=EBAY-US&paginationInput.entriesPerPage=${ENTRIES_PER_PAGE}&REST-PAYLOAD&SECURITY-APPNAME=${APP_NAME}`

export const FETCH_DATA = 'FETCH_DATA'

export function fetchData(keywords) {
  const url = `${ROOT_URL}&keywords=${keywords}`
  const request = Axios.get(url)

  console.log("Request: " + request)

  return {
    type: FETCH_DATA,
    payload: request
  }
}
