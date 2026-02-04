import{j as e,r as v}from"./iframe-BrRYKFNZ.js";import{a as p,u,F as h,t as C,R as j,S as f}from"./ResetButton-B0FIkwa9.js";import{L as i}from"./Label-16dSI6nY.js";import{B as x}from"./Button-C60cqGfK.js";import{S as k}from"./Section-UYkQGpw-.js";import{A as O}from"./ActionGroup-CcJlTct_.js";import{s as d}from"./Action-D8nw7HFc.js";import{C as n}from"./CheckboxGroup-DYsoBr5F.js";import{C as r}from"./Checkbox-CWR--2Ke.js";import{F as b}from"./FieldDescription-59pme2uS.js";import{F}from"./FieldError-Ce69irxX.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CVEHQCEx.js";import"./flowComponent-D6MOqeSY.js";import"./index-Bwdm-eaA.js";import"./clsx-B-dksMZM.js";import"./index--DYCSdQe.js";import"./useLocalizedStringFormatter-BGu-vUkX.js";import"./context-CNZG124A.js";import"./useRef-CwDhitpI.js";import"./utils-B1YhIU5r.js";import"./ButtonView-CpxOXa2e.js";import"./browser-rpb3JyGK.js";import"./Label.module-CUYTf9Jc.js";import"./Label-D0rlaIi3.js";import"./Hidden-CpB89dfv.js";import"./IconWarning-BeyOYKIy.js";import"./remote-CSM401Gb.js";import"./Text-BQhotjr-.js";import"./EmulatedBoldText-DCPr9fyi.js";import"./Text-C7DedtDs.js";import"./LoadingSpinner-Djs3hRtr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B8owV-WL.js";import"./ProgressBar-B9sQkIOL.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8Txg4ii.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-fw0Lqzwn.js";import"./useFocus-Br7iUm-k.js";import"./useFocusRing-DN4mDdXp.js";import"./useFocusable-NfSEA2Af.js";import"./ContextMenuSection-CWAGy83O.js";import"./Dialog-CrRUDPQZ.js";import"./RSPContexts-Cc3CuTB3.js";import"./OverlayArrow-O3cIaLnV.js";import"./useControlledState-BbGuTZMM.js";import"./Collection-BSmX4ivX.js";import"./CollectionBuilder-yxebjIxP.js";import"./SelectionIndicator-DkMRnaGM.js";import"./Separator-Cwa9_Y9_.js";import"./SelectionManager-C85L77I5.js";import"./useEvent-D5Z7Dnjm.js";import"./useCollator-C7d0Ik_Q.js";import"./FocusScope-C9Un_YW5.js";import"./VisuallyHidden-VjzJwiBh.js";import"./getActionGroupSlot-BX1oqOED.js";import"./useStatic-CMNgov9B.js";import"./context-CrKKxYCQ.js";import"./ColumnLayout-D3bQCjP2.js";import"./useMakeFocusable-BtUzaHNU.js";import"./useFieldComponent-D0nvFHA9.js";import"./FieldError-DMOv5TcV.js";import"./Form-C0F-7ONn.js";import"./useFormValidation-vznVoA4Z.js";import"./useToggleState-CxSzAxcM.js";import"./useFormReset-9TaX9dD_.js";import"./AlertText-CUhcwM6U.js";import"./AlertIcon-B-O3oopm.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),We={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),a=C();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(a,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(a,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={},m={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
