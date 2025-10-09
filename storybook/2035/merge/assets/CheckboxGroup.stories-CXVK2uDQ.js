import{j as r}from"./iframe-CP5fTbjA.js";import{a as b,u as f,F as v,t as k}from"./Form-DYPer1qA.js";import{L as i}from"./Label-BqN0rMYY.js";import{B as l}from"./Button-LzGPdYwx.js";import{S as O}from"./Section-DiXKzprR.js";import{A as B}from"./ActionGroup-Cxrl3sEx.js";import{s as C}from"./Action-BkjzGa_I.js";import{C as s}from"./CheckboxGroup-CjAEi9gq.js";import{C as e}from"./Checkbox-CegeZ-vI.js";import{F as c}from"./FieldDescription-CEO5JJNc.js";import"./index-Cun1SEai.js";import"./dynamic-e5X8hiwW.js";import"./flowComponent-CTnt5eSB.js";import"./index-hIOjYjaD.js";import"./clsx-B-dksMZM.js";import"./index-DskZqzrG.js";import"./FieldError-De2xyHB9.js";import"./IconWarning-YasB_Ei3.js";import"./FieldError-CsW0lZ5n.js";import"./utils-D6GTtcOE.js";import"./Text-BAGiBnj-.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-DGz7N0CE.js";import"./context-pkC0B_Pd.js";import"./browser-BxAQ3I6S.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CxfqiuLL.js";import"./Hidden-CR2rUGYE.js";import"./Text-CHvdz95V.js";import"./EmulatedBoldText-CnmkyqOO.js";import"./LoadingSpinner-B6JgwtAG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DcNEz-W6.js";import"./ProgressBar-DPdjuR9Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BOoZUp13.js";import"./useFocus-wlnmJgKA.js";import"./useFocusRing-Cgj30sRP.js";import"./useFocusable-BoWde-QA.js";import"./ContextMenuSection-V-zZv8b3.js";import"./Dialog-DAzhbt-W.js";import"./RSPContexts-BW6Q5n3-.js";import"./OverlayArrow-CtZDvQgB.js";import"./useControlledState-5yv2Ipvc.js";import"./Collection-BOIgwszt.js";import"./CollectionBuilder-HzejECpA.js";import"./context-BoN7p6BF.js";import"./Separator-CXM6la1d.js";import"./SelectionManager-zDFJDssk.js";import"./useEvent-B3kJFynN.js";import"./useCollator-NOEQaEQX.js";import"./FocusScope-OWR7C_89.js";import"./VisuallyHidden-umqttFyt.js";import"./getActionGroupSlot-DggKykPy.js";import"./useStatic-CBwN_HzY.js";import"./context-DXGAVSML.js";import"./ColumnLayout-Yhq-KmU5.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-D5Xsb7wJ.js";import"./Form-DU1fRx45.js";import"./useFormValidation-Lrzd87zJ.js";import"./useToggleState-BWQchk9p.js";import"./useFormReset-B6af-x2Y.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Lr={title:"Integrations/React Hook Form/CheckboxGroup",component:b,render:()=>{const o=async t=>{await C(1500),g(t)},F=f({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),n=k();return r.jsx(v,{form:F,onSubmit:o,children:r.jsxs(O,{children:[r.jsx(n,{name:"interests",children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(n,{name:"interestsDefaultValue",children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(n,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(c,{children:"Check at least 1 item"})]})}),r.jsx(n,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(c,{children:"Check max 2 items"})]})}),r.jsx(B,{children:r.jsx(l,{type:"submit",children:"Submit"})})]})})}},m={},a={render:()=>{const o=f();return r.jsxs(v,{form:o,onSubmit:async()=>await C(2e3),children:[r.jsx(b,{name:"text",rules:{required:!0},children:r.jsxs(s,{l:[1,1,1],m:[1,1],children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("text"),children:"focus through form"}),r.jsx(l,{type:"submit",children:"Submit"})]})}};var p,u,h;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(h=(u=m.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var d,x,j;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <CheckboxGroup l={[1, 1, 1]} m={[1, 1]}>
            <Label>Options</Label>
            <Checkbox value="1">Option 1</Checkbox>
            <Checkbox value="2">Option 2</Checkbox>
            <Checkbox value="3">Option 3</Checkbox>
            <Checkbox value="4">Option 4</Checkbox>
            <Checkbox value="5">Option 5</Checkbox>
            <Checkbox value="6">Option 6</Checkbox>
          </CheckboxGroup>
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
}`,...(j=(x=a.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const Rr=["Default","WithFocusAndError"];export{m as Default,a as WithFocusAndError,Rr as __namedExportsOrder,Lr as default};
