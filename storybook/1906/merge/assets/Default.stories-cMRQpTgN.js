import{j as r,R}from"./iframe-D8FrJ-CZ.js";import{P as i,a as x}from"./Popover-D_AUH0xc.js";import{B as h}from"./Button-Cq__NSNu.js";import{u as P}from"./DialogTriggerView-C-13EtHB.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-EPA_0_Bo.js";import"./mergeRefs-utDOSA_8.js";import"./index-DO8-cvBB.js";import"./Dialog-D2aL6iTu.js";import"./Button-DVdJDgqt.js";import"./utils-DLru3qrQ.js";import"./ProgressBar-DaMaURS1.js";import"./Label-CJkrjybq.js";import"./Hidden-DLVb5zGs.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DAKRqT8J.js";import"./context-Dz2Qbbtu.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-mcSHbC1W.js";import"./useFocus-_KFCgimG.js";import"./useFocusRing-Dt7u0yDa.js";import"./useFocusable-BXg3nN8-.js";import"./RSPContexts-DvajV3uw.js";import"./OverlayArrow-DjgfcPnj.js";import"./useControlledState-Bhtz6D6k.js";import"./Collection-BWh0MO5P.js";import"./CollectionBuilder-D7rkl-fZ.js";import"./Separator-Dp29JyT-.js";import"./Text-CjVOmJR3.js";import"./Group-CHBQvVuc.js";import"./SearchField-BVNSbwCA.js";import"./FieldError-DUyd9_2U.js";import"./Form-DsyloFzD.js";import"./useLocalizedStringFormatter-BJgvBQQo.js";import"./useTextField-mqiYsdTK.js";import"./useFormReset-BMZp-ADn.js";import"./TextField-DhjdGSid.js";import"./useEvent-TvzQ57Lp.js";import"./SelectionManager-BHHDa5mG.js";import"./useCollator-D1vKzkof.js";import"./FocusScope-BCf9GP_l.js";import"./VisuallyHidden-HCxlUedB.js";import"./IconWarning-C11FXGxU.js";import"./Text-CijQgHlf.js";import"./browser-Df0WU9AE.js";import"./EmulatedBoldText-CzquwV9M.js";import"./LoadingSpinner-Cw9GFgG6.js";import"./context-DfaRjifq.js";import"./useStatic-3eGZwKWm.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
