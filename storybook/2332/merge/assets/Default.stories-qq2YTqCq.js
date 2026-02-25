import{j as r,R as a}from"./iframe-n3VOiEf5.js";import{P as i}from"./Popover-BLdDdbLq.js";import{B as n}from"./Button-gwePC8r8.js";import{P as c}from"./PopoverTrigger-BZmK6M00.js";import"./flowComponent-xlJ5dlMA.js";import{u as l}from"./useOverlayController-BNiAcUvH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-BOvHDlNa.js";import"./Dialog-Be8vTliz.js";import"./Button-Dt8pRNpU.js";import"./utils-BTX3Dk-t.js";import"./index-Bqd_wUB4.js";import"./index-CHzAo02W.js";import"./ProgressBar-C4tpbq9V.js";import"./Label-CZ6Ig0wh.js";import"./Hidden-8NzXPPVn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpN8AhZi.js";import"./context-DhQskmxc.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CVHN3NRW.js";import"./useFocus-Di5Kz97s.js";import"./useFocusRing-50iWl84k.js";import"./useFocusable-ZTBPsPh1.js";import"./RSPContexts-DzW0xATd.js";import"./OverlayArrow-Tc6q1y2y.js";import"./useControlledState-17a16_5D.js";import"./Collection-2dWh1OBC.js";import"./CollectionBuilder-pL0vDcKt.js";import"./SelectionIndicator-QXVr0AO7.js";import"./Separator-XftYj5HO.js";import"./Text-BWj5dCJ1.js";import"./SelectionManager-Bh8KZa3d.js";import"./useEvent-D6V5lpJs.js";import"./useCollator-BWOk8TKb.js";import"./FocusScope-BBR4OeS8.js";import"./useLocalizedStringFormatter-BFx8pFGn.js";import"./VisuallyHidden-DCK-vxP3.js";import"./IconWarning-BKHoIgIa.js";import"./remote-CWx46e_E.js";import"./Text-CwVjZxCT.js";import"./browser-DXFXi5M2.js";import"./EmulatedBoldText-eIBSog0P.js";import"./LoadingSpinner-BZywMYAM.js";import"./OverlayTrigger-CSrVMpec.js";import"./DialogTriggerView-C7D0F8zI.js";import"./useStatic-CMDkRNZz.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
