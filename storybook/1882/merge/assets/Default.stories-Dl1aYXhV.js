import{j as r,R}from"./iframe-B5f77The.js";import{P as i,a as x}from"./Popover-U6TIjOHH.js";import{B as h}from"./Button-C6w7hggk.js";import{u as P}from"./DialogTriggerView-CpbUus_v.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cx_kWuOM.js";import"./mergeRefs-Yh0OJBs6.js";import"./index-CbjhMHv1.js";import"./Dialog-BrLEju1s.js";import"./Button-BJ8WzA2D.js";import"./utils-DeVL3yHt.js";import"./ProgressBar-roFwkZNY.js";import"./Label-BtB0U_ml.js";import"./Hidden-DpLdfkk6.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BZo659VM.js";import"./context-CDDYAalq.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C1oGQ4tq.js";import"./useFocus-CpnAUhj6.js";import"./useFocusRing-Dpk-O9NQ.js";import"./useFocusable-DVnwojtz.js";import"./RSPContexts-B32A1VhO.js";import"./OverlayArrow-DxI9FzZ3.js";import"./useControlledState-BsCYAcFS.js";import"./Collection-Dq30mKZW.js";import"./CollectionBuilder-IT3s11YO.js";import"./Separator-CP2Hv3YB.js";import"./Text-CRBsFpfB.js";import"./Group-cw_ccGJA.js";import"./SearchField-C4CWzvZC.js";import"./FieldError-CmSoGLTN.js";import"./Form-COFPxk6e.js";import"./useLocalizedStringFormatter-DLcmNs79.js";import"./useTextField-DOFOnMON.js";import"./useFormReset-CoVNXXZK.js";import"./TextField-DLnVqMvq.js";import"./useEvent-Bi5phJIq.js";import"./SelectionManager-CT47WU_1.js";import"./useCollator-CMx4eqOS.js";import"./FocusScope-DJcQajcM.js";import"./VisuallyHidden-BRRdMKGS.js";import"./IconWarning-ljKjKfGj.js";import"./Text-C70_tpAy.js";import"./browser-DNIKTkzv.js";import"./EmulatedBoldText-D73guLBi.js";import"./LoadingSpinner-CEnOuMOV.js";import"./context-CKo78_m4.js";import"./useStatic-L57Eul26.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
