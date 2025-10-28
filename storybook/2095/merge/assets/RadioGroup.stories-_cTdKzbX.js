import{j as e,r as x}from"./iframe-BvCo0Jms.js";import{a as d,u,F as p,t as v}from"./Form-Cf8bPcIw.js";import{L as i}from"./Label-9SlnZKrY.js";import{B as m}from"./Button-BdRFLyHU.js";import{S as j}from"./Section-B56xh2AV.js";import{A as F}from"./ActionGroup-BBtpfHLw.js";import{s as c}from"./Action-B4Kyn-_S.js";import{R as s,b as r}from"./RadioButton-CoAFA4qM.js";import{F as R}from"./useFieldComponent-h58tn8zy.js";import"./index-nuYtCEEu.js";import"./flowComponent-D-_a8eO4.js";import"./index-DAXCiU9B.js";import"./clsx-B-dksMZM.js";import"./index-DV2r3peR.js";import"./useLocalizedStringFormatter-CtRq2A2D.js";import"./context-EIbK-86q.js";import"./browser-DOebU0pA.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DMgJ6fuj.js";import"./utils-Cw2xzcbV.js";import"./Hidden-Bxmlm1r5.js";import"./IconWarning-DF-Lhcnu.js";import"./Text-CM7-JVVa.js";import"./EmulatedBoldText-BsN5iyXq.js";import"./Text-BvqGhHlZ.js";import"./LoadingSpinner-6N6Rbt89.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-pJkeE9x7.js";import"./ProgressBar-Upnvx2FX.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DLhdFYyT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BZrRujBy.js";import"./useFocus-C5EW73ar.js";import"./useFocusRing-D8FCXLiH.js";import"./useFocusable-BxQ2X-GC.js";import"./ContextMenuSection-D9cp5lxC.js";import"./Dialog-Bn7Do3Cm.js";import"./RSPContexts-DqErA_gH.js";import"./OverlayArrow-CPNbfpB1.js";import"./useControlledState-C0Hm7DMH.js";import"./Collection-DPawhEbh.js";import"./CollectionBuilder-BCns4Ten.js";import"./SelectionIndicator-CnEt238s.js";import"./Separator-CzBpIsK8.js";import"./SelectionManager-BEbqbhJ2.js";import"./useEvent-CQT5QNCL.js";import"./useCollator-B2HFQgM0.js";import"./FocusScope-Dcb5J3f3.js";import"./VisuallyHidden-ch7dD1y0.js";import"./dynamic-BmXp7BE9.js";import"./getActionGroupSlot-Bgw1lBB1.js";import"./useStatic-BT5cYh4l.js";import"./context-Dhm9rN8k.js";import"./ColumnLayout-Bnxa3LhA.js";import"./useMakeFocusable-I3KvykiR.js";import"./RadioGroup-B4s1SRXY.js";import"./Form-DLKKw6GK.js";import"./useFormValidation-DFmu6UDs.js";import"./useFormReset-B8Yq5UFv.js";import"./react-children-utilities-K6HpEoIu.js";import"./ClearPropsContext-BXwgDp0Q.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),_e={title:"Integrations/React Hook Form/RadioGroup",component:d,render:()=>{const o=async f=>{await c(1500),g(f)},h=u({defaultValues:{gender:"",genderDefaultValue:"diverse",genderRequired:""}}),l=v();return e.jsx(p,{form:h,onSubmit:o,children:e.jsxs(j,{children:[e.jsx(l,{name:"gender",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(l,{name:"genderDefaultValue",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(l,{name:"genderRequired",rules:{required:"Please select your gender"},children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(F,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},n={},a={render:()=>{const o=u();return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"}),e.jsx(R,{children:"ErrorFromOuterFieldError!"})]})]})}},t={render:()=>{const o=u();return e.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
