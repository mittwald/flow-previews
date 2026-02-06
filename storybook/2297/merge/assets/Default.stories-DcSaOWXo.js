import{j as r,R as a}from"./iframe-bYrN4iqU.js";import{P as i}from"./Popover-LLtPuoZ9.js";import{B as n}from"./Button-BXFpqU-p.js";import{P as c}from"./PopoverTrigger-CgoPCSHt.js";import{u as l}from"./useOverlayController-DrRVhmF6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DKWMiQh4.js";import"./index-BecUo0Hm.js";import"./index-ByZhX1CH.js";import"./OverlayContextProvider-CcBeb8cT.js";import"./context-CIgtX0DK.js";import"./useStatic-ByHvTm37.js";import"./Dialog-CxLv1-pk.js";import"./Button-BmdWdjlP.js";import"./utils-B3voqzat.js";import"./ProgressBar-Df7WbfFD.js";import"./Label-BHh_gacH.js";import"./Hidden-kCI5Fish.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-xelku7uN.js";import"./context-Hrlbzros.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CHP3pRkH.js";import"./useFocus-DIDqk3LI.js";import"./useFocusRing-D4lo4_Zr.js";import"./useFocusable-fXM7Y9pN.js";import"./RSPContexts-CblVL1A7.js";import"./OverlayArrow-CBzM-Xoe.js";import"./useControlledState-hBcxnaS2.js";import"./Collection-k_p8jiFF.js";import"./CollectionBuilder-B7QPPD_O.js";import"./SelectionIndicator-MjQ5C6Rd.js";import"./Separator-CVohJStV.js";import"./Text-Dj7c1Gq2.js";import"./SelectionManager-CkqK1ezZ.js";import"./useEvent-BnAk5cqF.js";import"./useCollator-CUuaB6UV.js";import"./FocusScope-DaLeJatZ.js";import"./useLocalizedStringFormatter-gsFqTt9C.js";import"./VisuallyHidden-DAWjrZx-.js";import"./IconWarning-m_DFVeXI.js";import"./remote-zHy9wvpL.js";import"./Text-Ggj8lIEk.js";import"./browser-CHbB-bBA.js";import"./EmulatedBoldText-Dg0kR_8L.js";import"./LoadingSpinner-jOE_2qaU.js";import"./OverlayTrigger-Ck0Q03CL.js";import"./DialogTriggerView-IG7EACbV.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const ar=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,ar as __namedExportsOrder,nr as default};
