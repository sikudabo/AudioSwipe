import deleteData from "./deleteData";
import getData from "./getData";
import postData from "./postData";
import { checkValidAge } from './checkValidAge';
import { checkValidEmail } from "./checkValidEmail";
import { checkValidUrl } from './checkValidUrl';
import { deviceBreakPointsMaxWidth, deviceBreakPointsMinWidth} from "../breakpoints";
import { formatUserBirthday } from './formatUserBirthday';
import { postBinaryData } from './postBinaryData';
import { resizeImage } from "./resizeImage";
import { shortenNumber } from "./shortenNumber";

export { 
    checkValidAge,
    checkValidEmail,
    checkValidUrl,
    deleteData,
    deviceBreakPointsMaxWidth,
    deviceBreakPointsMinWidth,
    formatUserBirthday,
    getData,
    postBinaryData,
    postData,
    resizeImage,
    shortenNumber,
};