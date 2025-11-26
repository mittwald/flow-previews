import{j as e,r as g}from"./iframe-BbaYMYQ1.js";import{c as d,u as c,F as l,t as D}from"./Form-BCkj35Nx.js";import{L as t}from"./Label-BraeMjNZ.js";import{R as h,S as F}from"./ResetButton-9YX4PzGE.js";import{B as p}from"./Button-KIO5b-Hc.js";import{S,s as u}from"./Section-Bklfm26f.js";import{A as b}from"./ActionGroup-QM-x3f8J.js";import{H as f,J as o,$ as R,I as E,x as m,F as B}from"./Modal-DVvIdT0R.js";import"./index-nuYtCEEu.js";import"./dynamic-CvfiG9eK.js";import"./flowComponent-C662J8_x.js";import"./index-BgowJb9k.js";import"./clsx-B-dksMZM.js";import"./index-DF7s3pP8.js";import"./useLocalizedStringFormatter-CVO0oqQf.js";import"./context-DxIVJg5X.js";import"./browser-CF0_O6rk.js";import"./utils-C-StNnVz.js";import"./ProgressBar-Bb19OYa8.js";import"./Hidden-S-Rgpp-0.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CkjtEKGs.js";import"./Text-8_g1DnjB.js";import"./EmulatedBoldText-_shc_-go.js";import"./LoadingSpinner-Cwm6VlGh.js";import"./Button-B8_E6hAa.js";import"./useFocusRing-BzYkSJhL.js";import"./useFocusable-B3SCcOBQ.js";import"./context-CTAVigQn.js";import"./RSPContexts-vimGF_ZT.js";import"./Collection-CCUE8FQE.js";import"./CollectionBuilder-3YuRca9q.js";import"./SelectionIndicator-BTGWwJK9.js";import"./Separator-xUWU1DOd.js";import"./useStatic-CvDTMdvn.js";import"./FileCardList-BjZ9NUbt.js";import"./Avatar-CVLM7H3M.js";import"./AlertIcon-CRnyQnM7.js";import"./Image-CJ6kjDK0.js";import"./Link-rPNj3DYm.js";import"./ControlledNotification-BmRpUxJg.js";import"./Flex-pi8iCwQc.js";import"./Accordion-D8fzz0-b.js";import"./Alert-5Lfb6dl8.js";import"./AlertBadge-muxF3U8a.js";import"./Align-CHGtq9jk.js";import"./AvatarStack-j0GVx9dq.js";import"./BigNumber-B8_Z7Vks.js";import"./Breadcrumb-B6ecpmjh.js";import"./Heading-lbjZQMyr.js";import"./Legend-_0bhhOvJ.js";import"./Color-C-Cz2kw_.js";import"./TableFooterRow-r87NN87D.js";import"./SkeletonText-enZo4G0m.js";import"./Content-eRMHFgpO.js";import"./CounterBadge-dtasO-Oy.js";import"./DonutChart-Gb7C9vCW.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-dqDgvxC5.js";import"./Header-BvDja-IR.js";import"./Initials-_1ADzBrq.js";import"./InlineCode-Cz0k_lz5.js";import"./LayoutCard-DHZQzmf9.js";import"./Separator-DCsOFsY1.js";import"./MessageSeparator-VDKEbj1t.js";import"./NavigationGroup-C2WRYrg4.js";import"./Notification-Dm5qCZlZ.js";import"./NotificationProvider-C4XAijkx.js";import"./ProgressBar-CrfBQbOk.js";import"./Rating-FkhIC6fL.js";import"./Skeleton-pQXVpVZ0.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Je={title:"Integrations/React Hook Form/DateRangePicker",component:d,render:()=>{const r=async j=>{await u(1500),y(j)},x=c({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(l,{form:x,onSubmit:r,children:e.jsxs(S,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(b,{children:[e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=c({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=c({defaultValues:{field:""}});return e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
