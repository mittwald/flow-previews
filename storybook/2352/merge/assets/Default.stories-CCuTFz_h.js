import{j as r,R as a}from"./iframe-DhXHhh1w.js";import{P as i}from"./Popover-JroSLm89.js";import{B as n}from"./Button-DK8hND6e.js";import{P as c}from"./PopoverTrigger-pAqTOBqr.js";import"./flowComponent-KRA3PXE8.js";import{u as l}from"./useOverlayController-BReF9zcC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-CWHHdI4p.js";import"./Dialog-CefhgDMJ.js";import"./Button-B72XzUR4.js";import"./utils--GApMcJ9.js";import"./index-DnLu1uFy.js";import"./index-B6ijkuYI.js";import"./ProgressBar-F8Z66Kjl.js";import"./Label-B5DsgLYE.js";import"./Hidden-0q4YVuok.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B7imI5Js.js";import"./context-C0JBe_V4.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DuFsm5YE.js";import"./useFocus-CCcmXvuL.js";import"./useFocusRing-C0Ptw1X0.js";import"./useFocusable-DaonITQz.js";import"./RSPContexts-BISy0hbD.js";import"./OverlayArrow-D0YkTT7M.js";import"./useControlledState-BAaAMcGs.js";import"./Collection-CjYz6Uc3.js";import"./CollectionBuilder-BLnwNesF.js";import"./SelectionIndicator-p-DrZhoI.js";import"./Separator-YN4gslNC.js";import"./Text-BhHd18lu.js";import"./SelectionManager-DsW2owD3.js";import"./useEvent-Ceq3h06g.js";import"./useCollator-CdSsm3Cn.js";import"./FocusScope-DTOX4bjf.js";import"./useLocalizedStringFormatter-r_L1XqdG.js";import"./VisuallyHidden-B52Q2-iE.js";import"./IconWarning-Cq0bATFd.js";import"./remote-3lBAaKOS.js";import"./Text-VjJbV_1P.js";import"./browser-DC-Dnn5c.js";import"./EmulatedBoldText-DK8yRX5h.js";import"./LoadingSpinner-BQo0GQZs.js";import"./OverlayTrigger-Dx4VUFaj.js";import"./DialogTriggerView-NO6i6DWC.js";import"./useStatic-Cuuv0LOE.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
