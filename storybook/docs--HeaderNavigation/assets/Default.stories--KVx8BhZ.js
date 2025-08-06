import{j as r,R}from"./iframe-BrFbgMdZ.js";import{P as i,a as x}from"./Popover-CkzfQVH3.js";import{B as h}from"./Button-DrqjXTlc.js";import{u as P}from"./DialogTriggerView-1Z-HkVsl.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DlKSdUnj.js";import"./mergeRefs-CglpECzs.js";import"./index-CsZHFADM.js";import"./Dialog-CO5NQ1rj.js";import"./Button-dFM767hW.js";import"./utils-uGt6lEHy.js";import"./ProgressBar-CACYrIaY.js";import"./Label-Dtl4zIvG.js";import"./Hidden-UstvKMMQ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BY-hcXqn.js";import"./context-B0-ElNi2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-IpqNhXgC.js";import"./useFocus-D9Wd5vZ-.js";import"./useFocusRing-Dpc6yEcL.js";import"./useFocusable-BzJo03Xl.js";import"./RSPContexts-Dtf8PKxD.js";import"./OverlayArrow-BK6QcEmE.js";import"./useControlledState-n0b34ryi.js";import"./Collection-Djxaz1Ld.js";import"./CollectionBuilder-DxJUJjXq.js";import"./Separator-wEFTp470.js";import"./Text-B3veiim8.js";import"./Group-BgvCwvxg.js";import"./SearchField-BfR4RjBt.js";import"./FieldError-DSdi5gGz.js";import"./Form-DphLKB0O.js";import"./useLocalizedStringFormatter-BeYnnAMh.js";import"./useTextField-Hu8b04JP.js";import"./useFormReset-UpbI-Wf0.js";import"./TextField-Cv2sUUZR.js";import"./useEvent-8VQ1yeDi.js";import"./SelectionManager-BC1RK9KO.js";import"./useCollator-BKa_st1y.js";import"./FocusScope-ksb906db.js";import"./VisuallyHidden-BzneT5H9.js";import"./IconWarning-aBCbZP3e.js";import"./Text-C3YpUANr.js";import"./browser-BeJxvhux.js";import"./EmulatedBoldText-CmWQu6L0.js";import"./LoadingSpinner-3OtgiQa9.js";import"./context-CFd8jkW8.js";import"./useStatic-BFH-Nkbb.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
