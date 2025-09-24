import{j as r,R}from"./iframe-D1JKOwdq.js";import{P as i,a as x}from"./Popover-CJsB8pDc.js";import{B as h}from"./Button-DG818FIU.js";import{u as P}from"./DialogTriggerView-BgJsodt7.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CKqNcsdJ.js";import"./mergeRefs-CYbnUoq6.js";import"./index-DOZ5qla4.js";import"./ClearPropsContextView-Be28GGXB.js";import"./useFocus-CYEgIwnz.js";import"./ProgressBar-4Tm_fzI6.js";import"./utils-BVsEXjGQ.js";import"./Label-CseS0v8E.js";import"./Hidden-Dr2BftiN.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Uyswehsd.js";import"./context-Bzqo5E_q.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CYjuzTtD.js";import"./IconWarning-DZISCuC-.js";import"./Text-Cv35yGBC.js";import"./browser-BI97FZcU.js";import"./EmulatedBoldText-d9mRwZf5.js";import"./Text-BIeeVT6X.js";import"./LoadingSpinner-D-A5UE94.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CIU1pqtk.js";import"./Button-DG6zvYi3.js";import"./usePress-CwJM0Ele.js";import"./useFocusRing-8cxgDEwk.js";import"./useFocusable-wd6aWIaf.js";import"./context-Cusklrj0.js";import"./useStatic-D26xSXCN.js";import"./RSPContexts-CoUOlwWC.js";import"./FocusScope-B4gQukNN.js";import"./useCollator-sKXsPUo5.js";import"./VisuallyHidden-DUuSn0Sw.js";import"./Collection-Zsa7miPe.js";import"./CollectionBuilder-B5sifEeq.js";import"./Separator-BMEhDY-1.js";import"./Group-B-JYoqhF.js";import"./SearchField-BZI0oCti.js";import"./FieldError-BZfRYFbv.js";import"./Form-CftHRla7.js";import"./useTextField-xidCibEs.js";import"./useFormReset-CG85pNSA.js";import"./TextField-DfMFf88Q.js";import"./useEvent-DQOxTklk.js";import"./SelectionManager-DFpd0p6B.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,f,v;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController("Popover");
    const triggerRef = React.useRef(null);
    return <>
        <Button ref={triggerRef} onPress={controller.open}>
          Trigger popover
        </Button>
        <Popover triggerRef={triggerRef} {...props} controller={controller}>
          I am a popover.
        </Popover>
      </>;
  }
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const hr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,hr as __namedExportsOrder,vr as default};
