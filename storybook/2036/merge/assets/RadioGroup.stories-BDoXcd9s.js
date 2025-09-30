import{j as r}from"./iframe-lUo2nGnz.js";import{a as x,u as j,F as f,t as O}from"./Form-DCV6t3hU.js";import{L as n}from"./Label-JtAW2uUp.js";import{B as s}from"./Button-BJSwvuxb.js";import{S as b}from"./Section-BmAZdHSz.js";import{A as g}from"./ActionGroup-DNEOJX-0.js";import{s as S}from"./Action-CDVhK15_.js";import{R as m,b as e}from"./RadioButton-CtzNHRJp.js";import"./index-Cun1SEai.js";import"./dynamic-C5kU0I4Y.js";import"./PropsContextProvider-B2pQApQK.js";import"./mergeRefs-1r9WJl4m.js";import"./index-CW-GEE7m.js";import"./clsx-B-dksMZM.js";import"./FieldError-DpFF5VSh.js";import"./IconWarning-BtoswtWr.js";import"./FieldError-pxjDXQ2F.js";import"./utils-D2KvaKmW.js";import"./Text-C5QP4r7D.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-JjnBJVka.js";import"./context-FIeePqeN.js";import"./browser-BBsn6OTc.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CYuE9nkF.js";import"./Hidden-BOpFHvF6.js";import"./Text-BGPM5sar.js";import"./EmulatedBoldText-DD5sDuaA.js";import"./LoadingSpinner-DTzdlBQ_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D-InGAKb.js";import"./ProgressBar-3LATX2wa.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Iu709INZ.js";import"./useFocus-C7dEKa6p.js";import"./useFocusRing-frjSVRec.js";import"./useFocusable-2sr9c9hg.js";import"./ContextMenuSection-CdG250Rt.js";import"./Popover-DptWEuw1.js";import"./DialogTriggerView-7b0oIJZS.js";import"./context-D7GWSiW-.js";import"./useStatic-DLvoHQpQ.js";import"./RSPContexts-CxDqvi-e.js";import"./ClearPropsContextView-Bo_EMYcr.js";import"./useControlledState-DwS5X_XZ.js";import"./FocusScope-CjtAQOUp.js";import"./useCollator-BFbNb1L5.js";import"./VisuallyHidden-A1EOSTtD.js";import"./Collection-BInid-on.js";import"./CollectionBuilder-CGFi4T7n.js";import"./context-BgyeT2oB.js";import"./Separator-DsGZOlbx.js";import"./SelectionManager-Bj6Jwl9K.js";import"./useEvent-CfApzY12.js";import"./Switch-CAz7sbnA.js";import"./useMakeFocusable-DZi0m29n.js";import"./useToggleState-w03Qksro.js";import"./useFormReset-D9xEl0IY.js";import"./getActionGroupSlot-CI7hC4XP.js";import"./ColumnLayout-CPqIlbG2.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-BMaONg6M.js";import"./Form-CNo_OXXk.js";import"./useFormValidation-DhAPE9Wk.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,B=v("submit"),Vr={title:"Integrations/React Hook Form/RadioGroup",component:x,render:()=>{const o=async F=>{await S(1500),B(F)},R=j({defaultValues:{gender:"",genderDefaultValue:"diverse",genderRequired:""}}),a=O();return r.jsx(f,{form:R,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(a,{name:"gender",children:r.jsxs(m,{children:[r.jsx(n,{children:"Gender"}),r.jsx(e,{value:"male",children:"Male"}),r.jsx(e,{value:"female",children:"Female"}),r.jsx(e,{value:"diverse",children:"Diverse"})]})}),r.jsx(a,{name:"genderDefaultValue",children:r.jsxs(m,{children:[r.jsx(n,{children:"Gender"}),r.jsx(e,{value:"male",children:"Male"}),r.jsx(e,{value:"female",children:"Female"}),r.jsx(e,{value:"diverse",children:"Diverse"})]})}),r.jsx(a,{name:"genderRequired",rules:{required:"Please select your gender"},children:r.jsxs(m,{children:[r.jsx(n,{children:"Gender"}),r.jsx(e,{value:"male",children:"Male"}),r.jsx(e,{value:"female",children:"Female"}),r.jsx(e,{value:"diverse",children:"Diverse"})]})}),r.jsx(g,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},t={},i={render:()=>{const o=j();return r.jsxs(f,{form:o,onSubmit:()=>v("submitted"),children:[r.jsx(x,{name:"text",rules:{required:!0},children:r.jsxs(m,{m:[1,1],l:[1,1,1],children:[r.jsx(n,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>o.setFocus("text"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};var p,d,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,c,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
