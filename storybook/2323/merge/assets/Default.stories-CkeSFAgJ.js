import{j as r,R as a}from"./iframe-BwxXT37i.js";import{P as i}from"./Popover-CGrzjmtZ.js";import{B as n}from"./Button-BPaKVUIt.js";import{P as c}from"./PopoverTrigger-B9cd3-ll.js";import"./flowComponent-CuECaAUk.js";import{u as l}from"./useOverlayController-Clvgh-dL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-BTOkgjHO.js";import"./Dialog-B0vuTUBy.js";import"./Button-Cy0UoRmV.js";import"./utils-CJgL2cA6.js";import"./index-DlX0XTQj.js";import"./index-DuE4n7_M.js";import"./ProgressBar-DCv0JTr3.js";import"./Label-tTpXQ0Np.js";import"./Hidden-DDJevZSF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClAEan5N.js";import"./context-CQJLc664.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bm2JbU_T.js";import"./useFocus-Czv-Zofa.js";import"./useFocusRing-m35H4vh1.js";import"./useFocusable-FNm71Fx1.js";import"./RSPContexts-CqVOzJuC.js";import"./OverlayArrow-D6upTp02.js";import"./useControlledState-NXAAE7WV.js";import"./Collection-CBsMtROt.js";import"./CollectionBuilder-C9gwXR-G.js";import"./SelectionIndicator-D823LuT6.js";import"./Separator-D3qEwsya.js";import"./Text-CMM9EMAj.js";import"./SelectionManager-DyNtsV4B.js";import"./useEvent-CJ8tZWHo.js";import"./useCollator-jEna2J2E.js";import"./FocusScope-DUfe_G21.js";import"./useLocalizedStringFormatter-CKZF_s44.js";import"./VisuallyHidden-BP4pgppw.js";import"./IconWarning-Dl-kSkvo.js";import"./remote-DESTNxfj.js";import"./Text-COIxE5M6.js";import"./browser-DWx5NGhf.js";import"./EmulatedBoldText-Cp5bM2Cx.js";import"./LoadingSpinner-C1b88oeC.js";import"./OverlayTrigger-DDMtWs7A.js";import"./DialogTriggerView-DgNiOD98.js";import"./useStatic-DbyoNtmr.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
