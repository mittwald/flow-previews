import{R as e}from"./index-Cs7sjTYM.js";import{T as w}from"./Text-DabHCseC.js";import{L as x}from"./LabeledValue-BMZtnonS.js";import{L as y}from"./Label-C-YBza_T.js";import{S as i}from"./Section-CLAa2zTx.js";import{F as c,u as m}from"./useFileController-B0rp0Ebf.js";import{B as a}from"./Button-BNaSPzM2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./PropsContextProvider-C-7PaZ52.js";import"./index-Dy0c0dcE.js";import"./clsx-B-dksMZM.js";import"./flowComponent-S4fYrZHa.js";import"./index-BMdlDBjA.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Dh5WnJTs.js";import"./utils-Cy-A-nlV.js";import"./useLocalizedStringFormatter-Ccpl5Mb8.js";import"./Label-8PgMpAzA.js";import"./Activity-Bj6QwKZx.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-DR5xXegF.js";import"./Header-CXhviMrv.js";import"./Input-B2XFbQTW.js";import"./useFocusable-OFlS-6qe.js";import"./filterDOMProps-CeZl_uWj.js";import"./PressResponder-COi_Rbo6.js";import"./usePress-CTrgc7uI.js";import"./useSelector-CuLBdmz2.js";import"./IconApp-BUZKcXPP.js";import"./IconWarning-BHhVudlO.js";import"./LoadingSpinner-JoUWEwvb.js";import"./Button-DrQgql3X.js";const p=t=>{const r=t.controller.useFiles();return e.createElement(x,null,e.createElement(y,null,"Selected files"),e.createElement(w,null,r.length>0?r.map(B=>B.name).join(", "):"-"))},le={title:"Upload/FileTrigger",component:c,parameters:{controls:{exclude:["className","controller"]}},render:t=>{const r=m();return e.createElement(i,null,e.createElement(c,{...t,controller:r},e.createElement(a,null,"Select file")),e.createElement(p,{controller:r}))}},l={},o={render:t=>{const r=m();return e.createElement(i,null,e.createElement(c,{...t,controller:r,allowsMultiple:!0},e.createElement(a,null,"Select multiple files")),e.createElement(p,{controller:r}))}},n={render:t=>{const r=m();return e.createElement(i,null,e.createElement(c,{...t,controller:r,acceptedFileTypes:["image/png","image/jpeg"]},e.createElement(a,null,"Select image")),e.createElement(p,{controller:r}))}};var s,u,d;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,F,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
