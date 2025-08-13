import{j as r,R}from"./iframe-BwuZESNl.js";import{P as i,a as x}from"./Popover-CDL__2cK.js";import{B as h}from"./Button-C-_knNCH.js";import{u as P}from"./DialogTriggerView-CDdW0IZG.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BusDQUVZ.js";import"./mergeRefs-Dzw8-qaC.js";import"./index-BsghocK6.js";import"./Dialog-C5G24GfN.js";import"./Button-DTlvpG2l.js";import"./utils-DwFj3dGQ.js";import"./ProgressBar-DWIeEB0n.js";import"./Label-Dt17YKxE.js";import"./Hidden-B4snL9ZX.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cozlv_-X.js";import"./context-Bl9z0-Ez.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CLzpZvIT.js";import"./useFocus-Co7EWAzt.js";import"./useFocusRing-CS-U_0il.js";import"./useFocusable-CJY6BQME.js";import"./RSPContexts-B82SnKIX.js";import"./OverlayArrow-Ct_bakog.js";import"./useControlledState-DDCrWfj9.js";import"./Collection-BUR6CQUz.js";import"./CollectionBuilder-MbnL1jCD.js";import"./Separator-x7E6VMeq.js";import"./Text-BwbgPKEG.js";import"./Group-DZ7V6HJS.js";import"./SearchField-Cldn6FRa.js";import"./FieldError-DYnYqKIj.js";import"./Form-DMd5Q7rx.js";import"./useLocalizedStringFormatter-CzmxkLVc.js";import"./useTextField-DPMhYcJW.js";import"./useFormReset-BKxc7BR_.js";import"./TextField-CAE6yhWA.js";import"./useEvent-D4npkP0f.js";import"./SelectionManager-BpegylfK.js";import"./useCollator-D-5CGuzZ.js";import"./FocusScope-CjFTNvkQ.js";import"./VisuallyHidden-H0mCENoD.js";import"./IconWarning-WAZUP-Ct.js";import"./Text-DpTMi7Hm.js";import"./browser-BKpgmdP8.js";import"./EmulatedBoldText-CFTp_0vf.js";import"./LoadingSpinner-Cad6y9w3.js";import"./context-X7aiLuFr.js";import"./useStatic-B6vMCsEx.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
