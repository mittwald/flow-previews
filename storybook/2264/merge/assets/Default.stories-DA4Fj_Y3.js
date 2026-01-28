import{j as r,R as a}from"./iframe-BrcQhcwR.js";import{P as i}from"./Popover-Z1FCFlzY.js";import{B as n}from"./Button-DdI6TSg5.js";import{P as c}from"./PopoverTrigger-CRHcNlrh.js";import{u as l}from"./useOverlayController-DMZANwi4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-m6SyqnPg.js";import"./index-Del26Dy4.js";import"./index-CSUT2NCR.js";import"./OverlayContextProvider-BfPQJL_J.js";import"./context-C9I6Qco3.js";import"./useStatic-Cr39OxgC.js";import"./Dialog-DAgI8QrG.js";import"./Button-CztCXt43.js";import"./utils-DM5Jp8EX.js";import"./ProgressBar-DhNSphWE.js";import"./Label-ChTBNZrK.js";import"./Hidden-D0_rVqY-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-0hwKkY3Z.js";import"./context-DOSLHoOx.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BBaWFJWg.js";import"./useFocus-BKws8v7-.js";import"./useFocusRing-DEM6_VkF.js";import"./useFocusable-BcdgZhOs.js";import"./RSPContexts-CLcTs2D_.js";import"./OverlayArrow-DY7ECRqq.js";import"./useControlledState-DsUZezc6.js";import"./Collection-kTlo8aNF.js";import"./CollectionBuilder-DHL6mUJ2.js";import"./SelectionIndicator-Bi_ZzqWB.js";import"./Separator-BpDC4shb.js";import"./Text-CzkXk5bL.js";import"./SelectionManager-B-CgmQdR.js";import"./useEvent-D8AEfF0F.js";import"./useCollator-DSAWxNmx.js";import"./FocusScope-CxLgpb_M.js";import"./useLocalizedStringFormatter-hxpvTBNb.js";import"./VisuallyHidden-CIPoghQB.js";import"./IconWarning-MWZFtagw.js";import"./remote-BHShYJ5P.js";import"./Text-PyhJCmvh.js";import"./browser-BdJDgoMU.js";import"./EmulatedBoldText-Bbt3btdp.js";import"./LoadingSpinner-C-WbSXYT.js";import"./OverlayTrigger-D_VcfVVD.js";import"./DialogTriggerView-BD3bRwl-.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
