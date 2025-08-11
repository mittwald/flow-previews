import{j as r,R}from"./iframe-Cvd7_oGo.js";import{P as i,a as x}from"./Popover-B4_hLkvX.js";import{B as h}from"./Button-sQLGDwHF.js";import{u as P}from"./DialogTriggerView-BfIhiSrv.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CjZ8S_R8.js";import"./mergeRefs-CjEz_01H.js";import"./index-DRhNAo74.js";import"./Dialog-B6nmokeD.js";import"./Button-DH0dq0mD.js";import"./utils-DLoLmG8U.js";import"./ProgressBar-Cckw_t5H.js";import"./Label-CEN2LQcE.js";import"./Hidden-DIqvoFI_.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C20I_MYv.js";import"./context-CPCW_rIy.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-dFXSg5ro.js";import"./useFocus-mBCJQH3P.js";import"./useFocusRing-BORhh_J0.js";import"./useFocusable-ow-zpXhZ.js";import"./RSPContexts-BNHCum3R.js";import"./OverlayArrow-CZl6Sdtq.js";import"./useControlledState-BRJHAPjA.js";import"./Collection-BUlFfF8c.js";import"./CollectionBuilder-odsoNS1P.js";import"./Separator-UXxAVoEs.js";import"./Text-K3zhr9uI.js";import"./Group-Dp7absvN.js";import"./SearchField-DmWHOfIU.js";import"./FieldError-BOfQUrOF.js";import"./Form-dIwvv5i0.js";import"./useLocalizedStringFormatter-BeSMCKuR.js";import"./useTextField-DuBMDIMm.js";import"./useFormReset-TshWv7lU.js";import"./TextField-DNfwYwAs.js";import"./useEvent-CHUYW4wm.js";import"./SelectionManager-C8UQ25IV.js";import"./useCollator-Z2E5mfuy.js";import"./FocusScope-_f1yOmDv.js";import"./VisuallyHidden-ZBger3GJ.js";import"./IconWarning-x_Sg-cyk.js";import"./Text-hU5scIVG.js";import"./browser-Dthgcr78.js";import"./EmulatedBoldText-DDsUBT92.js";import"./LoadingSpinner-CO56yyEM.js";import"./context-BKPp0JFq.js";import"./useStatic-JoVb8Rwt.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Rr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,Rr as __namedExportsOrder,hr as default};
