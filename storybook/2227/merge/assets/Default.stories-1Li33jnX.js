import{j as r,R as a}from"./iframe-XJIuIQsX.js";import{P as i}from"./Popover-OQKS3awK.js";import{B as n}from"./Button-B3qcLgg7.js";import{P as c}from"./PopoverTrigger-DRJU_ogO.js";import{u as l}from"./useOverlayController-Bcgt-d4I.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BaQJj-Fe.js";import"./index-BFrTfb9P.js";import"./index-D1QpPuaY.js";import"./OverlayContextProvider-C-39O9JG.js";import"./context-BdOjCQgT.js";import"./useStatic-Badjbl0n.js";import"./Dialog-DrSVAvJg.js";import"./Button-BAG3sHuP.js";import"./utils-OSbsBMtV.js";import"./ProgressBar-BrwhHLJj.js";import"./Label-1nVOodib.js";import"./Hidden-CYqdvOeA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B1JuXYfT.js";import"./context-DW91oCRu.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DEhEh88f.js";import"./useFocus-CATpB0h3.js";import"./useFocusRing-CeYeFZfu.js";import"./useFocusable-DTUbS3BZ.js";import"./RSPContexts-CKZ7RQV4.js";import"./OverlayArrow-Coj8W95X.js";import"./useControlledState-B6b60Ty3.js";import"./Collection-DBAq6tm-.js";import"./CollectionBuilder-DFJ49rUK.js";import"./SelectionIndicator-rwMeyIsD.js";import"./Separator-5XoV32yu.js";import"./Text-CQ_rpqob.js";import"./SelectionManager-BTpprE_r.js";import"./useEvent-c3AV6770.js";import"./useCollator-pMxc4jG8.js";import"./FocusScope-XmTgMg9O.js";import"./useLocalizedStringFormatter-CdJGeOAf.js";import"./VisuallyHidden-ClcaDoKJ.js";import"./IconWarning-Dh1UuZN-.js";import"./remote-Ep0bJUq6.js";import"./Text-CrMkSLGe.js";import"./browser-BhoN5hvb.js";import"./EmulatedBoldText-CPYC_Ehx.js";import"./LoadingSpinner-CuoS48qC.js";import"./OverlayTrigger-CKuY1bLi.js";import"./DialogTriggerView-Bb_gJxRh.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
