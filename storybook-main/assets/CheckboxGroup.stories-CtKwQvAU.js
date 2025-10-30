import{j as r,r as j}from"./iframe-PDaUHho1.js";import{a as u,u as h,F as d,t as v}from"./Form-BqgqwU1K.js";import{L as i}from"./Label-BV0OGa_g.js";import{B as c}from"./Button-C5eOeaT9.js";import{S as f}from"./Section-HyeX5WSL.js";import{A as O}from"./ActionGroup-U5_rjuL9.js";import{s as x}from"./Action-BuqSGnOY.js";import{q as n,n as e,p as b,F as k}from"./Modal-Dp1YaUNn.js";import"./index-nuYtCEEu.js";import"./dynamic-DqsoKxlb.js";import"./flowComponent-pwAlxQ7Y.js";import"./index-V7XxCnlO.js";import"./clsx-B-dksMZM.js";import"./index-B4HwJOZh.js";import"./useLocalizedStringFormatter-hpfCA0Xp.js";import"./context-DBDDiU0I.js";import"./browser-Dn1Bftrm.js";import"./utils-WYXKBT_h.js";import"./ProgressBar-m4wkDJ9q.js";import"./Hidden-Cu9gnBmg.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-B0hQIuUq.js";import"./Text-PjSitUb9.js";import"./EmulatedBoldText-DeDAxtsF.js";import"./LoadingSpinner-bLHLQdUH.js";import"./Button-vCn3sloq.js";import"./useFocusRing-msSK4oeu.js";import"./useFocusable-CU77Oyp_.js";import"./Dialog-Bz5XATVl.js";import"./RSPContexts-DnH8q5jT.js";import"./OverlayArrow-j70_eukt.js";import"./useControlledState-DpuOrhgy.js";import"./Collection-CoTpEGUK.js";import"./CollectionBuilder-CiodENHi.js";import"./SelectionIndicator-B4sxL3Ui.js";import"./Separator-BOyasXxD.js";import"./getActionGroupSlot-BbmM7byy.js";import"./useStatic-UwW6yb2T.js";import"./context-BGWGXkWs.js";import"./Popover-CQRfq8Pn.js";import"./OverlayTrigger-D2bNYkcD.js";import"./ControlledNotification-BKShNQFf.js";import"./ClearPropsContextView-DBaaVQ6i.js";import"./LayoutCard-BCU7EWfF.js";import"./Accordion-CUJJDz1v.js";import"./Alert-D0YSmsoS.js";import"./AlertIcon-VJR10kZy.js";import"./AlertBadge-DP82Q-mW.js";import"./Align-CQuCxEQW.js";import"./TableFooterRow-BTdksuBZ.js";import"./SkeletonText-Dz0C1SKB.js";import"./Avatar-BQHWoetz.js";import"./AvatarStack-sv2krauL.js";import"./Badge-DOKA-IzE.js";import"./BigNumber-Df4O79LO.js";import"./Breadcrumb-UnONgTrt.js";import"./Link-DFMuHwQ1.js";import"./Heading-CDhtmS_q.js";import"./Legend-CTLT6OWF.js";import"./FileCardList-KFpTNQWp.js";import"./Image-D0T37yoP.js";import"./CodeBlock-DZbdZqZi.js";import"./CopyButton-DGO3kvs8.js";import"./Tooltip-B0d05Nt9.js";import"./react-children-utilities-DeOMbJlb.js";import"./Color-D98-2g19.js";import"./Content-BBxZEkAS.js";import"./ContextualHelpTrigger-B-T84-qA.js";import"./CounterBadge-CusTsxN9.js";import"./DonutChart-DrvGprf2.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BHL4pB90.js";import"./Header-DvtIoJrT.js";import"./Initials-CWkkAmwh.js";import"./InlineCode-xDBHCugB.js";import"./LabeledValue-lvjpv348.js";import"./PopoverTrigger-DCoz2Rln.js";import"./Markdown-BNg1pbBe.js";import"./Separator-DybfQVaE.js";import"./Message-DWGicTw7.js";import"./MessageSeparator-UKqV2I5b.js";import"./NavigationGroup-BUlijHQ1.js";import"./Notification-B5tjELS9.js";import"./NotificationProvider-L7cl-BrL.js";import"./ProgressBar-T812VwvU.js";import"./Rating-CkHsmGwh.js";import"./Skeleton-DtOpr1fC.js";const{action:C}=__STORYBOOK_MODULE_ACTIONS__,F=C("submit"),te={title:"Integrations/React Hook Form/CheckboxGroup",component:u,render:()=>{const s=async t=>{await x(1500),F(t)},o=h({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),m=v();return r.jsx(d,{form:o,onSubmit:s,children:r.jsxs(f,{children:[r.jsx(m,{name:"interests",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsDefaultValue",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check at least 1 item"})]})}),r.jsx(m,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check max 2 items"})]})}),r.jsx(O,{children:r.jsx(c,{type:"submit",children:"Submit"})})]})})}},a={},l={render:s=>{const o=h();return j.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"}),r.jsx(k,{children:"ErrorFromOuterFieldError!"})]})]})}},p={render:s=>{const o=h();return r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(c,{type:"submit",children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
