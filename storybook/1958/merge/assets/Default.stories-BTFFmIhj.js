import{j as r,R}from"./iframe-BAzLYubM.js";import{P as i,a as x}from"./Popover-Bfr7_pQf.js";import{B as h}from"./Button-DJgbNtOP.js";import{u as P}from"./DialogTriggerView-MnquLDuj.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-EavNE9If.js";import"./mergeRefs-AgJlHGVQ.js";import"./index-aIHf1-d_.js";import"./Dialog-CNBL61sA.js";import"./Button-DEcgbODe.js";import"./utils-b3dZQxDg.js";import"./ProgressBar-B6A5wRyw.js";import"./Label-uX-YTZhO.js";import"./Hidden-CD1At3_Y.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Fj3twa-e.js";import"./context-dTk8Xbgu.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DP_wKln7.js";import"./useFocus-DNlriqLN.js";import"./useFocusRing-BpLfAbDy.js";import"./useFocusable-B5cC5QAy.js";import"./RSPContexts-DL_RbNY6.js";import"./OverlayArrow-DVbPN0at.js";import"./useControlledState-Ca8ITVoa.js";import"./Collection-CQV8aK6u.js";import"./CollectionBuilder-B31VuGbq.js";import"./Separator-CRdY-Wkq.js";import"./Text-BrSTDiHS.js";import"./Group-C36tMHps.js";import"./SearchField-DJpeDF7e.js";import"./FieldError-CY1AiRgy.js";import"./Form-VFHeLX6B.js";import"./useLocalizedStringFormatter-1HcLORhi.js";import"./useTextField-9L1zHPzc.js";import"./useFormReset-BLDHXQeI.js";import"./TextField-RDj9bqu6.js";import"./useEvent-zmd_ZeyS.js";import"./SelectionManager-CYYX1vob.js";import"./useCollator-BFbm-Er3.js";import"./FocusScope-Bn06IbqX.js";import"./VisuallyHidden-sQyJVZKI.js";import"./IconWarning-C8vW1cGr.js";import"./Text-CjPbBUZt.js";import"./browser-CzeCNbOa.js";import"./EmulatedBoldText-saOgMaUw.js";import"./LoadingSpinner-BkZn8ran.js";import"./context-Cca8XENB.js";import"./useStatic-Ck2rgCkC.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
