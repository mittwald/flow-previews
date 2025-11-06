import{j as r,r as j}from"./iframe-Cn_Uksv1.js";import{a as u,u as h,F as d,t as v}from"./Form-BouB72Lx.js";import{L as i}from"./Label-C9VVl4IH.js";import{B as c}from"./Button-uqtApCO2.js";import{S as f}from"./Section-Wl51SmLg.js";import{A as O}from"./ActionGroup-UNAE9QI0.js";import{s as x}from"./Action-Drtylt4n.js";import{q as n,n as e,p as b,F as k}from"./Modal-VdyORwMb.js";import"./index-nuYtCEEu.js";import"./dynamic-DNsdEAu1.js";import"./flowComponent-CoFR225t.js";import"./index-BOejRIbk.js";import"./clsx-B-dksMZM.js";import"./index-C0zdnCAL.js";import"./useLocalizedStringFormatter-m-f5OqYO.js";import"./context-B2OLF-YE.js";import"./browser-BnRg_GS1.js";import"./utils-B-f9gd93.js";import"./ProgressBar-DsWps5dj.js";import"./Hidden-BL9AL94n.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-ktzgJVul.js";import"./Text-D6EVKQHX.js";import"./EmulatedBoldText-CxLJaoXr.js";import"./LoadingSpinner-DSg47w65.js";import"./Button-FEoS725w.js";import"./useFocusRing-DLygjq4p.js";import"./useFocusable-DAjGW8_c.js";import"./Dialog-BecCL6sR.js";import"./RSPContexts-CKwSRM_H.js";import"./OverlayArrow-xQHCsek7.js";import"./useControlledState-CW1MTAna.js";import"./Collection-ClRJO0M5.js";import"./CollectionBuilder-Bhf_01Mr.js";import"./SelectionIndicator-BiXza4Fo.js";import"./Separator-Czf3nTWx.js";import"./getActionGroupSlot-DY0CPGpV.js";import"./useStatic-CJPRi5oj.js";import"./context-CovFRnRg.js";import"./Popover-BR7oC1fO.js";import"./OverlayTrigger-iBRYVjfO.js";import"./ControlledNotification-BeDY2vKU.js";import"./ClearPropsContextView-B_X2v-Sq.js";import"./LayoutCard-CnUuE-1Z.js";import"./Accordion-CZOJUgpS.js";import"./Alert-CTEBmpK4.js";import"./AlertIcon-CsVXI5gr.js";import"./AlertBadge-Cqo-ZUqC.js";import"./Align-C99zP5zH.js";import"./TableFooterRow-D7KaNElw.js";import"./SkeletonText--uxcbsgM.js";import"./Avatar-BYg_-pGm.js";import"./AvatarStack-CchM2Sa3.js";import"./Badge-FQIiNSgZ.js";import"./BigNumber-BiO-khFa.js";import"./Breadcrumb-jsxr0YSU.js";import"./Link-BSO-Q76I.js";import"./Heading-BQmLpAQ1.js";import"./Legend-CKKuec6M.js";import"./FileCardList-CWlzLJsp.js";import"./Image-B9TyEKdz.js";import"./CodeBlock-BYR6_BW4.js";import"./CopyButton-CNQL36Ag.js";import"./Tooltip-BL0AsMEX.js";import"./react-children-utilities-Dr4OQwAJ.js";import"./Color-BM5aIGcO.js";import"./Content-BOlga6nV.js";import"./ContextualHelpTrigger-CAXIcL_u.js";import"./CounterBadge-CquLVsgM.js";import"./DonutChart-CWSX7F77.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CB4FWWnG.js";import"./Header-tJ9N4XyQ.js";import"./Initials-Dx1k9kiG.js";import"./InlineCode-B-Ansa8I.js";import"./LabeledValue-DojwK0XU.js";import"./PopoverTrigger-BOxfrCz3.js";import"./Markdown-BXYLh3og.js";import"./Separator-Jbtv09Vv.js";import"./Message-DAWPZvq-.js";import"./MessageSeparator-CphE32Oc.js";import"./NavigationGroup-CQG91l3o.js";import"./Notification-CWiXAQpu.js";import"./NotificationProvider-C78MS0MB.js";import"./ProgressBar-CW2dYXPc.js";import"./Rating-pCHc-nBc.js";import"./Skeleton-BIPAf7cq.js";const{action:C}=__STORYBOOK_MODULE_ACTIONS__,F=C("submit"),te={title:"Integrations/React Hook Form/CheckboxGroup",component:u,render:()=>{const s=async t=>{await x(1500),F(t)},o=h({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),m=v();return r.jsx(d,{form:o,onSubmit:s,children:r.jsxs(f,{children:[r.jsx(m,{name:"interests",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsDefaultValue",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check at least 1 item"})]})}),r.jsx(m,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check max 2 items"})]})}),r.jsx(O,{children:r.jsx(c,{type:"submit",children:"Submit"})})]})})}},a={},l={render:s=>{const o=h();return j.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"}),r.jsx(k,{children:"ErrorFromOuterFieldError!"})]})]})}},p={render:s=>{const o=h();return r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(c,{type:"submit",children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
