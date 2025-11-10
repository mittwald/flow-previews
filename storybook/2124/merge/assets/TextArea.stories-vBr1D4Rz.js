import{j as r,r as x}from"./iframe-BUpOconN.js";import{a as d,u as l,F as c,t as f}from"./Form-BE9ZVYLW.js";import{L as o}from"./Label-CfIUyjLz.js";import{B as a}from"./Button-BI2nRdMO.js";import{S as F}from"./Section-BpWTwwJh.js";import{A as j}from"./ActionGroup-DfParnZE.js";import{s as u}from"./Action-zZ74f8ZW.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import{a as t,F as b}from"./Modal-6HiJrUaX.js";import"./index-nuYtCEEu.js";import"./dynamic-BC3S0Bwc.js";import"./flowComponent-BlNboq0M.js";import"./index-DUL0RQ8a.js";import"./clsx-B-dksMZM.js";import"./index-DbC_ni2B.js";import"./useLocalizedStringFormatter-BfAN4zIg.js";import"./context-BerssnGJ.js";import"./browser-BvUtNH1Q.js";import"./utils-D0zgVK2Q.js";import"./ProgressBar-CJ9Fgy9N.js";import"./Hidden-BRxj41U4.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BhCngq7e.js";import"./Text-BmeR1AHd.js";import"./EmulatedBoldText-BYxux4hO.js";import"./LoadingSpinner-BP3hPEk8.js";import"./Button-kwZ3-LYf.js";import"./useFocusRing-Ctd_QOVX.js";import"./useFocusable-DIihcfGE.js";import"./Dialog-9peppKdC.js";import"./RSPContexts-DHzB_yYn.js";import"./OverlayArrow-YGRreMIm.js";import"./useControlledState-CATx7UtX.js";import"./Collection-8CZs5R9B.js";import"./CollectionBuilder-DKRji49J.js";import"./SelectionIndicator-Bv8zjct6.js";import"./Separator-C30545Sk.js";import"./getActionGroupSlot-CQ_4bzXc.js";import"./useStatic-lOwByp-V.js";import"./context-kOiZEgEs.js";import"./Popover-Ba6VttQl.js";import"./OverlayTrigger-BUfLbgE9.js";import"./ControlledNotification-CFPZ3UPn.js";import"./ClearPropsContextView-B4rUpvsn.js";import"./LayoutCard-WSxHsShP.js";import"./Accordion-DpimxwIb.js";import"./Alert-DUPmf3UR.js";import"./AlertIcon-BFFrkh8K.js";import"./AlertBadge-D6ZmWE1l.js";import"./Align-DgAAqJuR.js";import"./TableFooterRow-gq6t1pjS.js";import"./SkeletonText-Wx_Alp0s.js";import"./Avatar-hm6V4z7e.js";import"./AvatarStack-BbKdzFSM.js";import"./Badge-Btso2PJq.js";import"./BigNumber-Be6raZDD.js";import"./Breadcrumb-DROHrIdn.js";import"./Link-Drjv9HvP.js";import"./Heading-BGtG9kd2.js";import"./Legend-4qLNiKsc.js";import"./FileCardList-DzvNlTUg.js";import"./Image-DhVv3MkO.js";import"./CodeBlock-Dpf4dOWR.js";import"./CopyButton-Cu_iGNqV.js";import"./Tooltip-BcgCPXFx.js";import"./react-children-utilities-DgZ1xxml.js";import"./Color-BJtZIrG9.js";import"./Content-CxwaKG9h.js";import"./ContextualHelpTrigger-B6DAcZCV.js";import"./CounterBadge-B9utj9pH.js";import"./DonutChart-CdxGHQVf.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CqRVRiHz.js";import"./Header-CHAQ6t4H.js";import"./Initials-DyWmpGOU.js";import"./InlineCode-Bi5CJncS.js";import"./LabeledValue-DFZAKBi6.js";import"./PopoverTrigger-p8rmDyPx.js";import"./Markdown-C9_BuH0P.js";import"./Separator-XIP1-rXu.js";import"./Message-B_Y9b0L6.js";import"./MessageSeparator-5RUgA9Mv.js";import"./NavigationGroup-7iBbwWvS.js";import"./Notification-B53uF-St.js";import"./NotificationProvider-Aaxx3LqL.js";import"./ProgressBar-CzaJizZm.js";import"./Rating-C8hC5BCb.js";import"./Skeleton-RgkCN70r.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),te={title:"Integrations/React Hook Form/TextArea",component:d,render:()=>{const i=async h=>{await u(1500),y(h)},e=l({defaultValues:{message:"",messageDefaultValue:g.medium,messageRequired:"",messageMaxLength:""}}),m=f();return r.jsx(c,{form:e,onSubmit:i,children:r.jsxs(F,{children:[r.jsx(m,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(m,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(m,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(m,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsx(j,{children:r.jsx(a,{type:"submit",children:"Submit"})})]})})}},s={},n={render:i=>{const e=l();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},p={render:i=>{const e=l();return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(a,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(a,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(a,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
