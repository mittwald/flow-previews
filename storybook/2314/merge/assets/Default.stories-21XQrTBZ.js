import{j as r,R as a}from"./iframe-BnHQGzj-.js";import{P as i}from"./Popover-By64ee4S.js";import{B as n}from"./Button-kOzdzwoL.js";import{P as c}from"./PopoverTrigger-DsrBUSP4.js";import{u as l}from"./useOverlayController-nmD6fAp8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B3zgfniW.js";import"./index-B4eSx5RY.js";import"./index-CR3_Geu_.js";import"./OverlayContextProvider-DVcP4fWo.js";import"./context-CLHbEMzO.js";import"./useStatic-CXOpTYPY.js";import"./Dialog-vlYkkLZ8.js";import"./Button-7nIxjvHJ.js";import"./utils-B_drgFmA.js";import"./ProgressBar-V752D4mF.js";import"./Label-C4kylnhO.js";import"./Hidden-DGNiPayS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpMFroVF.js";import"./context-oT0KmQcZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DW43gzrd.js";import"./useFocus-BQLqug8q.js";import"./useFocusRing-BtYlF30D.js";import"./useFocusable-CpiznpYH.js";import"./RSPContexts-DJrv2Up2.js";import"./OverlayArrow-CU__1Pr_.js";import"./useControlledState-ARGAgX5I.js";import"./Collection-D7DmweA7.js";import"./CollectionBuilder-Dmus25Kx.js";import"./SelectionIndicator-Bje3agQK.js";import"./Separator-DEQQD5jL.js";import"./Text-CP9lFNhL.js";import"./SelectionManager-D547R46g.js";import"./useEvent-DbwR8Qxp.js";import"./useCollator-B-3R_2dL.js";import"./FocusScope-BV-dArZv.js";import"./useLocalizedStringFormatter-DfUxbFDU.js";import"./VisuallyHidden-DN_pHWhj.js";import"./IconWarning-BD5ZgLZv.js";import"./remote-DzOTiMGq.js";import"./Text-BWqTdGF3.js";import"./browser-Byd_T3zS.js";import"./EmulatedBoldText-B2gQbs-b.js";import"./LoadingSpinner-DoB6VVvS.js";import"./OverlayTrigger-DgkWH0DW.js";import"./DialogTriggerView-bkG5XCiq.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
