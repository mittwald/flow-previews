import{j as r,r as x}from"./iframe-GtWYOLNc.js";import{a as p,u as d,F as c,t as F}from"./Form-CJDsExi9.js";import{L as t}from"./Label-rRCJof1T.js";import{B as a}from"./Button-DAMH2RQe.js";import{S as j}from"./Section-PDyMtoME.js";import{A as b}from"./ActionGroup-CUP01UMb.js";import{s as l}from"./Action-DgPdZSGQ.js";import{J as u,h as E,L as D}from"./DateField-C1t04hyQ.js";import{D as o}from"./DatePicker-trOx0fM-.js";import{F as S}from"./useFieldComponent-CFSDwBJf.js";import"./index-nuYtCEEu.js";import"./flowComponent-BhbvfIbA.js";import"./index-DroEwyNc.js";import"./clsx-B-dksMZM.js";import"./index-Do7K3gX4.js";import"./useLocalizedStringFormatter-DE7ldODK.js";import"./context-D40YBGtd.js";import"./browser-Dfdmz1Vs.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CQFAMqNH.js";import"./utils-DD5Sc9KY.js";import"./Hidden-BU9Lcw6n.js";import"./IconWarning-D3qu7dXh.js";import"./Text-Bh_VtmGj.js";import"./EmulatedBoldText-CB08elGP.js";import"./Text-CjcFKgn5.js";import"./LoadingSpinner-BgxzSWV-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DAFfpCNE.js";import"./ProgressBar-CdTHAJ2Y.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DTE1dj4A.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B3Z_0YqL.js";import"./useFocus-DFp-sRZK.js";import"./useFocusRing-DOaM9YXN.js";import"./useFocusable-jI0DLtpW.js";import"./ContextMenuSection-BqJoKa5n.js";import"./Dialog-E17SkaPF.js";import"./RSPContexts-prl6X50T.js";import"./OverlayArrow-DIM14olf.js";import"./useControlledState-DlI3gMwx.js";import"./Collection-Ce3y52jr.js";import"./CollectionBuilder-Dp0_4f88.js";import"./SelectionIndicator-PIsyHCAq.js";import"./Separator-BLTRkzm5.js";import"./SelectionManager-BxJ0cmnl.js";import"./useEvent-9aIM_XKO.js";import"./useCollator-CosXWie8.js";import"./FocusScope-CmjH0BfW.js";import"./VisuallyHidden-CMXGnTyG.js";import"./dynamic-D_-LYO4W.js";import"./getActionGroupSlot-DVt_1gUF.js";import"./useStatic-BUau0uD4.js";import"./context-B79p2l6c.js";import"./Form-CKR5JFnD.js";import"./Group-CA7dPhnC.js";import"./Input-BPP_cYwL.js";import"./useFormValidation-BcoBpGbt.js";import"./useFormReset-C8pOBnDM.js";import"./useSpinButton-DrOzdfpW.js";import"./useFilter-Dr0KH3vi.js";import"./Popover-BloSQfLN.js";import"./useOverlayController-Cm_PeV9X.js";import"./OverlayContextProvider-C3tl0ORG.js";import"./ClearPropsContextView-C2nQoxxe.js";import"./ClearPropsContext-DAA0VQnf.js";import"./RangeCalendar-K-PIueqV.js";import"./Heading-D0R31Oqj.js";import"./useUpdateEffect-U2kQrJLd.js";import"./useMakeFocusable-6t1tYcWi.js";import"./react-children-utilities-BE-u8eGk.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Hr={title:"Integrations/React Hook Form/DatePicker",component:p,render:()=>{const e=async h=>{await l(1500),g(h)},f=d({defaultValues:{dateDefaultValue:u("2025-09-01")}}),i=F();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:E(D()),children:r.jsx(t,{children:"Future date"})})}),r.jsx(b,{children:r.jsx(a,{type:"submit",children:"Submit"})})]})})}},s={},m={render:()=>{const e=d({defaultValues:{field:u("2025-09-01")}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=d({defaultValues:{field:u("2025-09-01")}});return r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(a,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(a,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(a,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
