import{j as r,r as x}from"./iframe-DOYRhvKw.js";import{a as p,u as d,F as c,t as F}from"./Form-CJukERYt.js";import{L as t}from"./Label-D1jneSDA.js";import{B as a}from"./Button-C2r2j3I4.js";import{S as j}from"./Section-BJf3Kb9f.js";import{A as b}from"./ActionGroup-BQVi9nN6.js";import{s as l}from"./Action-BNkegqWa.js";import{J as u,h as E,L as D}from"./DateField-DS9FYXwi.js";import{D as o}from"./DatePicker-CO0uXYl8.js";import{F as S}from"./useFieldComponent-CVvykpK2.js";import"./index-nuYtCEEu.js";import"./flowComponent-STxdqvts.js";import"./index-CBooujIz.js";import"./clsx-B-dksMZM.js";import"./index-CsHgCCkK.js";import"./useLocalizedStringFormatter-DmT4fRR_.js";import"./context-NzKNm45Y.js";import"./browser-BfmJHaZX.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DPl4piTh.js";import"./utils-Bgpcx055.js";import"./Hidden-vFw0yyvc.js";import"./IconWarning-CT2mn3WV.js";import"./Text-uG3ng9U4.js";import"./EmulatedBoldText-wbMAxmw1.js";import"./Text-ChShlFeN.js";import"./LoadingSpinner-x8jgjTbZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DqQnue56.js";import"./ProgressBar-DECQ-pQm.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CzwTtnKl.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-GLnS58A3.js";import"./useFocus-19H2kxNT.js";import"./useFocusRing-BgXDKXFW.js";import"./useFocusable-DT2cLKuD.js";import"./ContextMenuSection-C5Ehy01g.js";import"./Dialog-QPXJS7lu.js";import"./RSPContexts-D64TVg0j.js";import"./OverlayArrow-C0WVRV0f.js";import"./useControlledState-BpyUCkTO.js";import"./Collection-BmR1fMr0.js";import"./CollectionBuilder-COEzD4ng.js";import"./SelectionIndicator-DAPFHJnO.js";import"./Separator-9JM_OpZ0.js";import"./SelectionManager-BtUAX0vR.js";import"./useEvent-Tq7AIfXA.js";import"./useCollator-Dm4rB5GB.js";import"./FocusScope-CgTCZfj1.js";import"./VisuallyHidden-DLTCEUwm.js";import"./dynamic-nHNYFzn9.js";import"./getActionGroupSlot-DkFy2TVv.js";import"./useStatic-kDWe5hml.js";import"./context-CjasfPnd.js";import"./Form-iQ1p0tBu.js";import"./Group-HF6ucXVn.js";import"./Input-OSTDVC9B.js";import"./useFormValidation-37foNTGu.js";import"./useFormReset-BHPIYNcK.js";import"./useSpinButton-Cppd8Dtu.js";import"./useFilter-DYzEED-8.js";import"./Popover-C_Lqylf0.js";import"./useOverlayController-7tlEbJro.js";import"./OverlayContextProvider-_T8uFS1c.js";import"./ClearPropsContextView-HZAP9uO_.js";import"./ClearPropsContext-BqcXprie.js";import"./RangeCalendar-CrYfANHc.js";import"./Heading-BiqQ-WE6.js";import"./useUpdateEffect-BYgdYU42.js";import"./useMakeFocusable-CpkCTOPe.js";import"./react-children-utilities-BC28ceB8.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Hr={title:"Integrations/React Hook Form/DatePicker",component:p,render:()=>{const e=async h=>{await l(1500),g(h)},f=d({defaultValues:{dateDefaultValue:u("2025-09-01")}}),i=F();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:E(D()),children:r.jsx(t,{children:"Future date"})})}),r.jsx(b,{children:r.jsx(a,{type:"submit",children:"Submit"})})]})})}},s={},m={render:()=>{const e=d({defaultValues:{field:u("2025-09-01")}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=d({defaultValues:{field:u("2025-09-01")}});return r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(a,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(a,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(a,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
