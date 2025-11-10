import{j as r,r as h}from"./iframe-BUpOconN.js";import{a as p,u as a,F as d,t as F}from"./Form-BE9ZVYLW.js";import{L as s}from"./Label-CfIUyjLz.js";import{B as m}from"./Button-BI2nRdMO.js";import{S as x}from"./Section-BpWTwwJh.js";import{A as E}from"./ActionGroup-DfParnZE.js";import{s as l}from"./Action-zZ74f8ZW.js";import{m as n,F as j}from"./Modal-6HiJrUaX.js";import"./index-nuYtCEEu.js";import"./dynamic-BC3S0Bwc.js";import"./flowComponent-BlNboq0M.js";import"./index-DUL0RQ8a.js";import"./clsx-B-dksMZM.js";import"./index-DbC_ni2B.js";import"./useLocalizedStringFormatter-BfAN4zIg.js";import"./context-BerssnGJ.js";import"./browser-BvUtNH1Q.js";import"./utils-D0zgVK2Q.js";import"./ProgressBar-CJ9Fgy9N.js";import"./Hidden-BRxj41U4.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BhCngq7e.js";import"./Text-BmeR1AHd.js";import"./EmulatedBoldText-BYxux4hO.js";import"./LoadingSpinner-BP3hPEk8.js";import"./Button-kwZ3-LYf.js";import"./useFocusRing-Ctd_QOVX.js";import"./useFocusable-DIihcfGE.js";import"./Dialog-9peppKdC.js";import"./RSPContexts-DHzB_yYn.js";import"./OverlayArrow-YGRreMIm.js";import"./useControlledState-CATx7UtX.js";import"./Collection-8CZs5R9B.js";import"./CollectionBuilder-DKRji49J.js";import"./SelectionIndicator-Bv8zjct6.js";import"./Separator-C30545Sk.js";import"./getActionGroupSlot-CQ_4bzXc.js";import"./useStatic-lOwByp-V.js";import"./context-kOiZEgEs.js";import"./Popover-Ba6VttQl.js";import"./OverlayTrigger-BUfLbgE9.js";import"./ControlledNotification-CFPZ3UPn.js";import"./ClearPropsContextView-B4rUpvsn.js";import"./LayoutCard-WSxHsShP.js";import"./Accordion-DpimxwIb.js";import"./Alert-DUPmf3UR.js";import"./AlertIcon-BFFrkh8K.js";import"./AlertBadge-D6ZmWE1l.js";import"./Align-DgAAqJuR.js";import"./TableFooterRow-gq6t1pjS.js";import"./SkeletonText-Wx_Alp0s.js";import"./Avatar-hm6V4z7e.js";import"./AvatarStack-BbKdzFSM.js";import"./Badge-Btso2PJq.js";import"./BigNumber-Be6raZDD.js";import"./Breadcrumb-DROHrIdn.js";import"./Link-Drjv9HvP.js";import"./Heading-BGtG9kd2.js";import"./Legend-4qLNiKsc.js";import"./FileCardList-DzvNlTUg.js";import"./Image-DhVv3MkO.js";import"./CodeBlock-Dpf4dOWR.js";import"./CopyButton-Cu_iGNqV.js";import"./Tooltip-BcgCPXFx.js";import"./react-children-utilities-DgZ1xxml.js";import"./Color-BJtZIrG9.js";import"./Content-CxwaKG9h.js";import"./ContextualHelpTrigger-B6DAcZCV.js";import"./CounterBadge-B9utj9pH.js";import"./DonutChart-CdxGHQVf.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CqRVRiHz.js";import"./Header-CHAQ6t4H.js";import"./Initials-DyWmpGOU.js";import"./InlineCode-Bi5CJncS.js";import"./LabeledValue-DFZAKBi6.js";import"./PopoverTrigger-p8rmDyPx.js";import"./Markdown-C9_BuH0P.js";import"./Separator-XIP1-rXu.js";import"./Message-B_Y9b0L6.js";import"./MessageSeparator-5RUgA9Mv.js";import"./NavigationGroup-7iBbwWvS.js";import"./Notification-B53uF-St.js";import"./NotificationProvider-Aaxx3LqL.js";import"./ProgressBar-CzaJizZm.js";import"./Rating-C8hC5BCb.js";import"./Skeleton-RgkCN70r.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),oo={title:"Integrations/React Hook Form/MarkdownEditor",component:p,render:()=>{const o=async f=>{await l(5e3),g(f)},u=a({defaultValues:{user:""}}),c=F();return r.jsx(d,{form:u,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(c,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx(E,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return h.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <MarkdownEditor isInvalid>
          <Label>Message</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </MarkdownEditor>
      </Form>;
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
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
}`,...i.parameters?.docs?.source}}};const to=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,to as __namedExportsOrder,oo as default};
