import{j as r,R}from"./iframe-B8noCUnE.js";import{P as i,a as x}from"./Popover-BajymHCd.js";import{B as h}from"./Button-B3YMBdra.js";import{u as P}from"./DialogTriggerView-CaeQRtG8.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B9__2qg6.js";import"./mergeRefs-BTOy5cDw.js";import"./index-D9cNYuBB.js";import"./Dialog-gc4bcspb.js";import"./Button-CwMP1veT.js";import"./utils-DycHSEAg.js";import"./ProgressBar-7N6gfaNO.js";import"./Label-DKLhlgli.js";import"./Hidden-CMD8PFZZ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CluaPz9W.js";import"./context-Co6CbP9u.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CGDWDrJK.js";import"./useFocus-DSdjnAxu.js";import"./useFocusRing-BLe8ZvF0.js";import"./useFocusable-CKRftzjl.js";import"./RSPContexts-CYAtt9lw.js";import"./OverlayArrow-CUBciziX.js";import"./useControlledState-Dup9xG7O.js";import"./Collection-B6gzk5_Q.js";import"./CollectionBuilder-DiBm4MiM.js";import"./Separator-BwYsz5vJ.js";import"./Text-C0NfSVbg.js";import"./Group-B5h_0xpF.js";import"./SearchField-gENajJ8Y.js";import"./FieldError-DD6GhKc_.js";import"./Form-BoGb9d1y.js";import"./useLocalizedStringFormatter-D4YUkL9v.js";import"./useTextField-BKrTYTzq.js";import"./useFormReset-BTHbcpmM.js";import"./TextField-IVl1Cmgq.js";import"./useEvent-Y0Lkcg6v.js";import"./SelectionManager-D_SvmIZH.js";import"./useCollator-CP4AKmd0.js";import"./FocusScope-b3Inwx6M.js";import"./VisuallyHidden-Dp1jIams.js";import"./IconWarning-CGV_Yvrm.js";import"./Text-Da5wEoPX.js";import"./browser-91muAEwH.js";import"./EmulatedBoldText-DHCsJE01.js";import"./LoadingSpinner-a5nWuss2.js";import"./context-BJExLDeV.js";import"./useStatic-D8Kg3g-R.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
