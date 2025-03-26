import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as i,a as R}from"./Popover-DCVTWAuz.js";import{R as x}from"./index-BKyFwriW.js";import{B as h}from"./Button-y_xQsClG.js";import{u as P}from"./OverlayTrigger-wtZR0Cj_.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmJbWEDO.js";import"./index-C6uLyQP3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DQw2Bw4b.js";import"./index-C5hMr7Vs.js";import"./DialogTriggerView-BBAvKYPc.js";import"./Dialog-6iLCfCA_.js";import"./Button-DL5r24IA.js";import"./utils-DDUQIigj.js";import"./ProgressBar-C4A5wsjg.js";import"./Label-i7acEou4.js";import"./Hidden-6cPdUftz.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DAPKuvGY.js";import"./useLocalizedStringFormatter-B9DCAH-T.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CK926LJU.js";import"./useFocus-DNP1_3BC.js";import"./useFocusRing-BfJpuzZz.js";import"./useFocusable-DFPniEHk.js";import"./RSPContexts-BTRAHvSh.js";import"./OverlayArrow-BL-OvAHI.js";import"./useControlledState-Cu5tmcxR.js";import"./Collection-CQq09VNS.js";import"./CollectionBuilder-R_fDQQgL.js";import"./Separator-BUgKPSk1.js";import"./Text-yNWxiVQR.js";import"./SelectionManager-B8z5pZap.js";import"./useEvent-C5s-DRkH.js";import"./useCollator-BnjbLxAL.js";import"./FocusScope-DxW0A0A2.js";import"./VisuallyHidden-Dk-02uN1.js";import"./IconApp-DtTJ2r0A.js";import"./IconWarning-BwSZGWRf.js";import"./Wrap-DQq6jo70.js";import"./Text-BoP-iRG5.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-By-RYQJw.js";import"./LoadingSpinner-DbRP1bJP.js";import"./context-DBHSqzRK.js";import"./useStatic--5L2q-n6.js";const fr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=x.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const vr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,vr as __namedExportsOrder,fr as default};
