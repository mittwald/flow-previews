import{j as e,r as v}from"./iframe-lb0QDBc2.js";import{a as p,u,F as h,t as C,R as j,S as f}from"./ResetButton-BoIjL6Sy.js";import{L as i}from"./Label-DP_lb_cz.js";import{B as x}from"./Button-juKgyftR.js";import{S as k}from"./Section-RCiCRE5k.js";import{A as O}from"./ActionGroup-egKtEln5.js";import{s as d}from"./Action-4cKKicYt.js";import{C as n}from"./CheckboxGroup-Ccz0sI8p.js";import{C as r}from"./Checkbox-DEfLqwya.js";import{F as b}from"./FieldDescription-D5GA7Uzb.js";import{F}from"./FieldError-BAOq6bLD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-oimbFEy9.js";import"./flowComponent-CMLBvcrR.js";import"./index-B9b6xQ5S.js";import"./clsx-B-dksMZM.js";import"./index-DLJvSM0l.js";import"./useLocalizedStringFormatter-DaeZ3M4_.js";import"./context-DKVhGweU.js";import"./useRef-DRtsYaws.js";import"./utils-r2dAqIcX.js";import"./ButtonView-BbORIuhL.js";import"./browser-D6xfswL2.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BdYNaN4j.js";import"./Hidden-DFHOpifw.js";import"./IconWarning-BeH6azjz.js";import"./remote-HK64Xy28.js";import"./Text-Bvo-yLEA.js";import"./EmulatedBoldText-CqgiFE-g.js";import"./Text-DV3fQztC.js";import"./LoadingSpinner-D-Hn99XA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D3ym-GoV.js";import"./ProgressBar-BWiLeXEa.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DBnvm8X4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CgYa4G9K.js";import"./useFocus-B48NrLMU.js";import"./useFocusRing-J18h0CnC.js";import"./useFocusable-BRnBN5zK.js";import"./ContextMenuSection-BhdaIGz3.js";import"./Dialog-21JmjHkj.js";import"./RSPContexts-YTE8c3lP.js";import"./OverlayArrow-CyZLGayb.js";import"./useControlledState-BS6Up44I.js";import"./Collection-qMjf8izv.js";import"./CollectionBuilder-C0jSlJnc.js";import"./SelectionIndicator-DyUDH3aS.js";import"./Separator-dugLvl-c.js";import"./SelectionManager-DxNkh6e5.js";import"./useEvent-DYKWYeYn.js";import"./useCollator-BRhgG2J7.js";import"./FocusScope-BL38dLR2.js";import"./VisuallyHidden-k_Pf5ETO.js";import"./getActionGroupSlot-CYlSlA5g.js";import"./useStatic-C9kOien4.js";import"./context-C_yF8yzC.js";import"./ColumnLayout-3kKJrHIZ.js";import"./useMakeFocusable-BETcaVqe.js";import"./useFieldComponent-DzHSa8uO.js";import"./FieldError-dmorJJtq.js";import"./Form-DtivvrEr.js";import"./useFormValidation-M5q2KkbC.js";import"./useToggleState-CuJBCnJp.js";import"./useFormReset-BIwT2nL6.js";import"./AlertText-DpQCB0Tk.js";import"./AlertIcon-DWhGd_Tx.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),We={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),a=C();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(a,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(a,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={},m={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
