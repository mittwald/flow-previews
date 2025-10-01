import{j as r}from"./iframe-D2Anwmct.js";import{a as b,u as f,F as v,t as k}from"./Form-NvgoK1At.js";import{L as i}from"./Label-CqHNa78s.js";import{B as l}from"./Button-DzBCXdJ8.js";import{S as O}from"./Section-D-XgJ8U5.js";import{A as B}from"./ActionGroup-DwbiqJMg.js";import{s as C}from"./Action-TQJO2mvI.js";import{C as s}from"./CheckboxGroup-CsZdea4q.js";import{C as e}from"./Checkbox-D3GtW_Cq.js";import{F as c}from"./FieldDescription-Dxspg-xZ.js";import"./index-Cun1SEai.js";import"./dynamic-Cfahilqg.js";import"./flowComponent-DKluqIHM.js";import"./index-f9td_37l.js";import"./clsx-B-dksMZM.js";import"./index-Ch7RQrKi.js";import"./FieldError-BoPnTUuW.js";import"./IconWarning-DnpABaws.js";import"./FieldError-BxxGUPOn.js";import"./utils-BpjcCBEz.js";import"./Text-lRP8kqf1.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BekYTjw8.js";import"./context--yho_VB2.js";import"./browser-CPuaporN.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CyDLPDuC.js";import"./Hidden-C6VQoCGL.js";import"./Text-DtdPLjLU.js";import"./EmulatedBoldText-C4J0xt-K.js";import"./LoadingSpinner-Dn83SSS7.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DXQ0LQy1.js";import"./ProgressBar-B5M0YtFC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DkH4CmpU.js";import"./useFocus-CPbnM8zc.js";import"./useFocusRing-BsT1m1qa.js";import"./useFocusable-BPmxfIwz.js";import"./ContextMenuSection-DEYSZK6N.js";import"./Dialog-CzAn2oqc.js";import"./RSPContexts-W5re5w0Z.js";import"./OverlayArrow-nozbf4eZ.js";import"./useControlledState-CmSk5MJT.js";import"./Collection-C6c4IzCm.js";import"./CollectionBuilder-BN9-opMn.js";import"./context-X2EiAF6-.js";import"./Separator-XkOJaGaU.js";import"./SelectionManager-BVJUtLYE.js";import"./useEvent-eZ8bSyVx.js";import"./useCollator-DzTf225U.js";import"./FocusScope-B3f0Mp00.js";import"./VisuallyHidden-Cz7LPiXA.js";import"./getActionGroupSlot-CMiTVAum.js";import"./useStatic-CHoU06Vl.js";import"./context-BRmDUAMd.js";import"./ColumnLayout-CxbtdzVr.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-DLbAZGSO.js";import"./Form-C_7tgvec.js";import"./useFormValidation-s-r8BMkB.js";import"./useToggleState-DfnSsBnT.js";import"./useFormReset-Bn-oECSu.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Lr={title:"Integrations/React Hook Form/CheckboxGroup",component:b,render:()=>{const o=async t=>{await C(1500),g(t)},F=f({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),n=k();return r.jsx(v,{form:F,onSubmit:o,children:r.jsxs(O,{children:[r.jsx(n,{name:"interests",children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(n,{name:"interestsDefaultValue",children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(n,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(c,{children:"Check at least 1 item"})]})}),r.jsx(n,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(c,{children:"Check max 2 items"})]})}),r.jsx(B,{children:r.jsx(l,{type:"submit",children:"Submit"})})]})})}},m={},a={render:()=>{const o=f();return r.jsxs(v,{form:o,onSubmit:async()=>await C(2e3),children:[r.jsx(b,{name:"text",rules:{required:!0},children:r.jsxs(s,{l:[1,1,1],m:[1,1],children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("text"),children:"focus through form"}),r.jsx(l,{type:"submit",children:"Submit"})]})}};var p,u,h;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(h=(u=m.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var d,x,j;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
