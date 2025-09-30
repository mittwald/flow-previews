import{j as r}from"./iframe-Co5olYEg.js";import{a as x,u as j,F as f,t as O}from"./Form-KJ02LKVv.js";import{L as n}from"./Label-BiorYBBr.js";import{B as s}from"./Button-W4WIo1el.js";import{S as b}from"./Section-DKEvIbkh.js";import{A as g}from"./ActionGroup-ByB8rRUO.js";import{s as S}from"./Action-Cid4LteC.js";import{R as m,b as e}from"./RadioButton-DJ9PcHOl.js";import"./index-Cun1SEai.js";import"./dynamic-DrcT1vJi.js";import"./PropsContextProvider-B3fcy-aZ.js";import"./mergeRefs-DCCfFRi5.js";import"./index-dJ4wby8j.js";import"./clsx-B-dksMZM.js";import"./FieldError-ozznJ0Nd.js";import"./IconWarning-Deg5RPPa.js";import"./FieldError-Clh4ku1F.js";import"./utils-CfsHCmXQ.js";import"./Text-DL7aZegp.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CMxRm_Et.js";import"./context-VmB2ki6S.js";import"./browser-Lvchr8XH.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-z037IMCX.js";import"./Hidden-DTncj6eg.js";import"./Text-D64yDBkh.js";import"./EmulatedBoldText-m8x9dOVA.js";import"./LoadingSpinner-CRLYV60Z.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B1uEfXYj.js";import"./ProgressBar-CLW14R0J.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BWYiyAlu.js";import"./useFocus-D_PcVBPO.js";import"./useFocusRing-CNR6shO8.js";import"./useFocusable-CeUOSLWr.js";import"./ContextMenuSection-BCeGxmuy.js";import"./Popover-PLO4F2vM.js";import"./DialogTriggerView-CesmwlI4.js";import"./context-ppKN523Y.js";import"./useStatic-BjVSqcP9.js";import"./RSPContexts-DTaEDLKz.js";import"./ClearPropsContextView-ZglcEVcs.js";import"./useControlledState-BLXlsrOK.js";import"./FocusScope-Dnc6FNOh.js";import"./useCollator-BMKqU-cc.js";import"./VisuallyHidden-CTHGVqVW.js";import"./Collection-Zbxmz5mL.js";import"./CollectionBuilder-BnPgo0UY.js";import"./context-C8LB4vR8.js";import"./Separator-BmXooASW.js";import"./SelectionManager-DPLcFzYl.js";import"./useEvent-DsDRYPQb.js";import"./Switch-Djj9tj67.js";import"./useMakeFocusable-DB3B4rem.js";import"./useToggleState-4TXdrtqZ.js";import"./useFormReset-CgjW6y2V.js";import"./getActionGroupSlot-BPrq4YXq.js";import"./ColumnLayout-E094mniZ.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-CHmIW8zv.js";import"./Form-XAAYfRmY.js";import"./useFormValidation-CpjqECXn.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,B=v("submit"),Vr={title:"Integrations/React Hook Form/RadioGroup",component:x,render:()=>{const o=async F=>{await S(1500),B(F)},R=j({defaultValues:{gender:"",genderDefaultValue:"diverse",genderRequired:""}}),a=O();return r.jsx(f,{form:R,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(a,{name:"gender",children:r.jsxs(m,{children:[r.jsx(n,{children:"Gender"}),r.jsx(e,{value:"male",children:"Male"}),r.jsx(e,{value:"female",children:"Female"}),r.jsx(e,{value:"diverse",children:"Diverse"})]})}),r.jsx(a,{name:"genderDefaultValue",children:r.jsxs(m,{children:[r.jsx(n,{children:"Gender"}),r.jsx(e,{value:"male",children:"Male"}),r.jsx(e,{value:"female",children:"Female"}),r.jsx(e,{value:"diverse",children:"Diverse"})]})}),r.jsx(a,{name:"genderRequired",rules:{required:"Please select your gender"},children:r.jsxs(m,{children:[r.jsx(n,{children:"Gender"}),r.jsx(e,{value:"male",children:"Male"}),r.jsx(e,{value:"female",children:"Female"}),r.jsx(e,{value:"diverse",children:"Diverse"})]})}),r.jsx(g,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},t={},i={render:()=>{const o=j();return r.jsxs(f,{form:o,onSubmit:()=>v("submitted"),children:[r.jsx(x,{name:"text",rules:{required:!0},children:r.jsxs(m,{m:[1,1],l:[1,1,1],children:[r.jsx(n,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>o.setFocus("text"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};var p,d,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,c,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(c=i.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const Ir=["Default","WithFocusAndError"];export{t as Default,i as WithFocusAndError,Ir as __namedExportsOrder,Vr as default};
