import{R as n}from"./index-B-o1Wr-g.js";import"./IconApp--rto3B0B.js";import{h as m,p as u,q as f,r as p}from"./IconWarning--ZE28x2f.js";import{C as d}from"./PropsContextProvider-BHq6Fnml.js";import{c as I}from"./clsx-B-dksMZM.js";import{$ as g}from"./useLocalizedStringFormatter-BQr1rA-c.js";const w={"de-DE":{"alertIcon.danger":"Status Fehler","alertIcon.info":"Status Information","alertIcon.success":"Status Erfolg","alertIcon.warning":"Status Warnung"},"en-EN":{"alertIcon.danger":"Status error","alertIcon.info":"Status information","alertIcon.success":"Status success","alertIcon.warning":"Status warning"}},h="flow--alert-icon--info",S="flow--alert-icon",T="flow--alert-icon--warning",y="flow--alert-icon--danger",E="flow--alert-icon--success",t={info:h,alertIcon:S,warning:T,danger:y,success:E},b={danger:m,info:u,success:f,warning:p},q=s=>{const{status:e="info",className:a,...o}=s,r=I(t.alertIcon,t[e],a),c=g(w),l=b[e],i={className:r,"aria-label":c.format(`alertIcon.${e}`),...o};return n.createElement(d,null,n.createElement(l,{...i}))};q.__docgenInfo={description:"",methods:[],displayName:"AlertIcon",props:{status:{required:!1,tsType:{name:"T"},description:"The elements status"},tunnelId:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"@internal"},wrapWith:{required:!1,tsType:{name:"ReactElement"},description:""},size:{required:!1,tsType:{name:"union",raw:'"s" | "m" | "l"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:'The size of the icon. @default "m"'}},composes:["PropsWithChildren"]};export{q as A};