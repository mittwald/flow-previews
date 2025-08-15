import{j as r,R}from"./iframe-CHDu_H0e.js";import{P as i,a as x}from"./Popover-Cu5EZYnv.js";import{B as h}from"./Button-Dmc7YjrG.js";import{u as P}from"./DialogTriggerView-CT9wuhNv.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Z6o4UsMH.js";import"./mergeRefs-SbFyzkYd.js";import"./index-DtMG4pjF.js";import"./Dialog-CCYlg5iI.js";import"./Button-Rg6_nSUL.js";import"./utils-DYZAD9ft.js";import"./ProgressBar-C34PP_48.js";import"./Label-LmJ-o8gi.js";import"./Hidden-Crmdv3RK.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-1w2C-Jw1.js";import"./context-Bzaz4S39.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-UC_sG4c4.js";import"./useFocus-C89269kJ.js";import"./useFocusRing-BOwbbtAH.js";import"./useFocusable-vuFpOsuk.js";import"./RSPContexts-CZTMu11O.js";import"./OverlayArrow-BpSuH-di.js";import"./useControlledState-DzyFh4kD.js";import"./Collection-BuIb3AWp.js";import"./CollectionBuilder-CF7zY--7.js";import"./Separator-_126g1b9.js";import"./Text-DpQKzoec.js";import"./Group-DC1YgkeM.js";import"./SearchField-DemnD7Hf.js";import"./FieldError-CKgwUKxI.js";import"./Form-BFPhVCnm.js";import"./useLocalizedStringFormatter-B31V_hT3.js";import"./useTextField-bDvKNILe.js";import"./useFormReset-Ct9qNa2Y.js";import"./TextField-DCfchb8N.js";import"./useEvent-CII2lm4p.js";import"./SelectionManager-C-zRxePL.js";import"./useCollator-P2wX32qN.js";import"./FocusScope-CpdigEHe.js";import"./VisuallyHidden-BP6BNrRi.js";import"./IconWarning-Cf1n4vGG.js";import"./Text-mNtFSOkr.js";import"./browser-mouKiHlp.js";import"./EmulatedBoldText-Bkss-Gur.js";import"./LoadingSpinner-BjRJkl53.js";import"./context-BsLhxCGe.js";import"./useStatic-ByFeMtaE.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
