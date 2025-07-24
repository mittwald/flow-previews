import{j as r,R}from"./iframe-B14Hztna.js";import{P as i,a as x}from"./Popover-04r-SnMx.js";import{B as h}from"./Button-CgtdFPzc.js";import{u as P}from"./DialogTriggerView-jAz3y-z7.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-uadcFCMp.js";import"./mergeRefs-Bv4UzjNV.js";import"./index-BavqP8B-.js";import"./Dialog-BFvasG0n.js";import"./Button-C-dpYs0v.js";import"./utils-DoVwnhJ7.js";import"./ProgressBar-DTeLqJx_.js";import"./Label-Dj1DBquH.js";import"./Hidden-DEGhv2S1.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BQ9idzkA.js";import"./context-ClRpg4Pi.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CIDHtETH.js";import"./useFocus-DUtc_xDc.js";import"./useFocusRing-BniRYtyP.js";import"./useFocusable-qJIKezDE.js";import"./RSPContexts-Bfi0I49R.js";import"./OverlayArrow-DZfk_ErB.js";import"./useControlledState-ByF29kyY.js";import"./Collection-fH4Kmtgq.js";import"./CollectionBuilder-bLuJ-4e5.js";import"./Separator-D2GbxrzK.js";import"./Text-CpIc-G8R.js";import"./Input-DpcS1CTS.js";import"./SearchField-BKuT-taP.js";import"./FieldError-Bx0_OVZy.js";import"./Form-Dxjc7g8l.js";import"./Group-CBVKEx7-.js";import"./useLocalizedStringFormatter-Dv2L7e6J.js";import"./useTextField-BRjgXeuB.js";import"./useFormReset-C7VrIa_J.js";import"./TextField-CPtvewAJ.js";import"./SelectionManager-DXvn-F5v.js";import"./useEvent-CXj5GaK9.js";import"./useCollator-BOITc0eH.js";import"./FocusScope-GGet2N6d.js";import"./VisuallyHidden-B90-554O.js";import"./IconWarning-EXdx-O5E.js";import"./Text-CvN8mc0t.js";import"./browser-DQtsHFqq.js";import"./EmulatedBoldText-CgkGARPI.js";import"./LoadingSpinner-BUgI2O_m.js";import"./context-BfdzKOWn.js";import"./useStatic-CMMnV-8N.js";const Rr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
