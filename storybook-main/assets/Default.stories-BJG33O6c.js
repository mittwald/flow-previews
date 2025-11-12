import{j as r,R as a}from"./iframe-Ye-9ROja.js";import{P as s,u as c}from"./Popover-01hMVctL.js";import{B as n}from"./Button-CSXrQkPS.js";import{P as l}from"./PopoverTrigger-BdQu_M_u.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-CZJE5_Px.js";import"./flowComponent-DVMSJKid.js";import"./index-BD2FLLtY.js";import"./index-MGNRFzGq.js";import"./useStatic-BBGAeEE_.js";import"./OverlayTrigger-7A3ebmst.js";import"./Dialog-DBZH8ijj.js";import"./Button-COBj9UNQ.js";import"./utils-CF6YsxS1.js";import"./ProgressBar-Dc-dQlrj.js";import"./Hidden-CYSIeRK5.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BMOJ7e9i.js";import"./useFocusRing-CJrPyvnd.js";import"./useFocusable-CkKnxemF.js";import"./RSPContexts-CFmCNefB.js";import"./OverlayArrow-D0NjRXEq.js";import"./useControlledState-DL7WEOig.js";import"./Collection-iSYWZ0WM.js";import"./CollectionBuilder-CD94NaG6.js";import"./SelectionIndicator--h8__Bgl.js";import"./Separator-BZhvxbZo.js";import"./browser-BcPcK0wn.js";import"./useLocalizedStringFormatter-8EdZld9N.js";import"./ControlledNotification-D1ICvP0t.js";import"./ClearPropsContextView-P5ekssIx.js";import"./IconWarning-C5ScV98r.js";import"./Text-Bsxj-TZS.js";import"./EmulatedBoldText-Bx43jLQW.js";import"./LoadingSpinner-BKm3aKU7.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
