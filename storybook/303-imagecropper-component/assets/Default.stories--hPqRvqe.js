import{R as e}from"./index-Cs7sjTYM.js";import{T as w}from"./Text-U6fXasfV.js";import{L as x}from"./LabeledValue-Bjxbi9jA.js";import{L as y}from"./Label-LjpPhEpK.js";import{S as m}from"./Section-DDZL8g9_.js";import{F as i,u as c}from"./useFileController-CCfEqIEM.js";import{B as p}from"./Button-DXVDIrTY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./PropsContextProvider-CE2pl7GD.js";import"./index-DKTAOSvX.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DojWstBP.js";import"./index-Cf-03bMR.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Dd84vsje.js";import"./utils-BwYH5X3X.js";import"./useLocalizedStringFormatter-A1OcE67O.js";import"./Label-z8V7EdU9.js";import"./Hidden-CCrdO6Wk.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-D9QghTcc.js";import"./CollectionBuilder-DDU0oj1o.js";import"./Header-BtBTxt0E.js";import"./Input-8WbdzIVX.js";import"./useFocusRing-if03xCoO.js";import"./filterDOMProps-CeZl_uWj.js";import"./PressResponder-CCvTmYWN.js";import"./usePress-1fQJjpyE.js";import"./useSelector-DDdDwEvg.js";import"./IconApp-BvR14QOm.js";import"./IconWarning-CKNdQ7e9.js";import"./LoadingSpinner-VvQ8syNA.js";import"./Button-BebB4Pfr.js";import"./ProgressBar-AEPgO8_B.js";import"./useLabel-RWB8_cdz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-VJrkZIcY.js";const a=t=>{const r=t.controller.useFiles();return e.createElement(x,null,e.createElement(y,null,"Selected files"),e.createElement(w,null,r.length>0?r.map(B=>B.name).join(", "):"-"))},pe={title:"Upload/FileTrigger",component:i,parameters:{controls:{exclude:["className","controller"]}},render:t=>{const r=c();return e.createElement(m,null,e.createElement(i,{...t,controller:r},e.createElement(p,null,"Select file")),e.createElement(a,{controller:r}))}},o={},l={render:t=>{const r=c();return e.createElement(m,null,e.createElement(i,{...t,controller:r,allowsMultiple:!0},e.createElement(p,null,"Select multiple files")),e.createElement(a,{controller:r}))}},n={render:t=>{const r=c();return e.createElement(m,null,e.createElement(i,{...t,controller:r,acceptedFileTypes:["image/png","image/jpeg"]},e.createElement(p,null,"Select image")),e.createElement(a,{controller:r}))}};var s,u,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,F,S;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => {
    const controller = useFileController();
    return <Section>
        <FileTrigger {...props} controller={controller} allowsMultiple>
          <Button>Select multiple files</Button>
        </FileTrigger>
        <SelectedFiles controller={controller} />
      </Section>;
  }
}`,...(S=(F=l.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var E,f,T;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => {
    const controller = useFileController();
    return <Section>
        <FileTrigger {...props} controller={controller} acceptedFileTypes={["image/png", "image/jpeg"]}>
          <Button>Select image</Button>
        </FileTrigger>
        <SelectedFiles controller={controller} />
      </Section>;
  }
}`,...(T=(f=n.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const ae=["Default","AllowsMultiple","AcceptedFileTypes"];export{n as AcceptedFileTypes,l as AllowsMultiple,o as Default,ae as __namedExportsOrder,pe as default};
