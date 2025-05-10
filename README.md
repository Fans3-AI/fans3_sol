# 项目运行步骤：
## Step 1: npm install

## Step 2: npm run dev

# 更新API
## step 1:进入到src/api文件夹中
## step 2:命令行执行下面代码
```bash
 openapi-generator-cli generate -g typescript -i https://backend.mindfans.ai/voice-agent/test/api/openapi.json --additional-properties=useSingleRequestParameter=true,usePromises=true -o fe-client-typescript
``` 
