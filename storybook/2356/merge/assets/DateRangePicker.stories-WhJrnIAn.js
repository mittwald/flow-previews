import{r as g,j as e}from"./iframe-1Z6hWL0q.js";import{a as d,u as c,F as l,R as h,S as F,t as D}from"./ResetButton-DGt7cfbK.js";import{L as t}from"./Label-BLX0X_A7.js";import{B as u}from"./Button-Up8_TRdV.js";import{S}from"./Section-DeLmOfWa.js";import{A as b}from"./ActionGroup-D0Uu4uF5.js";import{s as p}from"./ActionBatch-B4cDzNNZ.js";import{I as f,f as R,K as E}from"./DateInput-D0Ic73Zo.js";import{D as o}from"./DateRangePicker-BxdmC-lc.js";import{F as m}from"./FieldDescription-C0-dYFJA.js";import{F as B}from"./FieldError-CSszVQO8.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CeVErRgL.js";import"./flowComponent-CQSqsFz-.js";import"./index-CPV4-njg.js";import"./clsx-B-dksMZM.js";import"./index-OoNE8c9e.js";import"./useLocalizedStringFormatter-FfFR6yJN.js";import"./context-DCww6zBl.js";import"./ActionGroupView-BsDKFWxT.js";import"./Content-BI990Rgh.js";import"./Heading-Dc2YOm8x.js";import"./Heading-BTDLHxEZ.js";import"./RSPContexts-BZtvqclp.js";import"./utils-B0Ub4KXD.js";import"./Text-NSg919ow.js";import"./browser-OyZXUgp8.js";import"./EmulatedBoldText-CsGTmPK_.js";import"./Text-DPhytgE2.js";import"./Modal-DHg5t4ae.js";import"./useOverlayController-zDyCyx1O.js";import"./useStatic-BMrg-KZz.js";import"./Overlay-DFEnDYi7.js";import"./OverlayContextProvider-BlmnF6zY.js";import"./LoadingSpinner-B9ElqUFv.js";import"./IconWarning-CstRa6-6.js";import"./remote-BXzLQ_GS.js";import"./Dialog-BOSurAfE.js";import"./Button-DpyZuV_i.js";import"./ProgressBar-BV7ioShA.js";import"./Label-Berd7YBY.js";import"./Hidden-CX4T_I8z.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8l-Wr5R.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bgz5j4W3.js";import"./useFocus-MFE9JzzM.js";import"./useFocusRing-EnMEiTgA.js";import"./useFocusable-BrwqamRV.js";import"./OverlayArrow-0_UUlvtG.js";import"./useControlledState-DfFBi8JJ.js";import"./Collection-5lvTrIT4.js";import"./CollectionBuilder-zke4D84b.js";import"./SelectionIndicator-CEn-3elL.js";import"./Separator-CYJUtDva.js";import"./SelectionManager-CPzu3hBL.js";import"./useEvent-B2NydoIp.js";import"./useCollator-wpyuYlTN.js";import"./FocusScope-Dlwlk6_J.js";import"./VisuallyHidden-CCJLIB7u.js";import"./ButtonView-CzNSGQ0T.js";import"./Flex-Vk66B6a6.js";import"./useRef-B1h6Z-hA.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DH07SvAX.js";import"./getActionGroupSlot-jkvbnKjz.js";import"./FieldError-CZQJbtEC.js";import"./Form-DiZWQd7A.js";import"./Group-C0vzpAPe.js";import"./Input-DsXoSrKb.js";import"./useFormReset-BI-pxd56.js";import"./useFormValidation-B95RxpRV.js";import"./useSpinButton-EqSme7Jc.js";import"./useFilter-B_sTCvb5.js";import"./Popover-CCF5Rtw1.js";import"./RangeCalendar-CLEzm3Hj.js";import"./useUpdateEffect-JOyKmpZg.js";import"./useFieldComponent-DdzfuZRi.js";import"./AlertText-BJ3sSdkZ.js";import"./AlertIcon-Blha7MMy.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),rr={title:"Integrations/React Hook Form/DateRangePicker",component:d,render:()=>{const r=async j=>{await p(1500),y(j)},x=c({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(l,{form:x,onSubmit:r,children:e.jsxs(S,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(b,{children:[e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=c({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=c({defaultValues:{field:""}});return e.jsxs(l,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(u,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(u,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const tr=["Default","WithFieldError","WithFocus"];export{n as Default,s as WithFieldError,a as WithFocus,tr as __namedExportsOrder,rr as default};
