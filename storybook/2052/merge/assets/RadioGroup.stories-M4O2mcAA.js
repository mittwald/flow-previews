import{j as e,r as y}from"./iframe-CwuqIU3i.js";import{a as d,u,F as p,t as S}from"./Form-C_LQ2LWw.js";import{L as i}from"./Label-B0BiyK3O.js";import{B as m}from"./Button-BqbqUci_.js";import{S as D}from"./Section-LUqPWyIZ.js";import{A as B}from"./ActionGroup-K4almCLG.js";import{s as c}from"./Action-Dz8VIf0X.js";import{R as s,b as r}from"./RadioButton-DVk2IWTG.js";import{F as M}from"./useFieldComponent-eP2W8yne.js";import"./index-Cun1SEai.js";import"./flowComponent-CW5hnf4o.js";import"./index-DCuX0QuH.js";import"./clsx-B-dksMZM.js";import"./index-DdRMNQVP.js";import"./Text-Dbs8GmZM.js";import"./browser-DUGYsxZ_.js";import"./EmulatedBoldText-DuSj7T8w.js";import"./Text-WRK6H0Wn.js";import"./utils-BNUN6Z86.js";import"./useLocalizedStringFormatter-CenpEZM_.js";import"./context-Cr--o0Ww.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Ds7Yihzi.js";import"./Hidden-AzgHkXqa.js";import"./IconWarning-DfuZN-Hc.js";import"./LoadingSpinner-BmjVj-LQ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BUhZq-tB.js";import"./ProgressBar-BzO_ljLZ.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CdaIPuHn.js";import"./useFocus-JEz06IDi.js";import"./useFocusRing-Csjn1IfN.js";import"./useFocusable-CYb_RHOH.js";import"./ContextMenuSection-BU9M0i_t.js";import"./Dialog-BB45Hyg5.js";import"./RSPContexts-BJREWOlr.js";import"./OverlayArrow-DPamNpoY.js";import"./useControlledState-B3_Egg2G.js";import"./Collection-YYfkw6ZM.js";import"./CollectionBuilder-BkgyTACG.js";import"./SelectionIndicator-pORsGxIs.js";import"./Separator-OZJOm_uc.js";import"./SelectionManager-Cunz5w8r.js";import"./useEvent-CWvMBd14.js";import"./useCollator-Vvi4fPh5.js";import"./FocusScope-AJCIL371.js";import"./VisuallyHidden-DO5WoARG.js";import"./dynamic-DTSFzVL0.js";import"./getActionGroupSlot-Bjm84Kbj.js";import"./useStatic-DLE3zC_Y.js";import"./context-B1E32d2Q.js";import"./ColumnLayout--p4SGV_7.js";import"./useMakeFocusable-ChwytvWt.js";import"./RadioGroup-C3J8MfJX.js";import"./Form-C1wZYKgN.js";import"./useFormValidation-DK6PIssV.js";import"./useFormReset-BLDFw02N.js";import"./react-children-utilities-BfKePjVo.js";import"./ClearPropsContext-DGTEyAkG.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,O=L("submit"),Te={title:"Integrations/React Hook Form/RadioGroup",component:d,render:()=>{const o=async G=>{await c(1500),O(G)},E=u({defaultValues:{gender:"",genderDefaultValue:"diverse",genderRequired:""}}),l=S();return e.jsx(p,{form:E,onSubmit:o,children:e.jsxs(D,{children:[e.jsx(l,{name:"gender",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(l,{name:"genderDefaultValue",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(l,{name:"genderRequired",rules:{required:"Please select your gender"},children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(B,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},n={},a={render:()=>{const o=u();return y.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"}),e.jsx(M,{children:"ErrorFromOuterFieldError!"})]})]})}},t={render:()=>{const o=u();return e.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};var h,f,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,j,F;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(F=(j=a.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var R,b,g;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const ke=["Default","WithFieldError","WithFocus"];export{n as Default,a as WithFieldError,t as WithFocus,ke as __namedExportsOrder,Te as default};
