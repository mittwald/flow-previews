import{j as r,R}from"./iframe-_AHHYLe8.js";import{P as i,a as x}from"./Popover-D4dqet6R.js";import{B as h}from"./Button-DpBb7dXP.js";import{u as P}from"./DialogTriggerView-v_JnIB7x.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CHGKeBFG.js";import"./mergeRefs-1cSVj6Oa.js";import"./index-Bz79hXTU.js";import"./Dialog-CHTGTlq0.js";import"./Button-C5j2D-85.js";import"./utils-q-IwrKfZ.js";import"./ProgressBar-Djy6cDSn.js";import"./Label-tq8rl8zN.js";import"./Hidden-BCt71K2Z.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-lAnn0GIu.js";import"./context-CUyryTbq.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DSHe1cmn.js";import"./useFocus-Cc4rXbR6.js";import"./useFocusRing-BzxKD0KU.js";import"./useFocusable-DpxzpP9y.js";import"./RSPContexts-D87DkYMD.js";import"./OverlayArrow-QRBdoqIe.js";import"./useControlledState-Ck4hxHjX.js";import"./Collection-CCW92VXm.js";import"./CollectionBuilder-ZwH2Lf2j.js";import"./Separator-Dnk3E0kw.js";import"./Text-Bojy_plc.js";import"./Group-DIV0b_ks.js";import"./SearchField-BDX95NUI.js";import"./FieldError-7uZDpm9k.js";import"./Form-1aZb-GsH.js";import"./useLocalizedStringFormatter-Ci9IX6ka.js";import"./useTextField-DtgE5gD9.js";import"./useFormReset-BXtaLb8e.js";import"./TextField-D1FfviRQ.js";import"./useEvent-Chot4vqs.js";import"./SelectionManager-BurdSYdt.js";import"./useCollator-motRCGH3.js";import"./FocusScope-s_Xca6uO.js";import"./VisuallyHidden-WDbGyUVH.js";import"./IconWarning-CK_fmTss.js";import"./Text-Cmtv_jKA.js";import"./browser-BP_Bp9A3.js";import"./EmulatedBoldText-DqfdeQcp.js";import"./LoadingSpinner-DRmJrHkB.js";import"./context-CggRfmhL.js";import"./useStatic-D0qKbiKB.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
