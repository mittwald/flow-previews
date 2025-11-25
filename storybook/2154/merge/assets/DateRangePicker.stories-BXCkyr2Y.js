import{j as e,r as g}from"./iframe-BGRRgBVS.js";import{c as d,u as c,F as l,t as D}from"./Form-DD4eZ7E5.js";import{L as t}from"./Label-C71FRL96.js";import{R as h,S as F}from"./ResetButton-5WJyOJKD.js";import{B as p}from"./Button-DE3NXKd3.js";import{S,s as u}from"./Section-CxYjgLxV.js";import{A as b}from"./ActionGroup-J5J8sMqL.js";import{H as f,J as o,$ as R,I as E,x as m,F as B}from"./Modal-B7HK7gsm.js";import"./index-nuYtCEEu.js";import"./dynamic-BLodhe7F.js";import"./flowComponent-DxP1iS0K.js";import"./index-BZgSK6Sm.js";import"./clsx-B-dksMZM.js";import"./index-BMa1Nvcv.js";import"./useLocalizedStringFormatter-q3-eKfRR.js";import"./context-u16jW8Lq.js";import"./browser-ClmblGlM.js";import"./utils-Csx1o_4e.js";import"./ProgressBar-DH5v7dhL.js";import"./Hidden-BonuGHXz.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-H-qi_LLu.js";import"./Text-DzPdDmfA.js";import"./EmulatedBoldText-DrL9qLDd.js";import"./LoadingSpinner-uAo8ll_j.js";import"./Button-BqwVNYKG.js";import"./useFocusRing-DfB0I3XE.js";import"./useFocusable-DNKvZOnB.js";import"./context-BRtiiBiN.js";import"./RSPContexts-DYF8VjHX.js";import"./Collection-CVup-l4E.js";import"./CollectionBuilder-VI38YI2I.js";import"./SelectionIndicator-C9TSpSC8.js";import"./Separator-BlumgMKZ.js";import"./useStatic-CZqew5Ty.js";import"./FileCardList-CTiEP_oD.js";import"./Avatar-_Q-1CRZY.js";import"./AlertIcon-DXcBlIQl.js";import"./Image-m8wJl4Hq.js";import"./Link-DUHrLYIV.js";import"./ControlledNotification-ClQ4DWvA.js";import"./Flex-Cm5MtHoW.js";import"./Accordion-CWMlovg1.js";import"./Alert-DZ3SaNfX.js";import"./AlertBadge-BP8QuAoC.js";import"./Align-XZN-93fT.js";import"./AvatarStack-naPDjz-Y.js";import"./BigNumber-B2BemRIb.js";import"./Breadcrumb-89IOhSC8.js";import"./Heading-Cumb0HFc.js";import"./Legend-Cfzh9jRu.js";import"./Color-DhuO5H_5.js";import"./TableFooterRow-DxdhKCQ5.js";import"./SkeletonText-CETwMYrU.js";import"./Content-WUqaR34u.js";import"./CounterBadge-jsL76cSL.js";import"./DonutChart-CBKPVTFl.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-fuO6rZ67.js";import"./Header-CWu5q_yZ.js";import"./Initials-wMj0dCzb.js";import"./InlineCode-BW_4nfEu.js";import"./LayoutCard-BYw3vf8Y.js";import"./Separator-DYQ__sSx.js";import"./MessageSeparator-C9JYZyz7.js";import"./NavigationGroup-BS96zRf9.js";import"./Notification-BxWa1kbr.js";import"./NotificationProvider-O7MbGuDR.js";import"./ProgressBar-Fo13G1Rz.js";import"./Rating-DPKBC8ZF.js";import"./Skeleton-CCnLs0pz.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Je={title:"Integrations/React Hook Form/DateRangePicker",component:d,render:()=>{const r=async j=>{await u(1500),y(j)},x=c({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(l,{form:x,onSubmit:r,children:e.jsxs(S,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(b,{children:[e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=c({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=c({defaultValues:{field:""}});return e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
