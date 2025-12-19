import{j as r,R as a}from"./iframe-DyIQYB7R.js";import{P as i}from"./Popover-BS-N1A-i.js";import{B as n}from"./Button-C3sAJBlh.js";import{P as c}from"./PopoverTrigger-Aks3-dAt.js";import{u as l}from"./useOverlayController-BUDO6s9b.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B46dTgZy.js";import"./index-DNyY7P3f.js";import"./index-BAJQpnn3.js";import"./OverlayContextProvider-D2R86dNb.js";import"./context--viOmW11.js";import"./useStatic-CPovvC2L.js";import"./Dialog-Bezv0IMM.js";import"./Button-BuUG1_MS.js";import"./utils-Br5k-T_U.js";import"./ProgressBar-BLYv6NCO.js";import"./Label-DLjzrNJv.js";import"./Hidden-CjE_I8s3.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cx64g9XI.js";import"./context-DQwa7-Zw.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DBMxrrfH.js";import"./useFocus-MkZ0Yize.js";import"./useFocusRing-Dsvy8-H7.js";import"./useFocusable-BzRC0Akk.js";import"./RSPContexts-D0G5Z96Z.js";import"./OverlayArrow-B8joZ1vL.js";import"./useControlledState-C9rhpCZz.js";import"./Collection-BGTuQL6n.js";import"./CollectionBuilder-DV1KSVZF.js";import"./SelectionIndicator-DEPDk5Cv.js";import"./Separator-BxbCemNh.js";import"./Text--49tgveg.js";import"./SelectionManager-DkxBPn8A.js";import"./useEvent-CtnbpMU6.js";import"./useCollator-CNrMRXe4.js";import"./FocusScope-CPYLtjFE.js";import"./useLocalizedStringFormatter-C8zgnVvK.js";import"./VisuallyHidden-CpJBcPMb.js";import"./IconWarning-BlqJF_wS.js";import"./remote-CduUCN7o.js";import"./Text-DP5VQe4y.js";import"./browser-Dsy2EDmz.js";import"./EmulatedBoldText-B3WFDqoc.js";import"./LoadingSpinner-BJz_a5cm.js";import"./OverlayTrigger-Dkelca7C.js";import"./DialogTriggerView-DaaYLo3X.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
