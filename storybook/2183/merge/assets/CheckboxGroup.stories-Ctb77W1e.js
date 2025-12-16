import{j as e,r as v}from"./iframe-D7SrQHv2.js";import{u as p,F as u}from"./Form-BXCbrZCD.js";import{L as i}from"./Label-77ddNxr9.js";import{F as h,t as C}from"./Field-DBxnfWkn.js";import{B as x}from"./Button-BDlkh_ZH.js";import{S as k}from"./Section-8dl5sO8X.js";import{A as O}from"./ActionGroup-B6ZvpuSe.js";import{s as d}from"./Action-DB8rk5cM.js";import{C as r}from"./Checkbox-C0fdelcg.js";import{F as b}from"./FieldDescription-8yynaeWp.js";import{F}from"./FieldError-Cd_0vMJA.js";import{C as n}from"./CheckboxGroup-Dvza-fXz.js";import{R as j}from"./ResetButton-DUuxsp19.js";import{S as f}from"./SubmitButton-B-bFW6GY.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-DrK2T41E.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CdkQ0XB3.js";import"./index-CCC8SqCu.js";import"./index-CJAJ5du0.js";import"./useLocalizedStringFormatter-CSuZD65V.js";import"./context-B_BzGt6a.js";import"./Label-mdRoqDLO.js";import"./utils-CiuuAwJm.js";import"./Hidden-4rkKn0h6.js";import"./dynamic-CUG3tgkH.js";import"./IconChevronDown-CXRERNRA.js";import"./remote-DGKmlYcY.js";import"./IconX-YfbAbyEb.js";import"./IconCheck-COidvS8_.js";import"./Text-DGpwmxCB.js";import"./EmulatedBoldText-ChURRL1S.js";import"./Text-BPF9cVJc.js";import"./LoadingSpinner-DamTO0x3.js";import"./ariaLive-Q32cUtZw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CGLL8cMT.js";import"./ProgressBar-BmurXtXH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B1Ghq-Vq.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DfsmQJPe.js";import"./useFocus-BORqc-Rv.js";import"./useFocusRing-DLDXyuvP.js";import"./useFocusable-7SxWl0Ga.js";import"./ContextMenuSection-C543Zwy4.js";import"./lib-90ocxLs-.js";import"./Dialog-CW3mhUGv.js";import"./RSPContexts-BbVjh3iw.js";import"./OverlayArrow-BXm03fKW.js";import"./useControlledState-Cadz1yCZ.js";import"./Collection-CZosAz-h.js";import"./CollectionBuilder-_0MC8FEk.js";import"./SelectionIndicator-CCNZqYbX.js";import"./Separator-BakLcgEu.js";import"./SelectionManager-CL7Yq_XD.js";import"./useEvent-B0YrkZQx.js";import"./useCollator-CdHH68uY.js";import"./FocusScope-rpDCGS-B.js";import"./VisuallyHidden-BTFx-uOK.js";import"./getActionGroupSlot-CTkBqXfr.js";import"./useStatic-D8BNL5i4.js";import"./context-CVbxfW-6.js";import"./IconCheckboxEmpty-CC2dlqo4.js";import"./useFieldComponent-Cu1xRHEa.js";import"./FieldError-B-ueBDjj.js";import"./Form-DYXfoEHm.js";import"./useFormValidation-LvcU-ucb.js";import"./useToggleState-mqcJgHu1.js";import"./useFormReset-icxQof7S.js";import"./IconDanger-Bz8n8vBB.js";import"./ColumnLayout-Don5mYSu.js";import"./useMakeFocusable-lNa8AuJA.js";import"./useRef-Cks4M8C_.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Ye={title:"Integrations/React Hook Form/CheckboxGroup",component:h,render:()=>{const s=async t=>{await d(1500),E(t)},o=p({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),l=C();return e.jsx(u,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(l,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(l,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},m={},a={render:s=>{const o=p();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(u,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(h,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=p();return e.jsxs(u,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(h,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
