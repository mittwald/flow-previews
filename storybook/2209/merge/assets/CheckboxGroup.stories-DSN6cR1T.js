import{j as e,r as v}from"./iframe-a9513Vq6.js";import{b as p,u,F as h,t as C}from"./Form-v8TMyo2H.js";import{L as i}from"./Label-BZ3qOvYQ.js";import{R as j,S as f}from"./ResetButton-5AR8fVnz.js";import{B as x}from"./Button-CbZraw7Z.js";import{S as k}from"./Section-C8UMRpV9.js";import{A as O}from"./ActionGroup-CEk1ZVey.js";import{s as d}from"./Action-CS14UEhl.js";import{C as n}from"./CheckboxGroup-1x_Mv7gP.js";import{C as r}from"./Checkbox-BXUl0IG4.js";import{F as b}from"./FieldDescription-B1DZzGI9.js";import{F}from"./FieldError-WoUSVR_n.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D7T7LY8j.js";import"./flowComponent-ClX3KjCn.js";import"./index-BqXFMVtG.js";import"./clsx-B-dksMZM.js";import"./index-CgKgRbSB.js";import"./useLocalizedStringFormatter-CqunH7JG.js";import"./context-CGjHIvvu.js";import"./browser-CuCeyixq.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-THT_xKrE.js";import"./utils-Q60aVnZq.js";import"./Hidden-CBXUgXzH.js";import"./useRef-Do3Y2xpl.js";import"./IconWarning-BPr7HnMX.js";import"./remote-CGHUze9I.js";import"./Text-hxI3a1Rs.js";import"./EmulatedBoldText-mDi0QmS0.js";import"./Text-KDVUHE9w.js";import"./LoadingSpinner-CjOt6fEt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CbYmiDFL.js";import"./ProgressBar-ZGOw6r6D.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-nB2pk6qM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CyOdCqvu.js";import"./useFocus-CH_x6C_j.js";import"./useFocusRing-CmMhl12v.js";import"./useFocusable-lL6lq36R.js";import"./ContextMenuSection-BAncSsp2.js";import"./Dialog-C14EYRfp.js";import"./RSPContexts-DpIEdSL7.js";import"./OverlayArrow-BuQIV4ze.js";import"./useControlledState-CemUvUps.js";import"./Collection-D4DMEnaD.js";import"./CollectionBuilder-DV1hsabw.js";import"./SelectionIndicator-ZvhngIUd.js";import"./Separator-CV17wQ8T.js";import"./SelectionManager-CS8x0YuZ.js";import"./useEvent-CPsIFNqP.js";import"./useCollator-BiekIj1S.js";import"./FocusScope-BnHRmLRH.js";import"./VisuallyHidden-C2yGzMiQ.js";import"./getActionGroupSlot-gpXu2eix.js";import"./useStatic-BYKWrdXY.js";import"./context-RLH4ysrR.js";import"./ColumnLayout-CN0TaETk.js";import"./useMakeFocusable-DlfEKBd5.js";import"./useFieldComponent-DoOT3wm0.js";import"./FieldError-C3zvz5gI.js";import"./Form-DpSLYLL6.js";import"./useFormValidation-vP3SVKb2.js";import"./useToggleState-BPy-RAI1.js";import"./useFormReset-CYu_Lr-z.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Pe={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),l=C();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(l,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(l,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},a={},m={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const We=["Default","WithFieldError","WithFocus"];export{a as Default,m as WithFieldError,c as WithFocus,We as __namedExportsOrder,Pe as default};
