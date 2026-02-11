import{r as v,j as e}from"./iframe-BnHQGzj-.js";import{a as p,u,F as h,R as j,S as f,t as C}from"./ResetButton-fNAdGvYj.js";import{L as i}from"./Label-u3CIBBS-.js";import{B as x}from"./Button-kOzdzwoL.js";import{S as k}from"./Section-SvACH-rM.js";import{A as O}from"./ActionGroup-BPljKUZx.js";import{s as d}from"./Action-D5FY68jf.js";import{C as n}from"./CheckboxGroup-DnfyQhQB.js";import{C as r}from"./Checkbox-B-MvryCq.js";import{F as b}from"./FieldDescription-yrYvUz27.js";import{F}from"./FieldError-hA7hA6sK.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dg_y_eXk.js";import"./flowComponent-B3zgfniW.js";import"./index-B4eSx5RY.js";import"./clsx-B-dksMZM.js";import"./index-CR3_Geu_.js";import"./useLocalizedStringFormatter-DfUxbFDU.js";import"./context-oT0KmQcZ.js";import"./useRef-DC89URQK.js";import"./utils-B_drgFmA.js";import"./ButtonView-CPuOwsd2.js";import"./browser-Byd_T3zS.js";import"./Label.module-CUYTf9Jc.js";import"./Label-C4kylnhO.js";import"./Hidden-DGNiPayS.js";import"./IconWarning-BD5ZgLZv.js";import"./remote-DzOTiMGq.js";import"./Text-BWqTdGF3.js";import"./EmulatedBoldText-B2gQbs-b.js";import"./Text-CP9lFNhL.js";import"./LoadingSpinner-DoB6VVvS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-7nIxjvHJ.js";import"./ProgressBar-V752D4mF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpMFroVF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DW43gzrd.js";import"./useFocus-BQLqug8q.js";import"./useFocusRing-BtYlF30D.js";import"./useFocusable-CpiznpYH.js";import"./ContextMenuSection-BQD1q2_K.js";import"./Dialog-vlYkkLZ8.js";import"./RSPContexts-DJrv2Up2.js";import"./OverlayArrow-CU__1Pr_.js";import"./useControlledState-ARGAgX5I.js";import"./Collection-D7DmweA7.js";import"./CollectionBuilder-Dmus25Kx.js";import"./SelectionIndicator-Bje3agQK.js";import"./Separator-DEQQD5jL.js";import"./SelectionManager-D547R46g.js";import"./useEvent-DbwR8Qxp.js";import"./useCollator-B-3R_2dL.js";import"./FocusScope-BV-dArZv.js";import"./VisuallyHidden-DN_pHWhj.js";import"./getActionGroupSlot-DFydpqIy.js";import"./useStatic-CXOpTYPY.js";import"./context-CLHbEMzO.js";import"./ColumnLayout-dkwrOEv0.js";import"./useMakeFocusable-BYAczGGo.js";import"./useFieldComponent-BKOZgMTQ.js";import"./FieldError-CfhVGgFS.js";import"./Form-B5QWBDfx.js";import"./useFormValidation-CJa5Pm36.js";import"./useToggleState-e3rXJv8v.js";import"./useFormReset-C2cP98Fi.js";import"./AlertText-BSsMj9jl.js";import"./AlertIcon-cpK7-VlX.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),We={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),a=C();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(a,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(a,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={},m={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
