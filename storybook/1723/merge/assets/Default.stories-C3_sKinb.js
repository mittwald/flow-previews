import{j as r,R as a}from"./iframe-BpEavT04.js";import{P as i,a as c}from"./Popover-Db5mAq-N.js";import{B as n}from"./Button-CCZgVc0N.js";import{u as l}from"./DialogTriggerView-DpWn2yoK.js";import"./index-k6QiPQ3a.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-REkcYbgF.js";import"./mergeRefs-BC_BuoXn.js";import"./index-D2hwKXUM.js";import"./Dialog-DAXkTNx8.js";import"./Button-CEEqH0ki.js";import"./utils-CpHgE-S6.js";import"./ProgressBar-Bg2NAwr4.js";import"./Label-DpfcozJA.js";import"./Hidden-ZJTH-wDD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-6-vYiz3X.js";import"./context-1jMNVxHt.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DGfPwR5g.js";import"./useFocus-BaJLfW1J.js";import"./useFocusRing-DmvqpG-I.js";import"./useFocusable-C6ZTHalD.js";import"./RSPContexts-z3euxKCR.js";import"./OverlayArrow-CMORky_-.js";import"./useControlledState-Cjeeyz03.js";import"./Collection-ScrsRFZc.js";import"./CollectionBuilder-DQGAitfS.js";import"./Separator-VTYWgg2d.js";import"./Text-DWLjOUr2.js";import"./Group-DG2VW6yX.js";import"./SearchField-DiZ_IivY.js";import"./FieldError-BmEWAGf_.js";import"./Form-DJ2svD4f.js";import"./useLocalizedStringFormatter-DJSuZDt4.js";import"./useTextField-DUt04o8w.js";import"./useFormReset-CovQJR7M.js";import"./TextField-CoVUwaSO.js";import"./useEvent--O7DxxGG.js";import"./SelectionManager-BpD0kl0T.js";import"./useCollator-bTe8AndB.js";import"./FocusScope-CJ6Nm8ct.js";import"./VisuallyHidden-DD5pbayJ.js";import"./IconWarning-vA6HsYJq.js";import"./Text-CcXeyI30.js";import"./browser-DDZLlA7g.js";import"./EmulatedBoldText-CG9Doyve.js";import"./LoadingSpinner-CRDc6voB.js";import"./context-DfZyAinb.js";import"./useStatic-BZhl3rWC.js";const ar={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const cr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,cr as __namedExportsOrder,ar as default};
