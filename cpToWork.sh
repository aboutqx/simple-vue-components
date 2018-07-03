#！/bin/bash
# 放在clone 的element文件夹下
npm run dist
cp -f ./lib/upload.js D:\\worksapce\\\\node_modules\\element-ui\\lib\\upload.js
cp -f ./lib/element-ui.common.js D:\\worksapce\\node_modules\\element-ui\\lib\\element-ui.common.js
echo 'copyed upload && element-ui.common.js'
cd D:\\worksapce\\
echo 'change to work dir'
npm run build:dll
