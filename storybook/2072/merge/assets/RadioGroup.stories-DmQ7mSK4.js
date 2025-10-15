import{j as e}from"./iframe-CqjcYzEy.js";import{a as x,u as j,F as f,t as O}from"./Form-B9tr9_nz.js";import{L as n}from"./Label-To7Hive9.js";import{B as s}from"./Button-_n3f2tJI.js";import{S as b}from"./Section-JW2VQrnX.js";import{A as g}from"./ActionGroup-D6A6si9S.js";import{s as S}from"./Action-BV8ECr9I.js";import{R as m,b as r}from"./RadioButton-Vr9x2pPn.js";import"./index-Cun1SEai.js";import"./dynamic-B6VmRDv6.js";import"./flowComponent-DQ6MTfU-.js";import"./index-D26L2zGu.js";import"./clsx-B-dksMZM.js";import"./index-0TrhkGFb.js";import"./FieldError-BSbVK43F.js";import"./IconWarning-D54OF1fr.js";import"./FieldError-CvNEPKy0.js";import"./utils-CEH4bJOc.js";import"./Text-DBGfsT13.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CfOyXNn0.js";import"./context-CVWMzqu0.js";import"./browser-BlhuXvad.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-D2Nd0YkC.js";import"./Hidden-D7Skj8Od.js";import"./Text-C88kvj5Y.js";import"./EmulatedBoldText-CpIdef6b.js";import"./LoadingSpinner-BJn8yItu.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BkLoBLwO.js";import"./ProgressBar-CdOohM5f.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C-6OBS1L.js";import"./useFocus-BSqxszdS.js";import"./useFocusRing-Cq8bWJ4k.js";import"./useFocusable-Cui5lI-x.js";import"./ContextMenuSection-CogvxgrL.js";import"./Dialog-S-MpwxP2.js";import"./RSPContexts-CWbXVAY-.js";import"./OverlayArrow-wycJn0we.js";import"./useControlledState-D11yMwJT.js";import"./Collection-BS6hKJ97.js";import"./CollectionBuilder-Ke-tvOIi.js";import"./context-os1nJ67Y.js";import"./Separator-CumANQwW.js";import"./SelectionManager-7ttSlvgr.js";import"./useEvent-CkTqiin2.js";import"./useCollator-qMQcDonM.js";import"./FocusScope-BTKvvs_H.js";import"./VisuallyHidden-l-GsqitC.js";import"./getActionGroupSlot-DrC7gLzC.js";import"./useStatic-B0fjiaVy.js";import"./context-BZQvEHSq.js";import"./ColumnLayout-NaL3c8uY.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-Bo04lqU0.js";import"./RadioGroup-BEf1heCQ.js";import"./Form-DnnLWbpp.js";import"./useFormValidation-Jq_wsvSc.js";import"./useFormReset-BSVvJl_b.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,B=v("submit"),Le={title:"Integrations/React Hook Form/RadioGroup",component:x,render:()=>{const o=async F=>{await S(1500),B(F)},R=j({defaultValues:{gender:"",genderDefaultValue:"diverse",genderRequired:""}}),a=O();return e.jsx(f,{form:R,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(a,{name:"gender",children:e.jsxs(m,{children:[e.jsx(n,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(a,{name:"genderDefaultValue",children:e.jsxs(m,{children:[e.jsx(n,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(a,{name:"genderRequired",rules:{required:"Please select your gender"},children:e.jsxs(m,{children:[e.jsx(n,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(g,{children:e.jsx(s,{type:"submit",children:"Submit"})})]})})}},t={},i={render:()=>{const o=j();return e.jsxs(f,{form:o,onSubmit:()=>v("submitted"),children:[e.jsx(x,{name:"text",rules:{required:!0},children:e.jsxs(m,{m:[1,1],l:[1,1,1],children:[e.jsx(n,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(s,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(s,{onPress:()=>o.setFocus("text"),children:"focus through form"}),e.jsx(s,{type:"submit",children:"Submit"})]})}};var d,l,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,c,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={() => action("submitted")}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <RadioGroup m={[1, 1]} l={[1, 1, 1]}>
            <Label>Options</Label>
            <Radio value="1">Option 1</Radio>
            <Radio value="2">Option 2</Radio>
            <Radio value="3">Option 3</Radio>
            <Radio value="4">Option 4</Radio>
            <Radio value="5">Option 5</Radio>
            <Radio value="6">Option 6</Radio>
          </RadioGroup>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(h=(c=i.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const Pe=["Default","WithFocusAndError"];export{t as Default,i as WithFocusAndError,Pe as __namedExportsOrder,Le as default};
