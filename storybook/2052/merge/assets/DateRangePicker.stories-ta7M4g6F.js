import{j as e,r as P}from"./iframe-DTheBFqg.js";import{a as c,u as l,F as p,t as B}from"./Form-Bb0OZPQ3.js";import{L as t}from"./Label-DS5MocSE.js";import{B as m}from"./Button-Bmq0qjWo.js";import{S as L}from"./Section-BDBFYB_1.js";import{A as k}from"./ActionGroup-Cjs4nxWu.js";import{s as u}from"./Action-XVrtYdEu.js";import{J as f,h as O,L as V}from"./DateField-qBaQcQio.js";import{D as o}from"./DateRangePicker-DISJkJDt.js";import{F as d}from"./FieldDescription-Coryxrlu.js";import{F as $}from"./useFieldComponent-mBN-j8SF.js";import"./index-Cun1SEai.js";import"./flowComponent-gCUS5Qd-.js";import"./index-ulNAr9WE.js";import"./clsx-B-dksMZM.js";import"./index-C24gQbls.js";import"./useLocalizedStringFormatter-CvDaoHpN.js";import"./context-BBJsvWP1.js";import"./browser-BqPz5wcV.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DaxiHPCi.js";import"./utils-CIVb4-pA.js";import"./Hidden-BUnkE8VR.js";import"./IconWarning-CXTS1Zmo.js";import"./Text-DVaBUvZL.js";import"./EmulatedBoldText-P0d28SeQ.js";import"./Text-C48huDBb.js";import"./LoadingSpinner-CLX8R9JK.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B9sfb4m-.js";import"./ProgressBar-Dr6zks-A.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DE7AINdt.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DWQVem_V.js";import"./useFocus-gFMm1SVx.js";import"./useFocusRing-Bw6jYcrF.js";import"./useFocusable-CIkWBa0n.js";import"./ContextMenuSection-DVfZqLHJ.js";import"./Dialog-DwHrBIEx.js";import"./RSPContexts-DdYP_yiK.js";import"./OverlayArrow-Bio3H0xn.js";import"./useControlledState-CxM5G25q.js";import"./Collection-BJPKgIab.js";import"./CollectionBuilder-CQSVhr8L.js";import"./SelectionIndicator-CjHN0yDY.js";import"./Separator-D87Ko5QM.js";import"./SelectionManager-uhDgeTSM.js";import"./useEvent-BjpDtAMc.js";import"./useCollator-2o_2J_me.js";import"./FocusScope-CHz78Q3h.js";import"./VisuallyHidden-D3PBi60E.js";import"./dynamic-DYsVCHyX.js";import"./getActionGroupSlot-BTW6ZZ6S.js";import"./useStatic-KScOH6sT.js";import"./context-D5Eh6Kjh.js";import"./Form-B9EEIYmx.js";import"./Group-C3T90Noz.js";import"./Input-Ct0KMtbU.js";import"./useFormValidation-Bp-At_qz.js";import"./useFormReset-C6eFdCIy.js";import"./useSpinButton-CMuVkPNl.js";import"./useFilter-Lgpf3SW7.js";import"./Popover-BFP7d86q.js";import"./useOverlayController-CV2OMrve.js";import"./OverlayContextProvider-D45bIP_5.js";import"./ClearPropsContextView-CxFwQ4wb.js";import"./ClearPropsContext-NW1-nYLP.js";import"./RangeCalendar-DrcxKdBe.js";import"./Heading-CTEcNSu5.js";import"./useUpdateEffect-xTlFOmsT.js";import"./useMakeFocusable-DG-Ql63t.js";import"./react-children-utilities-g2QZgYrG.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,q=_("submit"),rr={title:"Integrations/React Hook Form/DateRangePicker",component:c,render:()=>{const r=async y=>{await u(1500),q(y)},R=l({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=B();return e.jsx(p,{form:R,onSubmit:r,children:e.jsxs(L,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:O(V()),children:e.jsx(t,{children:"Future date range"})})}),e.jsx(k,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},n={},a={render:()=>{const r=l({defaultValues:{field:""}});return P.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"}),e.jsx($,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const r=l({defaultValues:{field:""}});return e.jsxs(p,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};var F,h,x;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,g,D;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(D=(g=a.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var b,S,E;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(E=(S=s.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const tr=["Default","WithFieldError","WithFocus"];export{n as Default,a as WithFieldError,s as WithFocus,tr as __namedExportsOrder,rr as default};
