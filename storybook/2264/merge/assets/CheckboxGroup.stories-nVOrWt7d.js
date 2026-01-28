import{j as e,r as v}from"./iframe-HHIIuBER.js";import{a as p,u,F as h,t as C,R as j,S as f}from"./ResetButton-2sRpn4iN.js";import{L as i}from"./Label-CBXKH6Tn.js";import{B as x}from"./Button-D9uXd6kS.js";import{S as k}from"./Section-DSfs8S5C.js";import{A as O}from"./ActionGroup-CAmp-FAx.js";import{s as d}from"./Action-_oJPJyM7.js";import{C as n}from"./CheckboxGroup-BLTWu09I.js";import{C as r}from"./Checkbox-CWE4dMUU.js";import{F as b}from"./FieldDescription-CXq0EMj9.js";import{F}from"./FieldError-Fy3l3DO0.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-UvYry7O0.js";import"./flowComponent-Bj-yCW37.js";import"./index-GTbupaTN.js";import"./clsx-B-dksMZM.js";import"./index-CXDCOpiF.js";import"./useLocalizedStringFormatter-BQVDI3r4.js";import"./context-BwOS-W-N.js";import"./useRef-UyhpXirX.js";import"./utils-Cg0Q0SJj.js";import"./ButtonView-QAfAhpRw.js";import"./browser-BiwdkBmz.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DYUVUuL-.js";import"./Hidden-B0PUXGbF.js";import"./IconWarning-CPuUEZGY.js";import"./remote-MyOm1NIW.js";import"./Text-1gTdtZLR.js";import"./EmulatedBoldText-DygQZkyN.js";import"./Text-XNblTka2.js";import"./LoadingSpinner-DsMp8zOw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B3mdCDJz.js";import"./ProgressBar-2UTBzJPE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-5SH0-wGx.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DR7SsbUT.js";import"./useFocus--KWf2FGc.js";import"./useFocusRing-4HIuR3kq.js";import"./useFocusable-CK9MQKQ0.js";import"./ContextMenuSection-CTAuboSL.js";import"./Dialog-17xgL67A.js";import"./RSPContexts-DTcyqJ2O.js";import"./OverlayArrow-BDTM6fDd.js";import"./useControlledState-DbjjrDzt.js";import"./Collection-CvBP3D3N.js";import"./CollectionBuilder-O9kuHpIB.js";import"./SelectionIndicator-D4-zI_jf.js";import"./Separator-C2NuKe-C.js";import"./SelectionManager-sYUHP04o.js";import"./useEvent-Btkolbn2.js";import"./useCollator-h0FVZg7K.js";import"./FocusScope-BRQqWTqz.js";import"./VisuallyHidden-W06uk0vU.js";import"./getActionGroupSlot-DxN6Z1_y.js";import"./useStatic-CHenPBZg.js";import"./context-D550pjOP.js";import"./ColumnLayout-CCiluCHS.js";import"./useMakeFocusable-Dw3qKCJa.js";import"./useFieldComponent-DUw61_cc.js";import"./FieldError-DxbTuNm9.js";import"./Form-bxdneiGL.js";import"./useFormValidation-CzNeWdfJ.js";import"./useToggleState-qjPeUCQ1.js";import"./useFormReset-9uO05BU2.js";import"./AlertText-DlszfG1H.js";import"./AlertIcon-CK1OfGfa.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),We={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),a=C();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(a,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(a,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={},m={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
