import{j as e,r as g}from"./iframe-GdgkclWs.js";import{b as d,u as c,F as l,t as D}from"./Form-CAPGQYFw.js";import{L as t}from"./Label-ChEMpQPE.js";import{R as h,S as F}from"./ResetButton-CSKvvOZv.js";import{B as p}from"./Button-B0JEmBNK.js";import{S as b,s as u}from"./Section-VLscJ2rL.js";import{A as S}from"./ActionGroup-C82CNpK6.js";import{B as f,G as o,$ as R,E,v as m,g as B}from"./TimeField-CVigSgag.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-PnYMfd4f.js";import"./PropsContextProvider-CVn6a-Br.js";import"./mergeRefs-CirupE_e.js";import"./index-BpewjHzz.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BYse3rRW.js";import"./context-G4rNg2r5.js";import"./browser-CClwHdx_.js";import"./utils-DoU55v00.js";import"./ProgressBar-BByvzxb3.js";import"./Hidden-DfAtz4Rp.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CGOSGhfQ.js";import"./Text-Cto25n51.js";import"./EmulatedBoldText-Ddlneh35.js";import"./LoadingSpinner-ChMWC-CB.js";import"./Button-9ssRHwLo.js";import"./useFocusRing-FWhz3ffE.js";import"./useFocusable-CGBhab3M.js";import"./context-C_Ye8hEJ.js";import"./RSPContexts-Ih3Q_XqN.js";import"./Collection-DiuPOFRO.js";import"./CollectionBuilder-D0v6CoH5.js";import"./SelectionIndicator-CLOzYwLf.js";import"./Separator-DBBWSXz5.js";import"./useStatic-CV3hAC_1.js";import"./Accordion-CIHbFerH.js";import"./Alert-Ghfdqzqq.js";import"./AlertIcon-BHK-Daud.js";import"./AlertBadge-B0j6vp5K.js";import"./Align-D7FVyJEv.js";import"./Popover-DCEEmw0P.js";import"./OverlayTrigger-FDfyad1h.js";import"./TableFooterRow-DkhcovOF.js";import"./SkeletonText-BC3QvNYs.js";import"./Avatar-BdEExudS.js";import"./AvatarStack-D83q2IaA.js";import"./Badge-CULYHS4O.js";import"./BigNumber-CQ1o5YVg.js";import"./Breadcrumb-Bmgceg6h.js";import"./Link-D6Y7USyN.js";import"./Heading-C8_gRcPp.js";import"./Legend-814CjWqc.js";import"./FileCardList-u01e7SGm.js";import"./Image-DvuZYehV.js";import"./Color-C5h7DqqR.js";import"./Content-JCMb0S3J.js";import"./ContextualHelpTrigger-xDG4yDFQ.js";import"./CounterBadge-gaV0X7ON.js";import"./DonutChart-DGD5BRbv.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Dt1P96u5.js";import"./Header-Dg8MvpqU.js";import"./Initials-5h9DQSHl.js";import"./InlineCode-B9Q3OiFc.js";import"./PopoverTrigger-BDzk5u7s.js";import"./Separator-i6qBYsms.js";import"./Message-CeGAy6Zn.js";import"./MessageSeparator-CRScGEmn.js";import"./NavigationGroup-CdsshAOA.js";import"./Notification-B5P2NapB.js";import"./NotificationProvider-DTKoqy3M.js";import"./ProgressBar-8ZDZDqcE.js";import"./Rating-BSkiv03r.js";import"./Skeleton-CcRzeFAV.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Ye={title:"Integrations/React Hook Form/DateRangePicker",component:d,render:()=>{const r=async j=>{await u(1500),y(j)},x=c({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(l,{form:x,onSubmit:r,children:e.jsxs(b,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(S,{children:[e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=c({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=c({defaultValues:{field:""}});return e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
