import{r as v,j as e}from"./iframe-jPI25t47.js";import{a as p,u,F as h,R as j,S as f,t as C}from"./ResetButton-B5ZX2fMA.js";import{L as i}from"./Label-CVxkn5sg.js";import{B as x}from"./Button-CMdL10Ys.js";import{S as k}from"./Section-wgX4yeQq.js";import{A as O}from"./ActionGroup-19L6oHyS.js";import{s as d}from"./ActionBatch-DVEQdHps.js";import{C as n}from"./CheckboxGroup-DuOCiUSj.js";import{C as r}from"./Checkbox-BM574MEP.js";import{F as b}from"./FieldDescription-BijM-gJh.js";import{F}from"./FieldError-DPfGZS1P.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DcvTJJQa.js";import"./flowComponent-NWkTmrxz.js";import"./index-Cv1Y71KG.js";import"./clsx-B-dksMZM.js";import"./index-mBlsDuvj.js";import"./useLocalizedStringFormatter-DiGz--zc.js";import"./context-yJg27e0-.js";import"./ActionGroupView-BqWWBXhU.js";import"./Content-KabCAW67.js";import"./Heading-BYBgSNBh.js";import"./Heading-BvtnHnmW.js";import"./RSPContexts-COITpNJr.js";import"./utils-DssEHlsW.js";import"./Text-CzRKl4Rn.js";import"./browser-BKdBfXKE.js";import"./EmulatedBoldText-BPBEsAY6.js";import"./Text-BUiBuDRU.js";import"./Modal-CdjOxPJU.js";import"./Overlay-BMoI33va.js";import"./useOverlayController-Cy5LcSUF.js";import"./useStatic-Be080qZz.js";import"./OverlayContextProvider-BkQ_ixfe.js";import"./LoadingSpinner-DhHtGG23.js";import"./IconWarning-D8uDJDej.js";import"./remote-B_as-6Bm.js";import"./Dialog-C4XHiXzR.js";import"./Button-GVmiAxmL.js";import"./ProgressBar-BB7XDz1a.js";import"./Label-gIBQebAF.js";import"./Hidden-BHJ1gGty.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CJgKbpp_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bv9bKc9w.js";import"./useFocus-DZAeMhz-.js";import"./useFocusRing-PgP7-E1A.js";import"./useFocusable-YzLAhItH.js";import"./OverlayArrow-2srpU7pW.js";import"./useControlledState-CujVadxA.js";import"./Collection-D3v-sdZg.js";import"./CollectionBuilder-AJ1JuT2m.js";import"./SelectionIndicator-SHoPDQ8G.js";import"./Separator-DfJMhgbG.js";import"./SelectionManager-C-0YEkIp.js";import"./useEvent-DZfip6aA.js";import"./useCollator-TV1MmAHK.js";import"./FocusScope-QARcb0VX.js";import"./VisuallyHidden-vrC_Lu36.js";import"./ButtonView-quZyuTrS.js";import"./Flex-DvdXj1RM.js";import"./useRef-XiRQpzNC.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BG427zDb.js";import"./getActionGroupSlot-Dnhmurp_.js";import"./ColumnLayout-BeNJcFgL.js";import"./useMakeFocusable-BecMGTye.js";import"./useFieldComponent-CHdLkU8r.js";import"./FieldError-C3mwkvrq.js";import"./Form-BeysAUF2.js";import"./useFormValidation-aAlw1sTR.js";import"./useToggleState-B1STqCKF.js";import"./useFormReset-DGTIvKtn.js";import"./AlertText-D2z5AzT8.js";import"./AlertIcon-HKJqs1Pu.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Je={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),a=C();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(a,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(a,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={},m={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
