import{j as r,R}from"./iframe-D6sRUaJR.js";import{P as i,a as x}from"./Popover-Cvi4ougU.js";import{B as h}from"./Button-BCWx4ySg.js";import{u as P}from"./DialogTriggerView-D_IG8I3W.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C-uwmcWe.js";import"./mergeRefs-BZVZ0dhZ.js";import"./index-BUpOoE4F.js";import"./Dialog-DZPDGKPA.js";import"./Button-Bca1GoSv.js";import"./utils-Qm7xLU3y.js";import"./ProgressBar-Bwt4IvIC.js";import"./Label-CQsKsXsC.js";import"./Hidden-DCXhQTtV.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BTkVtPxw.js";import"./context-DolFftfM.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-uE3muS2D.js";import"./useFocus-CTtv6tdW.js";import"./useFocusRing-eR86HLCW.js";import"./useFocusable-BOGY22Am.js";import"./RSPContexts-BRIM2Iem.js";import"./OverlayArrow-Dkw6_o-u.js";import"./useControlledState-D69o91XC.js";import"./Collection-DXulOg_H.js";import"./CollectionBuilder-Qk8YBnFP.js";import"./Separator-DEM_icnQ.js";import"./Text-C9PfWAJQ.js";import"./Group-Bshd2yUf.js";import"./SearchField-Di5tRiho.js";import"./FieldError-SaPVkD34.js";import"./Form-Cgvv5odv.js";import"./useLocalizedStringFormatter-6HxLbkJZ.js";import"./useTextField-Dr42bSM8.js";import"./useFormReset-DcxoBJFg.js";import"./TextField-Bj0PDkEJ.js";import"./useEvent-BymtUDWP.js";import"./SelectionManager-D0QYa18J.js";import"./useCollator-DXk_KV0D.js";import"./FocusScope-B2gr6wNX.js";import"./VisuallyHidden-VL3LzDcs.js";import"./IconWarning-D8wqW4GU.js";import"./Text-CzI-SNLy.js";import"./browser-lItX59Of.js";import"./EmulatedBoldText-_TSizv1d.js";import"./LoadingSpinner-m9O8-gUX.js";import"./context-CqKUxs9o.js";import"./useStatic-D2ZqCWbX.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
