import{j as r,R as a}from"./iframe-CEWg6_IX.js";import{P as i}from"./Popover-CBq8Jp6I.js";import{B as n}from"./Button-CA6AkUR_.js";import{P as c}from"./PopoverTrigger-7ZU0iPlC.js";import"./flowComponent-BozMiJR4.js";import{u as l}from"./useOverlayController-BjtWEYCu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-BkZKjsKR.js";import"./Dialog-0Ix26WHm.js";import"./Button-Dhdc5WDI.js";import"./utils-VWmQzJjV.js";import"./index-CBGYsq4Q.js";import"./index-BYd0o8d1.js";import"./ProgressBar-U95AIiub.js";import"./Label-CW66CEku.js";import"./Hidden-CWIFSP7u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B6JubenB.js";import"./context-BwTFrxK2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BNr3g4sC.js";import"./useFocus-BQlkvxNG.js";import"./useFocusRing-6TkqSe16.js";import"./useFocusable-B3euEuZy.js";import"./RSPContexts-ulpMISZ-.js";import"./OverlayArrow-LwODxVqr.js";import"./useControlledState-DV7blYjC.js";import"./Collection-Wb3olWvE.js";import"./CollectionBuilder-BS3MrMhz.js";import"./SelectionIndicator-C5jgIoGq.js";import"./Separator-DyFTk6rC.js";import"./Text-B3jOd0w4.js";import"./SelectionManager-B6Y4EMPJ.js";import"./useCollator-bALXm-sp.js";import"./FocusScope-BNRdhUBQ.js";import"./useLocalizedStringFormatter-qldlgSmA.js";import"./VisuallyHidden-DHhRta61.js";import"./IconWarning-D3143lfN.js";import"./remote-BClk6GLL.js";import"./Text-Bw_cIJde.js";import"./browser-D6O_MAcc.js";import"./EmulatedBoldText-DLcv393z.js";import"./LoadingSpinner-DZ0xu-4T.js";import"./OverlayTrigger-DGu3y4_r.js";import"./DialogTriggerView-59a06wTI.js";import"./useStatic-B6Ppl0UQ.js";const mr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const sr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,sr as __namedExportsOrder,mr as default};
