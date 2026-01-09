import{j as r,R as a}from"./iframe-tI_lG94_.js";import{P as i}from"./Popover-DkoOxFI-.js";import{B as n}from"./Button-WUI-ZJ9l.js";import{P as c}from"./PopoverTrigger-A6xSLx38.js";import{u as l}from"./useOverlayController-B_c7Bk6_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C7r6bord.js";import"./index-Cx51kJJc.js";import"./index-CBk6rXlg.js";import"./OverlayContextProvider-CkzPVZUF.js";import"./context-Ci5c_Wjo.js";import"./useStatic-vWo9ean7.js";import"./Dialog-Bo5p_Zqr.js";import"./Button-EHR8zEQX.js";import"./utils-bmh-HeLH.js";import"./ProgressBar-B0YygRTY.js";import"./Label-BRs8jfGQ.js";import"./Hidden-xjuSUFbD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-dT-ksHYF.js";import"./context-CBF_EHvQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C1ke7TUF.js";import"./useFocus-DCHopMY8.js";import"./useFocusRing-Dgbmnyxw.js";import"./useFocusable-BnM0ssdw.js";import"./RSPContexts-C1ceWNax.js";import"./OverlayArrow-DuDGHp0O.js";import"./useControlledState-BE5RFE46.js";import"./Collection-DCiKuUl7.js";import"./CollectionBuilder-Bsyu2Qik.js";import"./SelectionIndicator-uIlcbJnR.js";import"./Separator-AUomIBZD.js";import"./Text-Bx7ijqLX.js";import"./SelectionManager-BHP7q8X0.js";import"./useEvent-CrsvrwL5.js";import"./useCollator-BwiXk11m.js";import"./FocusScope-Brgrzlff.js";import"./useLocalizedStringFormatter-BU5vto5x.js";import"./VisuallyHidden-sfQiOa3Q.js";import"./IconWarning-BFYQkdin.js";import"./remote-CmKo-bli.js";import"./Text-DDIuCQxA.js";import"./browser-DuhBvQkx.js";import"./EmulatedBoldText-CqR-YL6D.js";import"./LoadingSpinner-KbaLfraT.js";import"./OverlayTrigger-CuZ4GO5W.js";import"./DialogTriggerView-x8fU52HH.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
