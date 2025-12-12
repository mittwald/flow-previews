import{j as r,R as a}from"./iframe-Ckegua2-.js";import{P as s,u as c}from"./Popover-D8pa3B3p.js";import{B as m}from"./Button-DoXsYGKN.js";import{P as l}from"./PopoverTrigger-Cbnk17aQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./context-CF7hXZMA.js";import"./Button-DWZpmyCC.js";import"./utils-CYmNuJtI.js";import"./mergeRefs-CXKhTFR6.js";import"./index-CxQn1E-Y.js";import"./ProgressBar-DIFZ8Kql.js";import"./Hidden-kHVBbfV7.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Dskisrvm.js";import"./useFocusRing-BMhGy4sM.js";import"./useFocusable-oEaC2Y8Z.js";import"./RSPContexts-B2_NTObV.js";import"./Collection-ezizCYTp.js";import"./CollectionBuilder-BabOu3fh.js";import"./SelectionIndicator-BgkqkO5H.js";import"./Separator-B9FzUmmI.js";import"./browser-CQVzEu0I.js";import"./useLocalizedStringFormatter-Q4I4FS-7.js";import"./PropsContextProvider-B0wHrVrI.js";import"./useStatic-CoW39G77.js";import"./OverlayTrigger-DO7Mueac.js";import"./IconWarning-Gc4Ng5zo.js";import"./Text-Bc5eZX2G.js";import"./EmulatedBoldText-DGrw2Xfi.js";import"./LoadingSpinner-Cp0jDW5T.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const L=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,L as __namedExportsOrder,K as default};
