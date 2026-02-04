import{j as r,R as a}from"./iframe-CBdrHiu-.js";import{P as i}from"./Popover-Blf-QLvj.js";import{B as n}from"./Button-CvrzgGgN.js";import{P as c}from"./PopoverTrigger-CnzrP1-y.js";import{u as l}from"./useOverlayController-s1zH8rAH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-SJnnBAhb.js";import"./index-Dx3T5N_5.js";import"./index-DbZpFDe3.js";import"./OverlayContextProvider-DtYcAWZK.js";import"./context-RwMuvTef.js";import"./useStatic-Bx0cFIOO.js";import"./Dialog-C9BJ8Byi.js";import"./Button-DGOdyj-q.js";import"./utils-DRjcKwJb.js";import"./ProgressBar-DeVRnANw.js";import"./Label-Be9V6H5h.js";import"./Hidden-72868EZD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CJjwA-2F.js";import"./context-p6nKBAyO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BNG00Dag.js";import"./useFocus-BOx7sVQU.js";import"./useFocusRing-CFSl2bW1.js";import"./useFocusable-DA2EU5Pw.js";import"./RSPContexts-B6JknHHE.js";import"./OverlayArrow-C9WHoJ1C.js";import"./useControlledState-H50OY390.js";import"./Collection-vGtYQGRh.js";import"./CollectionBuilder-CquvtT24.js";import"./SelectionIndicator-CeaIsc91.js";import"./Separator-CTAmEu9t.js";import"./Text-DKFtzua6.js";import"./SelectionManager-B98Z3aaT.js";import"./useEvent-CaW49TJY.js";import"./useCollator-DAsNNJgX.js";import"./FocusScope-CTh9v3q6.js";import"./useLocalizedStringFormatter-BCYddyWG.js";import"./VisuallyHidden-DNW2U5ZQ.js";import"./IconWarning-B89fpQti.js";import"./remote-SRpD7Y2I.js";import"./Text-vxOKNzxr.js";import"./browser-DtunHlVO.js";import"./EmulatedBoldText-xhBM3BWX.js";import"./LoadingSpinner-B7nOYR-m.js";import"./OverlayTrigger-CiCUVE66.js";import"./DialogTriggerView-BNPiMxHz.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
