import{j as r,R as a}from"./iframe-Dx38AIDT.js";import{P as i}from"./Popover-CMv0GXnF.js";import{B as n}from"./Button-Bhwtl7lS.js";import{P as c}from"./PopoverTrigger-C8cWREFR.js";import"./flowComponent-BwBSRBJY.js";import{u as l}from"./useOverlayController-Cqh70DsD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-tTA2mi55.js";import"./Dialog-BIvPa65M.js";import"./Button-DXXdMML6.js";import"./utils-uxa8p5vl.js";import"./index-B3w7UL3m.js";import"./index-C4zw0wF6.js";import"./ProgressBar-BzTC4ZoK.js";import"./Label-CRhDhtUr.js";import"./Hidden-fCjHF3ey.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel--5Xg4_7C.js";import"./context-CRsgLXVa.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BU6JmZbW.js";import"./useFocus-C3KeEXKn.js";import"./useFocusRing-XbCssGNL.js";import"./useFocusable-CIjhaoEP.js";import"./RSPContexts-DnJfGcBy.js";import"./OverlayArrow-DXkjfcol.js";import"./useControlledState-BekZOXin.js";import"./Collection-DFwYI0R_.js";import"./CollectionBuilder-d7mW72oL.js";import"./SelectionIndicator-D_Yc_rq7.js";import"./Separator-BVmogCl8.js";import"./Text-CN5O_J5f.js";import"./SelectionManager-BSVgVRml.js";import"./useEvent-D7Cb0aSH.js";import"./useCollator-DTKHLM3i.js";import"./FocusScope-eq4FNALu.js";import"./useLocalizedStringFormatter-D4oP4MPs.js";import"./VisuallyHidden-ma9EryWn.js";import"./IconWarning-tem5fYZU.js";import"./remote-C7_Ru_dB.js";import"./Text-stRMORLN.js";import"./browser-Bgj4nWuI.js";import"./EmulatedBoldText-DkfYMVU4.js";import"./LoadingSpinner-CAXp-11u.js";import"./OverlayTrigger-DSgpEliW.js";import"./DialogTriggerView-OeH9FnCe.js";import"./useStatic-CD9yQ0OW.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
