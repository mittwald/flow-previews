import{j as e,r as x}from"./iframe-DGdLAJHm.js";import{a as d,u,F as p,t as v}from"./Form-C59BQnOt.js";import{L as i}from"./Label-TWVsUPc0.js";import{B as m}from"./Button-B6Mqr-fI.js";import{S as j}from"./Section-sBOUh03h.js";import{A as F}from"./ActionGroup-CQD4NXmL.js";import{s as c}from"./Action-6ocxia9j.js";import{R as s,b as r}from"./RadioButton-CiEL4vtT.js";import{F as R}from"./useFieldComponent-sq1ZsD9O.js";import"./index-nuYtCEEu.js";import"./flowComponent-D7HGs2AA.js";import"./index-JbK8SDWv.js";import"./clsx-B-dksMZM.js";import"./index-BZginMRh.js";import"./useLocalizedStringFormatter-CSQJExWC.js";import"./context-CokKTPHD.js";import"./browser-DtJMxQoE.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DCzhvZl0.js";import"./utils-DMxNMt2r.js";import"./Hidden-DDvTcAlv.js";import"./IconWarning-BY1Q-g8P.js";import"./Text-DFxon6If.js";import"./EmulatedBoldText-l3o70VD0.js";import"./Text-C5DwW8tZ.js";import"./LoadingSpinner-Cx_Ae53U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-De2YyQVb.js";import"./ProgressBar-NfwVy8TS.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DLeCNjtK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B2gRAimw.js";import"./useFocus-Cj45nHC3.js";import"./useFocusRing-Caix2y0_.js";import"./useFocusable-DBd_8M_L.js";import"./ContextMenuSection-DZLT8qvO.js";import"./Dialog-CzLVI3sy.js";import"./RSPContexts-4eF2sDK2.js";import"./OverlayArrow-DsaarUgr.js";import"./useControlledState-C-kX1e6O.js";import"./Collection-BVDIRVc_.js";import"./CollectionBuilder--BI9tvyg.js";import"./SelectionIndicator-vtyMezuP.js";import"./Separator-C_iWvMGV.js";import"./SelectionManager-Bowb6aZq.js";import"./useEvent-CSYpBGU5.js";import"./useCollator--gwTay33.js";import"./FocusScope-Bl39wWwG.js";import"./VisuallyHidden-Cu1Uufsu.js";import"./dynamic-DckDcmFh.js";import"./getActionGroupSlot-Dv56ESHT.js";import"./useStatic-BT4grvBi.js";import"./context-B3SgFMfx.js";import"./ColumnLayout-BIg2_9re.js";import"./useMakeFocusable-Cph4dqrb.js";import"./RadioGroup-Bki71oof.js";import"./Form-CiLoCuZS.js";import"./useFormValidation-LOSvoqzJ.js";import"./useFormReset-DwdExnfa.js";import"./react-children-utilities-bPIN5y_s.js";import"./ClearPropsContext-DfqGN335.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),_e={title:"Integrations/React Hook Form/RadioGroup",component:d,render:()=>{const o=async f=>{await c(1500),g(f)},h=u({defaultValues:{gender:"",genderDefaultValue:"diverse",genderRequired:""}}),l=v();return e.jsx(p,{form:h,onSubmit:o,children:e.jsxs(j,{children:[e.jsx(l,{name:"gender",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(l,{name:"genderDefaultValue",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(l,{name:"genderRequired",rules:{required:"Please select your gender"},children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(F,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},n={},a={render:()=>{const o=u();return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"}),e.jsx(R,{children:"ErrorFromOuterFieldError!"})]})]})}},t={render:()=>{const o=u();return e.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
