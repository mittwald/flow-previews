import{j as r,r as j}from"./iframe-BGjIo6hw.js";import{a as u,u as h,F as d,t as v}from"./Form-GeAuQ6SE.js";import{L as i}from"./Label-Bfvc2OEj.js";import{B as c}from"./Button-72uC3Xxd.js";import{S as f}from"./Section-TUTyCtZG.js";import{A as O}from"./ActionGroup-hiZS26La.js";import{s as x}from"./Action-DQWGsoks.js";import{q as n,n as e,p as b,F as k}from"./Modal-BYTJ9Y12.js";import"./index-nuYtCEEu.js";import"./dynamic-CxgTiQUL.js";import"./flowComponent-CKy74ieT.js";import"./index-RB0ZeMWq.js";import"./clsx-B-dksMZM.js";import"./index-D8hDUSyP.js";import"./useLocalizedStringFormatter-DMlB1stV.js";import"./context-DQ8Yy5yO.js";import"./browser-i6k0HuHn.js";import"./utils-FWUTa6bA.js";import"./ProgressBar-IcJtTGAe.js";import"./Hidden-YgttGYZu.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-OiQYEbgz.js";import"./Text-Bc8wJjtt.js";import"./EmulatedBoldText-DcmHRAc9.js";import"./LoadingSpinner-DW7FO3ji.js";import"./Button-DVeyWZob.js";import"./useFocusRing-B268tRT3.js";import"./useFocusable-Cp5mQ5Rc.js";import"./Dialog-DZpgyeVc.js";import"./RSPContexts-BLZAUi5X.js";import"./OverlayArrow-D5fKAg8k.js";import"./useControlledState-8IdaO4XH.js";import"./Collection-DBSHt2At.js";import"./CollectionBuilder-CfVVvz4n.js";import"./SelectionIndicator-D0sGU-I3.js";import"./Separator-D2n48QdT.js";import"./getActionGroupSlot-BbMDqkbD.js";import"./useStatic-B2rVxKR2.js";import"./context-jnS2Fs_o.js";import"./Popover-tW18rmQX.js";import"./OverlayTrigger-CsYA01So.js";import"./ControlledNotification-Dq6bZvP5.js";import"./ClearPropsContextView-CF-h0ZS8.js";import"./LayoutCard-lfPzieL5.js";import"./Accordion-i0q50_hv.js";import"./Alert-CouJG9of.js";import"./AlertIcon-Dbvw5J6E.js";import"./AlertBadge-CZAc4HrV.js";import"./Align-DZ9lgcQB.js";import"./TableFooterRow-B7GJOO76.js";import"./SkeletonText-BAKl1hQL.js";import"./Avatar-DdlYxgbX.js";import"./AvatarStack-GbEbEW2B.js";import"./Badge-BM2kNOCX.js";import"./BigNumber-D9d1tqLF.js";import"./Breadcrumb-BZd1J0Jr.js";import"./Link-phR0Xn4I.js";import"./Heading-QJXZDrut.js";import"./Legend-w3nuMcY_.js";import"./FileCardList-C4P00gKp.js";import"./Image-DVGepZy_.js";import"./CodeBlock-DANnuUSc.js";import"./CopyButton-DCk4o20_.js";import"./Tooltip-CjugpP2q.js";import"./react-children-utilities-CjDAauZg.js";import"./Color-Dq8hW1_T.js";import"./Content-Dsk5yoIX.js";import"./ContextualHelpTrigger-Dxu_RRLr.js";import"./CounterBadge-CkxONrfP.js";import"./DonutChart-CodRmRtb.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BfGqCS7W.js";import"./Header-B7fIZl89.js";import"./Initials-Drmk3ion.js";import"./InlineCode-D0p9Y-vu.js";import"./LabeledValue-tPVZUd4m.js";import"./PopoverTrigger-QUfyk5z7.js";import"./Markdown-7KDHmlwn.js";import"./Separator-BnpxR7q2.js";import"./Message-DA1fOBGL.js";import"./MessageSeparator-D5qZufnd.js";import"./NavigationGroup-DCtLktTW.js";import"./Notification-B2wiDs3w.js";import"./NotificationProvider-BdKzz8-L.js";import"./ProgressBar-BCWSFDCi.js";import"./Rating-BnGzKbk4.js";import"./Skeleton-D-2WZNfg.js";const{action:C}=__STORYBOOK_MODULE_ACTIONS__,F=C("submit"),te={title:"Integrations/React Hook Form/CheckboxGroup",component:u,render:()=>{const s=async t=>{await x(1500),F(t)},o=h({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),m=v();return r.jsx(d,{form:o,onSubmit:s,children:r.jsxs(f,{children:[r.jsx(m,{name:"interests",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsDefaultValue",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check at least 1 item"})]})}),r.jsx(m,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check max 2 items"})]})}),r.jsx(O,{children:r.jsx(c,{type:"submit",children:"Submit"})})]})})}},a={},l={render:s=>{const o=h();return j.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"}),r.jsx(k,{children:"ErrorFromOuterFieldError!"})]})]})}},p={render:s=>{const o=h();return r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(c,{type:"submit",children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
