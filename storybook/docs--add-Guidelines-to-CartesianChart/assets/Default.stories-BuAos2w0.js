import{j as r,R}from"./iframe-Ct0YhZ2w.js";import{P as i,a as x}from"./Popover-BtKD-QEY.js";import{B as h}from"./Button-DzWxEQls.js";import{u as P}from"./DialogTriggerView-BGtRBSVG.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DXGdmmnh.js";import"./mergeRefs-9fQ6ccEP.js";import"./index-DiPtFLdy.js";import"./Dialog-CAIBTckX.js";import"./Button-BQqMUkU2.js";import"./utils-ZYq7i5E4.js";import"./ProgressBar-BerxnO-h.js";import"./Label-B9yUG6H3.js";import"./Hidden-B-UfVuqf.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CFRZWafb.js";import"./context-C170bgop.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CCIxnJPX.js";import"./useFocus-BOvvpzaY.js";import"./useFocusRing-B79RLIIn.js";import"./useFocusable-Co66UmkD.js";import"./RSPContexts-CSqJcAwc.js";import"./OverlayArrow-Co-RMxdG.js";import"./useControlledState-BKGcljyy.js";import"./Collection-CsGYI6W2.js";import"./CollectionBuilder-BcuD1eRh.js";import"./Separator-B99z4htK.js";import"./Text-1hz8XXbQ.js";import"./Group-Cb0btd0m.js";import"./SearchField-BzrmJ9Dk.js";import"./FieldError-GfqWmPDy.js";import"./Form-D5t9IVHW.js";import"./useLocalizedStringFormatter-Di8CJoIO.js";import"./useTextField-CmZz0IWu.js";import"./useFormReset-B8uzDw4w.js";import"./TextField-BZzrHcv0.js";import"./useEvent-BiRRHzhl.js";import"./SelectionManager-CdGGEfbQ.js";import"./useCollator-BztlYHwj.js";import"./FocusScope-CiY9IOxE.js";import"./VisuallyHidden-C2BGRztG.js";import"./IconWarning-Nibz28Ko.js";import"./Text-c1auIdYf.js";import"./browser-DfqMGCP2.js";import"./EmulatedBoldText-BinEGydl.js";import"./LoadingSpinner-BsXh4HZo.js";import"./context-DgvMtz2m.js";import"./useStatic-QRqKr9NZ.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,f,v;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Rr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,Rr as __namedExportsOrder,hr as default};
