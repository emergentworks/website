const { GoogleSpreadsheet } = require('google-spreadsheet')

exports.handler = async (event, context, callback) => {
  // Getting lead data from form
  const getLeadData = JSON.parse(event.body)

  // Google Sheet Doc
  const doc = await new GoogleSpreadsheet(
    process.env.GATSBY_GOOGLE_SHEET_LEADS_ID
  )

  // Google Authentication
  await doc.useServiceAccountAuth({
    client_email: process.env.GATSBY_GOOGLE_SHEET_LEADS_CLIENT_EMAIL,
    private_key: process.env.GATSBY_GOOGLE_DEV_PRIVATE_KEY,
  })

  await doc.loadInfo() // loads document properties and worksheets

  const sheet = await doc.sheetsByIndex[0] // or use doc.sheetsById[id]

  await sheet.addRow(getLeadData)

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(getLeadData),
  })
}
