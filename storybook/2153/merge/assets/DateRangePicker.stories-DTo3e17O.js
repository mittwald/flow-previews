import{j as e,r as g}from"./iframe-tNeMQtR9.js";import{b as d,u as c,F as l,t as D}from"./Form-CZq0j07w.js";import{L as t}from"./Label-QQ-I3K-S.js";import{R as h,S as F}from"./ResetButton-DjLAqSBa.js";import{B as p}from"./Button-evMO-5rj.js";import{S as b,s as u}from"./Section-CWr8AAoQ.js";import{A as S}from"./ActionGroup-BG5GPQGU.js";import{H as f,J as o,$ as R,I as E,x as m,F as B}from"./Modal-BTUku4xq.js";import"./index-nuYtCEEu.js";import"./dynamic-C77k3JSm.js";import"./flowComponent-Cm6q17-o.js";import"./index-KVcqOv8o.js";import"./clsx-B-dksMZM.js";import"./index-CkwyjQRx.js";import"./useLocalizedStringFormatter-BvPPnk_e.js";import"./context-CPiapOtt.js";import"./browser-tvBxR0oJ.js";import"./utils-COmC6Eka.js";import"./ProgressBar-CqKQSfDd.js";import"./Hidden-Cg7taIb1.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CQOJDPfQ.js";import"./Text-C2VO0De_.js";import"./EmulatedBoldText-Cjn4wbX9.js";import"./LoadingSpinner-CNWC6196.js";import"./Button-BinTn0sL.js";import"./useFocusRing-CrzENmB0.js";import"./useFocusable-BOEQm_aX.js";import"./context-Cey1J_Al.js";import"./RSPContexts-DY330ZPC.js";import"./Collection-BtpQxErv.js";import"./CollectionBuilder-DjYSc1J7.js";import"./SelectionIndicator-CUsz2YTu.js";import"./Separator-DgMEcD2E.js";import"./useStatic-D2eB1aGn.js";import"./FileCardList-BMiH65Ui.js";import"./Avatar-DDlp-vfW.js";import"./AlertIcon-Bzk-eUz1.js";import"./Image-CCt_1c0z.js";import"./Link-D-oNPjX9.js";import"./ControlledNotification-BwqgxSUH.js";import"./Flex-rZ8v-_CO.js";import"./Accordion-B23Ox3j7.js";import"./Alert-DZNlkX8e.js";import"./AlertBadge-D7TFwUaN.js";import"./Align-DCuTz2PT.js";import"./AvatarStack-8752QnfM.js";import"./BigNumber-CjI3llLI.js";import"./Breadcrumb-BQFrdOyt.js";import"./Heading-C8p-a7zJ.js";import"./Legend-DGYMeAYO.js";import"./Color-CkZmA5bq.js";import"./TableFooterRow-C3NFPVoX.js";import"./SkeletonText-VT80yi-y.js";import"./Content-CJ0-JcWV.js";import"./CounterBadge-DMa-J370.js";import"./DonutChart-LklFYUFk.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CXJ82N6E.js";import"./Header-6aMHBv44.js";import"./Initials-DngG0C9b.js";import"./InlineCode-DyN8wBPc.js";import"./LayoutCard-CuTcuwsm.js";import"./Separator-YVCX1fHW.js";import"./MessageSeparator-CgLaydGc.js";import"./NavigationGroup-BfN1VqG1.js";import"./Notification-jWU6KLhG.js";import"./NotificationProvider-C8ET-e-A.js";import"./ProgressBar-Bcq6KtH-.js";import"./Rating-kZ5WeiDB.js";import"./Skeleton-kxM3gt-s.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Je={title:"Integrations/React Hook Form/DateRangePicker",component:d,render:()=>{const r=async j=>{await u(1500),y(j)},x=c({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(l,{form:x,onSubmit:r,children:e.jsxs(b,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(S,{children:[e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=c({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=c({defaultValues:{field:""}});return e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
