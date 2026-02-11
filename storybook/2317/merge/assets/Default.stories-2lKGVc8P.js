import{j as r,R as a}from"./iframe-DN5oj4yX.js";import{P as i}from"./Popover-BkLmPzXt.js";import{B as n}from"./Button-CF7BcIrS.js";import{P as c}from"./PopoverTrigger-CHI_Awho.js";import{u as l}from"./useOverlayController-B28PiJc5.js";import"./flowComponent-D5tzpGYQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-BWiZzEmK.js";import"./context-BOqeUKEn.js";import"./useStatic-D8kDoy_M.js";import"./Dialog-CpK4NMTe.js";import"./Button-BQ5wMWnN.js";import"./utils-u73lU7bl.js";import"./index-D8Wg1xo0.js";import"./index-DUndj3nA.js";import"./ProgressBar-ChQMk24B.js";import"./Label-D5uLN87S.js";import"./Hidden-DvJV1KBO.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-52-JVqkW.js";import"./context-BQuP-QJJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-dDK8KT2l.js";import"./useFocus-CanfFAPv.js";import"./useFocusRing-Cbnk9x9v.js";import"./useFocusable-6yyx7e1u.js";import"./RSPContexts-CT4Rd2GX.js";import"./OverlayArrow-BufWJWwU.js";import"./useControlledState-Dl4qb5FM.js";import"./Collection-DN16OmDe.js";import"./CollectionBuilder-CE82C-kz.js";import"./SelectionIndicator-BsSExIou.js";import"./Separator-CB9FghXV.js";import"./Text-mAHBNKmk.js";import"./SelectionManager-upRYqEYI.js";import"./useEvent-CkPyHfFN.js";import"./useCollator-DUmbl0t5.js";import"./FocusScope-BtxR-tB9.js";import"./useLocalizedStringFormatter-Dqjs-V7P.js";import"./VisuallyHidden-BipIpOcd.js";import"./IconWarning-C1DuEctF.js";import"./remote-CDfMg8I2.js";import"./Text-B6wg_w_v.js";import"./browser-t02O3gv-.js";import"./EmulatedBoldText-rvhjeWKi.js";import"./LoadingSpinner-IkyiKoyX.js";import"./OverlayTrigger-DmhzA4cb.js";import"./DialogTriggerView-CQrHVoJK.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
