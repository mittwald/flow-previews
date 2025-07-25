import{j as r,R}from"./iframe-BBx9-gCC.js";import{P as i,a as x}from"./Popover-CjCquK7b.js";import{B as h}from"./Button-Ddotms0d.js";import{u as P}from"./DialogTriggerView-D7E3O5i1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DJQMRhIz.js";import"./mergeRefs-CjwhAStn.js";import"./index-CiDUljAk.js";import"./Dialog-H4IcaOME.js";import"./Button-L3SI-iJl.js";import"./utils-SrU--Gh3.js";import"./ProgressBar-CJ4YAGIN.js";import"./Label-CVor_bqX.js";import"./Hidden-BTXZmZLy.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-CF_pOETX.js";import"./context-Ck7bCMhf.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dpgdsh2n.js";import"./useFocus-BXsHwCAW.js";import"./useFocusRing-D6klBOWk.js";import"./useFocusable-D4Fl883K.js";import"./RSPContexts-JH7zjLDh.js";import"./OverlayArrow-B_GGjq9s.js";import"./useControlledState-DddH35UQ.js";import"./Collection-cumDjP4P.js";import"./CollectionBuilder-B9aud2Z5.js";import"./Separator-BwGnbFHF.js";import"./Text--Ew1YFd1.js";import"./Input-BKE4e8rI.js";import"./SearchField-CFDyyBZS.js";import"./FieldError-CQ-c_qp9.js";import"./Form-DewizsXc.js";import"./Group-BE3jiUC2.js";import"./useLocalizedStringFormatter-BhZ19fOj.js";import"./useTextField-Sw__XDSo.js";import"./useFormReset-dy85Q4T2.js";import"./TextField-D1wRIDn_.js";import"./SelectionManager-Jj460orM.js";import"./useEvent-CbTJhmHg.js";import"./useCollator-CBTsDb_F.js";import"./FocusScope-CSSHoYlT.js";import"./VisuallyHidden-DCQ3C4tW.js";import"./IconWarning-47GPuUwW.js";import"./Text-BRZqhCt6.js";import"./browser-Bo5IRxBw.js";import"./EmulatedBoldText-BvDF2M3d.js";import"./LoadingSpinner-AZclZqAu.js";import"./context-Dom9sQ0K.js";import"./useStatic-BS_If2Fg.js";const Rr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
