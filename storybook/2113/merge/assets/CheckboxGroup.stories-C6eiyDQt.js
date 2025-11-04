import{j as r,r as j}from"./iframe-Dy6b_FCP.js";import{a as u,u as h,F as d,t as v}from"./Form-CrjAohdJ.js";import{L as i}from"./Label-CBzLnh7v.js";import{B as c}from"./Button-GOXJIQJf.js";import{S as f}from"./Section-XrcD6Nxo.js";import{A as O}from"./ActionGroup-B4jkAi-7.js";import{s as x}from"./Action-De2-hlac.js";import{q as n,n as e,p as b,F as k}from"./Modal-gqzL9_9r.js";import"./index-nuYtCEEu.js";import"./dynamic-BsH-tVs9.js";import"./flowComponent-DrrEN2JN.js";import"./index-CVEy0Z38.js";import"./clsx-B-dksMZM.js";import"./index-DfVSRZN_.js";import"./useLocalizedStringFormatter-IeR6u1dk.js";import"./context-Cmxdn71P.js";import"./browser-B3C2hSkY.js";import"./utils-Dr97TsDg.js";import"./ProgressBar-BRblqXhL.js";import"./Hidden-CO8a8gup.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DNcE7GB8.js";import"./Text-1cPTkrsR.js";import"./EmulatedBoldText-rn83c_he.js";import"./LoadingSpinner-CtFn_aG9.js";import"./Button-D4hzfdEM.js";import"./useFocusRing-DcnqUpu3.js";import"./useFocusable-CceqWekp.js";import"./Dialog-Bnl9MCT0.js";import"./RSPContexts-BxpxaOEB.js";import"./OverlayArrow-DfWLFrq7.js";import"./useControlledState-DcQuzcMp.js";import"./Collection-BUtQOrwA.js";import"./CollectionBuilder-DjGCLM2W.js";import"./SelectionIndicator-BJWp2zfX.js";import"./Separator-CCSnrMIk.js";import"./getActionGroupSlot-DwP1pd0G.js";import"./useStatic-BBN1iEfx.js";import"./context-BJDivKIs.js";import"./Popover-CYz6FA1w.js";import"./OverlayTrigger-GliMoFGI.js";import"./ControlledNotification-DVFBubHe.js";import"./ClearPropsContextView-byuDiYQD.js";import"./LayoutCard-CwfF4o19.js";import"./Accordion-CiMwSvoa.js";import"./Alert-CwCqGima.js";import"./AlertIcon-Bz-v7qCT.js";import"./AlertBadge-BE7koL5m.js";import"./Align-mw_wA5KG.js";import"./TableFooterRow-TV_fK58V.js";import"./SkeletonText-BBWTzEMu.js";import"./Avatar-BhkC8dli.js";import"./AvatarStack-urV8mTNT.js";import"./Badge-CwqJN_-7.js";import"./BigNumber-BpYUy1_H.js";import"./Breadcrumb-BKhGqzKn.js";import"./Link-Dm_YWPlU.js";import"./Heading-BfvZKiwZ.js";import"./Legend-RNcg6gZr.js";import"./FileCardList-CuULQ1z3.js";import"./Image-D9YBJNVx.js";import"./CodeBlock-DIwxmp-o.js";import"./CopyButton-CrCq5S1w.js";import"./Tooltip-DqLEYtbU.js";import"./react-children-utilities-CRL_nrRH.js";import"./Color-C2xqPKdr.js";import"./Content-Cr1BNqiG.js";import"./ContextualHelpTrigger-BooDiSla.js";import"./CounterBadge-DCZIrYDB.js";import"./DonutChart-CGuu04ru.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DszUNJgu.js";import"./Header-BZFY0fUC.js";import"./Initials-BGK5Hpjk.js";import"./InlineCode-BOUqVp2K.js";import"./LabeledValue-DQaIwsFI.js";import"./PopoverTrigger-CmSa_lF0.js";import"./Markdown-fw0u330b.js";import"./Separator-DsvXQo1a.js";import"./Message-CaZXLGar.js";import"./MessageSeparator-BYyoFQz4.js";import"./NavigationGroup-B-SIoUNF.js";import"./Notification-Bngipq1y.js";import"./NotificationProvider-TpCCLKQR.js";import"./ProgressBar-C5FuYpoc.js";import"./Rating-BjdUQ8sK.js";import"./Skeleton-BV2ueM2i.js";const{action:C}=__STORYBOOK_MODULE_ACTIONS__,F=C("submit"),te={title:"Integrations/React Hook Form/CheckboxGroup",component:u,render:()=>{const s=async t=>{await x(1500),F(t)},o=h({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),m=v();return r.jsx(d,{form:o,onSubmit:s,children:r.jsxs(f,{children:[r.jsx(m,{name:"interests",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsDefaultValue",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check at least 1 item"})]})}),r.jsx(m,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check max 2 items"})]})}),r.jsx(O,{children:r.jsx(c,{type:"submit",children:"Submit"})})]})})}},a={},l={render:s=>{const o=h();return j.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"}),r.jsx(k,{children:"ErrorFromOuterFieldError!"})]})]})}},p={render:s=>{const o=h();return r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(c,{type:"submit",children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
