import{j as r,r as x}from"./iframe-CRkLAjqu.js";import{a as d,u as l,F as c,t as f}from"./Form-BNYc2K94.js";import{L as o}from"./Label-CvxcI9N1.js";import{B as a}from"./Button-iYH795Vf.js";import{S as F}from"./Section-BqZCPeF5.js";import{A as j}from"./ActionGroup-BFn71X1Q.js";import{s as u}from"./Action-BsqGwbaj.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import{a as t,F as b}from"./Modal-Bi24_mKy.js";import"./index-nuYtCEEu.js";import"./dynamic-C-Z2ndaa.js";import"./flowComponent-DkSEV7yV.js";import"./index-DwXT3Bgk.js";import"./clsx-B-dksMZM.js";import"./index-CMjPCm5R.js";import"./useLocalizedStringFormatter-lA2Sw6DW.js";import"./context-DLoU3qmJ.js";import"./browser-C4srWScu.js";import"./utils-BtHHKbwG.js";import"./ProgressBar-N5kov_o0.js";import"./Hidden-PDlBagOD.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-4dYG6Emm.js";import"./Text-SnGLDLtK.js";import"./EmulatedBoldText-UBCiYBJN.js";import"./LoadingSpinner-DRDb2q6e.js";import"./Button-CPrLpUny.js";import"./useFocusRing-PsHB6P7A.js";import"./useFocusable-ybZYv2TC.js";import"./Dialog-aAfd-0c1.js";import"./RSPContexts-Bb59CEQZ.js";import"./OverlayArrow-CxWIXwnM.js";import"./useControlledState-6rabR8D5.js";import"./Collection-B5dOcGsH.js";import"./CollectionBuilder-uHK_yZ9p.js";import"./SelectionIndicator-CTOSa6og.js";import"./Separator-ARlWDSvP.js";import"./getActionGroupSlot-D4mouN9v.js";import"./useStatic-CAsZlBox.js";import"./context-B-s8oBfA.js";import"./Popover-JmyjzJuR.js";import"./OverlayTrigger-8Ptq7Mev.js";import"./ControlledNotification-D2TmofCz.js";import"./ClearPropsContextView-C5LrpGQW.js";import"./LayoutCard-CjdwpB7h.js";import"./Accordion-ClEYPWkh.js";import"./Alert-P7MV_jtv.js";import"./AlertIcon-pJx2ML-T.js";import"./AlertBadge-CVYh_HdZ.js";import"./Align-Do9EmKaA.js";import"./TableFooterRow-C9_irqle.js";import"./SkeletonText-TVqlyhy4.js";import"./Avatar-CM3dbqm8.js";import"./AvatarStack-B8z7c5R-.js";import"./Badge-21AXCBg-.js";import"./BigNumber-DfUNeOzh.js";import"./Breadcrumb-BS8Lt9IY.js";import"./Link-Bw_LfIEu.js";import"./Heading-y35Y4q5x.js";import"./Legend-f_DtJubJ.js";import"./FileCardList-BMd6bLKO.js";import"./Image-BedWGGF1.js";import"./CodeBlock-C2vrlOIH.js";import"./CopyButton-BigcnsSL.js";import"./Tooltip-BKVABRbd.js";import"./react-children-utilities-DrPwd9RA.js";import"./Color-C03W6dEE.js";import"./Content-RElVSMrp.js";import"./ContextualHelpTrigger-Dp6H1ZMR.js";import"./CounterBadge-BnlKefE7.js";import"./DonutChart-BO_WhV9B.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DRURjWVs.js";import"./Header-FG4VMbdE.js";import"./Initials-DJ-D-vED.js";import"./InlineCode-Tzhzu6PC.js";import"./LabeledValue-a7txHIua.js";import"./PopoverTrigger-BZFX4_wd.js";import"./Markdown-7wMzE-35.js";import"./Separator-BVax_g_I.js";import"./Message-C7VfP3LJ.js";import"./MessageSeparator-iWd5-cu6.js";import"./NavigationGroup-DT01Utp1.js";import"./Notification-Cmaq8QdB.js";import"./NotificationProvider-CCZjyPrZ.js";import"./ProgressBar-Bgc3cD6n.js";import"./Rating-Cicu1Jno.js";import"./Skeleton-DtNrP5cT.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),te={title:"Integrations/React Hook Form/TextArea",component:d,render:()=>{const i=async h=>{await u(1500),y(h)},e=l({defaultValues:{message:"",messageDefaultValue:g.medium,messageRequired:"",messageMaxLength:""}}),m=f();return r.jsx(c,{form:e,onSubmit:i,children:r.jsxs(F,{children:[r.jsx(m,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(m,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(m,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(m,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsx(j,{children:r.jsx(a,{type:"submit",children:"Submit"})})]})})}},s={},n={render:i=>{const e=l();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},p={render:i=>{const e=l();return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(a,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(a,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(a,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
        </Field>
        <TextArea isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextArea>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const ie=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,p as WithFocus,ie as __namedExportsOrder,te as default};
