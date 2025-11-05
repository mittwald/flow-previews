import{j as r,r as j}from"./iframe-BnYuPSwa.js";import{a as u,u as h,F as d,t as v}from"./Form-CTmp9ROp.js";import{L as i}from"./Label-BsOGPmFL.js";import{B as c}from"./Button-D7B2hjaJ.js";import{S as f}from"./Section-DPXS4_zS.js";import{A as O}from"./ActionGroup-OB84NbT7.js";import{s as x}from"./Action-DJ16dVnI.js";import{q as n,n as e,p as b,F as k}from"./Modal-CMwT1WB3.js";import"./index-nuYtCEEu.js";import"./dynamic-Dm-4Ig_M.js";import"./flowComponent-DiACFF0p.js";import"./index-BcFNTWxO.js";import"./clsx-B-dksMZM.js";import"./index-CqvtBndu.js";import"./useLocalizedStringFormatter-Cnytr8Uw.js";import"./context-DQlYt1c9.js";import"./browser-Bkf_ja0R.js";import"./utils-DoWPBSSq.js";import"./ProgressBar-BRViR90l.js";import"./Hidden-C5Dr68xZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BustMFuX.js";import"./Text-DmoS4eOG.js";import"./EmulatedBoldText-DyenmRAR.js";import"./LoadingSpinner-14_SbsZZ.js";import"./Button-C47MeqAR.js";import"./useFocusRing-CPn0GoCO.js";import"./useFocusable-bs-iuI5B.js";import"./Dialog-BiHrEAWw.js";import"./RSPContexts-DdoqaBcc.js";import"./OverlayArrow-DrXNZQ3T.js";import"./useControlledState-Cpob7QcG.js";import"./Collection-BD1KYYyZ.js";import"./CollectionBuilder-DbTeSjLO.js";import"./SelectionIndicator-B0tJx4x8.js";import"./Separator-Bd0C07Us.js";import"./getActionGroupSlot-DLw-maV0.js";import"./useStatic-B3gZPUVa.js";import"./context-CLEKsYXA.js";import"./Popover-CIQAqIV0.js";import"./OverlayTrigger-dzvMh6qS.js";import"./ControlledNotification-DFyhdCgQ.js";import"./ClearPropsContextView-CsEGO0Nn.js";import"./LayoutCard-BqXQhFvn.js";import"./Accordion-DBVhvv3-.js";import"./Alert-Bn9swion.js";import"./AlertIcon-B4i3LjbA.js";import"./AlertBadge-B-Z_FZet.js";import"./Align-qE7NmhZJ.js";import"./TableFooterRow-tTbQ-t0r.js";import"./SkeletonText-D3gw5PRP.js";import"./Avatar-B7jo30ig.js";import"./AvatarStack-GCRCG9vj.js";import"./Badge-BM88wgML.js";import"./BigNumber-DdChOXuv.js";import"./Breadcrumb-30UhIvGz.js";import"./Link-CQXfsiwR.js";import"./Heading-4zkTqPYo.js";import"./Legend-BO-XPcOX.js";import"./FileCardList-CADZDmbR.js";import"./Image-D6oVUh4j.js";import"./CodeBlock-Dx6NJdQY.js";import"./CopyButton-C-PHfocO.js";import"./Tooltip-bYhq-tOp.js";import"./react-children-utilities-DSiaUIOe.js";import"./Color-D8b8dr-e.js";import"./Content-B8GWvRnh.js";import"./ContextualHelpTrigger-9AdY9RaJ.js";import"./CounterBadge-Ca9fUhDU.js";import"./DonutChart-CMqab4Gx.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BNBKeAQZ.js";import"./Header-Edj1w5H7.js";import"./Initials-tqv3AKZA.js";import"./InlineCode-CNZzcUkk.js";import"./LabeledValue-BHKpE3hG.js";import"./PopoverTrigger-B1k_GuHv.js";import"./Markdown-BCg6CSiV.js";import"./Separator-CxMrgUmw.js";import"./Message-Bp4nIuQ2.js";import"./MessageSeparator-U6bJZDm5.js";import"./NavigationGroup-D0_CAdq_.js";import"./Notification-DTPhDc6_.js";import"./NotificationProvider-DC5Mfz_i.js";import"./ProgressBar-rB7SKFsx.js";import"./Rating-BSwAqbXq.js";import"./Skeleton-CYJlRTn2.js";const{action:C}=__STORYBOOK_MODULE_ACTIONS__,F=C("submit"),te={title:"Integrations/React Hook Form/CheckboxGroup",component:u,render:()=>{const s=async t=>{await x(1500),F(t)},o=h({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),m=v();return r.jsx(d,{form:o,onSubmit:s,children:r.jsxs(f,{children:[r.jsx(m,{name:"interests",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsDefaultValue",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check at least 1 item"})]})}),r.jsx(m,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check max 2 items"})]})}),r.jsx(O,{children:r.jsx(c,{type:"submit",children:"Submit"})})]})})}},a={},l={render:s=>{const o=h();return j.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"}),r.jsx(k,{children:"ErrorFromOuterFieldError!"})]})]})}},p={render:s=>{const o=h();return r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(c,{type:"submit",children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const ie=["Default","WithFieldError","WithFocus"];export{a as Default,l as WithFieldError,p as WithFocus,ie as __namedExportsOrder,te as default};
