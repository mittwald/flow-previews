import{j as e,r as v}from"./iframe-B-26223i.js";import{a as p,u,F as h,t as C,R as j,S as f}from"./ResetButton-BQyw1x6f.js";import{L as i}from"./Label-htHf1MZ3.js";import{B as x}from"./Button-B60fo84_.js";import{S as k}from"./Section-Dq69RUil.js";import{A as O}from"./ActionGroup-BPwiJ8d1.js";import{s as d}from"./Action-CKtvTujB.js";import{C as n}from"./CheckboxGroup-F11zQtw-.js";import{C as r}from"./Checkbox-BIrrDPyw.js";import{F as b}from"./FieldDescription-DQk95Kge.js";import{F}from"./FieldError-DKJxt2u7.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DWm47R25.js";import"./flowComponent-Cm2ULMwR.js";import"./index-C96xSvbi.js";import"./clsx-B-dksMZM.js";import"./index-CMj-JRml.js";import"./useLocalizedStringFormatter-CHKosLk9.js";import"./context-B9n95xcZ.js";import"./useRef-BniYW6fy.js";import"./utils-CprJ_klo.js";import"./ButtonView-N6QWot1B.js";import"./browser-DNWQphaZ.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Ddb5Z1yf.js";import"./Hidden-BAuAU20u.js";import"./IconWarning-CfZm6euj.js";import"./remote-CUr3PG4h.js";import"./Text-C25EED6m.js";import"./EmulatedBoldText-Co4v7GV8.js";import"./Text-CrdzXlCc.js";import"./LoadingSpinner-CNdw31t2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C9Zg0tM0.js";import"./ProgressBar-DwD1l90a.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUREvcwl.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BlwAXRn7.js";import"./useFocus-DYSsUR82.js";import"./useFocusRing-DATGHg9y.js";import"./useFocusable-CRgLtiVg.js";import"./ContextMenuSection-EzbGflNa.js";import"./Dialog-COoPEj_z.js";import"./RSPContexts-Braq8AdO.js";import"./OverlayArrow-Cnkc5XCY.js";import"./useControlledState-CCY4nzRh.js";import"./Collection-DFxwbH7P.js";import"./CollectionBuilder-BqJ1MbN-.js";import"./SelectionIndicator-DrGDjKtL.js";import"./Separator-Bc4LdP2j.js";import"./SelectionManager-BbjsNIkI.js";import"./useEvent-C1z2hzAA.js";import"./useCollator-cEvXopFB.js";import"./FocusScope-BG92zKg5.js";import"./VisuallyHidden-DpBOnOEH.js";import"./getActionGroupSlot-BO_i0UUK.js";import"./useStatic-DyURBROl.js";import"./context-JKAIHclB.js";import"./ColumnLayout-BtTcbjxk.js";import"./useMakeFocusable-_R8ioeyt.js";import"./useFieldComponent-eul3OsXk.js";import"./FieldError-B1RwUwkr.js";import"./Form-Vtk-UJSV.js";import"./useFormValidation-CodwuA9r.js";import"./useToggleState-CI32NFO7.js";import"./useFormReset-BQreYCpE.js";import"./AlertText-SDytihrL.js";import"./AlertIcon-Bi7YC7dH.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),We={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),a=C();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(a,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(a,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={},m={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
