import{j as r,r as x}from"./iframe-Bzotfv2d.js";import{c as n,u as p,F as a,t as E}from"./Form-NuKjq-E5.js";import{L as m}from"./Label-9yzciBbq.js";import{R as u,S as c}from"./ResetButton-BKQMjSLz.js";import{B as l}from"./Button-B5Yu3Ofr.js";import{S as j}from"./Section-BjhFx9b4.js";import{A as b}from"./ActionGroup-THbN8B7U.js";import{s as d}from"./Action-BGM-IIID.js";import{m as s,F as g}from"./Modal-COByggjk.js";import"./index-nuYtCEEu.js";import"./dynamic-XEUS-i0b.js";import"./flowComponent-Ce43WGqS.js";import"./index-Dtu7UrbV.js";import"./clsx-B-dksMZM.js";import"./index-s2lSSiFB.js";import"./useLocalizedStringFormatter-CEUFB_Kk.js";import"./context-CZ6Qg3vv.js";import"./browser-Da6kOqay.js";import"./utils-F6vOfgTC.js";import"./ProgressBar-DrjjCA4M.js";import"./Hidden-A2gmu8PL.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DA_wmemp.js";import"./Text-C-DP5r93.js";import"./EmulatedBoldText-CowooJQh.js";import"./LoadingSpinner-B7Dg5gJY.js";import"./Button-DKhocf4j.js";import"./useFocusRing-Bwoimiux.js";import"./useFocusable-DtwtCMr6.js";import"./Dialog-DRtGMcXs.js";import"./RSPContexts-94nDykOv.js";import"./OverlayArrow-w3VLB_7G.js";import"./useControlledState-BqxXkR6q.js";import"./Collection-BBYs79dF.js";import"./CollectionBuilder-BcriWVNa.js";import"./SelectionIndicator-CkQFqim6.js";import"./Separator-D-my95s-.js";import"./getActionGroupSlot-DupNakeF.js";import"./useStatic-CUbPzepq.js";import"./context-DytNMng2.js";import"./Popover-DIj_9e80.js";import"./OverlayTrigger-DYCZz7an.js";import"./ControlledNotification-TPI0xyld.js";import"./ClearPropsContextView-CsYOqVLr.js";import"./LayoutCard-J6TlJO4o.js";import"./Accordion-BptsSE4V.js";import"./Alert-eyCmAgC6.js";import"./AlertIcon-CgsKNc5r.js";import"./AlertBadge-S_MnisZk.js";import"./Align-BJUu4eGR.js";import"./TableFooterRow-DxgEmBL4.js";import"./SkeletonText-OeVXjdS7.js";import"./Avatar-cPF8oF7Q.js";import"./AvatarStack-BkUGgLvx.js";import"./Badge-CdzfZfsb.js";import"./BigNumber-BNjBbCLr.js";import"./Breadcrumb-B6JxXwVP.js";import"./Link-BAhU_8bm.js";import"./Heading-DTNjAjmU.js";import"./Legend-f-p8RcrW.js";import"./FileCardList-B5PDKscr.js";import"./Image-CQeciW3U.js";import"./CodeBlock-CnJ67bJ1.js";import"./CopyButton-sBgtGoeo.js";import"./Tooltip-DpS8robH.js";import"./react-children-utilities-X89ZXH3Y.js";import"./Color-Ch6SLtqy.js";import"./Content-D54xBao4.js";import"./ContextualHelpTrigger-vzTqAVe_.js";import"./CounterBadge-BT0YRSln.js";import"./DonutChart-BmBQlJrD.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DGT6z0iR.js";import"./Header-DK-dy0Ik.js";import"./Initials-BjRxm0kU.js";import"./InlineCode-Dw8GCp6l.js";import"./LabeledValue-BUIGIaaH.js";import"./PopoverTrigger-Q37AsHcH.js";import"./Markdown-MT0EBmbc.js";import"./Separator-BnZ4szOt.js";import"./Message-DSIYRhqg.js";import"./MessageSeparator-DiJiVxnC.js";import"./NavigationGroup-BnO0sRue.js";import"./Notification-BIJ3tqS6.js";import"./NotificationProvider-Bad9adCH.js";import"./ProgressBar-DxbK2q7l.js";import"./Rating-CvLf8bfK.js";import"./Skeleton-BSBbHv2z.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),io={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=p({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const mo=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,mo as __namedExportsOrder,io as default};
