import{j as e,r as g}from"./iframe-FgJ_J-H0.js";import{b as d,u as c,F as l,t as D}from"./Form-BVuPoSOi.js";import{L as t}from"./Label-dIFs3d3H.js";import{R as h,S as F}from"./ResetButton-jFpFjYeg.js";import{B as p}from"./Button-DAV102-b.js";import{S as b,s as u}from"./Section-KcKraSFk.js";import{A as S}from"./ActionGroup-BJ9qHrpp.js";import{B as f,G as o,$ as R,E,v as m,g as B}from"./TimeField-Co7GP2GW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CcSJ2V2H.js";import"./PropsContextProvider-D4ZDxBE5.js";import"./mergeRefs-B0SFCKpc.js";import"./index-D5Q5r0EQ.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-T_wC2jpb.js";import"./context-BdkCFUfw.js";import"./browser-DUTkZfBO.js";import"./utils-CpAt2MQ0.js";import"./ProgressBar-C9bgo184.js";import"./Hidden-fZuF_gJA.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CTwTuPoy.js";import"./Text-DFL3SoXQ.js";import"./EmulatedBoldText-B0xGhkgA.js";import"./LoadingSpinner-D-ZvoQWA.js";import"./Button-D1iDLFQk.js";import"./useFocusRing-DWyZOWS1.js";import"./useFocusable-CcMdE3Gl.js";import"./context-Zd06eDB-.js";import"./RSPContexts-BtQRbm6D.js";import"./Collection-DzrsfNpG.js";import"./CollectionBuilder-BkEo1yPT.js";import"./SelectionIndicator-DXbR8Lbk.js";import"./Separator-CEsI0Otd.js";import"./useStatic-C1zZPFiS.js";import"./Accordion-io5UELOJ.js";import"./Alert-9jMZJopr.js";import"./AlertIcon-B3uKWtQk.js";import"./AlertBadge-H-rDyqf-.js";import"./Align-DmzMsv0T.js";import"./Popover-CMikV-wU.js";import"./OverlayTrigger--5L_1U0w.js";import"./TableFooterRow-CtbyytXV.js";import"./SkeletonText-6QEWsZGr.js";import"./Avatar-ClmGh38b.js";import"./AvatarStack-D2Xx6Bnf.js";import"./Badge-Dr16W0CP.js";import"./BigNumber-Dk3uhm2m.js";import"./Breadcrumb-BzzlR0li.js";import"./Link-BTa1ooRS.js";import"./Heading-CtwLqgxn.js";import"./Legend-D3LNNeFG.js";import"./FileCardList-B85HNlbk.js";import"./Image-Dt2xjXWg.js";import"./Color-Bp0ZXAXD.js";import"./Content-Gw2uLkjU.js";import"./ContextualHelpTrigger-4SkGlWeV.js";import"./CounterBadge-BXJ7T0jf.js";import"./DonutChart-C4u46woz.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BQ4xIGSR.js";import"./Header-DyVj_TzU.js";import"./Initials-Cm_DyWr3.js";import"./InlineCode-CZw0TC9N.js";import"./PopoverTrigger-CaH8hJY-.js";import"./Separator-lfjcoKvM.js";import"./Message-K29IWi_M.js";import"./MessageSeparator-DPflMeSl.js";import"./NavigationGroup-B5RjEnqs.js";import"./Notification-BfVd4W3J.js";import"./NotificationProvider-CQgaoiA5.js";import"./ProgressBar-DUshVboI.js";import"./Rating-C77bfPzz.js";import"./Skeleton-CN4c_iAv.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Ye={title:"Integrations/React Hook Form/DateRangePicker",component:d,render:()=>{const r=async j=>{await u(1500),y(j)},x=c({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(l,{form:x,onSubmit:r,children:e.jsxs(b,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(S,{children:[e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=c({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=c({defaultValues:{field:""}});return e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
