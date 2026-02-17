import{j as r,R as a}from"./iframe-DwsGXJVG.js";import{P as i}from"./Popover-Cvxhvr4i.js";import{B as n}from"./Button-CqL_vLUu.js";import{P as c}from"./PopoverTrigger-DwCjUVx8.js";import"./flowComponent-qxgtoIlH.js";import{u as l}from"./useOverlayController-Bn3a-KRG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-CCF5PYOf.js";import"./Dialog-M15I_L87.js";import"./Button-m4IzIabh.js";import"./utils-DRn9wprx.js";import"./index-Bl29J3nk.js";import"./index-Z94wDe_B.js";import"./ProgressBar-C9wD8OqZ.js";import"./Label-C5wfq0Kb.js";import"./Hidden-CJnCNBv0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DGPoQV-x.js";import"./context-aVGfmL8k.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CckbZpi5.js";import"./useFocus-DIaiJ-NX.js";import"./useFocusRing-DdmspiUG.js";import"./useFocusable-s83SGTZ-.js";import"./RSPContexts-CFeGdYTg.js";import"./OverlayArrow-DURPAUST.js";import"./useControlledState-CRB4bW25.js";import"./Collection-BGu_nwcH.js";import"./CollectionBuilder-B17IJuT1.js";import"./SelectionIndicator-BqSVIa4a.js";import"./Separator-BaZLZFLd.js";import"./Text-_i5SHi6c.js";import"./SelectionManager-TlInvFTF.js";import"./useEvent-nJ48QMBy.js";import"./useCollator-GdkhHcGA.js";import"./FocusScope-4Fd3tZfM.js";import"./useLocalizedStringFormatter-D7jMR4ny.js";import"./VisuallyHidden-Fvx90J8z.js";import"./IconWarning-Ci9l-8b2.js";import"./remote-Co6v5gQ1.js";import"./Text-BV6qM8pO.js";import"./browser-Cz_VorJk.js";import"./EmulatedBoldText-C-itzyky.js";import"./LoadingSpinner-DKEuwZ4C.js";import"./OverlayTrigger-t2QYWnlS.js";import"./DialogTriggerView-DeaSBX2q.js";import"./useStatic-BwWlrMEh.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const nr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,nr as __namedExportsOrder,sr as default};
