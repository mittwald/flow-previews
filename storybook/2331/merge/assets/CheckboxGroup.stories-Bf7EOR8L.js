import{r as v,j as e}from"./iframe-BDFzVZbC.js";import{a as p,u,F as h,R as j,S as f,t as C}from"./ResetButton-D1K9FtBE.js";import{L as i}from"./Label-LyL-GXC8.js";import{B as x}from"./Button-C7bK1-uf.js";import{S as k}from"./Section-DTE7_1U7.js";import{A as O}from"./ActionGroup-DXoxOsLZ.js";import{s as d}from"./ActionBatch-dkJpCMmD.js";import{C as n}from"./CheckboxGroup-Bol1lec_.js";import{C as r}from"./Checkbox-DNNh4YPa.js";import{F as b}from"./FieldDescription-CoqoTaGo.js";import{F}from"./FieldError-BgOx5Pdv.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-78IPl_xO.js";import"./flowComponent-CcRyJRwo.js";import"./index-P1fb0se1.js";import"./clsx-B-dksMZM.js";import"./index-CcbRX2xZ.js";import"./useLocalizedStringFormatter-BejhQiE3.js";import"./context-sVk6h2Ud.js";import"./ActionGroupView-Dsksq701.js";import"./Content-w-_DoZqM.js";import"./Heading-D5c-TU0p.js";import"./Heading-CoT4JWE4.js";import"./RSPContexts-CK_xwACt.js";import"./utils-DRqoG6OW.js";import"./Text-DCO-oE1a.js";import"./browser-D6pVd-JB.js";import"./EmulatedBoldText-qk6rk8uL.js";import"./Text-5CWdwzmY.js";import"./Modal-Bz96LWDI.js";import"./useOverlayController-Bb-vbpCY.js";import"./useStatic-DKe6XZbW.js";import"./Overlay-DkdcKSQA.js";import"./OverlayContextProvider-ClMrYLWB.js";import"./LoadingSpinner-CPBqqCdo.js";import"./IconWarning-aDXn3__r.js";import"./remote-C6miTdu_.js";import"./Dialog-C2-FJ5MR.js";import"./Button-ibrCxHHX.js";import"./ProgressBar-BO2kVTFg.js";import"./Label-CHSQ9cWG.js";import"./Hidden-HzHXzaYV.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D8fV0T39.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DJEnnjGh.js";import"./useFocus-BE-kuowd.js";import"./useFocusRing-CxM1MJ0B.js";import"./useFocusable-nLh15Hem.js";import"./OverlayArrow-BhJrUQVC.js";import"./useControlledState-CxpqxoPE.js";import"./Collection-C1wNqiGx.js";import"./CollectionBuilder-DtnVmW1Z.js";import"./SelectionIndicator-S2R90Jld.js";import"./Separator-DZXWrML2.js";import"./SelectionManager-BvzKXH6i.js";import"./useEvent-DOEbfCcC.js";import"./useCollator-DGEP0NQr.js";import"./FocusScope-Djn4bjzo.js";import"./VisuallyHidden-DL89d0r2.js";import"./ButtonView-Co3oQwB4.js";import"./Flex-DbvEsOwD.js";import"./useRef-DOSvcyqg.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-rEkP8dNP.js";import"./getActionGroupSlot-DJwqOljU.js";import"./ColumnLayout-DfD0Foef.js";import"./useMakeFocusable-DKwQY4Iy.js";import"./useFieldComponent-DJTCy7fJ.js";import"./FieldError-4UEPVceR.js";import"./Form-MSkU5_70.js";import"./useFormValidation-CtBJZQwA.js";import"./useToggleState-RYb4ELwE.js";import"./useFormReset-CQpdwD5T.js";import"./AlertText-CJ-mVZBv.js";import"./AlertIcon-tKcNuTH2.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Je={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),a=C();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(a,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(a,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={},m={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Qe=["Default","WithFieldError","WithFocus"];export{l as Default,m as WithFieldError,c as WithFocus,Qe as __namedExportsOrder,Je as default};
