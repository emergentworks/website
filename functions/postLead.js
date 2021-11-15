const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async (event, context, callback) => {
  try {
    // Google Sheet Doc
    const doc = await new GoogleSpreadsheet(
      process.env.GATSBY_GOOGLE_SHEET_LEADS_ID
    );

    // Google Authentication
    await doc.useServiceAccountAuth({
      client_email: process.env.GATSBY_GOOGLE_SHEET_LEADS_CLIENT_EMAIL,
      private_key: process.env.GATSBY_GOOGLE_DEV_PRIVATE_KEY.replace(
        /\\n/gm,
        '\n'
      ),
    });

    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = await doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
    const getLeadData = JSON.parse(event.body); // Getting lead data from form
    await sheet.addRow(getLeadData);

    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: `row has been added`,
        payload: event.body,
      }),
    });
  } catch (error) {
    return {
      statusCode: 500,
      body: `Error: ${error.toString()}`,
    };
  }
};
