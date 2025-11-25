import{j as e,r as g}from"./iframe-CRHerQcT.js";import{b as d,u as c,F as l,t as D}from"./Form-CHvE1Qna.js";import{L as t}from"./Label-RXr9Ag3i.js";import{R as h,S as F}from"./ResetButton-KhvpTA0a.js";import{B as p}from"./Button-DOdtzIa_.js";import{S as b,s as u}from"./Section-DCbopNVT.js";import{A as S}from"./ActionGroup-bop6Cb2x.js";import{H as f,J as o,$ as R,I as E,x as m,F as B}from"./Modal-CHikTCfT.js";import"./index-nuYtCEEu.js";import"./dynamic-JzWN_IYl.js";import"./flowComponent-Po2jQ9NZ.js";import"./index-BbKg1nkj.js";import"./clsx-B-dksMZM.js";import"./index-DOvz_Dla.js";import"./useLocalizedStringFormatter-B1bSBhnk.js";import"./context-C5gXDLZB.js";import"./browser-C1kPNy51.js";import"./utils-B8O46aeb.js";import"./ProgressBar-NMXq-w2-.js";import"./Hidden-BcqgQAy4.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-S9zVz1Ke.js";import"./Text-sklVEIT5.js";import"./EmulatedBoldText-CArsfrvv.js";import"./LoadingSpinner-DjcUww4s.js";import"./Button-DPVH9eDh.js";import"./useFocusRing-DdX5Sdo5.js";import"./useFocusable-O8acuieM.js";import"./context-C4Lb4VEy.js";import"./RSPContexts-DxbMYf-Z.js";import"./Collection-BkWkcg8z.js";import"./CollectionBuilder-CTEpaBir.js";import"./SelectionIndicator-BJEbb9Gg.js";import"./Separator-CIAUU7Mv.js";import"./useStatic-CvvgeXIU.js";import"./FileCardList-BRkY0El4.js";import"./Avatar-B_AsKOkR.js";import"./AlertIcon-BgWetiy7.js";import"./Image-HxAJgvwY.js";import"./Link-DtavQq9t.js";import"./ControlledNotification-BLJs-Z1G.js";import"./Flex-Drl5GGOg.js";import"./Accordion-DRGBj4f5.js";import"./Alert-pe0uKkFF.js";import"./AlertBadge-DQMWdOiZ.js";import"./Align-DLnBGGPL.js";import"./AvatarStack-C0_9IyGj.js";import"./BigNumber-C6mS8Wh6.js";import"./Breadcrumb-Wl5kqkjz.js";import"./Heading-PN47vIIN.js";import"./Legend-B6gewgni.js";import"./Color-4MH-JGEe.js";import"./TableFooterRow-D_R0KUn8.js";import"./SkeletonText-DT_aA1lI.js";import"./Content-ozSr22eC.js";import"./CounterBadge-D5n1cIT5.js";import"./DonutChart-BzjBcwZM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BrKKi1jH.js";import"./Header-BkK7wzu1.js";import"./Initials-HsORkqZ3.js";import"./InlineCode-DGlO1jad.js";import"./LayoutCard-0IlyXBle.js";import"./Separator-GyMKFIRg.js";import"./MessageSeparator-Bp-V0ng0.js";import"./NavigationGroup-CIbHeakV.js";import"./Notification-BsGc8vQq.js";import"./NotificationProvider-yfmcKWLq.js";import"./ProgressBar-D49n6bfx.js";import"./Rating-C48Ki5al.js";import"./Skeleton-DfnIMzY3.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Je={title:"Integrations/React Hook Form/DateRangePicker",component:d,render:()=>{const r=async j=>{await u(1500),y(j)},x=c({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(l,{form:x,onSubmit:r,children:e.jsxs(b,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(S,{children:[e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=c({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=c({defaultValues:{field:""}});return e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
