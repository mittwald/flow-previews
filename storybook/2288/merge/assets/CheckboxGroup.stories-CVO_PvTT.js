import{j as e,r as v}from"./iframe-Bj8CIgLy.js";import{a as p,u,F as h,t as C,R as j,S as f}from"./ResetButton-5FZ7-Sc5.js";import{L as i}from"./Label-DCfOJgVU.js";import{B as x}from"./Button-b_60CJFp.js";import{S as k}from"./Section-Bw-Treyf.js";import{A as O}from"./ActionGroup-C-nWA-s8.js";import{s as d}from"./Action-DbcbId4I.js";import{C as n}from"./CheckboxGroup-DE2KZzeS.js";import{C as r}from"./Checkbox-DEskWRV1.js";import{F as b}from"./FieldDescription-tBjikzHa.js";import{F}from"./FieldError-Dbjs-A5K.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DEq-wVmB.js";import"./flowComponent-BPltRtpV.js";import"./index-BeouMsqR.js";import"./clsx-B-dksMZM.js";import"./index-DYakERwo.js";import"./useLocalizedStringFormatter-B8a-qUY7.js";import"./context-RK9vgtK2.js";import"./useRef-CJxAjFY9.js";import"./utils-D41FTHpf.js";import"./ButtonView-DoUQTLRD.js";import"./browser-Rl4DjN4H.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BAoc3jdD.js";import"./Hidden-DWJk28Vx.js";import"./IconWarning-KvO0562x.js";import"./remote-ChNLl0N8.js";import"./Text-BbFFlg8m.js";import"./EmulatedBoldText-CYAzRgIu.js";import"./Text-CVMu3Bei.js";import"./LoadingSpinner-Bl0_iJOm.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Kf97rzrP.js";import"./ProgressBar-CzzSLaP3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-j5JIlG5u.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BLrqdZMB.js";import"./useFocus-BJLP4kuV.js";import"./useFocusRing-0HtVE4-I.js";import"./useFocusable-DNf9Dm0r.js";import"./ContextMenuSection-aa2v9fsF.js";import"./Dialog-vXYkYCcw.js";import"./RSPContexts-C3RQOwqv.js";import"./OverlayArrow-zA421arv.js";import"./useControlledState-C0IHmt74.js";import"./Collection-Ddvl2Mqw.js";import"./CollectionBuilder-BBfbdfv8.js";import"./SelectionIndicator-DBsPgOzp.js";import"./Separator-ZmTIxQU_.js";import"./SelectionManager-DK0mm2wz.js";import"./useEvent-UL9Ap3Pm.js";import"./useCollator-w2x96sHr.js";import"./FocusScope-DNVRBXI-.js";import"./VisuallyHidden-D10Fyvvv.js";import"./getActionGroupSlot-BcyfBjwk.js";import"./useStatic-BJFVwiuT.js";import"./context-CihUwagI.js";import"./ColumnLayout-C2Om1Els.js";import"./useMakeFocusable-D2WqMYFi.js";import"./useFieldComponent-DFS7CEov.js";import"./FieldError-cTj-tlV1.js";import"./Form-CdHdNrpC.js";import"./useFormValidation-CuYWsRMr.js";import"./useToggleState-BcXaMmc-.js";import"./useFormReset-DPVe5t_C.js";import"./AlertText-Bt0Daj0V.js";import"./AlertIcon-Bub-4wJk.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),We={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),a=C();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(a,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(a,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={},m={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
            <Label>Options</Label>
            <Checkbox value="1">Option 1</Checkbox>
            <Checkbox value="2">Option 2</Checkbox>
            <Checkbox value="3">Option 3</Checkbox>
            <Checkbox value="4">Option 4</Checkbox>
            <Checkbox value="5">Option 5</Checkbox>
            <Checkbox value="6">Option 6</Checkbox>
          </CheckboxGroup>
        </Field>
        <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} isInvalid {...props}>
          <Label>Options</Label>
          <Checkbox value="1">Option 1</Checkbox>
          <Checkbox value="2">Option 2</Checkbox>
          <Checkbox value="3">Option 3</Checkbox>
          <Checkbox value="4">Option 4</Checkbox>
          <Checkbox value="5">Option 5</Checkbox>
          <Checkbox value="6">Option 6</Checkbox>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxGroup>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...c.parameters?.docs?.source}}};const Me=["Default","WithFieldError","WithFocus"];export{l as Default,m as WithFieldError,c as WithFocus,Me as __namedExportsOrder,We as default};
