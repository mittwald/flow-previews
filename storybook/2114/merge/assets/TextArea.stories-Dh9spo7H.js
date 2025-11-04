import{j as r,r as x}from"./iframe-BnYuPSwa.js";import{a as d,u as l,F as c,t as f}from"./Form-CTmp9ROp.js";import{L as o}from"./Label-BsOGPmFL.js";import{B as a}from"./Button-D7B2hjaJ.js";import{S as F}from"./Section-DPXS4_zS.js";import{A as j}from"./ActionGroup-OB84NbT7.js";import{s as u}from"./Action-DJ16dVnI.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import{a as t,F as b}from"./Modal-CMwT1WB3.js";import"./index-nuYtCEEu.js";import"./dynamic-Dm-4Ig_M.js";import"./flowComponent-DiACFF0p.js";import"./index-BcFNTWxO.js";import"./clsx-B-dksMZM.js";import"./index-CqvtBndu.js";import"./useLocalizedStringFormatter-Cnytr8Uw.js";import"./context-DQlYt1c9.js";import"./browser-Bkf_ja0R.js";import"./utils-DoWPBSSq.js";import"./ProgressBar-BRViR90l.js";import"./Hidden-C5Dr68xZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BustMFuX.js";import"./Text-DmoS4eOG.js";import"./EmulatedBoldText-DyenmRAR.js";import"./LoadingSpinner-14_SbsZZ.js";import"./Button-C47MeqAR.js";import"./useFocusRing-CPn0GoCO.js";import"./useFocusable-bs-iuI5B.js";import"./Dialog-BiHrEAWw.js";import"./RSPContexts-DdoqaBcc.js";import"./OverlayArrow-DrXNZQ3T.js";import"./useControlledState-Cpob7QcG.js";import"./Collection-BD1KYYyZ.js";import"./CollectionBuilder-DbTeSjLO.js";import"./SelectionIndicator-B0tJx4x8.js";import"./Separator-Bd0C07Us.js";import"./getActionGroupSlot-DLw-maV0.js";import"./useStatic-B3gZPUVa.js";import"./context-CLEKsYXA.js";import"./Popover-CIQAqIV0.js";import"./OverlayTrigger-dzvMh6qS.js";import"./ControlledNotification-DFyhdCgQ.js";import"./ClearPropsContextView-CsEGO0Nn.js";import"./LayoutCard-BqXQhFvn.js";import"./Accordion-DBVhvv3-.js";import"./Alert-Bn9swion.js";import"./AlertIcon-B4i3LjbA.js";import"./AlertBadge-B-Z_FZet.js";import"./Align-qE7NmhZJ.js";import"./TableFooterRow-tTbQ-t0r.js";import"./SkeletonText-D3gw5PRP.js";import"./Avatar-B7jo30ig.js";import"./AvatarStack-GCRCG9vj.js";import"./Badge-BM88wgML.js";import"./BigNumber-DdChOXuv.js";import"./Breadcrumb-30UhIvGz.js";import"./Link-CQXfsiwR.js";import"./Heading-4zkTqPYo.js";import"./Legend-BO-XPcOX.js";import"./FileCardList-CADZDmbR.js";import"./Image-D6oVUh4j.js";import"./CodeBlock-Dx6NJdQY.js";import"./CopyButton-C-PHfocO.js";import"./Tooltip-bYhq-tOp.js";import"./react-children-utilities-DSiaUIOe.js";import"./Color-D8b8dr-e.js";import"./Content-B8GWvRnh.js";import"./ContextualHelpTrigger-9AdY9RaJ.js";import"./CounterBadge-Ca9fUhDU.js";import"./DonutChart-CMqab4Gx.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BNBKeAQZ.js";import"./Header-Edj1w5H7.js";import"./Initials-tqv3AKZA.js";import"./InlineCode-CNZzcUkk.js";import"./LabeledValue-BHKpE3hG.js";import"./PopoverTrigger-B1k_GuHv.js";import"./Markdown-BCg6CSiV.js";import"./Separator-CxMrgUmw.js";import"./Message-Bp4nIuQ2.js";import"./MessageSeparator-U6bJZDm5.js";import"./NavigationGroup-D0_CAdq_.js";import"./Notification-DTPhDc6_.js";import"./NotificationProvider-DC5Mfz_i.js";import"./ProgressBar-rB7SKFsx.js";import"./Rating-BSwAqbXq.js";import"./Skeleton-CYJlRTn2.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),te={title:"Integrations/React Hook Form/TextArea",component:d,render:()=>{const i=async h=>{await u(1500),y(h)},e=l({defaultValues:{message:"",messageDefaultValue:g.medium,messageRequired:"",messageMaxLength:""}}),m=f();return r.jsx(c,{form:e,onSubmit:i,children:r.jsxs(F,{children:[r.jsx(m,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(m,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(m,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(m,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsx(j,{children:r.jsx(a,{type:"submit",children:"Submit"})})]})})}},s={},n={render:i=>{const e=l();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},p={render:i=>{const e=l();return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(a,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(a,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(a,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
