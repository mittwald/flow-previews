import{j as r,r as x}from"./iframe-CCgutS5t.js";import{a as p,u as d,F as c,t as F}from"./Form-DxlmCUiG.js";import{L as t}from"./Label-CNIOR_Eh.js";import{B as a}from"./Button-CB_SQlxf.js";import{S as j}from"./Section-xdCGG6Rl.js";import{A as b}from"./ActionGroup-CI83x2Hx.js";import{s as l}from"./Action-BELw5_ca.js";import{J as u,h as E,L as D}from"./DateField-BJB-vs_3.js";import{D as o}from"./DatePicker-BY73qYz5.js";import{F as S}from"./useFieldComponent-B36i382k.js";import"./index-nuYtCEEu.js";import"./flowComponent-C78Jb5L6.js";import"./index-h_ilVZmN.js";import"./clsx-B-dksMZM.js";import"./index-Bp2d_id4.js";import"./useLocalizedStringFormatter-BjHcrzpH.js";import"./context-3TjxBBiZ.js";import"./browser-Cx9TdPw4.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B2_Qc07C.js";import"./utils-N6USVjPQ.js";import"./Hidden-BtuehT5t.js";import"./IconWarning-BIjPfZ_7.js";import"./Text-C-3mWHEt.js";import"./EmulatedBoldText-BfzgnQm3.js";import"./Text-DSftVrdI.js";import"./LoadingSpinner-CbAXLLLD.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DxAPDldv.js";import"./ProgressBar-Pqb-SOG6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C2LzTSEt.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C_WBS1_H.js";import"./useFocus-qWLnYmls.js";import"./useFocusRing-DetKeZ0w.js";import"./useFocusable-C1wexJX5.js";import"./ContextMenuSection-plAoKvaj.js";import"./Dialog-BFfcJUiM.js";import"./RSPContexts-D8ixlOLf.js";import"./OverlayArrow-D_Aj7zmL.js";import"./useControlledState-C-pLTCEb.js";import"./Collection-DHibalOY.js";import"./CollectionBuilder-BmvqiF6i.js";import"./SelectionIndicator-BSAaVuJo.js";import"./Separator-CdSBB1Je.js";import"./SelectionManager-CyYCav6z.js";import"./useEvent-rTmmTfmz.js";import"./useCollator-Cks0Ndw_.js";import"./FocusScope-1cqgO8JZ.js";import"./VisuallyHidden-upAad0zi.js";import"./dynamic-CnlMxg6J.js";import"./getActionGroupSlot-DHM8pkUy.js";import"./useStatic-MsaSckAb.js";import"./context-_S3VUPKr.js";import"./Form-DylZ4hmS.js";import"./Group-nu6L2uF2.js";import"./Input-zWUUR8ko.js";import"./useFormValidation-DXrwvkVu.js";import"./useFormReset-C2ixUAq4.js";import"./useSpinButton-C1-33CXx.js";import"./useFilter-EBm-7tKd.js";import"./Popover-CYSy3wGz.js";import"./useOverlayController-DW7fwhRo.js";import"./OverlayContextProvider-zefoD_gg.js";import"./ClearPropsContextView-CYIHyMV-.js";import"./ClearPropsContext-CZ_w58Ag.js";import"./RangeCalendar-DIffQXdA.js";import"./Heading--qvH0N7j.js";import"./useUpdateEffect-bVOiBkYx.js";import"./useMakeFocusable-Cb2U_kBy.js";import"./react-children-utilities-DK8cwA_F.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Hr={title:"Integrations/React Hook Form/DatePicker",component:p,render:()=>{const e=async h=>{await l(1500),g(h)},f=d({defaultValues:{dateDefaultValue:u("2025-09-01")}}),i=F();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:E(D()),children:r.jsx(t,{children:"Future date"})})}),r.jsx(b,{children:r.jsx(a,{type:"submit",children:"Submit"})})]})})}},s={},m={render:()=>{const e=d({defaultValues:{field:u("2025-09-01")}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=d({defaultValues:{field:u("2025-09-01")}});return r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(a,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(a,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(a,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
