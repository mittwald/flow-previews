import{j as e,r as j}from"./iframe-fd4MG1i8.js";import{a as u,u as h,F as d,t as f}from"./Form-DdKBNKRS.js";import{L as i}from"./Label-DcZaDq0J.js";import{B as p}from"./Button-VeSKQaWX.js";import{S as v}from"./Section-BCuosQzF.js";import{A as C}from"./ActionGroup-CZpdRo9u.js";import{s as x}from"./Action-b6bvpWZ7.js";import{C as n}from"./CheckboxGroup-DyEJGLb7.js";import{C as r}from"./Checkbox-KqWSJRe1.js";import{F as b}from"./FieldDescription-BNSJSS3y.js";import{F as O}from"./useFieldComponent-CTpQ-XZg.js";import"./index-nuYtCEEu.js";import"./flowComponent-CuscKuFt.js";import"./index-CeLeQ-qQ.js";import"./clsx-B-dksMZM.js";import"./index-DLSCOdFN.js";import"./useLocalizedStringFormatter-CKY9Jmr8.js";import"./context-Dbob8nST.js";import"./browser-Dh_0Zrut.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Cas_0aCA.js";import"./utils-Cwcb_ph1.js";import"./Hidden-DL9_D-g9.js";import"./IconWarning-9sqw3U7E.js";import"./Text-Dcd0JdvI.js";import"./EmulatedBoldText-BOq1lZio.js";import"./Text-Ct_tO_6D.js";import"./LoadingSpinner-BL8icCZR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-kSnC9Ww4.js";import"./ProgressBar-ClXxD8qd.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DjhpIeNr.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-P37V2JO8.js";import"./useFocus-BWTUKGe5.js";import"./useFocusRing-LifWKPgp.js";import"./useFocusable-9_bYGa78.js";import"./ContextMenuSection-Blc2hqiU.js";import"./Dialog-CY6RGe7i.js";import"./RSPContexts-GsdtxIJ1.js";import"./OverlayArrow-CL_DkMYI.js";import"./useControlledState-oGGPnlEt.js";import"./Collection-Di6dMgr3.js";import"./CollectionBuilder-BBm98ofW.js";import"./SelectionIndicator-CThd_G6x.js";import"./Separator-BBkfumaa.js";import"./SelectionManager--Q9mVMbg.js";import"./useEvent-5AoaQB1j.js";import"./useCollator-DNAEXkDs.js";import"./FocusScope-29AKamG2.js";import"./VisuallyHidden-CO0qVHJy.js";import"./dynamic-BVBQ4rgw.js";import"./getActionGroupSlot-CrxcE-Hj.js";import"./useStatic-Dbv9nI-W.js";import"./context-BDEE0OGh.js";import"./ColumnLayout-BD_c0O62.js";import"./useMakeFocusable-DLeuMSJI.js";import"./Form-DF5wN6HS.js";import"./useFormValidation-C8R7XiMh.js";import"./useToggleState-nKwDhDgt.js";import"./useFormReset-NfLpwngh.js";import"./react-children-utilities-CIQCctRB.js";import"./ClearPropsContext-BW7itMIx.js";const{action:k}=__STORYBOOK_MODULE_ACTIONS__,F=k("submit"),qe={title:"Integrations/React Hook Form/CheckboxGroup",component:u,render:()=>{const s=async t=>{await x(1500),F(t)},o=h({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),a=f();return e.jsx(d,{form:o,onSubmit:s,children:e.jsxs(v,{children:[e.jsx(a,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(a,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsx(C,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}},l={},m={render:s=>{const o=h();return j.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[e.jsx(u,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(O,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=h();return e.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[e.jsx(u,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(p,{type:"submit",children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...c.parameters?.docs?.source}}};const De=["Default","WithFieldError","WithFocus"];export{l as Default,m as WithFieldError,c as WithFocus,De as __namedExportsOrder,qe as default};
