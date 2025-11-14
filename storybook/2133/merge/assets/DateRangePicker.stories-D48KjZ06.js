import{j as e,r as g}from"./iframe-C60aMdie.js";import{c as d,u as c,F as l,t as D}from"./Form-B7ahjlLL.js";import{L as t}from"./Label-CzVOnNLd.js";import{R as h,S as F}from"./ResetButton-1riTIdIi.js";import{B as p}from"./Button-jX--b59C.js";import{S,s as u}from"./Section-BTXSJ-5X.js";import{A as b}from"./ActionGroup-pA_bsRMT.js";import{H as f,J as o,$ as R,I as E,x as m,F as B}from"./Modal-BRLjWmcI.js";import"./index-nuYtCEEu.js";import"./dynamic-CVq1BkmJ.js";import"./flowComponent-jCG2SJhp.js";import"./index-my9L9zM2.js";import"./clsx-B-dksMZM.js";import"./index-CLR1PkMI.js";import"./useLocalizedStringFormatter-CwhdRj3j.js";import"./context-CbOMBxRf.js";import"./browser-CNA-G9XW.js";import"./utils-BQFwVYY5.js";import"./ProgressBar-B_mDm1JC.js";import"./Hidden-BZIUhw-w.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-B5fkZC-l.js";import"./Text-SUPQTMUT.js";import"./EmulatedBoldText-gDNBGAzw.js";import"./LoadingSpinner-EerxDvmb.js";import"./Button-CvbHAn2i.js";import"./useFocusRing-DC3IjPh5.js";import"./useFocusable-Dew49z7P.js";import"./context-DSrUG3BE.js";import"./RSPContexts-DTGtZjZs.js";import"./Collection-BnGKbvLc.js";import"./CollectionBuilder-CwoEUOyQ.js";import"./SelectionIndicator-DueQdBHH.js";import"./Separator-y5zzyFFC.js";import"./useStatic-vNm-dgAB.js";import"./getActionGroupSlot-CdLyQOZc.js";import"./FileCardList-CCCPEiGj.js";import"./Avatar-B7kisHtJ.js";import"./AlertIcon-C7zTMkoz.js";import"./Image-CXRwncHw.js";import"./Link-lNOdoot_.js";import"./ControlledNotification-DflLvVYg.js";import"./LayoutCard-BHGne7SD.js";import"./Accordion-CKOAUBtf.js";import"./Alert-BJKw0QeS.js";import"./AlertBadge-CnHLq6IR.js";import"./Align-BpStHQnP.js";import"./AvatarStack-TfH6cSvv.js";import"./BigNumber-CCd4dY5q.js";import"./Breadcrumb-DsZIUq31.js";import"./Heading-DAaBZvd2.js";import"./Legend-C-QoQfEn.js";import"./Color-DYvyagNb.js";import"./TableFooterRow-Byf_2RJW.js";import"./SkeletonText-DqQ9EdbR.js";import"./Content-CEAhgMHe.js";import"./CounterBadge-BSi8dS51.js";import"./DonutChart-DE-zhDub.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BTGMNUbe.js";import"./Header-CACiotaV.js";import"./Initials-CCakY2tg.js";import"./InlineCode-Cct-b4qD.js";import"./Separator-BSnGWgyT.js";import"./MessageSeparator-BdlWKUzt.js";import"./NavigationGroup-Bvrr1zmO.js";import"./Notification-CjMVwQai.js";import"./NotificationProvider-xKOj-JZj.js";import"./ProgressBar-BQfUYYSR.js";import"./Rating-CqYV9FLO.js";import"./Skeleton-CYpMvI04.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Je={title:"Integrations/React Hook Form/DateRangePicker",component:d,render:()=>{const r=async j=>{await u(1500),y(j)},x=c({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(l,{form:x,onSubmit:r,children:e.jsxs(S,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(b,{children:[e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=c({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=c({defaultValues:{field:""}});return e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
          <DateRangePicker>
            <Label>Future Date</Label>
            <FieldDescription>Select a future date</FieldDescription>
          </DateRangePicker>
        </Field>
        <DateRangePicker isInvalid>
          <Label>Future Date</Label>
          <FieldDescription>Select a future date</FieldDescription>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DateRangePicker>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DateRangePicker>
            <Label>Future Date</Label>
            <FieldDescription>Select a future date</FieldDescription>
          </DateRangePicker>
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
}`,...a.parameters?.docs?.source}}};const Ke=["Default","WithFieldError","WithFocus"];export{n as Default,s as WithFieldError,a as WithFocus,Ke as __namedExportsOrder,Je as default};
