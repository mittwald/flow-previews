import{j as r,R as a}from"./iframe-C8tsaODo.js";import{P as i}from"./Popover-D8RRHCNj.js";import{B as n}from"./Button-BxguJBhT.js";import{P as c}from"./PopoverTrigger-Bvl1mvzN.js";import"./flowComponent-BTZ0wFju.js";import{u as l}from"./useOverlayController-Bf797MvO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-Buisu9vo.js";import"./Dialog-CNeqByqP.js";import"./Button-Dm2nITC7.js";import"./utils-CdcYI7XL.js";import"./index-CLgTDDI2.js";import"./index-BNoG6unV.js";import"./ProgressBar-DplTBNX0.js";import"./Label-D1q-_ISO.js";import"./Hidden-BspDtBD-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-oJhcJRxp.js";import"./context-BwdmRhET.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-vv50L64r.js";import"./useFocus-D0DC1KKH.js";import"./platform-Dz8CwCz0.js";import"./useFocusRing-DauayxVe.js";import"./useFocusable-BW2xec3w.js";import"./RSPContexts-DtfJrVYY.js";import"./OverlayArrow-CxwkoRJi.js";import"./useControlledState-CN29789s.js";import"./Collection-Drvm3BjC.js";import"./CollectionBuilder-CUdEZ73w.js";import"./SelectionIndicator-5GEQvOaX.js";import"./Separator-AhH2lqvH.js";import"./Text-BkxlIu3p.js";import"./SelectionManager-BzBOXU82.js";import"./useEvent-520ieM62.js";import"./useCollator-q3kgEL61.js";import"./FocusScope-DFjW_d09.js";import"./useLocalizedStringFormatter-Bu8yFg8Y.js";import"./VisuallyHidden-hgCntKQk.js";import"./IconWarning-Up7WC4e0.js";import"./remote-Ckar2tK9.js";import"./Text-BE7lE0T8.js";import"./browser-qgMJ3NzC.js";import"./EmulatedBoldText-RMBLGP7I.js";import"./LoadingSpinner-C-PnKOui.js";import"./OverlayTrigger-xIqGS4XS.js";import"./DialogTriggerView-s2vCJh02.js";import"./useStatic-jSI8PS8c.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
