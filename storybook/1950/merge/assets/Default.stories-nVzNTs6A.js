import{j as r,R}from"./iframe-DT0a5lsj.js";import{P as i,a as x}from"./Popover-BGe9X61A.js";import{B as h}from"./Button-BnKE_3tA.js";import{u as P}from"./DialogTriggerView-Db6UDAae.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BRdZcbMx.js";import"./mergeRefs-DYr4rTQb.js";import"./index-CAMy4aIT.js";import"./Dialog-BHWnDcSc.js";import"./Button-BNdmwyxy.js";import"./utils-BDe-fZfW.js";import"./ProgressBar-ByaJujBA.js";import"./Label-RcZ5RumP.js";import"./Hidden-CjrJVhTe.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BMvlVo7d.js";import"./context-DtNWionw.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-wu8eZQGI.js";import"./useFocus-BPGD2VLY.js";import"./useFocusRing-_XF1QxIj.js";import"./useFocusable-DyoB_hOm.js";import"./RSPContexts-acmSHJ3A.js";import"./OverlayArrow-HNgDPPr3.js";import"./useControlledState-C-X9sbbL.js";import"./Collection-Dyt6IE1A.js";import"./CollectionBuilder-D0yiIIyP.js";import"./Separator-AkxPmIRq.js";import"./Text-C8QSq9Z3.js";import"./Group-MdCfc2bT.js";import"./SearchField-Doktui3O.js";import"./FieldError-Ccza_qSZ.js";import"./Form-BqKRbvb9.js";import"./useLocalizedStringFormatter-DjQQHvIW.js";import"./useTextField-BB3dLsw5.js";import"./useFormReset-cUnmQGQz.js";import"./TextField-Cx5OsYq1.js";import"./useEvent-DVcRtgtL.js";import"./SelectionManager-JcMzUkMf.js";import"./useCollator-Zc_ZemNk.js";import"./FocusScope-BOmeY0Fa.js";import"./VisuallyHidden-DDMzvk-a.js";import"./IconWarning-CP_9phWh.js";import"./Text-CWVnGydc.js";import"./browser-C5BzL4Ah.js";import"./EmulatedBoldText-Clo2YvSu.js";import"./LoadingSpinner-8cDNCbSg.js";import"./context-DJTNNuyW.js";import"./useStatic-WTXFIrX_.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
