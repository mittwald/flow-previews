import{j as e,r as f}from"./iframe-BfrlpeCk.js";import{b as p,u,F as h,t as k}from"./Form-25bQeL9s.js";import{L as i}from"./Label-wUl7laod.js";import{R as j,S as v}from"./ResetButton-B7MAmNJ4.js";import{B as x}from"./Button-E46WDd4_.js";import{S as C,s as d}from"./Section-Bb4j7C6a.js";import{A as O}from"./ActionGroup-dgAOdJZ4.js";import{w as n,s as r,v as b,g as F}from"./TimeField-BhoCwCxW.js";import"./index-nuYtCEEu.js";import"./dynamic-BUKqVZ1H.js";import"./PropsContextProvider-CPtIc9N-.js";import"./mergeRefs-B-vbhGNR.js";import"./index-r6rvd85P.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-C5Ltlkui.js";import"./context-jvNFAhRM.js";import"./browser-C0N36_KR.js";import"./utils-CZEyphdB.js";import"./ProgressBar-DuqIuA6U.js";import"./Hidden-C6jP4SMJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DOKEq-WK.js";import"./Text-DdebjF6X.js";import"./EmulatedBoldText-eBeMz5kz.js";import"./LoadingSpinner-BwJAEpX5.js";import"./Button-Cjbcx8Zu.js";import"./useFocusRing-CWlqAuzY.js";import"./useFocusable-DfB_R8F9.js";import"./context-DUvcrLtv.js";import"./RSPContexts-Bw86vYvh.js";import"./Collection-BR-xLlJG.js";import"./CollectionBuilder-CmkBKKl-.js";import"./SelectionIndicator-jSUkmTlU.js";import"./Separator-D1Ouw6Ca.js";import"./useStatic-Bz7IWGfO.js";import"./Accordion-BFQx9JCl.js";import"./Alert-CRvY5VYZ.js";import"./AlertIcon-CfJrkVpH.js";import"./AlertBadge-Dxv4P94g.js";import"./Align-YsnAwz9T.js";import"./Popover-C3qPsHTW.js";import"./OverlayTrigger-DKKj1P2l.js";import"./TableFooterRow-DwOitp-g.js";import"./SkeletonText-B-NyxpC1.js";import"./Avatar-B8_C9MNe.js";import"./AvatarStack-DWIfq5vn.js";import"./Badge-MeQ_8EOt.js";import"./BigNumber-BcZHvOWT.js";import"./Breadcrumb-D1tMkTMn.js";import"./Link-h05bzThL.js";import"./Heading-BzrDriRC.js";import"./Legend-CKP3pUkG.js";import"./FileCardList-BHWA4e_z.js";import"./Image-DmrVA4vT.js";import"./Color-CWKr_WHZ.js";import"./Content-BsqW8diX.js";import"./ContextualHelpTrigger-DO42vOyq.js";import"./CounterBadge-kCoMDryj.js";import"./DonutChart-Ddn2-NTo.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DBVcyvdC.js";import"./Header-3cW2glxq.js";import"./Initials-C8m56NNk.js";import"./InlineCode-C2U9lI57.js";import"./PopoverTrigger-BauBuR_D.js";import"./Separator-DPowy5kr.js";import"./Message-Cb-yd-qn.js";import"./MessageSeparator-tn0XlbcW.js";import"./NavigationGroup-Bdh44MUn.js";import"./Notification-C8AOzGHV.js";import"./NotificationProvider-Bv1lRKSn.js";import"./ProgressBar-BrBPhSDZ.js";import"./Rating-DroWCOnR.js";import"./Skeleton-BV_rDckR.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Ne={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),l=k();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(C,{children:[e.jsx(l,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(l,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(v,{children:"Submit"})]})]})})}},a={},m={render:s=>{const o=u();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(v,{children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
