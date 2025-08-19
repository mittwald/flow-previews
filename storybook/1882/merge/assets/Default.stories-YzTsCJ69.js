import{j as r,R}from"./iframe-CqOqoVaP.js";import{P as i,a as x}from"./Popover-yINnB5RN.js";import{B as h}from"./Button-CLlHTQEG.js";import{u as P}from"./DialogTriggerView-DwJ6gTTr.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-1TKyLHhH.js";import"./mergeRefs-CelTEQRC.js";import"./index-OFJ9qM8_.js";import"./Dialog-C3VX0NXb.js";import"./Button-C385LXs-.js";import"./utils-CLjii6jw.js";import"./ProgressBar-C7nzlf9n.js";import"./Label-DmkwH-X_.js";import"./Hidden-G9XKC0s_.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BbxdwBsw.js";import"./context-V257UCTc.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-bNRByjMC.js";import"./useFocus-B9OFNFcs.js";import"./useFocusRing-BUAA1D8N.js";import"./useFocusable-BW0s8v46.js";import"./RSPContexts-D4Iw314Z.js";import"./OverlayArrow-Demj6cv0.js";import"./useControlledState-BdCCPWsc.js";import"./Collection-PuGMBXVn.js";import"./CollectionBuilder-q1IRq8KF.js";import"./Separator-5LsX3nzm.js";import"./Text-cqx9MXzt.js";import"./Group-Cl8UGCCk.js";import"./SearchField-AywMrJlM.js";import"./FieldError-Db8jl934.js";import"./Form-DfmQoqyq.js";import"./useLocalizedStringFormatter-Cmj_M29U.js";import"./useTextField-DA4mJlaO.js";import"./useFormReset-DvIrrZd5.js";import"./TextField-DbkzlANK.js";import"./useEvent-HRbQaI7K.js";import"./SelectionManager-DbaPsgiJ.js";import"./useCollator-C8Ow2U1A.js";import"./FocusScope-C_8IMyFN.js";import"./VisuallyHidden-BthzWCih.js";import"./IconWarning-Bl-oEACJ.js";import"./Text-B3-X_MJa.js";import"./browser-5vSgihvA.js";import"./EmulatedBoldText-CUXBtHhG.js";import"./LoadingSpinner-ABbum_Xg.js";import"./context-DEmZbP6Z.js";import"./useStatic-BhcqT1RN.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
