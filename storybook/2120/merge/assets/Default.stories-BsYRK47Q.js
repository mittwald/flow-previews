import{j as r,R as a}from"./iframe-BFS0V-7K.js";import{P as s,u as c}from"./Popover-CRv5SMSH.js";import{B as n}from"./Button-C69BF7uv.js";import{P as l}from"./PopoverTrigger-DwJ_YWVm.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-B7YXRHOK.js";import"./flowComponent-DYDr2Yry.js";import"./index-BLI0rWKp.js";import"./index-Cd8SiJSJ.js";import"./useStatic-5zK4mpNm.js";import"./OverlayTrigger-DB1HvpAI.js";import"./Dialog-Cj7jIBKp.js";import"./Button-C0SUbguZ.js";import"./utils-pBfQtTJP.js";import"./ProgressBar-DZnnPhpU.js";import"./Hidden-459sOV2x.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CL-MWO-e.js";import"./useFocusRing-CM3Y5p4v.js";import"./useFocusable-DIP3xdGA.js";import"./RSPContexts-vmNR8Bdo.js";import"./OverlayArrow-BWg220ZF.js";import"./useControlledState-CfZCIixa.js";import"./Collection-BNdUYhId.js";import"./CollectionBuilder-oqPeank5.js";import"./SelectionIndicator-C95FoYBz.js";import"./Separator-DyL-chbW.js";import"./browser-DkyXecm8.js";import"./useLocalizedStringFormatter-Bsp3ptWs.js";import"./ControlledNotification-CqVYbY5l.js";import"./ClearPropsContextView-M-FcIVZm.js";import"./IconWarning-BzBGzmgt.js";import"./Text-Cg-PlNpB.js";import"./EmulatedBoldText-DZMpoDwy.js";import"./LoadingSpinner-Bnd8iTGA.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
