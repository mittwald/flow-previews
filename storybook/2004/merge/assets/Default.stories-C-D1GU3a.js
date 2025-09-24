import{j as r,R}from"./iframe-BN_dfUe_.js";import{P as i,a as x}from"./Popover-DLER5_Cb.js";import{B as h}from"./Button-D-C47sqm.js";import{u as P}from"./DialogTriggerView-nA9ebbIS.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BdWjLDJi.js";import"./mergeRefs-upl_BBo9.js";import"./index-C8Ff-wAx.js";import"./ClearPropsContextView-DP5aaG59.js";import"./useFocus-BPnQl8Vs.js";import"./ProgressBar-jBCVtiFi.js";import"./utils-B0sx3Kyr.js";import"./Label-DGLQk8oX.js";import"./Hidden-DymlCD5P.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BVHoyGPi.js";import"./context-dredv6-K.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B3OMKOuD.js";import"./IconWarning-DNOLg4j3.js";import"./Text-DzaqmzRj.js";import"./browser-BV7EqxDV.js";import"./EmulatedBoldText-D3DsYnee.js";import"./Text-Bh7wF6OD.js";import"./LoadingSpinner-BajA46At.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CxEOdw80.js";import"./Button-Df2sUXty.js";import"./usePress-D00Qk3ID.js";import"./useFocusRing-BbyZkAky.js";import"./useFocusable-CjxkNo9x.js";import"./context-DRf69qys.js";import"./useStatic-wsYo6cwd.js";import"./RSPContexts-D2tN5T2G.js";import"./FocusScope-DSvKVwGk.js";import"./useCollator-D4KmbgCM.js";import"./VisuallyHidden-Cv7STolA.js";import"./Collection-BYc3dnT8.js";import"./CollectionBuilder-Eq-dAbBR.js";import"./Separator-DJTsPnLp.js";import"./Group-BVQ5MOmY.js";import"./SearchField-BBPaTZKc.js";import"./FieldError-CIdDbIOg.js";import"./Form-BI9DTP98.js";import"./useTextField-BYi7xCqf.js";import"./useFormReset-DQe0b_9O.js";import"./TextField-BdrHFS2A.js";import"./useEvent-BzG6iyzN.js";import"./SelectionManager-Bc25mfga.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
