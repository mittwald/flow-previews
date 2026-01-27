import{j as r,R as a}from"./iframe-EUG4rdOg.js";import{P as i}from"./Popover-CaMCpQGe.js";import{B as n}from"./Button-CEake6G1.js";import{P as c}from"./PopoverTrigger-DcPYI1gN.js";import{u as l}from"./useOverlayController-8UNjRd9m.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C1dTLmWR.js";import"./index-DTdnl-5o.js";import"./index-Dmbpubym.js";import"./OverlayContextProvider-bBBj8Jql.js";import"./context-B_Qm6y3p.js";import"./useStatic-uvHDPGza.js";import"./Dialog-ClYDKCvQ.js";import"./Button-_TVwxj4G.js";import"./utils-DJPQq0Ir.js";import"./ProgressBar-CixwbPNP.js";import"./Label-D6dDxJKJ.js";import"./Hidden-CsejW8LP.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Ddt3ftMp.js";import"./context-DxYQrQkA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CyxS_pZ-.js";import"./useFocus-Ca80QzG_.js";import"./useFocusRing-pMATsfPY.js";import"./useFocusable-YuTP7Rcp.js";import"./RSPContexts-DeOxvpD0.js";import"./OverlayArrow-D1DBrKZH.js";import"./useControlledState-DorIVmrH.js";import"./Collection-D08qzwe9.js";import"./CollectionBuilder-B2OL-l6X.js";import"./SelectionIndicator-CBEc_uRa.js";import"./Separator-Hxx-CpzA.js";import"./Text-BNRjjFE0.js";import"./SelectionManager-l6xAmoDy.js";import"./useEvent-KRKJPCS3.js";import"./useCollator-DB4dbnWY.js";import"./FocusScope-BEv8tYIC.js";import"./useLocalizedStringFormatter-8TMbmljG.js";import"./VisuallyHidden-DwLUyGt6.js";import"./IconWarning-CN_aXaJM.js";import"./remote-Bl5KctCq.js";import"./Text-DlICJI4S.js";import"./browser-Dr5hWFfi.js";import"./EmulatedBoldText-wvGqieyl.js";import"./LoadingSpinner-CJqmAtLp.js";import"./OverlayTrigger-CAZY-Adw.js";import"./DialogTriggerView--p8kbOfS.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
