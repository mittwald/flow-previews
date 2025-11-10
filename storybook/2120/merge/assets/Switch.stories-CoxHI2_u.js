import{j as r,r as F}from"./iframe-Bzotfv2d.js";import{c as n,u as p,F as a,t as S}from"./Form-NuKjq-E5.js";import{R as u,S as l}from"./ResetButton-BKQMjSLz.js";import{B as d}from"./Button-B5Yu3Ofr.js";import{S as x}from"./Section-BjhFx9b4.js";import{A as E}from"./ActionGroup-THbN8B7U.js";import{s as c}from"./Action-BGM-IIID.js";import{S as s,F as j}from"./Modal-COByggjk.js";import"./index-nuYtCEEu.js";import"./dynamic-XEUS-i0b.js";import"./flowComponent-Ce43WGqS.js";import"./index-Dtu7UrbV.js";import"./clsx-B-dksMZM.js";import"./index-s2lSSiFB.js";import"./useLocalizedStringFormatter-CEUFB_Kk.js";import"./context-CZ6Qg3vv.js";import"./browser-Da6kOqay.js";import"./utils-F6vOfgTC.js";import"./IconWarning-DA_wmemp.js";import"./Text-C-DP5r93.js";import"./EmulatedBoldText-CowooJQh.js";import"./LoadingSpinner-B7Dg5gJY.js";import"./Button-DKhocf4j.js";import"./ProgressBar-DrjjCA4M.js";import"./Hidden-A2gmu8PL.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Bwoimiux.js";import"./useFocusable-DtwtCMr6.js";import"./Dialog-DRtGMcXs.js";import"./RSPContexts-94nDykOv.js";import"./OverlayArrow-w3VLB_7G.js";import"./useControlledState-BqxXkR6q.js";import"./Collection-BBYs79dF.js";import"./CollectionBuilder-BcriWVNa.js";import"./SelectionIndicator-CkQFqim6.js";import"./Separator-D-my95s-.js";import"./getActionGroupSlot-DupNakeF.js";import"./useStatic-CUbPzepq.js";import"./context-DytNMng2.js";import"./Popover-DIj_9e80.js";import"./OverlayTrigger-DYCZz7an.js";import"./ControlledNotification-TPI0xyld.js";import"./ClearPropsContextView-CsYOqVLr.js";import"./LayoutCard-J6TlJO4o.js";import"./Accordion-BptsSE4V.js";import"./Alert-eyCmAgC6.js";import"./AlertIcon-CgsKNc5r.js";import"./AlertBadge-S_MnisZk.js";import"./Align-BJUu4eGR.js";import"./TableFooterRow-DxgEmBL4.js";import"./SkeletonText-OeVXjdS7.js";import"./Avatar-cPF8oF7Q.js";import"./AvatarStack-BkUGgLvx.js";import"./Badge-CdzfZfsb.js";import"./BigNumber-BNjBbCLr.js";import"./Breadcrumb-B6JxXwVP.js";import"./Link-BAhU_8bm.js";import"./Heading-DTNjAjmU.js";import"./Legend-f-p8RcrW.js";import"./FileCardList-B5PDKscr.js";import"./Image-CQeciW3U.js";import"./CodeBlock-CnJ67bJ1.js";import"./CopyButton-sBgtGoeo.js";import"./Tooltip-DpS8robH.js";import"./react-children-utilities-X89ZXH3Y.js";import"./Color-Ch6SLtqy.js";import"./Content-D54xBao4.js";import"./Label-9yzciBbq.js";import"./ContextualHelpTrigger-vzTqAVe_.js";import"./CounterBadge-BT0YRSln.js";import"./DonutChart-BmBQlJrD.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DGT6z0iR.js";import"./Header-DK-dy0Ik.js";import"./Initials-BjRxm0kU.js";import"./InlineCode-Dw8GCp6l.js";import"./LabeledValue-BUIGIaaH.js";import"./PopoverTrigger-Q37AsHcH.js";import"./Markdown-MT0EBmbc.js";import"./Separator-BnZ4szOt.js";import"./Message-DSIYRhqg.js";import"./MessageSeparator-DiJiVxnC.js";import"./NavigationGroup-BnO0sRue.js";import"./Notification-BIJ3tqS6.js";import"./NotificationProvider-Bad9adCH.js";import"./ProgressBar-DxbK2q7l.js";import"./Rating-CvLf8bfK.js";import"./Skeleton-BSBbHv2z.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),io={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},i={},e={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...e.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
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
}`,...m.parameters?.docs?.source}}};const eo=["Default","WithFieldError","WithFocus"];export{i as Default,e as WithFieldError,m as WithFocus,eo as __namedExportsOrder,io as default};
