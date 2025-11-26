import{j as e,r as g}from"./iframe-BULoVSu-.js";import{b as d,u as c,F as l,t as D}from"./Form-BHs9YWf-.js";import{L as t}from"./Label-DWCkXaJt.js";import{R as h,S as F}from"./ResetButton-DLtgrkVV.js";import{B as p}from"./Button-DvOPlqIW.js";import{S as b,s as u}from"./Section-dZ6T0Qjb.js";import{A as S}from"./ActionGroup-CdzBskC5.js";import{B as f,G as o,$ as R,E,v as m,g as B}from"./TimeField-1hPaxYRS.js";import"./index-nuYtCEEu.js";import"./dynamic-D5pGRiRC.js";import"./PropsContextProvider-BPIZn01x.js";import"./mergeRefs-CEsjPslJ.js";import"./index-DQ_hsp85.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CNoz61n8.js";import"./context-BQ6yD6Hs.js";import"./browser-CQOPH7Oy.js";import"./utils-BZ7EFgdg.js";import"./ProgressBar-CiVynXjH.js";import"./Hidden-C5LzDjRJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DrICVJv-.js";import"./Text-Bg3HcGTD.js";import"./EmulatedBoldText-CVrOLZNg.js";import"./LoadingSpinner-BfUy7fQr.js";import"./Button-DWJqXgIw.js";import"./useFocusRing-qHICYkG6.js";import"./useFocusable-BJ4RiU3A.js";import"./context-DrExWdfs.js";import"./RSPContexts-DiGug6wA.js";import"./Collection-BGk_QoAN.js";import"./CollectionBuilder-CYT9SihX.js";import"./SelectionIndicator-DElX2Ml7.js";import"./Separator-CFtgJiRb.js";import"./useStatic-Dyq_KzQP.js";import"./Accordion-8FTg--rA.js";import"./Alert-DYZY0TL2.js";import"./AlertIcon-BlR5z9QA.js";import"./AlertBadge-DH8Oxe-N.js";import"./Align-B4QMXwt_.js";import"./Popover-CjClCujz.js";import"./OverlayTrigger-vU2Qjf7N.js";import"./TableFooterRow-BPCO49YC.js";import"./SkeletonText-BTeejoSt.js";import"./Avatar-BfIiybJY.js";import"./AvatarStack-BxKBxtVU.js";import"./Badge-CAMn07m4.js";import"./BigNumber-rg1cxAc2.js";import"./Breadcrumb-CYVN-SjU.js";import"./Link-KCtn6aUA.js";import"./Heading-Ds4iBrHb.js";import"./Legend-DReYAr9-.js";import"./FileCardList-CKSx-0eT.js";import"./Image-DNEKXGy_.js";import"./Color-DizN4J9h.js";import"./Content-DA44jWO0.js";import"./ContextualHelpTrigger-Cq74vnwF.js";import"./CounterBadge-DqN2lUJ6.js";import"./DonutChart-ByHy_tf4.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BPxmEpFw.js";import"./Header-C-kaAsvR.js";import"./Initials-DzoATSJF.js";import"./InlineCode-CLVrphJo.js";import"./PopoverTrigger-CK-Br2ii.js";import"./Separator-D_J1GVIS.js";import"./Message-Cj4eSaLV.js";import"./MessageSeparator-BKcuFd8P.js";import"./NavigationGroup-BLC2he0l.js";import"./Notification-CPfWjlNe.js";import"./NotificationProvider-CF_1VnvW.js";import"./ProgressBar-C-I_U1Y0.js";import"./Rating-dHI8nJ9_.js";import"./Skeleton-ZxO1W6TI.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Ye={title:"Integrations/React Hook Form/DateRangePicker",component:d,render:()=>{const r=async j=>{await u(1500),y(j)},x=c({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(l,{form:x,onSubmit:r,children:e.jsxs(b,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(S,{children:[e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=c({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=c({defaultValues:{field:""}});return e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const ze=["Default","WithFieldError","WithFocus"];export{n as Default,s as WithFieldError,a as WithFocus,ze as __namedExportsOrder,Ye as default};
