import{j as r,R as a}from"./iframe-Dld40DlB.js";import{P as s,u as c}from"./Popover-XDo3MRMz.js";import{B as n}from"./Button-DIo8wcxN.js";import{P as l}from"./PopoverTrigger-BYqjO8bC.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-DLHVmjQX.js";import"./flowComponent-g3olMzzw.js";import"./index-Dshvly-6.js";import"./index-CruVUoMH.js";import"./useStatic-C-DsDLNz.js";import"./OverlayTrigger-BVUj_QQK.js";import"./Dialog-BJVHvNg4.js";import"./Button-rvCZddFR.js";import"./utils-D4Q7WLr3.js";import"./ProgressBar-A7FXjRZm.js";import"./Hidden-CiXaNdIj.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CvXLvg4O.js";import"./useFocusRing-BAtU7oif.js";import"./useFocusable-BrkdujEf.js";import"./RSPContexts-DRmXF-Vp.js";import"./OverlayArrow-J381LXSg.js";import"./useControlledState-BaXUyl3S.js";import"./Collection-BcdNyWqm.js";import"./CollectionBuilder-DXJ4p0H3.js";import"./SelectionIndicator-B4HmttaN.js";import"./Separator-DQHCwqOC.js";import"./browser-bPFV2Ji3.js";import"./useLocalizedStringFormatter-BddSeuov.js";import"./ControlledNotification-xf49NdLG.js";import"./ClearPropsContextView-Cho7uRH3.js";import"./IconWarning-Bslq8B7t.js";import"./Text-TesoHDfv.js";import"./EmulatedBoldText-Df4Xti5W.js";import"./LoadingSpinner-C26eHY8y.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
