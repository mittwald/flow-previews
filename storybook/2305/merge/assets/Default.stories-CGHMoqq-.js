import{j as r,R as a}from"./iframe-nlVW-CPZ.js";import{P as i}from"./Popover-D2O_yi7O.js";import{B as n}from"./Button-_Sn69Jgj.js";import{P as c}from"./PopoverTrigger-DdX2UgDr.js";import{u as l}from"./useOverlayController-52PC3yWy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-HOniYMNn.js";import"./index-C9GmpRgu.js";import"./index-DrBjklCk.js";import"./OverlayContextProvider-CMO4Tng6.js";import"./context-DJb9q1Xr.js";import"./useStatic-C5UephlJ.js";import"./Dialog-zXGOOBEm.js";import"./Button-BXbNlZWB.js";import"./utils-CyuEFqip.js";import"./ProgressBar-CIT85dGK.js";import"./Label-txjD4aFE.js";import"./Hidden-B4CC7Km1.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUbax7la.js";import"./context-CIGB7i0H.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BSHzPeES.js";import"./useFocus-CD1ZzMvo.js";import"./useFocusRing-0Z36i33d.js";import"./useFocusable-DHxyzauV.js";import"./RSPContexts-DlUCcPRc.js";import"./OverlayArrow-xJgx9UYQ.js";import"./useControlledState-ywoEmBU4.js";import"./Collection-VsHvURZ5.js";import"./CollectionBuilder-BC18ROL9.js";import"./SelectionIndicator-DdhOYUUY.js";import"./Separator-Ei4AiFvo.js";import"./Text-sEy-KTn9.js";import"./SelectionManager-BMKEE2dl.js";import"./useEvent-C_UmhbA0.js";import"./useCollator-CE-FIC6l.js";import"./FocusScope-DihhZg9P.js";import"./useLocalizedStringFormatter-CkS4VLgI.js";import"./VisuallyHidden-44O2XzGD.js";import"./IconWarning-VZ7ITFqu.js";import"./remote-D3GclicH.js";import"./Text-BzuDjaz9.js";import"./browser-BoEfPalF.js";import"./EmulatedBoldText-DYHVi4jR.js";import"./LoadingSpinner-X7Xu_AAn.js";import"./OverlayTrigger-DTUPogrt.js";import"./DialogTriggerView-swymmKh6.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
