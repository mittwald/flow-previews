import{j as r}from"./iframe-BsWE3_7o.js";import{a as b,u as f,F as v,t as k}from"./Form-CmXyG-QV.js";import{L as i}from"./Label-D6AcunKl.js";import{B as l}from"./Button-B8k4PzHL.js";import{S as O}from"./Section-BBfFuT6N.js";import{A as B}from"./ActionGroup-B8fCt23K.js";import{s as C}from"./Action-BuGRjvOM.js";import{C as s}from"./CheckboxGroup-q6u1p0lX.js";import{C as e}from"./Checkbox-CK6PTLkD.js";import{F as c}from"./FieldDescription-BrfrkFA7.js";import"./index-Cun1SEai.js";import"./dynamic-CuzBn_WV.js";import"./flowComponent-Cm7zYSgo.js";import"./index-Bx4whYyJ.js";import"./clsx-B-dksMZM.js";import"./index-Dl-28hpS.js";import"./FieldError-Dyno9e6-.js";import"./IconWarning-DP87PzzZ.js";import"./FieldError-B9NI0uR6.js";import"./utils-CDS5H-7_.js";import"./Text-TQ7kewRG.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Cam9elWn.js";import"./context-JgUU7ob0.js";import"./browser-LwAPTQ-2.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CRuRdSc0.js";import"./Hidden-BJN4u45n.js";import"./Text-BX8imB2t.js";import"./EmulatedBoldText-BTQlJ2rY.js";import"./LoadingSpinner-BHbUYlFD.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Dk5kDV0G.js";import"./ProgressBar-B-b_Vg6x.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BAk4CpA9.js";import"./useFocus-D0VElTMN.js";import"./useFocusRing-VBFwaSrL.js";import"./useFocusable-CddXNiQZ.js";import"./ContextMenuSection-B-erxgIm.js";import"./Dialog-BSaAMEbK.js";import"./RSPContexts-BZ8FUmDB.js";import"./OverlayArrow-IIw_dauQ.js";import"./useControlledState-ejVvWz-k.js";import"./Collection-DojlZZtj.js";import"./CollectionBuilder-B76ZLXz4.js";import"./context-lpkCHAFg.js";import"./Separator-Dpoi8-ef.js";import"./SelectionManager-01TNEB4e.js";import"./useEvent-iSMBndhq.js";import"./useCollator-Dfjx7kh0.js";import"./FocusScope-BU2EHzP0.js";import"./VisuallyHidden-CnzfSQ3j.js";import"./getActionGroupSlot-C6PA21cd.js";import"./useStatic-BvSdYqAU.js";import"./context-CUTz3ChQ.js";import"./ColumnLayout-CkPG8N6V.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-r7PJwVhH.js";import"./Form-C2iHaD1W.js";import"./useFormValidation-5Qvk76gI.js";import"./useToggleState-DvZpr89w.js";import"./useFormReset-DgPn8KEa.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Lr={title:"Integrations/React Hook Form/CheckboxGroup",component:b,render:()=>{const o=async t=>{await C(1500),g(t)},F=f({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),n=k();return r.jsx(v,{form:F,onSubmit:o,children:r.jsxs(O,{children:[r.jsx(n,{name:"interests",children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(n,{name:"interestsDefaultValue",children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(n,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(c,{children:"Check at least 1 item"})]})}),r.jsx(n,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(c,{children:"Check max 2 items"})]})}),r.jsx(B,{children:r.jsx(l,{type:"submit",children:"Submit"})})]})})}},m={},a={render:()=>{const o=f();return r.jsxs(v,{form:o,onSubmit:async()=>await C(2e3),children:[r.jsx(b,{name:"text",rules:{required:!0},children:r.jsxs(s,{l:[1,1,1],m:[1,1],children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("text"),children:"focus through form"}),r.jsx(l,{type:"submit",children:"Submit"})]})}};var p,u,h;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(h=(u=m.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var d,x,j;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
