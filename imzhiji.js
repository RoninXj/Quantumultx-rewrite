const $ = new Env(`IM智己`);



if (typeof $.ReadData('zhijick') !== "undefined"){
    
    $.GrabData('token','newtoken',"","IM智己 [ 新值 ]",0);
    
    let Old = $.ReadData('zhijick');
    let New = $.ReadData('zhijick');

    if (New !== Old){
        $.GrabData(New,'zhijick');
        $.n('IM智己token值[ 已更新 ]','zhijick',New);
    }else {
        $.n('IM智己token值[ 无需更新 ]','zhijick',Old);
    }

}else {
    $.GrabData('token','zhijick',"","IM智己",0);
}












function Env(name){const isNode=typeof require==="function";const isQuanX=typeof $task==='object';const isLoon=typeof $loon==='string';this.name=typeof name==="undefined"?'':name;console.log(`-${this.name}\u5f00\u59cb\u6267\u884c-\n-----------------------------------\n`);const start=((n)=>{return new Date().getTime()})();const node=(()=>{if(isNode){const got=require('got');return{got}}})();const get=(options)=>{if(options===undefined){return};if(isLoon){options.method='GET';return new Promise((resolve,reject)=>{$httpClient.get(options,(e,req,data)=>{if(e){reject(e)}else{resolve(JSON.parse(data))}})})}if(isQuanX){options.method='GET';return new Promise((resolve,reject)=>{$task.fetch(options).then(v=>{let data=JSON.parse(v.body);resolve(data)}).catch(err=>{reject(err)})})};options=typeof options==="string"?{url:options}:options;return new Promise((resolve,reject)=>{node.got(options.url,{method:'GET',headers:typeof options.headers!=="undefined"?options.headers:{},}).then(v=>{resolve(JSON.parse(v.body))}).catch(e=>{reject(e)})})};const post=(options)=>{if(options===undefined){return};if(isLoon){options.method='POST';return new Promise((resolve,reject)=>{$httpClient.post(options,(e,req,data)=>{if(e){reject(e)}else{resolve(JSON.parse(data))}})})}if(isQuanX){options.method='POST';return new Promise((resolve,reject)=>{$task.fetch(options).then(v=>{let data=JSON.parse(v.body);resolve(data)}).catch(err=>{reject(err)})})};options=typeof options==="string"?{url:options}:options;return new Promise((resolve,reject)=>{node.got(options.url,{method:'POST',headers:typeof options.headers!=="undefined"?options.headers:{},body:typeof options.body!=="undefined"?options.body:{},}).then(v=>{resolve(JSON.parse(v.body))}).catch(e=>{reject(e)})})};const rom=(min,max)=>{let n=Math.floor(Math.random()*max);while(n<min)n=Math.floor(Math.random()*max);return n};const wait=(ms)=>{return new Promise(resolve=>{setTimeout(resolve,ms)})};const done=(data)=>{console.log(`\n-----------------------------------\n-${this.name}\u6267\u884c\u7ed3\u675f,\u5171\u7528\u65f6${(new Date().getTime()-start)/1000}\u79d2-`);if(isQuanX||isLoon){$done(data)}};const m=(msg)=>{let left="";let len=0;if(msg===undefined){return}msg=typeof msg==="string"?msg:msg.toString();for(let i=0;i<msg.length;i++){if(msg.charCodeAt(i)>255){len+=2}else{len++}}if(len>=35){console.log(msg);return}for(let i=0;i<(35-len)/2;i++){left+=" "}console.log(left+msg);return};const GrabData=(data_name,variable_name,form,App_name,isGrabbing)=>{isGrabbing=typeof isGrabbing==="undefined"?1:typeof isGrabbing==="number"&&isGrabbing!==1?0:1;form=form===""?"headers":form==="body"||"headers"?form:"err";if(data_name===""||typeof data_name===undefined){console.log(`[数据变量名/数据]未设置[2]!请重新设置...`);return}if(variable_name===""||typeof variable_name===undefined){console.log(`存储变量名未设置[3]!请重新设置...`);return}App_name=App_name===""||typeof App_name===undefined?"抓包[ 名称未设定 ]":App_name;if(isGrabbing===0){if(isQuanX){$prefs.setValueForKey($request[form][data_name],variable_name);$notify(App_name,`${variable_name}获取成功,数据已存储!`,$request[form][data_name]);return}if(isLoon){$persistentStore.write($request[form][data_name],variable_name);$notification.post(App_name,`${variable_name}获取成功,数据已存储!`,$request[form][data_name]);return}console.log(`[\u6293\u5305\u5931\u8d25]\u6682\u672a\u517c\u5bb9\u5176\u4ed6app`)}else{if(isQuanX){$prefs.setValueForKey(data_name,variable_name);$notify(App_name,`${variable_name}设置成功,数据已存储!`,data_name)}if(isLoon){$persistentStore.write(data_name,variable_name);$notification.post(App_name,`${variable_name}设置成功,数据已存储!`,data_name)}}};const ReadData=(Key)=>{if(isQuanX){return $prefs.valueForKey(Key)}if(isNode){return process.env[Key]}if(isLoon){return $persistentStore.read(Key)}};const splits=(str,of,of2)=>{if(str===""||typeof str==="undefined"){return""}let Arr=[];if(str.indexOf(of)!==-1){Arr=str.split(of);if(typeof of2!=="undefined"){for(let i=0;i<Arr.length;i++){if(Arr[i].indexOf(of2)!==-1){Arr[i]=Arr[i].split(of2)}else{Arr[i]=[Arr[i]]}}}return Arr}else if(typeof of2!=="undefined"&&str.indexOf(of2)!==-1){return str.split(of2)}return[str]};const n = (title,subtitle,text)=>{if(isQuanX){$notify(title,subtitle,text);}if(isLoon){$notification.post(title,subtitle,text)}};return{splits,wait,rom,done,get,post,m,GrabData,ReadData,n,isLoon,isQuanX,isNode}};
