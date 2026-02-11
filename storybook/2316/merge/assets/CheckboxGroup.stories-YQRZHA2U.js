import{r as v,j as e}from"./iframe-BBLgQM8W.js";import{a as p,u,F as h,R as j,S as f,t as C}from"./ResetButton-BLMx4wj7.js";import{L as i}from"./Label-BQdcxq0o.js";import{B as x}from"./Button-B_d3OkSN.js";import{S as k}from"./Section-BqYCDxKj.js";import{A as O}from"./ActionGroup-DI2Kr1jI.js";import{s as d}from"./Action-vczYGY_C.js";import{C as n}from"./CheckboxGroup-CYQQI_4p.js";import{C as r}from"./Checkbox-BnJag2Qh.js";import{F as b}from"./FieldDescription-DUGpusEG.js";import{F}from"./FieldError-DAXPSsyp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-De16JUVi.js";import"./flowComponent-D-0ABlaS.js";import"./index-DIoQv3Yu.js";import"./clsx-B-dksMZM.js";import"./index-CC4aSS2B.js";import"./useLocalizedStringFormatter-ndUPvi50.js";import"./context-CbfWsJFN.js";import"./useRef-BADtkrSm.js";import"./utils-Bzwl2RbX.js";import"./ButtonView-BpODKVdh.js";import"./browser-DI7yhJk5.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DjOsKLLo.js";import"./Hidden-CcHv8P9l.js";import"./IconWarning-CmmOPW6y.js";import"./remote-Vne7hGXH.js";import"./Text-DyzGue3k.js";import"./EmulatedBoldText-BZaUBYn6.js";import"./Text-C-vmddAy.js";import"./LoadingSpinner-CfkxbS8M.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-M7FHgNE8.js";import"./ProgressBar-C8xfeLyO.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-65Ti_lew.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DXblhpXj.js";import"./useFocus-atMo-T8H.js";import"./useFocusRing-XNEcT-2-.js";import"./useFocusable-BlOp3ek5.js";import"./ContextMenuSection-DowsXKqD.js";import"./Dialog-ErohAvYc.js";import"./RSPContexts-CYvfEZEC.js";import"./OverlayArrow-DOWztXxW.js";import"./useControlledState-Cx-WZngS.js";import"./Collection-D0FsBWET.js";import"./CollectionBuilder-B0O9WQSu.js";import"./SelectionIndicator-CxHxHFYG.js";import"./Separator-Du5IBTyX.js";import"./SelectionManager-Qclabrtm.js";import"./useEvent-xi19_WIE.js";import"./useCollator--gNzNCc1.js";import"./FocusScope-BuBo0u5V.js";import"./VisuallyHidden-DReBsRIr.js";import"./getActionGroupSlot-BNVlq3z6.js";import"./useStatic-DeJLZZ0I.js";import"./context-On8QMk-S.js";import"./ColumnLayout-Da6dv-pL.js";import"./useMakeFocusable-DHFk8gCs.js";import"./useFieldComponent-BfDJ4pJf.js";import"./FieldError-CxkPyMXc.js";import"./Form-WOMIl9aS.js";import"./useFormValidation-DAic1NnU.js";import"./useToggleState-Db4BOF7R.js";import"./useFormReset-4n7xFzn-.js";import"./AlertText-B4ActtEe.js";import"./AlertIcon-CiXM2S_P.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),We={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),a=C();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(a,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(a,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={},m={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
