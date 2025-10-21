import{j as e,r as x}from"./iframe-BdeexEb8.js";import{a as d,u,F as p,t as v}from"./Form-Ds4QSWVi.js";import{L as i}from"./Label-B8MQOgYT.js";import{B as m}from"./Button-8DtAEqjD.js";import{S as j}from"./Section-B4hiFsDg.js";import{A as F}from"./ActionGroup-CZfxN9v5.js";import{s as c}from"./Action-RARPQ8v8.js";import{R as s,b as r}from"./RadioButton-BwJ6nwH8.js";import{F as R}from"./useFieldComponent-DdJyO0fC.js";import"./index-nuYtCEEu.js";import"./flowComponent-D9dNYku3.js";import"./index-D-gFJj9O.js";import"./clsx-B-dksMZM.js";import"./index-DrTgVdtP.js";import"./useLocalizedStringFormatter-BAYb9Fap.js";import"./context-D6yVr_mO.js";import"./browser-CYlNocNO.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-0GucTR7O.js";import"./utils-BE4tcj7E.js";import"./Hidden-CQyoiK8N.js";import"./IconWarning-CtsbdbUA.js";import"./Text-G8amV_-h.js";import"./EmulatedBoldText-ZcdE1rVE.js";import"./Text-C7oFtPVp.js";import"./LoadingSpinner-f45dISc_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-m7osfjr7.js";import"./ProgressBar-BoDGUte7.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-_lz56ByA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BF3KJpSX.js";import"./useFocus-DOIh0B1Z.js";import"./useFocusRing-rBTaS5qD.js";import"./useFocusable-BJo0-JcZ.js";import"./ContextMenuSection-BRjflZKk.js";import"./Dialog-D2DNdmLu.js";import"./RSPContexts-BujZOMoI.js";import"./OverlayArrow-CMWDkVkR.js";import"./useControlledState-lwDPvcY9.js";import"./Collection-7t0tVRTb.js";import"./CollectionBuilder-DzfVoPOa.js";import"./SelectionIndicator-0lfezkYj.js";import"./Separator-DDMmaPKr.js";import"./SelectionManager-Y2mFlrlN.js";import"./useEvent-DWTDuj97.js";import"./useCollator-DH6O6X4x.js";import"./FocusScope-BYBHw4Pm.js";import"./VisuallyHidden-CRJbmMUG.js";import"./dynamic-B5dXdtKW.js";import"./getActionGroupSlot-mkbPIyZa.js";import"./useStatic-DlCxFiK7.js";import"./context-BWmIRqAJ.js";import"./ColumnLayout-s4aseBrg.js";import"./useMakeFocusable-CQGMBShp.js";import"./RadioGroup-D-q4ET90.js";import"./Form-Ck-IBHt9.js";import"./useFormValidation-wqB4x0T2.js";import"./useFormReset-BENrYz2J.js";import"./react-children-utilities-jctua2LA.js";import"./ClearPropsContext-C8aFsCZA.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),_e={title:"Integrations/React Hook Form/RadioGroup",component:d,render:()=>{const o=async f=>{await c(1500),g(f)},h=u({defaultValues:{gender:"",genderDefaultValue:"diverse",genderRequired:""}}),l=v();return e.jsx(p,{form:h,onSubmit:o,children:e.jsxs(j,{children:[e.jsx(l,{name:"gender",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(l,{name:"genderDefaultValue",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(l,{name:"genderRequired",rules:{required:"Please select your gender"},children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(F,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},n={},a={render:()=>{const o=u();return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"}),e.jsx(R,{children:"ErrorFromOuterFieldError!"})]})]})}},t={render:()=>{const o=u();return e.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <RadioGroup>
            <Label>Gender</Label>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="diverse">Diverse</Radio>
          </RadioGroup>
        </Field>
        <RadioGroup isInvalid>
          <Label>Gender</Label>
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
          <Radio value="diverse">Diverse</Radio>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </RadioGroup>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <RadioGroup>
            <Label>Gender</Label>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="diverse">Diverse</Radio>
          </RadioGroup>
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
}`,...t.parameters?.docs?.source}}};const qe=["Default","WithFieldError","WithFocus"];export{n as Default,a as WithFieldError,t as WithFocus,qe as __namedExportsOrder,_e as default};
