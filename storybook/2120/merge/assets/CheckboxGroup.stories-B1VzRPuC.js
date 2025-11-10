import{j as e,r as v}from"./iframe-BFS0V-7K.js";import{c,u,F as h,t as O}from"./Form-Cb4n6oUC.js";import{L as i}from"./Label-B5VHziHb.js";import{R as j,S as f}from"./ResetButton-C1ZzppC-.js";import{B as x}from"./Button-C69BF7uv.js";import{S as k}from"./Section-jBZNhjEq.js";import{A as C}from"./ActionGroup-DX0lhxHa.js";import{s as d}from"./Action-BkvOgHYi.js";import{q as n,n as r,p as b,F}from"./Modal-BFATeJko.js";import"./index-nuYtCEEu.js";import"./dynamic-D6nHDIyd.js";import"./flowComponent-DYDr2Yry.js";import"./index-BLI0rWKp.js";import"./clsx-B-dksMZM.js";import"./index-Cd8SiJSJ.js";import"./useLocalizedStringFormatter-Bsp3ptWs.js";import"./context-CL-MWO-e.js";import"./browser-DkyXecm8.js";import"./utils-pBfQtTJP.js";import"./ProgressBar-DZnnPhpU.js";import"./Hidden-459sOV2x.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BzBGzmgt.js";import"./Text-Cg-PlNpB.js";import"./EmulatedBoldText-DZMpoDwy.js";import"./LoadingSpinner-Bnd8iTGA.js";import"./Button-C0SUbguZ.js";import"./useFocusRing-CM3Y5p4v.js";import"./useFocusable-DIP3xdGA.js";import"./Dialog-Cj7jIBKp.js";import"./RSPContexts-vmNR8Bdo.js";import"./OverlayArrow-BWg220ZF.js";import"./useControlledState-CfZCIixa.js";import"./Collection-BNdUYhId.js";import"./CollectionBuilder-oqPeank5.js";import"./SelectionIndicator-C95FoYBz.js";import"./Separator-DyL-chbW.js";import"./getActionGroupSlot-B8sKJhlM.js";import"./useStatic-5zK4mpNm.js";import"./context-B7YXRHOK.js";import"./Popover-CRv5SMSH.js";import"./OverlayTrigger-DB1HvpAI.js";import"./ControlledNotification-CqVYbY5l.js";import"./ClearPropsContextView-M-FcIVZm.js";import"./LayoutCard-DliVh_Cq.js";import"./Accordion-BN1AeHiU.js";import"./Alert-CkAVzfTa.js";import"./AlertIcon-BSK9BpjA.js";import"./AlertBadge--nGlaEDG.js";import"./Align-Csa9WLSq.js";import"./TableFooterRow-z-Vp4lH_.js";import"./SkeletonText-DNF0wxcf.js";import"./Avatar-DCVki-tG.js";import"./AvatarStack-dSGbniWM.js";import"./Badge-B1T0t0bU.js";import"./BigNumber-DC_XM9ko.js";import"./Breadcrumb-BmXdRJ_S.js";import"./Link-obEopwrC.js";import"./Heading-DljESEje.js";import"./Legend-BgcSabyE.js";import"./FileCardList-BLwhGj5a.js";import"./Image-4xzJyRg6.js";import"./CodeBlock-BMPK3aC9.js";import"./CopyButton-Dspux94x.js";import"./Tooltip-DdLAAoPW.js";import"./react-children-utilities-BhgYEgbL.js";import"./Color-Bkxy1GQb.js";import"./Content-CWdQm9SB.js";import"./ContextualHelpTrigger-1bZdijhA.js";import"./CounterBadge-COopACRP.js";import"./DonutChart-C1kyimoM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CGzqTGDI.js";import"./Header-r0BkDezu.js";import"./Initials-DrCrYU8v.js";import"./InlineCode-BwCrq_Tn.js";import"./LabeledValue-m8r6nqGA.js";import"./PopoverTrigger-DwJ_YWVm.js";import"./Markdown-Dlb8-Jwc.js";import"./Separator-DMn5BSHW.js";import"./Message-BUhJcMSM.js";import"./MessageSeparator-Jfq9TQuP.js";import"./NavigationGroup-YgTh9AiK.js";import"./Notification-DVeBahUP.js";import"./NotificationProvider-CODhhIwr.js";import"./ProgressBar-CxCN6ejE.js";import"./Rating-CTf8YM4g.js";import"./Skeleton-f-vyEhot.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),sr={title:"Integrations/React Hook Form/CheckboxGroup",component:c,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),m=O();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(m,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(m,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(m,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(m,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(C,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={},a={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},p={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
