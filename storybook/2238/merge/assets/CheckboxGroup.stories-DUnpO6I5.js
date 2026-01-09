import{j as e,r as v}from"./iframe-B6FtZzVw.js";import{b as p,u,F as h,t as C}from"./Form-C2VhZWpm.js";import{L as i}from"./Label-gGsAWD9A.js";import{R as j,S as f}from"./ResetButton-Ddn1H82r.js";import{B as x}from"./Button-HJgKWCOC.js";import{S as k}from"./Section-D0pkBsBP.js";import{A as O}from"./ActionGroup-_gSv6nMR.js";import{s as d}from"./Action-BQfBXJkE.js";import{C as n}from"./CheckboxGroup-BLWG5U_m.js";import{C as r}from"./Checkbox-BGoQON9P.js";import{F as b}from"./FieldDescription-DCDO5HYP.js";import{F}from"./FieldError-CuRjPN5X.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-HxtCVU2-.js";import"./flowComponent-Dnsg7d7g.js";import"./index-Jha0zHxy.js";import"./clsx-B-dksMZM.js";import"./index-DprtUoGy.js";import"./useLocalizedStringFormatter-D6nkVQc6.js";import"./context-D8VymAHE.js";import"./browser-D2cTR9e8.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BRHOOf6S.js";import"./utils-B053wNrY.js";import"./Hidden-BRZRxZbR.js";import"./useRef-BYSeObyQ.js";import"./IconWarning-DEHpO9Uw.js";import"./remote-B6WYv1J0.js";import"./Text-DPYEhwNL.js";import"./EmulatedBoldText-DD0WhK6h.js";import"./Text-Dn3IEVOe.js";import"./LoadingSpinner-DXuLs3WE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DJB2g2P-.js";import"./ProgressBar-WnFa3ztv.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CPIz2b8c.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bff_bCDv.js";import"./useFocus-DnpGAVhn.js";import"./useFocusRing-C0rO9rWF.js";import"./useFocusable-CPP8dzW4.js";import"./ContextMenuSection-Hdwk65mt.js";import"./Dialog-CxhUJg_S.js";import"./RSPContexts-Drji9jIz.js";import"./OverlayArrow-SzptHD46.js";import"./useControlledState-ByagjwsX.js";import"./Collection-queVBp1u.js";import"./CollectionBuilder-D0uz5fgl.js";import"./SelectionIndicator-DqsRzLxq.js";import"./Separator-CFp2GX75.js";import"./SelectionManager-CX268vg2.js";import"./useEvent-CIqm2Tiz.js";import"./useCollator-DzvnCMzb.js";import"./FocusScope-Dv-pZR3t.js";import"./VisuallyHidden-kv_mk74c.js";import"./getActionGroupSlot-7zVBiy7G.js";import"./useStatic-Du0weed2.js";import"./context-DELIC-Xh.js";import"./ColumnLayout-DnUtTAv8.js";import"./useMakeFocusable-CrhaCYEc.js";import"./useFieldComponent-BNMXDSB6.js";import"./FieldError-BtAF49NH.js";import"./Form-CujqqqIN.js";import"./useFormValidation-C7j9z4Fo.js";import"./useToggleState-BW5ypBnh.js";import"./useFormReset-CRRhvvtY.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Pe={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),l=C();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(l,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(l,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},a={},m={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
