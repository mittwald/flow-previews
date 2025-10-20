import{j as e}from"./iframe-D3XbVUAE.js";import{a as x,u as j,F as f,t as O}from"./Form-C5MCGQf3.js";import{L as n}from"./Label-BTIrFf4y.js";import{B as s}from"./Button-DI43yX0M.js";import{S as b}from"./Section-BUZrj2S6.js";import{A as g}from"./ActionGroup-F8VITapX.js";import{s as S}from"./Action-CZBfRLDN.js";import{R as m,b as r}from"./RadioButton-C3q5AA6x.js";import"./index-Cun1SEai.js";import"./dynamic-GIq4BKTG.js";import"./flowComponent-EDib50S8.js";import"./index-CK8n9fzK.js";import"./clsx-B-dksMZM.js";import"./index-BE_iNncf.js";import"./FieldError-DuGPuZu9.js";import"./IconWarning-DpoKEiS2.js";import"./FieldError-NLw4NqNk.js";import"./utils-BWY6h_sn.js";import"./Text-D1dMR7Bg.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CjS_r_W_.js";import"./context-DmwBBPOa.js";import"./browser-DZQtGRWw.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DVxhCXlj.js";import"./Hidden-Cd6SNVLk.js";import"./Text-D8iCnd0a.js";import"./EmulatedBoldText-C38wPnte.js";import"./LoadingSpinner-LCrs4rVN.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BiJGxu5-.js";import"./ProgressBar-BpanmrTJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DzXxx4G-.js";import"./useFocus-DS8-NOtK.js";import"./useFocusRing-C2luJKmh.js";import"./useFocusable-ZL6151jY.js";import"./ContextMenuSection-CLGzRvVY.js";import"./Dialog-D6YV7AqF.js";import"./RSPContexts-BakoLx3C.js";import"./OverlayArrow-9doXs0eI.js";import"./useControlledState-Dbx7ZwrT.js";import"./Collection-C3nUBF4h.js";import"./CollectionBuilder-B_u7Wa0Q.js";import"./SelectionIndicator-Cq3hNpeI.js";import"./Separator-BCuxzefv.js";import"./SelectionManager-CUwtbCt4.js";import"./useEvent-nRU769M-.js";import"./useCollator-zmWlXBku.js";import"./FocusScope-Bgf4u7XC.js";import"./VisuallyHidden-ChWvOP_M.js";import"./getActionGroupSlot-CXPM0c0n.js";import"./useStatic-B8Xkh7jF.js";import"./context-Do4klyfP.js";import"./ColumnLayout-CU-bwuyz.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-C7JQv0_C.js";import"./RadioGroup-kiANVexC.js";import"./Form-CcsDzmFP.js";import"./useFormValidation-Co07oj9m.js";import"./useFormReset-BLKvBmEx.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,B=v("submit"),Le={title:"Integrations/React Hook Form/RadioGroup",component:x,render:()=>{const o=async F=>{await S(1500),B(F)},R=j({defaultValues:{gender:"",genderDefaultValue:"diverse",genderRequired:""}}),a=O();return e.jsx(f,{form:R,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(a,{name:"gender",children:e.jsxs(m,{children:[e.jsx(n,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(a,{name:"genderDefaultValue",children:e.jsxs(m,{children:[e.jsx(n,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(a,{name:"genderRequired",rules:{required:"Please select your gender"},children:e.jsxs(m,{children:[e.jsx(n,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(g,{children:e.jsx(s,{type:"submit",children:"Submit"})})]})})}},t={},i={render:()=>{const o=j();return e.jsxs(f,{form:o,onSubmit:()=>v("submitted"),children:[e.jsx(x,{name:"text",rules:{required:!0},children:e.jsxs(m,{m:[1,1],l:[1,1,1],children:[e.jsx(n,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(s,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(s,{onPress:()=>o.setFocus("text"),children:"focus through form"}),e.jsx(s,{type:"submit",children:"Submit"})]})}};var d,l,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,c,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
