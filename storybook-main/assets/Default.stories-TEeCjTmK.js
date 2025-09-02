import{j as r,R}from"./iframe-cK4MHKim.js";import{P as i,a as x}from"./Popover-D8GRdqS8.js";import{B as h}from"./Button-tRyoiE64.js";import{u as P}from"./DialogTriggerView-Bd9C4EBH.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-OWbcmO7Y.js";import"./mergeRefs-CbouoeLx.js";import"./index-C0FnYpIX.js";import"./Dialog-BMNDou9L.js";import"./Button-j0J6t_ue.js";import"./utils-DNizpOE3.js";import"./ProgressBar-D0PLg1H8.js";import"./Label-0KSLZDSS.js";import"./Hidden-DPS3aF7x.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CcxHXXo7.js";import"./context-BROjSY2y.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DxZYFGgJ.js";import"./useFocus-PfRPzZF9.js";import"./useFocusRing-CfOQ7Cy2.js";import"./useFocusable-D26CMdgI.js";import"./RSPContexts-DhgL2OGs.js";import"./OverlayArrow-Dw1wGyeW.js";import"./useControlledState-BIGan-OB.js";import"./Collection-DDFYkT_e.js";import"./CollectionBuilder-DWibNHzH.js";import"./Separator-C_60SsjZ.js";import"./Text-CdSAgC2T.js";import"./Group-zgF9gzKV.js";import"./SearchField-BZKVt08V.js";import"./FieldError-DXq6AbFm.js";import"./Form-Bkh8JfAF.js";import"./useLocalizedStringFormatter-yrbwHSL5.js";import"./useTextField-Bd94TOwc.js";import"./useFormReset-8LX1mmkH.js";import"./TextField-B4j1tk_1.js";import"./useEvent-BXCZp1cQ.js";import"./SelectionManager-D8Yp4yhw.js";import"./useCollator-CxGNCHfH.js";import"./FocusScope-D00_KgQG.js";import"./VisuallyHidden-Bp326u91.js";import"./IconWarning-DC4_CpRf.js";import"./Text-FUpRzF42.js";import"./browser-DLRwst_8.js";import"./EmulatedBoldText-DX7VDiw5.js";import"./LoadingSpinner-Be0PLLzY.js";import"./context-BAX0bMt2.js";import"./useStatic-CeVBJjTX.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
