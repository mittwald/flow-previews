import{j as r,r as x}from"./iframe-Bju5tM19.js";import{a as p,u as d,F as c,t as F}from"./Form-CXrEODVR.js";import{L as t}from"./Label-CEBawMgO.js";import{B as a}from"./Button-D01G-2Tc.js";import{S as j}from"./Section-DCM0ThIe.js";import{A as b}from"./ActionGroup-CNNzqPnn.js";import{s as l}from"./Action-DGXz3yuy.js";import{J as u,h as E,L as D}from"./DateField-DXHrvPO8.js";import{D as o}from"./DatePicker-CwbPZS51.js";import{F as S}from"./useFieldComponent-SvMgnfSt.js";import"./index-nuYtCEEu.js";import"./flowComponent-DMQ923EN.js";import"./index-i9t6c7d2.js";import"./clsx-B-dksMZM.js";import"./index-v7jxlCcy.js";import"./useLocalizedStringFormatter-DnEVwgqU.js";import"./context-BCZfssJF.js";import"./browser-5LoYBPX6.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-C0LDEu9P.js";import"./utils-CHaPYnRu.js";import"./Hidden-B3KlSyIs.js";import"./IconWarning-EseH3oBy.js";import"./Text-Ctwf1INQ.js";import"./EmulatedBoldText-DNLnXqQA.js";import"./Text-X0smrbMM.js";import"./LoadingSpinner-OWtFn1Ti.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dw5yhw5U.js";import"./ProgressBar-Bd2c_dqs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DxvdaVYE.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DNUm2pP-.js";import"./useFocus-dnpNkUeL.js";import"./useFocusRing-DQLm4Rj_.js";import"./useFocusable-S-EY4exA.js";import"./ContextMenuSection-D4oqZzWw.js";import"./Dialog-BwAIy3cs.js";import"./RSPContexts-CuZAMKB6.js";import"./OverlayArrow-CkGx3q47.js";import"./useControlledState-BiPn7KDX.js";import"./Collection-CzETdAyj.js";import"./CollectionBuilder-C9Q_qjob.js";import"./SelectionIndicator-BWLjQ8Kg.js";import"./Separator-F1osFFu3.js";import"./SelectionManager-BWZTcbb9.js";import"./useEvent-B0Z9j7Hl.js";import"./useCollator-CPsP6oXT.js";import"./FocusScope-BvTlMNTx.js";import"./VisuallyHidden-muGwU-w1.js";import"./dynamic-KamcoLNc.js";import"./getActionGroupSlot-BFuFDZVU.js";import"./useStatic-Dhn4vIeo.js";import"./context-DoYyNt70.js";import"./Form-CawbhIR_.js";import"./Group-CMnMCMaj.js";import"./Input-Cn0b8SON.js";import"./useFormValidation-Cc6rboKS.js";import"./useFormReset-CYS5QNbo.js";import"./useSpinButton-Bve7zR6F.js";import"./useFilter-BSOLE07b.js";import"./Popover-DlqNLSeP.js";import"./useOverlayController-rptj0Un2.js";import"./OverlayContextProvider-BSx-P-EI.js";import"./ClearPropsContextView-D7P4GTdz.js";import"./ClearPropsContext-nVrOsFhk.js";import"./RangeCalendar-C8HVhgSx.js";import"./Heading-BJwwNeLw.js";import"./useUpdateEffect-DvxIXLjR.js";import"./useMakeFocusable-BXmgj38r.js";import"./react-children-utilities-CV_3FZ2O.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Hr={title:"Integrations/React Hook Form/DatePicker",component:p,render:()=>{const e=async h=>{await l(1500),g(h)},f=d({defaultValues:{dateDefaultValue:u("2025-09-01")}}),i=F();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:E(D()),children:r.jsx(t,{children:"Future date"})})}),r.jsx(b,{children:r.jsx(a,{type:"submit",children:"Submit"})})]})})}},s={},m={render:()=>{const e=d({defaultValues:{field:u("2025-09-01")}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=d({defaultValues:{field:u("2025-09-01")}});return r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(a,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(a,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(a,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
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
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
        </Field>
        <DatePicker isInvalid>
          <Label>Text</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DatePicker>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
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
}`,...n.parameters?.docs?.source}}};const Jr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,n as WithFocus,Jr as __namedExportsOrder,Hr as default};
