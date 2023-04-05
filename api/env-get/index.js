module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const config_url = process.env.CONGIF_URL;

    console.log("CONGIF_URL::::::" + config_url);

    context.res = {
        status: 200,
        body: {config_url}
    };
};