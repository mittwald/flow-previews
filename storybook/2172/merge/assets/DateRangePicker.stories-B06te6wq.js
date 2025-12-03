import{j as e,r as g}from"./iframe-HbHx0dbr.js";import{b as d,u as c,F as l,t as D}from"./Form-MbwGaAJo.js";import{L as t}from"./Label-VVCD1n3I.js";import{R as h,S as F}from"./ResetButton-CU0OPB9N.js";import{B as p}from"./Button-CJvGBAVv.js";import{S as b,s as u}from"./Section-qE36af1s.js";import{A as S}from"./ActionGroup-CSmxA-fN.js";import{B as f,G as o,$ as R,E,v as m,g as B}from"./TimeField-BLEhWuna.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CRi6gEUI.js";import"./PropsContextProvider-qzVrzUzc.js";import"./mergeRefs-D-Oz7bso.js";import"./index-CFmzddZU.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-D03WI-to.js";import"./context-B1asaoMu.js";import"./browser-CXwhmTUt.js";import"./utils-CsDSVDn1.js";import"./ProgressBar-DgngiXRE.js";import"./Hidden-DneGUX_i.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DPh3xjyu.js";import"./Text-CkAqcx4z.js";import"./EmulatedBoldText-Bfs6I3BJ.js";import"./LoadingSpinner-I5GkEDRC.js";import"./Button-CId--e-F.js";import"./useFocusRing-ChjTo6T2.js";import"./useFocusable-DI6pzLi-.js";import"./context-CWzv3puv.js";import"./RSPContexts-B_V-VNLp.js";import"./Collection-fVAw7-GX.js";import"./CollectionBuilder-9ah2FshN.js";import"./SelectionIndicator-CFpgfv2c.js";import"./Separator-BKx97MTe.js";import"./useStatic-BpR7MYw1.js";import"./Accordion-Cwt2fJuI.js";import"./Alert-CbU_YA_s.js";import"./AlertIcon-C6IAHzWi.js";import"./AlertBadge-fEpk4vNR.js";import"./Align-BAwYX1Nz.js";import"./Popover-CJs7Vohs.js";import"./OverlayTrigger-CSEkhglm.js";import"./TableFooterRow-Dxi7XPrZ.js";import"./SkeletonText-S65PrCT7.js";import"./Avatar-JTrpRsew.js";import"./AvatarStack-CSJDeeUe.js";import"./Badge-CX4hh3lM.js";import"./BigNumber-BJXYLVAq.js";import"./Breadcrumb---Gml5SM.js";import"./Link-COwhy3J8.js";import"./Heading-DMPTZuUQ.js";import"./Legend-BwAXmxEK.js";import"./FileCardList-BbAMywa1.js";import"./Image-BUcGulw7.js";import"./Color-ByIQXf4O.js";import"./Content-C349RzEO.js";import"./ContextualHelpTrigger-BipkOUK_.js";import"./CounterBadge-N87a1HO-.js";import"./DonutChart-BGqYnoyK.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-bUnPZbIJ.js";import"./Header-DefiEy2z.js";import"./Initials-Du-nuxgE.js";import"./InlineCode-DJLgs5TT.js";import"./PopoverTrigger-CHVTJqWF.js";import"./Separator-BhsBp5gG.js";import"./Message-C6tvgpf9.js";import"./MessageSeparator-DbNKZGcR.js";import"./NavigationGroup-DC8ViXMv.js";import"./Notification-DEJbziLS.js";import"./NotificationProvider-BOVzW3FW.js";import"./ProgressBar-cZpj8lZD.js";import"./Rating-EYgTbQvW.js";import"./Skeleton-Bn8XpxuJ.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Ye={title:"Integrations/React Hook Form/DateRangePicker",component:d,render:()=>{const r=async j=>{await u(1500),y(j)},x=c({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(l,{form:x,onSubmit:r,children:e.jsxs(b,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(S,{children:[e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=c({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=c({defaultValues:{field:""}});return e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
