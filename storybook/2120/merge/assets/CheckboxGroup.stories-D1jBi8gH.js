import{j as e,r as v}from"./iframe-Bzotfv2d.js";import{c,u,F as h,t as O}from"./Form-NuKjq-E5.js";import{L as i}from"./Label-9yzciBbq.js";import{R as j,S as f}from"./ResetButton-BKQMjSLz.js";import{B as x}from"./Button-B5Yu3Ofr.js";import{S as k}from"./Section-BjhFx9b4.js";import{A as C}from"./ActionGroup-THbN8B7U.js";import{s as d}from"./Action-BGM-IIID.js";import{q as n,n as r,p as b,F}from"./Modal-COByggjk.js";import"./index-nuYtCEEu.js";import"./dynamic-XEUS-i0b.js";import"./flowComponent-Ce43WGqS.js";import"./index-Dtu7UrbV.js";import"./clsx-B-dksMZM.js";import"./index-s2lSSiFB.js";import"./useLocalizedStringFormatter-CEUFB_Kk.js";import"./context-CZ6Qg3vv.js";import"./browser-Da6kOqay.js";import"./utils-F6vOfgTC.js";import"./ProgressBar-DrjjCA4M.js";import"./Hidden-A2gmu8PL.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DA_wmemp.js";import"./Text-C-DP5r93.js";import"./EmulatedBoldText-CowooJQh.js";import"./LoadingSpinner-B7Dg5gJY.js";import"./Button-DKhocf4j.js";import"./useFocusRing-Bwoimiux.js";import"./useFocusable-DtwtCMr6.js";import"./Dialog-DRtGMcXs.js";import"./RSPContexts-94nDykOv.js";import"./OverlayArrow-w3VLB_7G.js";import"./useControlledState-BqxXkR6q.js";import"./Collection-BBYs79dF.js";import"./CollectionBuilder-BcriWVNa.js";import"./SelectionIndicator-CkQFqim6.js";import"./Separator-D-my95s-.js";import"./getActionGroupSlot-DupNakeF.js";import"./useStatic-CUbPzepq.js";import"./context-DytNMng2.js";import"./Popover-DIj_9e80.js";import"./OverlayTrigger-DYCZz7an.js";import"./ControlledNotification-TPI0xyld.js";import"./ClearPropsContextView-CsYOqVLr.js";import"./LayoutCard-J6TlJO4o.js";import"./Accordion-BptsSE4V.js";import"./Alert-eyCmAgC6.js";import"./AlertIcon-CgsKNc5r.js";import"./AlertBadge-S_MnisZk.js";import"./Align-BJUu4eGR.js";import"./TableFooterRow-DxgEmBL4.js";import"./SkeletonText-OeVXjdS7.js";import"./Avatar-cPF8oF7Q.js";import"./AvatarStack-BkUGgLvx.js";import"./Badge-CdzfZfsb.js";import"./BigNumber-BNjBbCLr.js";import"./Breadcrumb-B6JxXwVP.js";import"./Link-BAhU_8bm.js";import"./Heading-DTNjAjmU.js";import"./Legend-f-p8RcrW.js";import"./FileCardList-B5PDKscr.js";import"./Image-CQeciW3U.js";import"./CodeBlock-CnJ67bJ1.js";import"./CopyButton-sBgtGoeo.js";import"./Tooltip-DpS8robH.js";import"./react-children-utilities-X89ZXH3Y.js";import"./Color-Ch6SLtqy.js";import"./Content-D54xBao4.js";import"./ContextualHelpTrigger-vzTqAVe_.js";import"./CounterBadge-BT0YRSln.js";import"./DonutChart-BmBQlJrD.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DGT6z0iR.js";import"./Header-DK-dy0Ik.js";import"./Initials-BjRxm0kU.js";import"./InlineCode-Dw8GCp6l.js";import"./LabeledValue-BUIGIaaH.js";import"./PopoverTrigger-Q37AsHcH.js";import"./Markdown-MT0EBmbc.js";import"./Separator-BnZ4szOt.js";import"./Message-DSIYRhqg.js";import"./MessageSeparator-DiJiVxnC.js";import"./NavigationGroup-BnO0sRue.js";import"./Notification-BIJ3tqS6.js";import"./NotificationProvider-Bad9adCH.js";import"./ProgressBar-DxbK2q7l.js";import"./Rating-CvLf8bfK.js";import"./Skeleton-BSBbHv2z.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),sr={title:"Integrations/React Hook Form/CheckboxGroup",component:c,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),m=O();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(m,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(m,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(m,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(m,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(C,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={},a={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},p={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const mr=["Default","WithFieldError","WithFocus"];export{l as Default,a as WithFieldError,p as WithFocus,mr as __namedExportsOrder,sr as default};
