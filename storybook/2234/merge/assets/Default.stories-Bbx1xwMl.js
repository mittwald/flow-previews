import{j as r,R as a}from"./iframe-ByN7k_Da.js";import{P as i}from"./Popover-C4a2YCNk.js";import{B as n}from"./Button-DLduC619.js";import{P as c}from"./PopoverTrigger--0H--ObL.js";import{u as l}from"./useOverlayController-B-zt5KRt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BgbG9tfm.js";import"./index-4o_WvcDw.js";import"./index-bUl7c0HC.js";import"./OverlayContextProvider-CJmTzcIB.js";import"./context-D7USXnL-.js";import"./useStatic-BKQ_69l_.js";import"./Dialog-Cvkq5YiV.js";import"./Button-CAFU8pmb.js";import"./utils-D8xEYOuW.js";import"./ProgressBar-BhTwnbUK.js";import"./Label-BgjwP7On.js";import"./Hidden-LyHOqGkt.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-x0Vjylpp.js";import"./context-rGL7bC8_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BphJYqm5.js";import"./useFocus-CetkVqMR.js";import"./useFocusRing-BkJgNFf3.js";import"./useFocusable-D-qYSNYm.js";import"./RSPContexts-BhXs16ev.js";import"./OverlayArrow-DDuz5amj.js";import"./useControlledState-kSDz6lD9.js";import"./Collection-BxxE3IdU.js";import"./CollectionBuilder-DO_zs8-i.js";import"./SelectionIndicator-C44R85aV.js";import"./Separator-DEoWRh-q.js";import"./Text-j0nufsIB.js";import"./SelectionManager-DzIRAneQ.js";import"./useEvent-ByW2yFDz.js";import"./useCollator-B3KC4V3q.js";import"./FocusScope-gvfOB4kd.js";import"./useLocalizedStringFormatter-BD0UWBkN.js";import"./VisuallyHidden-CV3OLvgc.js";import"./IconWarning-DZTSBBmw.js";import"./remote-DfUdRpIa.js";import"./Text-Cb-8LAS5.js";import"./browser-Co1wUnJx.js";import"./EmulatedBoldText-BCkrp6N6.js";import"./LoadingSpinner-Cx6oN4QU.js";import"./OverlayTrigger-CEg2Xl2L.js";import"./DialogTriggerView-BKgGmwZY.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
