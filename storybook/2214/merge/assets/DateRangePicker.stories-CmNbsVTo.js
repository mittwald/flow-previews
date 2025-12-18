import{j as e,r as g}from"./iframe-ALQ5zsOr.js";import{b as d,u as c,F as l,t as D}from"./Form-BSuNEw67.js";import{L as t}from"./Label-DovPcrx0.js";import{R as h,S as F}from"./ResetButton-C9Qwvy6d.js";import{B as p}from"./Button-BX6tjTLL.js";import{S as b,s as u}from"./Section-Bs1N8UQx.js";import{A as S}from"./ActionGroup-CwDRFfGd.js";import{B as f,G as o,$ as R,E,v as m,g as B}from"./TimeField-BGaFn9l6.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-0GSV0qwf.js";import"./PropsContextProvider-CajZDkla.js";import"./mergeRefs-DuV0Rexf.js";import"./index-D7ydgW4V.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-D3jE5yaH.js";import"./context-kp7gAgjv.js";import"./browser-BKuntv9s.js";import"./utils-Co6jRk79.js";import"./ProgressBar-Be_QMw9N.js";import"./Hidden-BWCTvshd.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-e5IJmYa2.js";import"./Text-CARFdFUA.js";import"./EmulatedBoldText-BY9TtX8n.js";import"./LoadingSpinner-vZR7mZ_m.js";import"./Button-CMqrvij-.js";import"./useFocusRing-CKtfjksp.js";import"./useFocusable-Cd2GyxLR.js";import"./context-DQRC5U0a.js";import"./RSPContexts-CUYinsO9.js";import"./Collection-DLxcLWTn.js";import"./CollectionBuilder-C5lgjdY8.js";import"./SelectionIndicator-DGcgd3ZA.js";import"./Separator-C_CbFzxr.js";import"./useStatic-5go3Gdxn.js";import"./Accordion-BUE91It4.js";import"./Alert-DYosH7oc.js";import"./AlertIcon-CfY0Fdcx.js";import"./AlertBadge-XCHqrboo.js";import"./Align-BPEmxHoH.js";import"./Popover-uPtwk0G7.js";import"./OverlayTrigger-BGEoP9rw.js";import"./TableFooterRow-D1lPZp5u.js";import"./SkeletonText-w2TDxcrn.js";import"./Avatar-QqNm7BCQ.js";import"./AvatarStack-M9qsVSFW.js";import"./Badge-pH50ychv.js";import"./BigNumber-BLN-CZJ3.js";import"./Breadcrumb-BbJLeIhI.js";import"./Link-C8aOLutX.js";import"./Heading-D0DtiPxo.js";import"./Legend-CwaE3KaX.js";import"./FileCardList-Dr6bdZn3.js";import"./Image-CBcw_AfH.js";import"./Color-97yNqHhE.js";import"./Content-D5LTnoQh.js";import"./ContextualHelpTrigger-QzT4JqfM.js";import"./CounterBadge-8qsknsn0.js";import"./DonutChart-BZDaYje8.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C3I35rk-.js";import"./Header-BmFuB9FK.js";import"./Initials-GjCQVizr.js";import"./InlineCode-AnZuJLOL.js";import"./PopoverTrigger-Cfi7p5HS.js";import"./Separator-DUxRAwFB.js";import"./Message-evw6xdzh.js";import"./MessageSeparator-Cu_84WKB.js";import"./NavigationGroup-j5bwk659.js";import"./Notification-BFFQhJkq.js";import"./NotificationProvider-nOh3LXem.js";import"./ProgressBar-C-_9cUNc.js";import"./Rating-DC-OgzhD.js";import"./Skeleton-B9JjKPfi.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Ye={title:"Integrations/React Hook Form/DateRangePicker",component:d,render:()=>{const r=async j=>{await u(1500),y(j)},x=c({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(l,{form:x,onSubmit:r,children:e.jsxs(b,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(S,{children:[e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=c({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=c({defaultValues:{field:""}});return e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
