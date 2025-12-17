import{j as e,r as v}from"./iframe-BsZhBXal.js";import{u as p,F as u}from"./Form-B7ghN0ur.js";import{L as i}from"./Label-XwOnxXzc.js";import{F as h,t as C}from"./Field-DLAz7mqq.js";import{B as x}from"./Button-Cxmuw7nD.js";import{S as k}from"./Section-4lXA4afp.js";import{A as O}from"./ActionGroup-Nx7KWa-a.js";import{s as d}from"./Action-CL1C_viL.js";import{F as b}from"./FieldDescription-DnEcRZ-N.js";import{F}from"./FieldError-CMRDgIJA.js";import{C as n}from"./CheckboxGroup-Cs_D_ryP.js";import{C as r}from"./Checkbox-B_Jbb3vn.js";import{R as j}from"./ResetButton-ClO0pQ_P.js";import{S as f}from"./SubmitButton-yYHmVNB1.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-B5Kx9HDY.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DISNxOrN.js";import"./index-lT5ImJcm.js";import"./index-Dw50_Btz.js";import"./useLocalizedStringFormatter-DNPpU0EQ.js";import"./context-BsHlRP-r.js";import"./Label-Bdtu_aaV.js";import"./utils-D7f3lHNi.js";import"./Hidden-B-7zzc6R.js";import"./dynamic-V9DMyUPi.js";import"./IconApp-DFfFI-8B.js";import"./remote-C6zziWZe.js";import"./IconX-CWxyzjFw.js";import"./IconCheck-B4zjzfHZ.js";import"./Text-CWir5uzG.js";import"./EmulatedBoldText-72QMrXCW.js";import"./Text-CICvYdKp.js";import"./LoadingSpinner-D802Ys_g.js";import"./ariaLive-BCVvTk3U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DmBDFYEY.js";import"./ProgressBar-BuAY7GL-.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DMdE4zjY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BfmYyYbe.js";import"./useFocus-DkItBW7w.js";import"./useFocusRing-C7h1YZo7.js";import"./useFocusable-CefaVcL6.js";import"./ContextMenuSection-C2eJTG_x.js";import"./lib-90ocxLs-.js";import"./Dialog-D9Y5GrYo.js";import"./RSPContexts-CGJG9_Ew.js";import"./OverlayArrow-CT9B4GiY.js";import"./useControlledState-Bxg7VuAu.js";import"./Collection-DAkGHX-3.js";import"./CollectionBuilder-D8uuaET0.js";import"./SelectionIndicator-BYUqX36x.js";import"./Separator-Bm5TH6F1.js";import"./SelectionManager-BYlJdR-V.js";import"./useEvent-BIGXqu2E.js";import"./useCollator-CmHstSkI.js";import"./FocusScope-qpEeXdaL.js";import"./VisuallyHidden-W4tQCM8c.js";import"./getActionGroupSlot-BjVvI7Fw.js";import"./useStatic-CKUwua6_.js";import"./context-DVwGhZ9t.js";import"./FieldError-Dpf9fLlc.js";import"./IconDanger-D44A5Pyv.js";import"./ColumnLayout-D2Nhhm0T.js";import"./useMakeFocusable-CjO6NuRY.js";import"./useFieldComponent-DadDOWX3.js";import"./IconCheckboxEmpty-QSnznW4T.js";import"./Form-CmE3z4DB.js";import"./useFormValidation-WNRR-_5g.js";import"./useToggleState-Dg0EcPfj.js";import"./useFormReset-4DpQBagB.js";import"./useRef-BLO8ZTUr.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Ye={title:"Integrations/React Hook Form/CheckboxGroup",component:h,render:()=>{const s=async t=>{await d(1500),E(t)},o=p({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),l=C();return e.jsx(u,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(l,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(l,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},m={},a={render:s=>{const o=p();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(u,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(h,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=p();return e.jsxs(u,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(h,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Je=["Default","WithFieldError","WithFocus"];export{m as Default,a as WithFieldError,c as WithFocus,Je as __namedExportsOrder,Ye as default};
