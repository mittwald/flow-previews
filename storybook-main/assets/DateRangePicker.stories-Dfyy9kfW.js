import{j as e,r as g}from"./iframe-CXtvBV5-.js";import{b as d,u as c,F as l,t as D}from"./Form-BbT170GB.js";import{L as t}from"./Label-BsNkG_q3.js";import{R as h,S as F}from"./ResetButton-BM9UVWDk.js";import{B as p}from"./Button-B1zeu3c2.js";import{S as b,s as u}from"./Section-Cfn-btcH.js";import{A as S}from"./ActionGroup-76WE-uDm.js";import{B as f,G as o,$ as R,E,v as m,g as B}from"./TimeField-BLflHk5O.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-d7RV2m3i.js";import"./PropsContextProvider-BygdkkPC.js";import"./mergeRefs-XVX53w-Z.js";import"./index-ChNj5jQF.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CRhy_wW7.js";import"./context-CAEu_mOG.js";import"./browser-Du_NX0QX.js";import"./utils-qd2QOFm2.js";import"./ProgressBar-BKXLtSPJ.js";import"./Hidden-CuDHI-By.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BhkQzOu2.js";import"./Text-CMr19a6m.js";import"./EmulatedBoldText-BlfminYz.js";import"./LoadingSpinner-8mK8rEyJ.js";import"./Button-Czyxm9kV.js";import"./useFocusRing-B4KbP9xH.js";import"./useFocusable-Bz2ht442.js";import"./context-BYM96aX5.js";import"./RSPContexts-CwFlS_g1.js";import"./Collection-Dzcp4a7b.js";import"./CollectionBuilder-D3qe7MnH.js";import"./SelectionIndicator-CtMNhqjQ.js";import"./Separator-B4Qn40UI.js";import"./useStatic-CaDi_bvV.js";import"./Accordion-0Pp4Qh68.js";import"./Alert-CqNDQYoG.js";import"./AlertIcon-CV1zk-Xj.js";import"./AlertBadge-uNDoePGd.js";import"./Align-BmR42nkq.js";import"./Popover-BDQF3mLq.js";import"./OverlayTrigger-EmUXyo3B.js";import"./TableFooterRow-BFXHFHbH.js";import"./SkeletonText-Bu_fUB4Q.js";import"./Avatar-B3QvG10-.js";import"./AvatarStack-Cap2B7L3.js";import"./Badge-CpmTQ8o9.js";import"./BigNumber-BjFcKf7O.js";import"./Breadcrumb-Dqt6p75N.js";import"./Link-4Q0a9Nwo.js";import"./Heading-BrBtBi-y.js";import"./Legend-DjwS0-g4.js";import"./FileCardList-DumOlmwR.js";import"./Image-CUtbNuBW.js";import"./Color-BKfHjzKa.js";import"./Content-7cfCqjj6.js";import"./ContextualHelpTrigger-BC8S8E_S.js";import"./CounterBadge-CtF233lE.js";import"./DonutChart-DXXMJftD.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BL-nBC4B.js";import"./Header-D_XWctB_.js";import"./Initials-CFarEfIW.js";import"./InlineCode-BqXOUe9b.js";import"./PopoverTrigger-CRfGGebp.js";import"./Separator-DLNm_QtB.js";import"./Message-BiZAGwK8.js";import"./MessageSeparator-CYDLlDnj.js";import"./NavigationGroup-2W6CdmgF.js";import"./Notification-Bvs2MP1B.js";import"./NotificationProvider-DS7rbb_m.js";import"./ProgressBar-C6BmRW-m.js";import"./Rating-vrPWheMU.js";import"./Skeleton-C1XPs7Yz.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Ye={title:"Integrations/React Hook Form/DateRangePicker",component:d,render:()=>{const r=async j=>{await u(1500),y(j)},x=c({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(l,{form:x,onSubmit:r,children:e.jsxs(b,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(S,{children:[e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=c({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=c({defaultValues:{field:""}});return e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
