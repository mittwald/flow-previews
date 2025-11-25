import{j as e,r as f}from"./iframe-B2xkRX6A.js";import{b as p,u,F as h,t as k}from"./Form-B_BdQBl8.js";import{L as i}from"./Label-BUxdBOic.js";import{R as j,S as v}from"./ResetButton-BJaJOnmZ.js";import{B as x}from"./Button-dkMnbJWG.js";import{S as C,s as d}from"./Section-Dun5Ah7E.js";import{A as O}from"./ActionGroup-BNpn1NX2.js";import{y as n,v as r,x as b,F}from"./Modal-CO2TWQss.js";import"./index-nuYtCEEu.js";import"./dynamic-D0Nrpf8a.js";import"./flowComponent-D639mhqg.js";import"./index-CgXs-3w1.js";import"./clsx-B-dksMZM.js";import"./index-Ddwq7UUc.js";import"./useLocalizedStringFormatter-CFLWoqqs.js";import"./context-0lXYs95B.js";import"./browser-QmAcXv_F.js";import"./utils-Bn0vlKhH.js";import"./ProgressBar-B8kHCfIw.js";import"./Hidden-WUyQGACH.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-D3UwWGLP.js";import"./Text-CCe4xaNb.js";import"./EmulatedBoldText-C1Q2Dtf3.js";import"./LoadingSpinner-kT-Lxibs.js";import"./Button-ZZalAwAh.js";import"./useFocusRing-Bx_AG6Dt.js";import"./useFocusable-DULkbCFr.js";import"./context-D2PnJfRR.js";import"./RSPContexts-CwQQ0l-4.js";import"./Collection-Pjtcg2qL.js";import"./CollectionBuilder-VeHHQrjG.js";import"./SelectionIndicator-DaXywehL.js";import"./Separator-DixHCPqE.js";import"./useStatic-BtgzXQ8g.js";import"./FileCardList-ClKhcOXP.js";import"./Avatar-D9obBJsL.js";import"./AlertIcon-CEpZA0Vz.js";import"./Image-DmJWYSzI.js";import"./Link-BRl6hkBv.js";import"./ControlledNotification-DS-T__7q.js";import"./Flex-CvnfZlCm.js";import"./Accordion-CesJn3LP.js";import"./Alert-CEP0osH1.js";import"./AlertBadge-pEQTf4Bk.js";import"./Align-CP_BULLQ.js";import"./AvatarStack-B3-ZBtgK.js";import"./BigNumber-DSCSkpPt.js";import"./Breadcrumb-Ox30Nh91.js";import"./Heading-C47Y59gw.js";import"./Legend-CPHf_SU9.js";import"./Color-CRQqnv2Z.js";import"./TableFooterRow-BOTmu1mA.js";import"./SkeletonText-s3T3xbN2.js";import"./Content-CxihpQZ-.js";import"./CounterBadge-Cr8rMFp7.js";import"./DonutChart-DEAWEWe6.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BrMCUhBk.js";import"./Header-Cmx_1A0G.js";import"./Initials-CiGsvn0n.js";import"./InlineCode-C_72mhO0.js";import"./LayoutCard-BYbleerS.js";import"./Separator-hUKHPUi5.js";import"./MessageSeparator-BjqeMdwr.js";import"./NavigationGroup-CLRQhA7L.js";import"./Notification-UiqXE8jo.js";import"./NotificationProvider-DbD6PgRm.js";import"./ProgressBar-CF2aMWk9.js";import"./Rating-DYTssgfH.js";import"./Skeleton-DC4X9OIQ.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Te={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),l=k();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(C,{children:[e.jsx(l,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(l,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(v,{children:"Submit"})]})]})})}},a={},m={render:s=>{const o=u();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(v,{children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
