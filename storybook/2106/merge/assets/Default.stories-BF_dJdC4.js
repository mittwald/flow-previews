import{j as r,R as a}from"./iframe-Cvytdoxw.js";import{P as s,u as c}from"./Popover-_9KKs073.js";import{B as n}from"./Button-Cr3d2kpx.js";import{P as l}from"./PopoverTrigger-YysPgKmt.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-onOyb17u.js";import"./flowComponent-BakvHPDm.js";import"./index-D8rYYAP0.js";import"./index-CTthHXbC.js";import"./useStatic-Dta6Atim.js";import"./OverlayTrigger-BFXPSWkQ.js";import"./Dialog-B6VEzsps.js";import"./Button-B_aqk9rc.js";import"./utils-cle9p6h6.js";import"./ProgressBar-Ba3c9wf0.js";import"./Hidden-C4KiavwU.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Cn_ZHjoc.js";import"./useFocusRing-DUuUR0t2.js";import"./useFocusable-suhCImuH.js";import"./RSPContexts-Cd4dinro.js";import"./OverlayArrow-sYsIV9sV.js";import"./useControlledState-jiOBhksC.js";import"./Collection-DGRdCInl.js";import"./CollectionBuilder-uYz3_9MR.js";import"./SelectionIndicator-C753lFWW.js";import"./Separator-CAXwT-nc.js";import"./browser-DEx-HDtZ.js";import"./useLocalizedStringFormatter-Bip3mv8b.js";import"./ControlledNotification-DsIk9QU4.js";import"./ClearPropsContextView-BVktS7r5.js";import"./IconWarning-DXcNdK9V.js";import"./Text-DIznXbTR.js";import"./EmulatedBoldText-D3YXTSUL.js";import"./LoadingSpinner-DkHZrmVz.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const V=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,V as __namedExportsOrder,U as default};
