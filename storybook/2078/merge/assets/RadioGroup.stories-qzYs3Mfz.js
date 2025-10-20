import{j as e}from"./iframe-DE21mSiE.js";import{a as x,u as j,F as f,t as O}from"./Form-CUo_fzaz.js";import{L as n}from"./Label-D6jpl-Ee.js";import{B as s}from"./Button-DdcjdJkJ.js";import{S as b}from"./Section-CoWAiCo1.js";import{A as g}from"./ActionGroup-CNc43KOX.js";import{s as S}from"./Action-CR9ahmpz.js";import{R as m,b as r}from"./RadioButton-B0q_6vzL.js";import"./index-Cun1SEai.js";import"./dynamic-BIsQA2QQ.js";import"./flowComponent-CyATdwQg.js";import"./index-DVBAlOxg.js";import"./clsx-B-dksMZM.js";import"./index-ssZEpx-s.js";import"./FieldError-B59qoisB.js";import"./IconWarning-iWnf9NI2.js";import"./FieldError-Bu_r-4G9.js";import"./utils-DqYJbNsI.js";import"./Text-CutbQTmF.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Bn_AwxOr.js";import"./context-Br9w7yZh.js";import"./browser-BjU0tWvf.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-C-oTvvPr.js";import"./Hidden-C98sYe40.js";import"./Text-DOdVur7X.js";import"./EmulatedBoldText-BOQZ24Hi.js";import"./LoadingSpinner-CObpOXYq.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CbR0WrFZ.js";import"./ProgressBar-ByrF5SpY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dv9orCJu.js";import"./useFocus-CRZNnr1R.js";import"./useFocusRing-pH6mNL0D.js";import"./useFocusable-AVRnrAkJ.js";import"./ContextMenuSection-CuNeUF_7.js";import"./Dialog-CqjG3TV5.js";import"./RSPContexts-BtJsn2IM.js";import"./OverlayArrow-D4IsQ9Uw.js";import"./useControlledState-Bml9wY_-.js";import"./Collection-CtBmofMr.js";import"./CollectionBuilder-OPUz1gD2.js";import"./SelectionIndicator-Daa_H3OJ.js";import"./Separator-BLbs5DM2.js";import"./SelectionManager-RcCyJikL.js";import"./useEvent-9zXlgdze.js";import"./useCollator-BKBsR6-a.js";import"./FocusScope-1KdfzaZh.js";import"./VisuallyHidden-pa5WzvsI.js";import"./getActionGroupSlot-CKs13wvK.js";import"./useStatic-Cbl6RHQu.js";import"./context-6jqGW8Yr.js";import"./ColumnLayout-_SaZ5Egw.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-BrvNHTGQ.js";import"./RadioGroup-B1uS2wqv.js";import"./Form-C4-mbjGM.js";import"./useFormValidation-B0vSubJ3.js";import"./useFormReset-BcRO7Ruj.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,B=v("submit"),Le={title:"Integrations/React Hook Form/RadioGroup",component:x,render:()=>{const o=async F=>{await S(1500),B(F)},R=j({defaultValues:{gender:"",genderDefaultValue:"diverse",genderRequired:""}}),a=O();return e.jsx(f,{form:R,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(a,{name:"gender",children:e.jsxs(m,{children:[e.jsx(n,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(a,{name:"genderDefaultValue",children:e.jsxs(m,{children:[e.jsx(n,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(a,{name:"genderRequired",rules:{required:"Please select your gender"},children:e.jsxs(m,{children:[e.jsx(n,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(g,{children:e.jsx(s,{type:"submit",children:"Submit"})})]})})}},t={},i={render:()=>{const o=j();return e.jsxs(f,{form:o,onSubmit:()=>v("submitted"),children:[e.jsx(x,{name:"text",rules:{required:!0},children:e.jsxs(m,{m:[1,1],l:[1,1,1],children:[e.jsx(n,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(s,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(s,{onPress:()=>o.setFocus("text"),children:"focus through form"}),e.jsx(s,{type:"submit",children:"Submit"})]})}};var d,l,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,c,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
