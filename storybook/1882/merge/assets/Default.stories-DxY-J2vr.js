import{j as r,R}from"./iframe-Budb-7am.js";import{P as i,a as x}from"./Popover-B2VYKz7m.js";import{B as h}from"./Button-DlmJA7gy.js";import{u as P}from"./DialogTriggerView-DE1FaN1m.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-HNH7RKnU.js";import"./mergeRefs-BTIKDTd_.js";import"./index-BpM7E2Cn.js";import"./Dialog-D1PODoJe.js";import"./Button-DjLWq9Wn.js";import"./utils-BvIm0V7l.js";import"./ProgressBar-CfQlEPzK.js";import"./Label-RM_Po7kI.js";import"./Hidden-ldu86gX3.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-TSCdqSxt.js";import"./context-CJMSS7cd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-loP-J0cx.js";import"./useFocus-Pkimm2oK.js";import"./useFocusRing-Dpjm87_-.js";import"./useFocusable-CC21Us72.js";import"./RSPContexts-Tr5byqnH.js";import"./OverlayArrow-DviLC0jr.js";import"./useControlledState-SkoShBYt.js";import"./Collection-CvfcDEqP.js";import"./CollectionBuilder-goJFEW7Y.js";import"./Separator-D8RFWE6v.js";import"./Text-3Ba5r2Ha.js";import"./Group-DBRwONdh.js";import"./SearchField-CJT12BWN.js";import"./FieldError--Cn4xsFj.js";import"./Form-DC4Rz7ax.js";import"./useLocalizedStringFormatter-CybNj2CY.js";import"./useTextField-B5KjZWGb.js";import"./useFormReset-Y1wMMKwI.js";import"./TextField-BONCp9nZ.js";import"./useEvent-Ced8YBYQ.js";import"./SelectionManager-CyTDI0bw.js";import"./useCollator-DG886A6G.js";import"./FocusScope-Bx0T309W.js";import"./VisuallyHidden-BhwKMH6u.js";import"./IconWarning-DHwZhMPm.js";import"./Text-1Vh0OzT8.js";import"./browser-DtJAwUnv.js";import"./EmulatedBoldText-os5LgzLJ.js";import"./LoadingSpinner-akPoSbp3.js";import"./context-BsbU81yG.js";import"./useStatic-DaioOtN4.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
