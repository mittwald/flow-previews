var D=Object.defineProperty;var F=(a,e,r)=>e in a?D(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r;var n=(a,e,r)=>F(a,typeof e!="symbol"?e+"":e,r);import{r as u,R as o}from"./index-Cs7sjTYM.js";import{F as L}from"./FileDropZone-Hk5vtM3H.js";import{I as T}from"./ImageCropper-BXEQOxdZ.js";import{c as $}from"./clsx-B-dksMZM.js";import{B as q}from"./Button-CP_UNic0.js";import"./IconApp-BvR14QOm.js";import{l as Z}from"./IconWarning-DvIm1kNF.js";import{u as _}from"./useFileController-CCfEqIEM.js";import{$ as B}from"./useLocalizedStringFormatter-A1OcE67O.js";import{m as z,o as f,b as O}from"./flowComponent-DojWstBP.js";import{u as h}from"./useSelector-DDdDwEvg.js";import{S as P}from"./Section-DDZL8g9_.js";import{L as j}from"./LabeledValue-Bjxbi9jA.js";import{L as k}from"./Label-LjpPhEpK.js";import{I as V}from"./Image-B6ZYweac.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Text-U6fXasfV.js";import"./PropsContextProvider-CE2pl7GD.js";import"./index-DKTAOSvX.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Dd84vsje.js";import"./utils-BwYH5X3X.js";import"./index-Cf-03bMR.js";import"./intlStrings-ZMTSFH_M.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-RWB8_cdz.js";import"./FocusScope--STy3lDT.js";import"./useFocusRing-if03xCoO.js";import"./useDescription-BalOtq5q.js";import"./Button-BebB4Pfr.js";import"./ProgressBar-AEPgO8_B.js";import"./Label-z8V7EdU9.js";import"./Hidden-CCrdO6Wk.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-VJrkZIcY.js";import"./usePress-1fQJjpyE.js";import"./VisuallyHidden-BWHYRTKp.js";import"./Slider-UhzuO7pg.js";import"./useControlledState-B7K2eYzO.js";import"./useFormReset-B-nkSQHj.js";import"./LoadingSpinner-CmBEOOxV.js";import"./Input-8WbdzIVX.js";import"./PressResponder-CCvTmYWN.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-D9QghTcc.js";import"./CollectionBuilder-DDU0oj1o.js";import"./Header-BtBTxt0E.js";const W="flow--image-upload",G="flow--image-upload--file-drop-zone",H="flow--image-upload--image-cropper-container",J="flow--image-upload--canvas",c={imageUpload:W,fileDropZone:G,imageCropperContainer:H,canvas:J},K={"de-DE":{"imageUpload.remove":"Bild entfernen"},"en-EN":{"imageUpload.remove":"Remove image"}},C=a=>{const{controller:e,cropShape:r,width:t=300,height:s=r==="round"?300:200,className:i}=a,g=_(),p=g.useFiles(),I=e.useImageSrc(),y=e.useCroppedArea(),m=u.useRef(null),N=$(c.imageUpload,i),x=B(K);return u.useEffect(()=>{e.setImageSrc(p)},[p]),u.useEffect(()=>{m.current&&e.drawImage(m.current,t,s)},[I,y]),o.createElement("div",{className:N},p.length===0&&o.createElement(L,{className:c.fileDropZone,controller:g,acceptedFileTypes:["image/png","image/jpeg"]}),p.length>0&&o.createElement("div",{className:c.imageCropperContainer},o.createElement(T,{cropShape:r,aspect:t/s,image:I,onCropComplete:(Q,R)=>{e.setCroppedArea(R)}}),o.createElement(q,{color:"secondary",variant:"plain","aria-label":x.format("imageUpload.remove"),size:"s",onPress:()=>{g.clear(),e.clearCanvas(m.current)}},o.createElement(Z,null))),o.createElement("canvas",{className:c.canvas,ref:m,width:t,height:s}))};C.__docgenInfo={description:"",methods:[],displayName:"ImageUpload",props:{className:{required:!1,tsType:{name:"string"},description:""},controller:{required:!0,tsType:{name:"ImageUploadController"},description:""},width:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""}},composes:["Partial"]};class S{constructor(){n(this,"url");n(this,"imageSrc");n(this,"croppedArea");z(this,{url:f,imageSrc:f,croppedArea:f,drawImage:O.bound})}static useNew(){return u.useRef(new S).current}drawImage(e,r,t){const s=e.getContext("2d"),i=new Image(r,t);this.imageSrc&&(i.src=this.imageSrc),s&&this.croppedArea&&(s.drawImage(i,this.croppedArea.x,this.croppedArea.y,this.croppedArea.width,this.croppedArea.height,0,0,r,t),this.url=s.canvas.toDataURL("image/png"))}useUrl(){return h(()=>this.url)}useImageSrc(){return h(()=>this.imageSrc)}useCroppedArea(){return h(()=>this.croppedArea)}setImageSrc(e){const r=new FileReader;e.length>0&&(r.onload=t=>{t.target&&typeof t.target.result=="string"&&(this.imageSrc=t.target.result)},r.readAsDataURL(e[0]))}setCroppedArea(e){this.croppedArea=e}clearCanvas(e){if(e){const r=e.getContext("2d");r&&r.reset(),this.url=void 0}}}const M=()=>S.useNew(),Je={title:"Upload/ImageUpload",component:C,parameters:{controls:{exclude:["className","controller"]}},argTypes:{cropShape:{control:"inline-radio",options:["rect","round"]},width:{control:"number"},height:{control:"number"}},render:a=>{const e=M(),r=e.useUrl();return o.createElement(P,null,o.createElement(C,{...a,controller:e}),r&&o.createElement(j,null,o.createElement(k,null,"Ergebnis"),o.createElement(V,{src:r,style:{width:"contentWidth"}})))}},l={},d={args:{cropShape:"round"}};var E,b,w;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(w=(b=l.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var v,U,A;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    cropShape: "round"
  }
}`,...(A=(U=d.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};const Ke=["Default","RoundCropShape"];export{l as Default,d as RoundCropShape,Ke as __namedExportsOrder,Je as default};