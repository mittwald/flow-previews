import{R as e}from"./index-uCp2LrAq.js";import{T as B}from"./Text-CzfDsx2u.js";import{L as M}from"./LabeledValue-Dg1Y43aD.js";import{L as N}from"./Label-BizVKcMA.js";import{S as c}from"./Section-C8kIh9p2.js";import{a as i,F as m}from"./FileController-D2Ef-lyc.js";import{B as a}from"./Button-CKjWx2QM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./PropsContextProvider-DJl9unei.js";import"./index-CqLFpzzG.js";import"./clsx-B-dksMZM.js";import"./flowComponent-d9koHm8X.js";import"./index-BOkhicXD.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Text-BxG67LRB.js";import"./utils-CRveUs4Q.js";import"./useLocalizedStringFormatter-CPyIEVee.js";import"./Label-B6vS7Cqe.js";import"./Activity-DYbiBj6P.js";import"./Collection-AT6m4EFM.js";import"./Header-hOCBwC_K.js";import"./Input-CR20gog_.js";import"./useFocusable-DIY1EfD0.js";import"./filterDOMProps-CeZl_uWj.js";import"./PressResponder-CvugjgZN.js";import"./usePress-B-418flx.js";import"./useSelector-BUIORffs.js";import"./IconApp-08dtyhav.js";import"./IconWarning--xZ87BQk.js";import"./LoadingSpinner-DBUWTLW8.js";import"./Button-B6RNnFE-.js";const p=t=>e.createElement(M,null,e.createElement(N,null,"Selected files"),e.createElement(B,null,t.files.length>0?t.files.map(r=>r.name).join(", "):"-")),te={title:"Upload/FileTrigger",component:i,parameters:{controls:{exclude:["className","controller"]}},render:t=>{const r=m.useNew(),l=r.useFiles();return e.createElement(c,null,e.createElement(i,{...t,controller:r},e.createElement(a,null,"Select file")),e.createElement(p,{files:l}))}},o={},n={render:t=>{const r=m.useNew(),l=r.useFiles();return e.createElement(c,null,e.createElement(i,{...t,controller:r,allowsMultiple:!0},e.createElement(a,null,"Select multiple files")),e.createElement(p,{files:l}))}},s={render:t=>{const r=m.useNew(),l=r.useFiles();return e.createElement(c,null,e.createElement(i,{...t,controller:r,allowsMultiple:!0,acceptedFileTypes:["image/png","image/jpeg"]},e.createElement(a,null,"Select image")),e.createElement(p,{files:l}))}};var u,d,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var f,F,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: props => {
    const controller = FileController.useNew();
    const files = controller.useFiles();
    return <Section>
        <FileTrigger {...props} controller={controller} allowsMultiple>
          <Button>Select multiple files</Button>
        </FileTrigger>
        <SelectedFiles files={files} />
      </Section>;
  }
}`,...(S=(F=n.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var E,T,w;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => {
    const controller = FileController.useNew();
    const files = controller.useFiles();
    return <Section>
        <FileTrigger {...props} controller={controller} allowsMultiple acceptedFileTypes={["image/png", "image/jpeg"]}>
          <Button>Select image</Button>
        </FileTrigger>
        <SelectedFiles files={files} />
      </Section>;
  }
}`,...(w=(T=s.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const le=["Default","AllowsMultiple","AcceptedFileTypes"];export{s as AcceptedFileTypes,n as AllowsMultiple,o as Default,le as __namedExportsOrder,te as default};
