import{j as r,R}from"./iframe-B7LyKmrW.js";import{P as i,a as x}from"./Popover-DmAKuv-J.js";import{B as h}from"./Button-Ds6YhjxA.js";import{u as P}from"./DialogTriggerView-BgzqeZLF.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHFGowBc.js";import"./mergeRefs-DMoFTSBP.js";import"./index-DRIChXb_.js";import"./Dialog-CbKwT-DG.js";import"./Button-CnMvl_pE.js";import"./utils-C7pz24DF.js";import"./ProgressBar-D1vTXEVZ.js";import"./Label-DSgSzVuQ.js";import"./Hidden-DplB-rWb.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-B_uxGEkZ.js";import"./context-Bp1vmlVu.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BUy08s3B.js";import"./useFocus-S4LYa827.js";import"./useFocusRing-DxiExAh_.js";import"./useFocusable-UsZUFP92.js";import"./RSPContexts-mttXOxPq.js";import"./OverlayArrow-BOgzAv2q.js";import"./useControlledState-QzhULpBn.js";import"./Collection-BACulWrY.js";import"./CollectionBuilder-1KlzsV_3.js";import"./Separator-CilFnH5A.js";import"./Text-54Sx_nhu.js";import"./Input-bFGBOkXz.js";import"./SearchField-VyG8Gz3p.js";import"./FieldError-52nE40UF.js";import"./Form-DFMSXVCD.js";import"./Group-BkSjpW6j.js";import"./useLocalizedStringFormatter-BSmgV4Fs.js";import"./useTextField-DpE7FPF6.js";import"./useFormReset-Cbj20zLi.js";import"./TextField-x_YXs-HX.js";import"./SelectionManager-CkybOUE-.js";import"./useEvent-BgU4gnPl.js";import"./useCollator-B3crgtAr.js";import"./FocusScope-cqMoFFNL.js";import"./VisuallyHidden-BpBET9_R.js";import"./IconWarning-B2C8hMVq.js";import"./Text-DUoUD__5.js";import"./browser-YA20U_IT.js";import"./EmulatedBoldText-CH7hguL6.js";import"./LoadingSpinner-D8va-Paf.js";import"./context-Bn8MzZjp.js";import"./useStatic-ae9ekjn3.js";const Rr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
