import{R as e}from"./index-uCp2LrAq.js";import{T as w}from"./Text-CzfDsx2u.js";import{L as B}from"./LabeledValue-Dg1Y43aD.js";import{L as M}from"./Label-BizVKcMA.js";import{S as c}from"./Section-C8kIh9p2.js";import{a as s,F as m}from"./FileController-D2Ef-lyc.js";import{B as a}from"./Button-CKjWx2QM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./PropsContextProvider-DJl9unei.js";import"./index-CqLFpzzG.js";import"./clsx-B-dksMZM.js";import"./flowComponent-d9koHm8X.js";import"./index-BOkhicXD.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Text-BxG67LRB.js";import"./utils-CRveUs4Q.js";import"./useLocalizedStringFormatter-CPyIEVee.js";import"./Label-B6vS7Cqe.js";import"./Activity-DYbiBj6P.js";import"./Collection-AT6m4EFM.js";import"./Header-hOCBwC_K.js";import"./Input-CR20gog_.js";import"./useFocusable-DIY1EfD0.js";import"./filterDOMProps-CeZl_uWj.js";import"./PressResponder-CvugjgZN.js";import"./usePress-B-418flx.js";import"./useSelector-BUIORffs.js";import"./IconApp-08dtyhav.js";import"./IconWarning--xZ87BQk.js";import"./LoadingSpinner-DBUWTLW8.js";import"./Button-B6RNnFE-.js";const p=l=>e.createElement(B,null,e.createElement(M,null,"Selected files"),e.createElement(w,null,l.files.length>0?l.files.map(r=>r.name).join(", "):"-")),le={title:"Upload/FileTrigger",component:s,parameters:{controls:{exclude:["className","controller"]}},render:l=>{const r=m.useNew(),t=r.useFiles();return e.createElement(c,null,e.createElement(s,{...l,controller:r},e.createElement(a,null,"Select file")),e.createElement(p,{files:t}))}},o={},n={render:l=>{const r=m.useNew(),t=r.useFiles();return e.createElement(c,null,e.createElement(s,{...l,controller:r,allowsMultiple:!0},e.createElement(a,null,"Select multiple files")),e.createElement(p,{files:t}))}},i={render:l=>{const r=m.useNew(),t=r.useFiles();return e.createElement(c,null,e.createElement(s,{...l,controller:r,allowsMultiple:!0,acceptedFileTypes:["image/png","image/jpeg"]},e.createElement(a,null,"Select image")),e.createElement(p,{files:t}))}};var u,f,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(d=(f=o.parameters)==null?void 0:f.docs)==null?void 0:d.source}}};var g,F,S;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => {
    const fileController = FileController.useNew();
    const files = fileController.useFiles();
    return <Section>
        <FileTrigger {...props} controller={fileController} allowsMultiple>
          <Button>Select multiple files</Button>
        </FileTrigger>
        <SelectedFiles files={files} />
      </Section>;
  }
}`,...(S=(F=n.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var E,C,T;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => {
    const fileController = FileController.useNew();
    const files = fileController.useFiles();
    return <Section>
        <FileTrigger {...props} controller={fileController} allowsMultiple acceptedFileTypes={["image/png", "image/jpeg"]}>
          <Button>Select image</Button>
        </FileTrigger>
        <SelectedFiles files={files} />
      </Section>;
  }
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const te=["Default","AllowsMultiple","AcceptedFileTypes"];export{i as AcceptedFileTypes,n as AllowsMultiple,o as Default,te as __namedExportsOrder,le as default};
