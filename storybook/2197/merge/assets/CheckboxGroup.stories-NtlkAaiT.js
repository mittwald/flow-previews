import{j as e,r as f}from"./iframe-BDeBfZSP.js";import{b as p,u,F as h,t as k}from"./Form-D-Maj7Xx.js";import{L as i}from"./Label-B1LspQ1T.js";import{R as j,S as v}from"./ResetButton-CS1V5Fjr.js";import{B as x}from"./Button-Dbhe5AA0.js";import{S as C,s as d}from"./Section-D09FbpBR.js";import{A as O}from"./ActionGroup-BjwLyGgZ.js";import{w as n,s as r,v as b,g as F}from"./TimeField-Ne-c5KEy.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BIVuw2Q_.js";import"./PropsContextProvider-CInYH9Sb.js";import"./mergeRefs-Dw41Nq7Z.js";import"./index-CAU0MqbG.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-QrEcyOeW.js";import"./context-CmX5Cpay.js";import"./browser--C_mCO56.js";import"./utils-Byz_563U.js";import"./ProgressBar-W0aWvyTc.js";import"./Hidden-D2v2aeTK.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CWBVghBS.js";import"./Text-DwrK8QpO.js";import"./EmulatedBoldText-3F_0W9mf.js";import"./LoadingSpinner-BWJul6BV.js";import"./Button-Cfa7dut0.js";import"./useFocusRing-508WtmVR.js";import"./useFocusable-DTnDWSdy.js";import"./context-DWFXzaDB.js";import"./RSPContexts-BBQghKHL.js";import"./Collection-l4IMJ13J.js";import"./CollectionBuilder-CCh6UYnS.js";import"./SelectionIndicator-uDzrcrA1.js";import"./Separator-mHu8Ln7W.js";import"./useStatic-CE8Y1Vmb.js";import"./Accordion-CKUe20wM.js";import"./Alert-CPr2bDJb.js";import"./AlertIcon-CVet0SZ9.js";import"./AlertBadge-rZGJwZqq.js";import"./Align-Bqyqg49a.js";import"./Popover-DNzPOg2i.js";import"./OverlayTrigger-C0iwpCUS.js";import"./TableFooterRow-2U0_8Mem.js";import"./SkeletonText-BtXDjmAi.js";import"./Avatar-D2htOkNN.js";import"./AvatarStack-1PEAciH2.js";import"./Badge-KSMEjVCc.js";import"./BigNumber-BBSlAdO3.js";import"./Breadcrumb-B8GN1fPd.js";import"./Link-Bw9pb0v5.js";import"./Heading-iyX9InFB.js";import"./Legend-BNJwDcp9.js";import"./FileCardList-BChVNWmo.js";import"./Image-3Q6tO5T-.js";import"./Color-C5PdvckB.js";import"./Content-BA1XxLMk.js";import"./ContextualHelpTrigger-BB5lI167.js";import"./CounterBadge-ClD-eDBX.js";import"./DonutChart-irBs7pBN.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-JTtbrcXh.js";import"./Header-CGMIJvRh.js";import"./Initials-CKWxINwR.js";import"./InlineCode-D_o1vB8f.js";import"./PopoverTrigger-GXKodTVP.js";import"./Separator-B12pwKUV.js";import"./Message-Ct2DG7ID.js";import"./MessageSeparator-xtwtWMZH.js";import"./NavigationGroup-D4eFLegf.js";import"./Notification-lKPeWo9E.js";import"./NotificationProvider-sogPUx6w.js";import"./ProgressBar-CSjgGiiD.js";import"./Rating-FVo5ZswU.js";import"./Skeleton-CCjm6q3C.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Ne={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),l=k();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(C,{children:[e.jsx(l,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(l,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(v,{children:"Submit"})]})]})})}},a={},m={render:s=>{const o=u();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(v,{children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Ue=["Default","WithFieldError","WithFocus"];export{a as Default,m as WithFieldError,c as WithFocus,Ue as __namedExportsOrder,Ne as default};
