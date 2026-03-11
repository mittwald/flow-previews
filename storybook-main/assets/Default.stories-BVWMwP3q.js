import{j as r,R as a}from"./iframe-C037GO3p.js";import{P as i}from"./Popover-B6RVLTNX.js";import{B as n}from"./Button-Cf9guGvq.js";import{P as c}from"./PopoverTrigger-DA6Ozmgh.js";import"./flowComponent-DDhfot0o.js";import{u as l}from"./useOverlayController-CulrQTjS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-saupE8AB.js";import"./Dialog-Sd6ebC5F.js";import"./Button-3UAE6tol.js";import"./utils-B21QcS96.js";import"./index-wUcB077p.js";import"./index-aVIlTX7l.js";import"./ProgressBar-Cvwm74GX.js";import"./Label-B5WCISDn.js";import"./Hidden-CT4yCR-L.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-FMiMqQcP.js";import"./context-Cm0s8R8a.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DtHLFK3z.js";import"./useFocus-CuP2Z3Ew.js";import"./useFocusRing-D8Rjq8L2.js";import"./useFocusable-DZHoKnFR.js";import"./RSPContexts-Cx4BM4L8.js";import"./OverlayArrow-Ct00V4z2.js";import"./useControlledState-DIGHyhBs.js";import"./Collection--dT_Uf-3.js";import"./CollectionBuilder-BaeZE-8K.js";import"./SelectionIndicator-DMUN5t4K.js";import"./Separator-DqZ2iszF.js";import"./Text-BlWqR5Lx.js";import"./SelectionManager-DPHkBOMj.js";import"./useEvent-DWoTHX9Z.js";import"./useCollator-SPxqcFer.js";import"./FocusScope-ByEh1Q0k.js";import"./useLocalizedStringFormatter-yCwjB9xr.js";import"./VisuallyHidden-DBGkoZNP.js";import"./IconWarning-tMH4RyLr.js";import"./remote-BG6_lggN.js";import"./Text-1H8qvaGa.js";import"./browser-CtD1Hg4J.js";import"./EmulatedBoldText-BFdb5mKm.js";import"./LoadingSpinner-7anO2L1H.js";import"./OverlayTrigger-B4ic7Mjc.js";import"./DialogTriggerView-D43G2O2Q.js";import"./useStatic-zK9KTA7T.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
