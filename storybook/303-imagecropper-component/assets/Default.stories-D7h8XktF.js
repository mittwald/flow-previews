import{R as e}from"./index-BwDkhjyp.js";import{T as w}from"./Text-OHQxmlAI.js";import{L as x}from"./LabeledValue-CRikwZpb.js";import{L as y}from"./Label-DqyDhkXf.js";import{S as i}from"./Section-DhcKGvwf.js";import{F as c,u as m}from"./useFileController-BcnHklDd.js";import{B as a}from"./Button-CGYujOOx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./PropsContextProvider-DR_AoDrQ.js";import"./index-D1Z7wIYD.js";import"./clsx-B-dksMZM.js";import"./flowComponent-pf1ZT_RA.js";import"./index-B8XB3FuZ.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Wrap-DQq6jo70.js";import"./Text-YaHrFsZr.js";import"./utils-_0I8Kdxf.js";import"./useLocalizedStringFormatter-BgjAeG81.js";import"./Label-BbJlieEf.js";import"./Activity-DsHdYeGi.js";import"./ContextMenu.module-CAjBRoKS.js";import"./Collection-BUjDbYEY.js";import"./Header-CClMDSoE.js";import"./Input-Bxlqy7dR.js";import"./useFocusable-Di1f8vLw.js";import"./filterDOMProps-CeZl_uWj.js";import"./PressResponder-CS6YBkA6.js";import"./usePress-CipJ8IEr.js";import"./useSelector-Pyc-engy.js";import"./IconApp-C-B10zNi.js";import"./IconWarning-D08KcEGW.js";import"./LoadingSpinner-BjsJqdEZ.js";import"./Button-j9P20aTv.js";const p=t=>{const r=t.controller.useFiles();return e.createElement(x,null,e.createElement(y,null,"Selected files"),e.createElement(w,null,r.length>0?r.map(B=>B.name).join(", "):"-"))},le={title:"Upload/FileTrigger",component:c,parameters:{controls:{exclude:["className","controller"]}},render:t=>{const r=m();return e.createElement(i,null,e.createElement(c,{...t,controller:r},e.createElement(a,null,"Select file")),e.createElement(p,{controller:r}))}},l={},o={render:t=>{const r=m();return e.createElement(i,null,e.createElement(c,{...t,controller:r,allowsMultiple:!0},e.createElement(a,null,"Select multiple files")),e.createElement(p,{controller:r}))}},n={render:t=>{const r=m();return e.createElement(i,null,e.createElement(c,{...t,controller:r,acceptedFileTypes:["image/png","image/jpeg"]},e.createElement(a,null,"Select image")),e.createElement(p,{controller:r}))}};var s,u,d;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,F,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => {
    const controller = useFileController();
    return <Section>
        <FileTrigger {...props} controller={controller} allowsMultiple>
          <Button>Select multiple files</Button>
        </FileTrigger>
        <SelectedFiles controller={controller} />
      </Section>;
  }
}`,...(S=(F=o.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var E,f,T;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => {
    const controller = useFileController();
    return <Section>
        <FileTrigger {...props} controller={controller} acceptedFileTypes={["image/png", "image/jpeg"]}>
          <Button>Select image</Button>
        </FileTrigger>
        <SelectedFiles controller={controller} />
      </Section>;
  }
}`,...(T=(f=n.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const oe=["Default","AllowsMultiple","AcceptedFileTypes"];export{n as AcceptedFileTypes,o as AllowsMultiple,l as Default,oe as __namedExportsOrder,le as default};