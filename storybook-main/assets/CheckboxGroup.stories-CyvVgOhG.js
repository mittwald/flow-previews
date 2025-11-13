import{j as e,r as f}from"./iframe-DBT7gULD.js";import{c as p,u,F as h,t as O}from"./Form-BdIOPkVK.js";import{L as i}from"./Label-CB-Jrcob.js";import{R as j,S as v}from"./ResetButton-CfIscrHL.js";import{B as x}from"./Button-CCcVMCFh.js";import{S as k,s as d}from"./Section-D6BoVeKj.js";import{A as C}from"./ActionGroup-BaRaSr0H.js";import{y as n,v as r,x as b,F}from"./Modal-BDM5GHUs.js";import"./index-nuYtCEEu.js";import"./dynamic-DeRu_afx.js";import"./flowComponent-C7by5vuA.js";import"./index-Cczfp9NA.js";import"./clsx-B-dksMZM.js";import"./index-pYm4_kYT.js";import"./useLocalizedStringFormatter-qYqIvEHn.js";import"./context-DTlkSZ0Y.js";import"./browser-DvkhEBxs.js";import"./utils-D0uB-Zwx.js";import"./ProgressBar-DcCMsBu5.js";import"./Hidden-BMktz6gh.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BUJnRJXc.js";import"./Text-BcenBV84.js";import"./EmulatedBoldText-Cn-N7_G4.js";import"./LoadingSpinner-UyNbbNkS.js";import"./Button-C-UpDsRO.js";import"./useFocusRing-BJASUfOx.js";import"./useFocusable-m652rNBk.js";import"./context-D6D-GlPg.js";import"./RSPContexts-Dom4UWqx.js";import"./Collection-BjYIoe9r.js";import"./CollectionBuilder-DOBxcW2Y.js";import"./SelectionIndicator-BqFKF874.js";import"./Separator-CWTtrhm9.js";import"./useStatic-CqxwceTm.js";import"./getActionGroupSlot-Bfgl2kFS.js";import"./FileCardList-DKqY5nDG.js";import"./Avatar-D4XiVYbq.js";import"./AlertIcon-B2G5YJ_h.js";import"./Image-DK0DVEvL.js";import"./Link-hErBzw1I.js";import"./ControlledNotification-BggQqaRM.js";import"./LayoutCard-yF4LQl2s.js";import"./Accordion-DbrfaGK3.js";import"./Alert-BVpQpQXk.js";import"./AlertBadge-C-4v8xNv.js";import"./Align-DkyK3rk7.js";import"./AvatarStack-5oER6YSZ.js";import"./BigNumber-ByEBpfDg.js";import"./Breadcrumb-C9tjsQdJ.js";import"./Heading-CxhJw16G.js";import"./Legend-BSuRheR8.js";import"./Color-CfsSCbKc.js";import"./TableFooterRow-B5ePBGv6.js";import"./SkeletonText-yAbLh4O6.js";import"./Content-BNSFZdxK.js";import"./CounterBadge-C-EdT-Ua.js";import"./DonutChart-BfLW1k2r.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CCV8_Obm.js";import"./Header-DF0mjguX.js";import"./Initials-CLL_WJIt.js";import"./InlineCode-CHkCj2DF.js";import"./Separator-DSZggq8J.js";import"./MessageSeparator-DKc-7GUt.js";import"./NavigationGroup-CtWNzX63.js";import"./Notification-CgJLhaIj.js";import"./NotificationProvider-BBWQX6wG.js";import"./ProgressBar-DwVQ0bzm.js";import"./Rating-DhxcEvbm.js";import"./Skeleton-HhO4ThtG.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Te={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),l=O();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(l,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(l,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(C,{children:[e.jsx(j,{children:"Reset"}),e.jsx(v,{children:"Submit"})]})]})})}},a={},m={render:s=>{const o=u();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(v,{children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
