import{j as r,R as a}from"./iframe-9LT5pwxo.js";import{P as i,u as c}from"./Popover-BeAbZr2-.js";import{B as n}from"./Button-DgX4Ha9j.js";import{P as l}from"./PopoverTrigger-D6Xp2MMd.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-CNHQEL1v.js";import"./flowComponent-CmrMiIfZ.js";import"./index-CJEFfs1t.js";import"./index-B4OxUaac.js";import"./useStatic-C20s3RtG.js";import"./OverlayContextProvider-BxKLYzMZ.js";import"./Dialog-CLeuoHpB.js";import"./Button-BRQOtLOr.js";import"./utils-C12iYS2x.js";import"./ProgressBar-DUkmnmeC.js";import"./Label-B9A8CQ6N.js";import"./Hidden-Dc5yMvqI.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-D0_ysNiP.js";import"./context-CZZdPtMN.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CYkWbbQS.js";import"./useFocus-CGIGFm0L.js";import"./useFocusRing-BpS4vJuf.js";import"./useFocusable-6Pd0pdJi.js";import"./RSPContexts-D4jozd1E.js";import"./OverlayArrow-CBGQsLGC.js";import"./useControlledState-B0dx1ah2.js";import"./Collection-e6qlJrU1.js";import"./CollectionBuilder-Bz8h8tJk.js";import"./SelectionIndicator-CcfS7mad.js";import"./Separator-DiqHC5hw.js";import"./Text-cT0V7Crl.js";import"./SelectionManager-B4R1-nwv.js";import"./useEvent-CmmFmHFu.js";import"./useCollator-D0xJkZLY.js";import"./FocusScope-ahtwD87J.js";import"./useLocalizedStringFormatter-Ay0utv6w.js";import"./VisuallyHidden-kbtTP9xl.js";import"./ClearPropsContextView-CturT0aU.js";import"./ClearPropsContext-BgV1DGsr.js";import"./IconWarning-BGmK8I3p.js";import"./Text-FZjxGLxv.js";import"./browser-Be7wxfSs.js";import"./EmulatedBoldText-z8AdBhol.js";import"./LoadingSpinner-7jpPXpdG.js";import"./OverlayTrigger-CKLv7_gg.js";import"./ControlledNotification-Dj9ZPYyt.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=c("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
