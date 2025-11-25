import{j as e,r as f}from"./iframe-C7sy8eLt.js";import{b as p,u,F as h,t as k}from"./Form-CEjV-kW2.js";import{L as i}from"./Label-rfHe5hPU.js";import{R as j,S as v}from"./ResetButton-5Orn1GpQ.js";import{B as x}from"./Button-BZw3q7YG.js";import{S as C,s as d}from"./Section-B_6olPV1.js";import{A as O}from"./ActionGroup-Bou60yfQ.js";import{y as n,v as r,x as b,F}from"./Modal-CgkmliK_.js";import"./index-nuYtCEEu.js";import"./dynamic-xNYmGRJM.js";import"./flowComponent-DIjd7Mwu.js";import"./index-Cpqj0oV0.js";import"./clsx-B-dksMZM.js";import"./index-CQGWyvrR.js";import"./useLocalizedStringFormatter-CTGu5obF.js";import"./context-CzQbumPb.js";import"./browser-BbONOrP3.js";import"./utils-ClB0n4MX.js";import"./ProgressBar-DVj1Bza0.js";import"./Hidden-BiwDbxQo.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BlJBP8EW.js";import"./Text-CNjgj0Nh.js";import"./EmulatedBoldText-D386pHKZ.js";import"./LoadingSpinner-DOZFO_5L.js";import"./Button-Dbk_q6kB.js";import"./useFocusRing-Ah8T3Rlp.js";import"./useFocusable-BdiuUyMg.js";import"./context-cT4ej6gr.js";import"./RSPContexts-BXBNaV8B.js";import"./Collection-Bs_bKP_m.js";import"./CollectionBuilder--gmJ_NYC.js";import"./SelectionIndicator-BYKIsOg-.js";import"./Separator-BY5kq_RL.js";import"./useStatic-C3MBsJUa.js";import"./FileCardList-BcoXYZaJ.js";import"./Avatar-pqiTjDaw.js";import"./AlertIcon-pdEEQLjK.js";import"./Image-BzosvY75.js";import"./Link-CYOMmfe5.js";import"./ControlledNotification-1haiwG2D.js";import"./Flex-Cery0S_5.js";import"./Accordion-CYXfOEtJ.js";import"./Alert-CuOVoIP4.js";import"./AlertBadge-DbgGv4eB.js";import"./Align-BlvYLRO8.js";import"./AvatarStack-CXX7ZouY.js";import"./BigNumber-D9-VIDaq.js";import"./Breadcrumb-B3K0GN86.js";import"./Heading-k3TZmz5u.js";import"./Legend-D0oOrj9r.js";import"./Color-Ds7_816d.js";import"./TableFooterRow-yox3njQ3.js";import"./SkeletonText-oFV3v-ow.js";import"./Content--Il2Vbk0.js";import"./CounterBadge-sYYq6djQ.js";import"./DonutChart-Bw97G3qW.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DvMkVg-s.js";import"./Header-DwdbIsc5.js";import"./Initials-nwj7pVwk.js";import"./InlineCode-fcdnehc6.js";import"./LayoutCard-YIuI0q1W.js";import"./Separator-CnXIIkpp.js";import"./MessageSeparator-BAFFdBEb.js";import"./NavigationGroup-MvGeIrOF.js";import"./Notification-BKYjv64k.js";import"./NotificationProvider-NTC8P3ww.js";import"./ProgressBar-gRP8sWKC.js";import"./Rating-BnzoQ1_w.js";import"./Skeleton-D46xLN5H.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Te={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),l=k();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(C,{children:[e.jsx(l,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(l,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(v,{children:"Submit"})]})]})})}},a={},m={render:s=>{const o=u();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(v,{children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const He=["Default","WithFieldError","WithFocus"];export{a as Default,m as WithFieldError,c as WithFocus,He as __namedExportsOrder,Te as default};
