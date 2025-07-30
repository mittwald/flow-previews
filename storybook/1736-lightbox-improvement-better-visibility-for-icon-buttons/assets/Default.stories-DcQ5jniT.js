import{j as r,R}from"./iframe-5e2kPeup.js";import{P as i,a as x}from"./Popover-D55kjhkB.js";import{B as h}from"./Button-BSAdG0Rb.js";import{u as P}from"./DialogTriggerView-BuVkX4hm.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DEH0t7hl.js";import"./mergeRefs-uY3blBsM.js";import"./index-lLG5KW4n.js";import"./Dialog-BrwhBbGd.js";import"./Button-DovRDHW7.js";import"./utils-Bj-e-2L9.js";import"./ProgressBar-Cw08Slz6.js";import"./Label-68vOnyUK.js";import"./Hidden-DMXZYlYz.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-uzLes6Tz.js";import"./context-BlWBKAs5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CrwMQoq0.js";import"./useFocus-CgJ_pcIH.js";import"./useFocusRing-Xasmxdld.js";import"./useFocusable-Dvdn958o.js";import"./RSPContexts-DWx74BAe.js";import"./OverlayArrow-GmN5SuYH.js";import"./useControlledState-CITgxuHh.js";import"./Collection-AOfdJwwW.js";import"./CollectionBuilder-BEe1h0VT.js";import"./Separator-C6iA2-Vt.js";import"./Text-DiRiFDT_.js";import"./Group-CcUvI-aQ.js";import"./SearchField-BRz9qbLc.js";import"./FieldError-CADLGuZ8.js";import"./Form-Dy9v5K9J.js";import"./useLocalizedStringFormatter-BSu4az1l.js";import"./useTextField-B1rPS-0t.js";import"./useFormReset-SVEOBZG_.js";import"./TextField-bzeDf3ll.js";import"./useEvent-WpBbrSIs.js";import"./SelectionManager-C5ZwUPgy.js";import"./useCollator-BVV2o25k.js";import"./FocusScope-BoeQH_qo.js";import"./VisuallyHidden-DW4vMZrD.js";import"./IconWarning-CAYwnCqi.js";import"./Text-CEKkIKYs.js";import"./browser-D35eJ3ID.js";import"./EmulatedBoldText-DjgxRs5N.js";import"./LoadingSpinner-D5xWaFe2.js";import"./context-B0hGlOln.js";import"./useStatic-8VbMuKEU.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
