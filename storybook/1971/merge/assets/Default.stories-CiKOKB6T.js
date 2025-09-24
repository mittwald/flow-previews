import{j as r,R}from"./iframe-CIFTXvjr.js";import{P as i,a as x}from"./Popover-D3VR88Of.js";import{B as h}from"./Button-mCzyv81-.js";import{u as P}from"./DialogTriggerView-DF7dHF7c.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D8FrEhfs.js";import"./mergeRefs-DjWFnZ8i.js";import"./index-Dlo5KsFa.js";import"./ClearPropsContextView-D1vlL0dH.js";import"./useFocus-D52c6dYL.js";import"./ProgressBar-CDKMY4TF.js";import"./utils-B5Zvs6iw.js";import"./Label-TO4TYfDU.js";import"./Hidden-e3oWxUP9.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cf99fLdV.js";import"./context-CJ6VsYI4.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-D08Ut7L5.js";import"./IconWarning-DOS6fKaS.js";import"./Text-B8fPWk55.js";import"./browser-DnisE1zj.js";import"./EmulatedBoldText-DkBtsyA4.js";import"./Text-BPQdMqSt.js";import"./LoadingSpinner-DoTPzDls.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D9xMhbzt.js";import"./Button-4h-pZrvY.js";import"./usePress-8HeaTLIH.js";import"./useFocusRing-aMk3Od29.js";import"./useFocusable-CisfjoMT.js";import"./context-u0ncZylp.js";import"./useStatic-DkYuQJEv.js";import"./RSPContexts-BLper1Pa.js";import"./FocusScope-CdIx8Nbp.js";import"./useCollator-BEuuda2G.js";import"./VisuallyHidden-DUQ-4ejS.js";import"./Collection-B0Ce4Su5.js";import"./CollectionBuilder-DJxxsJVb.js";import"./Separator-DlHAiOK1.js";import"./Group-Hjqv-RBg.js";import"./SearchField-CS1y3jZ7.js";import"./FieldError-CLAhwXWc.js";import"./Form-OgeH3cHd.js";import"./useTextField-B5q8s_6j.js";import"./useFormReset-Bo2I_rci.js";import"./TextField-DRuiN1lA.js";import"./useEvent-Kc6oznrN.js";import"./SelectionManager-B7qXDdFd.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
