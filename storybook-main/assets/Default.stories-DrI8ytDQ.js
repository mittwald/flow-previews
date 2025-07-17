import{j as r,R}from"./iframe-ioB74BFE.js";import{P as i,a as x}from"./Popover-rrnYjHMt.js";import{B as h}from"./Button-MpugPYzI.js";import{u as P}from"./DialogTriggerView-CvOFscXk.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DIQ-3Z-W.js";import"./mergeRefs-Bc9_QzvA.js";import"./index-DxUCKuoS.js";import"./Dialog-CftsoPvf.js";import"./Button-C3ElHjZf.js";import"./utils-B4cCkl7w.js";import"./ProgressBar-6K_Q5ytM.js";import"./Label-Ci4HPtMl.js";import"./Hidden-BUUKH5FE.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-CB1mDCyy.js";import"./context-BPL8pm8m.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D3I07Rsr.js";import"./useFocus-Cm5D2sPa.js";import"./useFocusRing-CU7EmQP7.js";import"./useFocusable-2c5mTAR9.js";import"./RSPContexts-CvEKqGkH.js";import"./OverlayArrow-BGE95OS1.js";import"./useControlledState-DPunIX8S.js";import"./Collection-DiJArqpe.js";import"./CollectionBuilder-BSEB-cLG.js";import"./Separator-RUGTe1Gb.js";import"./Text-CCXZaIsU.js";import"./Input-Bztt3-Ug.js";import"./SearchField-D30c1-ND.js";import"./FieldError-Z5j2ND32.js";import"./Form-u9b0IMfB.js";import"./Group-DEqMnOwE.js";import"./useLocalizedStringFormatter-aWkOtTsz.js";import"./useTextField-udwT8Fkv.js";import"./useFormReset-Ik_MynpH.js";import"./TextField-DC2JuRaU.js";import"./SelectionManager-BJVavWLX.js";import"./useEvent-WwaZxlmw.js";import"./useCollator-CLy1qn58.js";import"./FocusScope-Dmal2fI9.js";import"./VisuallyHidden-BOO0yHnw.js";import"./IconWarning-DcmAhB0m.js";import"./Text-BZaQwICB.js";import"./browser-BI2T8H6c.js";import"./EmulatedBoldText-C5-k4pIu.js";import"./LoadingSpinner-DAUxEQn_.js";import"./context-hIhIfxI4.js";import"./useStatic-BxLAdQVw.js";const Rr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const xr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,xr as __namedExportsOrder,Rr as default};
