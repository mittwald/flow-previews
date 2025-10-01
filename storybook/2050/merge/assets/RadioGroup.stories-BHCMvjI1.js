import{j as e}from"./iframe-DRU2mvvl.js";import{a as x,u as j,F as f,t as O}from"./Form-DXkXYe5Y.js";import{L as n}from"./Label-BMa7ap8T.js";import{B as s}from"./Button-B0nESNPa.js";import{S as b}from"./Section-BqGqHoUM.js";import{A as g}from"./ActionGroup-D1ho32W2.js";import{s as S}from"./Action-DTfm05Ga.js";import{R as m,b as r}from"./RadioButton-BjpkoC6C.js";import"./index-Cun1SEai.js";import"./dynamic-BlISIwZy.js";import"./flowComponent-Dq3P4cwb.js";import"./index-CoBbVvoA.js";import"./clsx-B-dksMZM.js";import"./index-BV-9eFwZ.js";import"./FieldError-DvrKLXyD.js";import"./IconWarning-Ns7aLDcg.js";import"./FieldError-C8YHk-IR.js";import"./utils-CFpcVBbf.js";import"./Text-Qj1KdidL.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-xAOMWzO_.js";import"./context-WCWlHgyn.js";import"./browser-DycDZ9Cy.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DZZppM_K.js";import"./Hidden-CuastpsR.js";import"./Text-CEDtxg_Y.js";import"./EmulatedBoldText-B-n-Sp9M.js";import"./LoadingSpinner-Bxg5W_a4.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DFs_j9qJ.js";import"./ProgressBar-CO2F47bQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BqWNUUeu.js";import"./useFocus-WX08leiR.js";import"./useFocusRing-Dvcn05WP.js";import"./useFocusable-Bm6appxO.js";import"./ContextMenuSection-S05W1Jlf.js";import"./Dialog-2Ji50Dgm.js";import"./RSPContexts-uOHI89tH.js";import"./OverlayArrow-BamfX0ZV.js";import"./useControlledState-B4CekZuY.js";import"./Collection-sMc3txMy.js";import"./CollectionBuilder-Dd2Gplrf.js";import"./context-ZJx-WxTz.js";import"./Separator-D99CVDQv.js";import"./SelectionManager-BnRrB_cT.js";import"./useEvent-2v3ak77A.js";import"./useCollator-pfKZSWNa.js";import"./FocusScope-XgH7ylXa.js";import"./VisuallyHidden-D2z1OxrB.js";import"./getActionGroupSlot-DvwtoTC6.js";import"./useStatic-ZRFoobPh.js";import"./context-BmZA5kUX.js";import"./ColumnLayout-AwwNGJlI.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-BXp11O4i.js";import"./RadioGroup-CdnWnKuS.js";import"./Form-BR3m4Qab.js";import"./useFormValidation-BPBMmZYe.js";import"./useFormReset-BYiU13z5.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,B=v("submit"),Le={title:"Integrations/React Hook Form/RadioGroup",component:x,render:()=>{const o=async F=>{await S(1500),B(F)},R=j({defaultValues:{gender:"",genderDefaultValue:"diverse",genderRequired:""}}),a=O();return e.jsx(f,{form:R,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(a,{name:"gender",children:e.jsxs(m,{children:[e.jsx(n,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(a,{name:"genderDefaultValue",children:e.jsxs(m,{children:[e.jsx(n,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(a,{name:"genderRequired",rules:{required:"Please select your gender"},children:e.jsxs(m,{children:[e.jsx(n,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(g,{children:e.jsx(s,{type:"submit",children:"Submit"})})]})})}},t={},i={render:()=>{const o=j();return e.jsxs(f,{form:o,onSubmit:()=>v("submitted"),children:[e.jsx(x,{name:"text",rules:{required:!0},children:e.jsxs(m,{m:[1,1],l:[1,1,1],children:[e.jsx(n,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(s,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(s,{onPress:()=>o.setFocus("text"),children:"focus through form"}),e.jsx(s,{type:"submit",children:"Submit"})]})}};var d,l,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,c,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
