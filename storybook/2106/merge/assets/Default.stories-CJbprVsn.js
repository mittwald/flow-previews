import{j as r,R as a}from"./iframe-DxwcgvDR.js";import{P as s,u as c}from"./Popover-C115A6YY.js";import{B as n}from"./Button-DpmT-Qin.js";import{P as l}from"./PopoverTrigger-BRJuSawv.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-Daw8U4Js.js";import"./flowComponent-D9gZXDBr.js";import"./index-Hde59aEk.js";import"./index-BbnRfAJ3.js";import"./useStatic-CjurL4ph.js";import"./OverlayTrigger-DNeJhO1q.js";import"./Dialog-BIYJU2zM.js";import"./Button-DnBmTQ11.js";import"./utils-n6_FFOiQ.js";import"./ProgressBar-BcO4kXd3.js";import"./Hidden-Dz5WTy5W.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CGBA4dD2.js";import"./useFocusRing-CNIgQMUD.js";import"./useFocusable-CfD6tvJl.js";import"./RSPContexts-C4NdBiWw.js";import"./OverlayArrow-SVlp-MsH.js";import"./useControlledState-6bl2dGVj.js";import"./Collection-DD9J8E7A.js";import"./CollectionBuilder-Du6oRztu.js";import"./SelectionIndicator-D_z5mUiE.js";import"./Separator-CYgXLQLG.js";import"./browser-Cqe1LxfT.js";import"./useLocalizedStringFormatter-DgjeZvep.js";import"./ControlledNotification-CDkn9KZJ.js";import"./ClearPropsContextView-CAdlfc13.js";import"./IconWarning-CXkzDcrG.js";import"./Text-0mdbe7by.js";import"./EmulatedBoldText-Bkaq8qYh.js";import"./LoadingSpinner-BQdOHNHu.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
