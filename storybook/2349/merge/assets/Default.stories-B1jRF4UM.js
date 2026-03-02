import{j as r,R as a}from"./iframe-uf-MKLgq.js";import{P as i}from"./Popover-C0XtAWTr.js";import{B as n}from"./Button-mfbo0dyR.js";import{P as c}from"./PopoverTrigger-CNEcAItd.js";import"./flowComponent-CR1nBuBt.js";import{u as l}from"./useOverlayController-CR9kocR-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-D-yAmZxE.js";import"./Dialog-CWJBmICf.js";import"./Button-Dm2G6Gzh.js";import"./utils-DZ6AixXo.js";import"./index-B7owIbBs.js";import"./index-CTOYeHPx.js";import"./ProgressBar-eIkI-azg.js";import"./Label-Cdykpluf.js";import"./Hidden-lq-QDLcj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CdaYwKww.js";import"./context-DqOu6PGu.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BdqiHW2G.js";import"./useFocus-BMvnG0Qw.js";import"./useFocusRing-190z59Bo.js";import"./useFocusable-C3B5EmJ3.js";import"./RSPContexts-nECt4NUH.js";import"./OverlayArrow-Cm4mIARd.js";import"./useControlledState-BuF4aZkb.js";import"./Collection-xojhNDd8.js";import"./CollectionBuilder-lmcmrTAc.js";import"./SelectionIndicator-DxP3RRah.js";import"./Separator-5pPigfCw.js";import"./Text-DCWOF5Yr.js";import"./SelectionManager-D4CiQoAv.js";import"./useEvent-B9v_LmSJ.js";import"./useCollator-BHzC2k5n.js";import"./FocusScope-1QvypY2n.js";import"./useLocalizedStringFormatter-C1Nv7YrM.js";import"./VisuallyHidden-CibrapRB.js";import"./IconWarning-BGOvrRAj.js";import"./remote-7esdTMhw.js";import"./Text-CwTgn3ty.js";import"./browser-CS6yJLU7.js";import"./EmulatedBoldText-BnnwN73K.js";import"./LoadingSpinner-CRqWvqjj.js";import"./OverlayTrigger-CMeRMZHt.js";import"./DialogTriggerView-DNqC0AE6.js";import"./useStatic-CS2X9Zkf.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
