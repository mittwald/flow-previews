import{j as r,r as j}from"./iframe-CPn2ZlG8.js";import{a as u,u as h,F as d,t as v}from"./Form-Bzt_tKay.js";import{L as i}from"./Label-Opx6KdMe.js";import{B as c}from"./Button-i2RXMGoH.js";import{S as f}from"./Section-K5CfbtJu.js";import{A as O}from"./ActionGroup-gwUYpalQ.js";import{s as x}from"./Action-Dgdncsxu.js";import{q as n,n as e,p as b,F as k}from"./Modal-BBOS47oM.js";import"./index-nuYtCEEu.js";import"./dynamic-CmzXv2ZH.js";import"./flowComponent-D5fQrT-l.js";import"./index-Db6BMMtx.js";import"./clsx-B-dksMZM.js";import"./index-B0eWxAoc.js";import"./useLocalizedStringFormatter-3u0Ls056.js";import"./context-BiAR75ic.js";import"./browser-Cl13ZrDl.js";import"./utils-DBul4rcK.js";import"./ProgressBar-CJ8nwOMy.js";import"./Hidden-rE78fkWj.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BTNOc1CF.js";import"./Text-6RCNpXVe.js";import"./EmulatedBoldText-1j8ixKnD.js";import"./LoadingSpinner-mgkNzsmz.js";import"./Button-Di4iIPFk.js";import"./useFocusRing-Bif2ggnn.js";import"./useFocusable-C96YDlM5.js";import"./Dialog-CXw6CUzT.js";import"./RSPContexts-CJHyh8nT.js";import"./OverlayArrow-Ck0nDntZ.js";import"./useControlledState-CZXOD-hn.js";import"./Collection-B8r3AE3V.js";import"./CollectionBuilder-DpjnogN1.js";import"./SelectionIndicator-BcoqESp_.js";import"./Separator-B1EP0OSh.js";import"./getActionGroupSlot-D7tF_HIo.js";import"./useStatic-BnTfOIpp.js";import"./context-CgTN8SSG.js";import"./Popover-BXUF-6SC.js";import"./OverlayTrigger-20DAFHoE.js";import"./ControlledNotification-BEs41KlO.js";import"./ClearPropsContextView-BhabDAmt.js";import"./LayoutCard-C_hSjeDr.js";import"./Accordion-B-bChxW6.js";import"./Alert-Ug9GHVUz.js";import"./AlertIcon-zTj1UJpO.js";import"./AlertBadge-BsQaA3x6.js";import"./Align-DE9bebnk.js";import"./TableFooterRow-B5LtY95q.js";import"./SkeletonText-oiPGeqDP.js";import"./Avatar-DDyQczM4.js";import"./AvatarStack-CWZ-VL73.js";import"./Badge-D9v8JAmm.js";import"./BigNumber-C4G7-3T-.js";import"./Breadcrumb-Bacspdd1.js";import"./Link-DVlBL-qV.js";import"./Heading-BzbKq0dK.js";import"./Legend-DDMMG7bH.js";import"./FileCardList-rzh9hTjl.js";import"./Image-C-mKiOK_.js";import"./CodeBlock-DfQLW9jR.js";import"./CopyButton-BPFZIEl4.js";import"./Tooltip-BEM5VXj8.js";import"./react-children-utilities-WPpO_PnD.js";import"./Color-BEtva2JY.js";import"./Content-35wcbQLb.js";import"./ContextualHelpTrigger-BF0zQddW.js";import"./CounterBadge-DQvxwwoY.js";import"./DonutChart-BrF9Zm5P.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DGRfp6b0.js";import"./Header-DnNd6Njs.js";import"./Initials-Bv6RP1-8.js";import"./InlineCode-CHc7o_jp.js";import"./LabeledValue-j0cEpKgE.js";import"./PopoverTrigger-CMl9e6LO.js";import"./Markdown-Coe6N29n.js";import"./Separator-CJJgusYM.js";import"./Message-Dqi0-r_q.js";import"./MessageSeparator-CroayyHM.js";import"./NavigationGroup-qSfETvJA.js";import"./Notification-r_T3n36Q.js";import"./NotificationProvider-u0HbSQig.js";import"./ProgressBar-BXbWnBwm.js";import"./Rating-DIBuOTMV.js";import"./Skeleton-1myRvyzI.js";const{action:C}=__STORYBOOK_MODULE_ACTIONS__,F=C("submit"),te={title:"Integrations/React Hook Form/CheckboxGroup",component:u,render:()=>{const s=async t=>{await x(1500),F(t)},o=h({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),m=v();return r.jsx(d,{form:o,onSubmit:s,children:r.jsxs(f,{children:[r.jsx(m,{name:"interests",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsDefaultValue",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check at least 1 item"})]})}),r.jsx(m,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check max 2 items"})]})}),r.jsx(O,{children:r.jsx(c,{type:"submit",children:"Submit"})})]})})}},a={},l={render:s=>{const o=h();return j.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"}),r.jsx(k,{children:"ErrorFromOuterFieldError!"})]})]})}},p={render:s=>{const o=h();return r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(c,{type:"submit",children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
