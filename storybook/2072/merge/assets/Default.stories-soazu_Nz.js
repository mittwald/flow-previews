import{j as r,a}from"./iframe-BGjIo6hw.js";import{P as s,u as c}from"./Popover-tW18rmQX.js";import{B as n}from"./Button-72uC3Xxd.js";import{P as l}from"./PopoverTrigger-QUfyk5z7.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-jnS2Fs_o.js";import"./flowComponent-CKy74ieT.js";import"./index-RB0ZeMWq.js";import"./index-D8hDUSyP.js";import"./useStatic-B2rVxKR2.js";import"./OverlayTrigger-CsYA01So.js";import"./Dialog-DZpgyeVc.js";import"./Button-DVeyWZob.js";import"./utils-FWUTa6bA.js";import"./ProgressBar-IcJtTGAe.js";import"./Hidden-YgttGYZu.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DQ8Yy5yO.js";import"./useFocusRing-B268tRT3.js";import"./useFocusable-Cp5mQ5Rc.js";import"./RSPContexts-BLZAUi5X.js";import"./OverlayArrow-D5fKAg8k.js";import"./useControlledState-8IdaO4XH.js";import"./Collection-DBSHt2At.js";import"./CollectionBuilder-CfVVvz4n.js";import"./SelectionIndicator-D0sGU-I3.js";import"./Separator-D2n48QdT.js";import"./browser-i6k0HuHn.js";import"./useLocalizedStringFormatter-DMlB1stV.js";import"./ControlledNotification-Dq6bZvP5.js";import"./ClearPropsContextView-CF-h0ZS8.js";import"./IconWarning-OiQYEbgz.js";import"./Text-Bc8wJjtt.js";import"./EmulatedBoldText-DcmHRAc9.js";import"./LoadingSpinner-DW7FO3ji.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
