import { dbConfig } from './dbConfig';
import { messages } from './codeMsg';

export interface ModuleExports {
    dbConfig: typeof dbConfig;
    messages: typeof messages;
}
const moduleExports: ModuleExports = {
    dbConfig ,
    messages
}

export default moduleExports