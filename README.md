# Erp 
#chatGPT - check here : https://chatgpt.com/c/67323b20-0b10-800c-a845-b8f871a7c88a

1. npx create-nx-workspace@latest erp --preset=empty / select angular
2. npm install @nrwl/angular -> nx generate @nrwl/angular:application client
3. npm install @nrwl/nest -> nx generate @nrwl/nest:application api
4. nx generate @nrwl/angular:library libs/cl_base/ui/feature/ui

1. for api call , need to write logic first get url from browser for example the client side url is xxx.aiolds.com
 and api side is apixxx.aiolds.com , so first i need read url client side then check if localhost  if not just add api on begging ,
 if its localhost just use deffault port for api 3301 localhost:3301. CLIENT SIDE LOGIC
2. for nestjs i need to write interfaces when try to make controller implement it List/Simple , 
 if list need methods  getAll , deleteAll , if simple need methods get, delete, save
