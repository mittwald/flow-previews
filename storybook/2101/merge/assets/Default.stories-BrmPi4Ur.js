import{j as r,R as a}from"./iframe-iStLwuZ7.js";import{P as s,u as c}from"./Popover-t8MFWx16.js";import{B as n}from"./Button-DeYIfmY1.js";import{P as l}from"./PopoverTrigger-ByXAc-Gw.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-BkQICaTP.js";import"./flowComponent-BgccJZsB.js";import"./index-BbqvJdms.js";import"./index-DcihAMJC.js";import"./useStatic-TN_NP4Rc.js";import"./OverlayTrigger-3eg2WHd6.js";import"./Dialog-WSuFRoqu.js";import"./Button-Cm_HfJV4.js";import"./utils-En5R44lx.js";import"./ProgressBar-BI2riqcs.js";import"./Hidden-Dy-IvjOH.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-abCQqTkG.js";import"./useFocusRing-LOcsQEvn.js";import"./useFocusable-BrL0nAob.js";import"./RSPContexts-LTaLIYp5.js";import"./OverlayArrow-SEOPpry_.js";import"./useControlledState-BI2V3xrC.js";import"./Collection-BuxUMZwe.js";import"./CollectionBuilder-CuL3Q7YH.js";import"./SelectionIndicator-BKv19ZSu.js";import"./Separator-CHkxKTJO.js";import"./browser-D_N9MqU0.js";import"./useLocalizedStringFormatter-nySSu_zi.js";import"./ControlledNotification-DvN-R_5x.js";import"./ClearPropsContextView-8CvEVPvl.js";import"./IconWarning-DFqNAy-A.js";import"./Text-Bm93Qc7O.js";import"./EmulatedBoldText-Bxo0dRe8.js";import"./LoadingSpinner-Bbl45bGl.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
