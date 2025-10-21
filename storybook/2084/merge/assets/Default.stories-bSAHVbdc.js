import{j as r,R as a}from"./iframe-Bju5tM19.js";import{P as i}from"./Popover-DlqNLSeP.js";import{B as n}from"./Button-D01G-2Tc.js";import{P as c}from"./PopoverTrigger-1KiRUTXj.js";import{u as l}from"./useOverlayController-rptj0Un2.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DMQ923EN.js";import"./index-i9t6c7d2.js";import"./index-v7jxlCcy.js";import"./OverlayContextProvider-BSx-P-EI.js";import"./context-DoYyNt70.js";import"./useStatic-Dhn4vIeo.js";import"./Dialog-BwAIy3cs.js";import"./Button-Dw5yhw5U.js";import"./utils-CHaPYnRu.js";import"./ProgressBar-Bd2c_dqs.js";import"./Label-C0LDEu9P.js";import"./Hidden-B3KlSyIs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DxvdaVYE.js";import"./context-BCZfssJF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DNUm2pP-.js";import"./useFocus-dnpNkUeL.js";import"./useFocusRing-DQLm4Rj_.js";import"./useFocusable-S-EY4exA.js";import"./RSPContexts-CuZAMKB6.js";import"./OverlayArrow-CkGx3q47.js";import"./useControlledState-BiPn7KDX.js";import"./Collection-CzETdAyj.js";import"./CollectionBuilder-C9Q_qjob.js";import"./SelectionIndicator-BWLjQ8Kg.js";import"./Separator-F1osFFu3.js";import"./Text-X0smrbMM.js";import"./SelectionManager-BWZTcbb9.js";import"./useEvent-B0Z9j7Hl.js";import"./useCollator-CPsP6oXT.js";import"./FocusScope-BvTlMNTx.js";import"./useLocalizedStringFormatter-DnEVwgqU.js";import"./VisuallyHidden-muGwU-w1.js";import"./ClearPropsContextView-D7P4GTdz.js";import"./ClearPropsContext-nVrOsFhk.js";import"./IconWarning-EseH3oBy.js";import"./Text-Ctwf1INQ.js";import"./browser-5LoYBPX6.js";import"./EmulatedBoldText-DNLnXqQA.js";import"./LoadingSpinner-OWtFn1Ti.js";import"./OverlayTrigger-845SWzvQ.js";import"./ControlledNotification-CjAjijX6.js";import"./DialogTriggerView-6-499Y0k.js";const cr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const lr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,lr as __namedExportsOrder,cr as default};
