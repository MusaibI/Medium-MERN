const { config, uploader } = require("cloudinary");

const dotenv = require("dotenv");
dotenv.config();

const cloudinaryConfig = (req, res, next) => {
	config({
		cloud_name: "dfzyw3v5v",
		api_key: "615558984545478",
		api_secret: "J1DPVAWZEproZW6Og7OEirlvS_w",
	});
	next();
};
module.exports = { cloudinaryConfig, uploader };
