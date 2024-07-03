import{R as e}from"./index-uCp2LrAq.js";import{T as w}from"./Text-CzfDsx2u.js";import{L as x}from"./LabeledValue-Dg1Y43aD.js";import{L as y}from"./Label-BizVKcMA.js";import{S as i}from"./Section-G2piJDKt.js";import{a as c}from"./FileController-D2Ef-lyc.js";import{u as m}from"./useFileController-Bxdz18xk.js";import{B as a}from"./Button-CKjWx2QM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./PropsContextProvider-DJl9unei.js";import"./index-CqLFpzzG.js";import"./clsx-B-dksMZM.js";import"./flowComponent-d9koHm8X.js";import"./index-BOkhicXD.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Text-BxG67LRB.js";import"./utils-CRveUs4Q.js";import"./useLocalizedStringFormatter-CPyIEVee.js";import"./Label-B6vS7Cqe.js";import"./Activity-DYbiBj6P.js";import"./ContextMenu.module-CAjBRoKS.js";import"./Collection-AT6m4EFM.js";import"./Header-hOCBwC_K.js";import"./Input-CR20gog_.js";import"./useFocusable-DIY1EfD0.js";import"./filterDOMProps-CeZl_uWj.js";import"./PressResponder-CvugjgZN.js";import"./usePress-B-418flx.js";import"./useSelector-BUIORffs.js";import"./IconApp-08dtyhav.js";import"./IconWarning--xZ87BQk.js";import"./LoadingSpinner-DBUWTLW8.js";import"./Button-B6RNnFE-.js";const p=t=>{const r=t.controller.useFiles();return e.createElement(x,null,e.createElement(y,null,"Selected files"),e.createElement(w,null,r.length>0?r.map(B=>B.name).join(", "):"-"))},le={title:"Upload/FileTrigger",component:c,parameters:{controls:{exclude:["className","controller"]}},render:t=>{const r=m();return e.createElement(i,null,e.createElement(c,{...t,controller:r},e.createElement(a,null,"Select file")),e.createElement(p,{controller:r}))}},o={},l={render:t=>{const r=m();return e.createElement(i,null,e.createElement(c,{...t,controller:r,allowsMultiple:!0},e.createElement(a,null,"Select multiple files")),e.createElement(p,{controller:r}))}},n={render:t=>{const r=m();return e.createElement(i,null,e.createElement(c,{...t,controller:r,acceptedFileTypes:["image/png","image/jpeg"]},e.createElement(a,null,"Select image")),e.createElement(p,{controller:r}))}};var s,u,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,S,F;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => {
    const controller = useFileController();
    return <Section>
        <FileTrigger {...props} controller={controller} allowsMultiple>
          <Button>Select multiple files</Button>
        </FileTrigger>
        <SelectedFiles controller={controller} />
      </Section>;
  }
}`,...(F=(S=l.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var f,E,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: props => {
    const controller = useFileController();
    return <Section>
        <FileTrigger {...props} controller={controller} acceptedFileTypes={["image/png", "image/jpeg"]}>
          <Button>Select image</Button>
        </FileTrigger>
        <SelectedFiles controller={controller} />
      </Section>;
  }
}`,...(T=(E=n.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const ne=["Default","AllowsMultiple","AcceptedFileTypes"];export{n as AcceptedFileTypes,l as AllowsMultiple,o as Default,ne as __namedExportsOrder,le as default};
