import{j as r,R as a}from"./iframe-BD-_0iQW.js";import{P as s,u as c}from"./Popover-CLHMqo5N.js";import{B as n}from"./Button-Daqq-bhO.js";import{P as l}from"./PopoverTrigger-DQLZ359g.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-9lnVgACy.js";import"./flowComponent-AqaE2XDS.js";import"./index-BxlzE1r4.js";import"./index-CwlJevdL.js";import"./useStatic-7iZUYjuS.js";import"./OverlayTrigger-CEYU_-ng.js";import"./Dialog-B7aUPBh_.js";import"./Button-DxIzcvDZ.js";import"./utils-DC-uQ7gt.js";import"./ProgressBar-DRtXHYQ6.js";import"./Hidden-DekCIok9.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CVtdtufW.js";import"./useFocusRing-ohgATb1P.js";import"./useFocusable-DN1gz0ZC.js";import"./RSPContexts-CSfMLF9v.js";import"./OverlayArrow-Roh2YmoW.js";import"./useControlledState-B9_9qNA0.js";import"./Collection-DmyA85a8.js";import"./CollectionBuilder-BVb55qBm.js";import"./SelectionIndicator-BYFUj2bk.js";import"./Separator-BuFHs16i.js";import"./browser-CsfwbWLp.js";import"./useLocalizedStringFormatter-DhlRMC09.js";import"./ControlledNotification-B9B4fBZF.js";import"./ClearPropsContextView-C6q86AoL.js";import"./IconWarning-COe6pc-P.js";import"./Text-BiRW2WuP.js";import"./EmulatedBoldText-C35HxZ7Y.js";import"./LoadingSpinner-BgQGLDYl.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
