import{j as r,R as a}from"./iframe-CJJ5mYnn.js";import{P as i}from"./Popover-CSygdiS-.js";import{B as n}from"./Button-Cm9iNCfL.js";import{P as c}from"./PopoverTrigger-CWuq6Uwg.js";import{u as l}from"./useOverlayController-Bt3E6YJk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BiwmgULL.js";import"./index-BXYeEKBx.js";import"./index-BAQeQlIi.js";import"./OverlayContextProvider-DxcnF3G9.js";import"./context-B6BNwR5M.js";import"./useStatic-DKMjC4UR.js";import"./Dialog-BJQKxFLq.js";import"./Button-DBs8-zE9.js";import"./utils-CzEQVu_B.js";import"./ProgressBar-DEVhhcDS.js";import"./Label-Crm05hod.js";import"./Hidden-AXn-SW1d.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-x08fx3rG.js";import"./context-DMBLfBJz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BjSa1aTn.js";import"./useFocus-CcXCF9Et.js";import"./useFocusRing-DJCeTTlI.js";import"./useFocusable-BrXzadpt.js";import"./RSPContexts-BTWN0Dkl.js";import"./OverlayArrow-B9C6jKaR.js";import"./useControlledState-Bk661CCw.js";import"./Collection-B0Oi5e2R.js";import"./CollectionBuilder-DM6FVurg.js";import"./SelectionIndicator-t_QTWROb.js";import"./Separator-Ba2IdZvX.js";import"./Text-C_ulbvRg.js";import"./SelectionManager-h8Xia05C.js";import"./useEvent-B7gpfAjJ.js";import"./useCollator-BLS40MVU.js";import"./FocusScope-Bpw-7kqG.js";import"./useLocalizedStringFormatter-DftyoPOP.js";import"./VisuallyHidden-CdWE-b-g.js";import"./IconWarning-7VhmiBC1.js";import"./remote-__48vje9.js";import"./Text-DETIdekS.js";import"./browser-Dno-4bzG.js";import"./EmulatedBoldText-Ddbav1xv.js";import"./LoadingSpinner-BkLfehTA.js";import"./OverlayTrigger-BPzqtZtz.js";import"./DialogTriggerView-C73SnW8B.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const ar=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,ar as __namedExportsOrder,nr as default};
