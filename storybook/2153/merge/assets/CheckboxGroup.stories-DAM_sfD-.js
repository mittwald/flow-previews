import{j as e,r as f}from"./iframe-DGpdmZy6.js";import{b as p,u,F as h,t as O}from"./Form-D6ip5OeB.js";import{L as i}from"./Label-PpyRVBZT.js";import{R as j,S as v}from"./ResetButton-C-ek5KZS.js";import{B as x}from"./Button--Vm3DJA2.js";import{S as k,s as d}from"./Section-OXIXjQEc.js";import{A as C}from"./ActionGroup-BO_R-HXV.js";import{y as n,v as r,x as b,F}from"./Modal-k3eojm_4.js";import"./index-nuYtCEEu.js";import"./dynamic-DNRDSutR.js";import"./flowComponent-BQEf5M_T.js";import"./index-De-tUa4b.js";import"./clsx-B-dksMZM.js";import"./index-CrYgLF30.js";import"./useLocalizedStringFormatter-Zkj79Hgs.js";import"./context-GZA4a4Iz.js";import"./browser-B8HytOQQ.js";import"./utils-CfRYmgOV.js";import"./ProgressBar-BRkbw9Mx.js";import"./Hidden-DBVn3F7o.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-D9ML-GA0.js";import"./Text-BXzwFxO1.js";import"./EmulatedBoldText-CnA6n1pz.js";import"./LoadingSpinner-D-s3tm4d.js";import"./Button-CcaaVk2n.js";import"./useFocusRing-B3OG5RkS.js";import"./useFocusable-CIlqLEIw.js";import"./context-BFV2yP4B.js";import"./RSPContexts-C3hd5u3G.js";import"./Collection-vhKnWwMf.js";import"./CollectionBuilder-B9NCAwqd.js";import"./SelectionIndicator-xePv5RSf.js";import"./Separator-F2jO3kT9.js";import"./useStatic-BZw01sJd.js";import"./FileCardList-CKzDrmKJ.js";import"./Avatar-DVvgb2Xm.js";import"./AlertIcon-Bwvtphoy.js";import"./Image-Cn_QWKsO.js";import"./Link-CguFfPfy.js";import"./ControlledNotification-rPJOiTKo.js";import"./Flex-FXUr_mGC.js";import"./Accordion-CLpjyq9Z.js";import"./Alert-DXCJPXtD.js";import"./AlertBadge-BuTdg19f.js";import"./Align-6bfVl_L9.js";import"./AvatarStack-B9hL9-8U.js";import"./BigNumber-BDnXKUew.js";import"./Breadcrumb-DERgwsy8.js";import"./Heading-D9ExrM7H.js";import"./Legend-C45L9tw3.js";import"./Color-CLgKnwGx.js";import"./TableFooterRow-D497U3pl.js";import"./SkeletonText-Ct2YzDKK.js";import"./Content-DYEeGbNd.js";import"./CounterBadge-DkSRGtKd.js";import"./DonutChart-DANJLMjV.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BJrTxMO1.js";import"./Header-D_phYTs8.js";import"./Initials-IbErwSCF.js";import"./InlineCode-DttkcdFo.js";import"./LayoutCard-BmKEOMGc.js";import"./Separator-F4fQOqnh.js";import"./MessageSeparator-ZxZNVJUN.js";import"./NavigationGroup-Ci_EZV7N.js";import"./Notification-m02SjDLR.js";import"./NotificationProvider-C2jvC1ES.js";import"./ProgressBar-CeifPY35.js";import"./Rating-DvaCapzL.js";import"./Skeleton-CQJ_ScCC.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Te={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),l=O();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(l,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(l,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(C,{children:[e.jsx(j,{children:"Reset"}),e.jsx(v,{children:"Submit"})]})]})})}},a={},m={render:s=>{const o=u();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(v,{children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
