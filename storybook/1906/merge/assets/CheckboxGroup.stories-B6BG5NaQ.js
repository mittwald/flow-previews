import{j as e,r as v}from"./iframe-CFLRrV9_.js";import{a as p,u,F as h,t as C,R as j,S as f}from"./ResetButton-DjqnxgyX.js";import{L as i}from"./Label-DDweLn-B.js";import{B as x}from"./Button-C6DtPvCF.js";import{S as k}from"./Section-DcEQD72A.js";import{A as O}from"./ActionGroup-Cmk2pOgu.js";import{s as d}from"./Action--cE17EXA.js";import{C as n}from"./CheckboxGroup-mR5oQ_Uj.js";import{C as r}from"./Checkbox-Bruv38lK.js";import{F as b}from"./FieldDescription-B2DMaMC5.js";import{F}from"./FieldError-BY_h0DzJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CfUvB6Rc.js";import"./flowComponent-Cgcg4reG.js";import"./index-C9HjT8vY.js";import"./clsx-B-dksMZM.js";import"./index-24zjo-Kb.js";import"./useLocalizedStringFormatter-BTtlqG0g.js";import"./context-bb3yZDI9.js";import"./useRef-BHiB85kd.js";import"./utils-9RAZgTTl.js";import"./ButtonView-C98-Wvmx.js";import"./browser-6ZyX-izP.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CRwaxTbk.js";import"./Hidden-DI4qxTyt.js";import"./IconWarning-DnD-gw4t.js";import"./remote-BB1QWzBE.js";import"./Text-DEmvrg4f.js";import"./EmulatedBoldText-DW1BlzUv.js";import"./Text-DCjLwlBM.js";import"./LoadingSpinner-D6sn6dKn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CQ9x5Ymh.js";import"./ProgressBar-CAwZsQPk.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C42gu-3e.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-LdOf-GEu.js";import"./useFocus-DD1T6bJ4.js";import"./useFocusRing-DRVonXEI.js";import"./useFocusable-CQU1ZNCF.js";import"./ContextMenuSection-KLSTc6el.js";import"./Dialog-CsaxLO_h.js";import"./RSPContexts-CrNZITQd.js";import"./OverlayArrow-67PBRhfH.js";import"./useControlledState-BS0DqA_d.js";import"./Collection-CpUB07wh.js";import"./CollectionBuilder-CcY1vtmm.js";import"./SelectionIndicator-DLBwj5hd.js";import"./Separator-Brhc3eje.js";import"./SelectionManager-rBQZeyz7.js";import"./useEvent-C2NY4fdQ.js";import"./useCollator-BuvCZz5o.js";import"./FocusScope-To3K9I_L.js";import"./VisuallyHidden-DH38u7VP.js";import"./getActionGroupSlot-DBTwflYW.js";import"./useStatic-Bo06Q_Yy.js";import"./context-CslVSGqZ.js";import"./ColumnLayout-c_CudPq8.js";import"./useMakeFocusable-C4OBi2te.js";import"./useFieldComponent-CywuRKF5.js";import"./FieldError-D073kW89.js";import"./Form-HxVpGshA.js";import"./useFormValidation-Cm_zD3mV.js";import"./useToggleState-TrvDOe8C.js";import"./useFormReset-BcY6_uyQ.js";import"./AlertText-BwXe_CUh.js";import"./AlertIcon-Dk-GLzZT.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),We={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),a=C();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(a,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(a,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={},m={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
