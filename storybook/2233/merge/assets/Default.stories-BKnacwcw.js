import{j as r,R as a}from"./iframe-BMquwUxp.js";import{P as i}from"./Popover-N4AFYi9M.js";import{B as n}from"./Button-DvE0An6z.js";import{P as c}from"./PopoverTrigger-CR4lKhVE.js";import{u as l}from"./useOverlayController-CAAAYEI-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DgzAUF5h.js";import"./index-BYK8miAY.js";import"./index-cAMRUrux.js";import"./OverlayContextProvider-Box79lc0.js";import"./context-BbITb74L.js";import"./useStatic-BMpae3_g.js";import"./Dialog-Dx0VK2pV.js";import"./Button-CwpJPQ3S.js";import"./utils-C54becjs.js";import"./ProgressBar-ztA157SI.js";import"./Label-BA-uOG5q.js";import"./Hidden-DXpev5BT.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BNLCM250.js";import"./context-BcuHL9mG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B-RZvczw.js";import"./useFocus-DaRXVXg_.js";import"./useFocusRing-CjhJ1DIN.js";import"./useFocusable-DNP9d3st.js";import"./RSPContexts-BjvY3wPf.js";import"./OverlayArrow-LMfUU-b0.js";import"./useControlledState-C-7-yrsk.js";import"./Collection-CkKzGnvH.js";import"./CollectionBuilder-C63eWLYU.js";import"./SelectionIndicator-BIlCebKJ.js";import"./Separator-CIx6Mbjl.js";import"./Text-CPXkgTZA.js";import"./SelectionManager-WBqA1WyO.js";import"./useEvent-DDWvHjPW.js";import"./useCollator-BviFHu9Y.js";import"./FocusScope-BR9ShKUP.js";import"./useLocalizedStringFormatter-C4X4wsGr.js";import"./VisuallyHidden-D31Z6xaf.js";import"./IconWarning-wcTYZTVE.js";import"./remote-CiXlw4PI.js";import"./Text-EG4UQ_l2.js";import"./browser-CBlt42Oy.js";import"./EmulatedBoldText-CntJSrfE.js";import"./LoadingSpinner-BPW5hp_J.js";import"./OverlayTrigger-C_Vz8Pl3.js";import"./DialogTriggerView-D3ga0oyJ.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
