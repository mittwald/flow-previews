import{j as e,r as P}from"./iframe-CBVsO-nV.js";import{a as c,u as l,F as p,t as B}from"./Form-CMN9qLLC.js";import{L as t}from"./Label-nyljzuzS.js";import{B as m}from"./Button-CsBApO8I.js";import{S as L}from"./Section-B5x6AEB8.js";import{A as k}from"./ActionGroup-BWlbeHnL.js";import{s as u}from"./Action-D49cMU0u.js";import{J as f,h as O,L as V}from"./DateField-C8xPr5wM.js";import{D as o}from"./DateRangePicker-Gpd_BTkz.js";import{F as d}from"./FieldDescription-BsgENOjc.js";import{F as $}from"./useFieldComponent-BL--pJL1.js";import"./index-Cun1SEai.js";import"./flowComponent-DToNFNtJ.js";import"./index-7tOde82V.js";import"./clsx-B-dksMZM.js";import"./index-CObDYv0S.js";import"./useLocalizedStringFormatter-BV-H-cPE.js";import"./context-DPyuhdQa.js";import"./browser-C8nzMZsV.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Bbbf1klh.js";import"./utils-BP7SriO_.js";import"./Hidden-CLTlUYi-.js";import"./IconWarning-BYVfnYfe.js";import"./Text-4FHUoZpl.js";import"./EmulatedBoldText-oVXJv8rD.js";import"./Text-GjNUVhom.js";import"./LoadingSpinner-B8NSHT58.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-4bPWs-y1.js";import"./ProgressBar-I-zazMLu.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-tISAzguc.js";import"./useFocus-DaXdFBHM.js";import"./useFocusRing-CMejcKZt.js";import"./useFocusable-BZqSTg_W.js";import"./ContextMenuSection-CKXjql2z.js";import"./Dialog-CSsaqFoB.js";import"./RSPContexts-DsHkjJhu.js";import"./OverlayArrow-D5IM8mFd.js";import"./useControlledState-CX82Bv9G.js";import"./Collection-D1Yf9Sy6.js";import"./CollectionBuilder-Dw4MtH9U.js";import"./SelectionIndicator-DFyYkHVA.js";import"./Separator-Cet5gXTt.js";import"./SelectionManager-BHGqi2o_.js";import"./useEvent-51-loX5F.js";import"./useCollator-CcT-BTV3.js";import"./FocusScope-B4rhd8wm.js";import"./VisuallyHidden-OgSsWZyt.js";import"./dynamic-B9g8bFyj.js";import"./getActionGroupSlot-Dv-xsI8W.js";import"./useStatic-B-RdiA9k.js";import"./context-BHCJLPq_.js";import"./Form-CSBASJMX.js";import"./Group-Cz9MSlsI.js";import"./Input-Bo67AZIS.js";import"./useFormValidation-DWnxi1QZ.js";import"./useFormReset-0NTNnrBe.js";import"./useSpinButton-Cbqa7wau.js";import"./useFilter-LbCaewVj.js";import"./Popover-BoMfAEAN.js";import"./useOverlayController-bzn2dAFT.js";import"./OverlayContextProvider-Cs-mhJj1.js";import"./ClearPropsContextView-QpnEsTY7.js";import"./ClearPropsContext-5iY_SzG7.js";import"./RangeCalendar-Die9pgQO.js";import"./Heading-Dr3JxnqR.js";import"./useUpdateEffect-D46iwIjD.js";import"./useMakeFocusable-D1yavyON.js";import"./react-children-utilities-Da5w6g_X.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,q=_("submit"),er={title:"Integrations/React Hook Form/DateRangePicker",component:c,render:()=>{const r=async y=>{await u(1500),q(y)},R=l({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=B();return e.jsx(p,{form:R,onSubmit:r,children:e.jsxs(L,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:O(V()),children:e.jsx(t,{children:"Future date range"})})}),e.jsx(k,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},n={},a={render:()=>{const r=l({defaultValues:{field:""}});return P.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"}),e.jsx($,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const r=l({defaultValues:{field:""}});return e.jsxs(p,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};var F,h,x;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,g,D;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(E=(S=s.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const rr=["Default","WithFieldError","WithFocus"];export{n as Default,a as WithFieldError,s as WithFocus,rr as __namedExportsOrder,er as default};
