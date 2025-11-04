import{j as r,r as j}from"./iframe-UywY67Bv.js";import{a as u,u as h,F as d,t as v}from"./Form-BecK6Ytt.js";import{L as i}from"./Label-BdSCfiWt.js";import{B as c}from"./Button-Gbk6h-JG.js";import{S as f}from"./Section-CaIrT3Oi.js";import{A as O}from"./ActionGroup-8065NRIs.js";import{s as x}from"./Action-CUqRfkG0.js";import{q as n,n as e,p as b,F as k}from"./Modal-B1XsSRlG.js";import"./index-nuYtCEEu.js";import"./dynamic-D6UsKhYE.js";import"./flowComponent-Dm-blvsZ.js";import"./index-BgsjFh65.js";import"./clsx-B-dksMZM.js";import"./index-BZZbJWsv.js";import"./useLocalizedStringFormatter-DQTCanVK.js";import"./context-DOa8wsuE.js";import"./browser-89HKgK6A.js";import"./utils-Q3LyW17A.js";import"./ProgressBar-BT1yEvUw.js";import"./Hidden-DHTrACZy.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DwFhTB3p.js";import"./Text-ACfuEtxv.js";import"./EmulatedBoldText-IS2YzD6-.js";import"./LoadingSpinner-DB5NhDK9.js";import"./Button-Dm7HkgNO.js";import"./useFocusRing-CEJ8z4sH.js";import"./useFocusable-D_AejfVj.js";import"./Dialog-QZmtNN3w.js";import"./RSPContexts-DKA2ogYJ.js";import"./OverlayArrow-B1W-06M-.js";import"./useControlledState-YHruiK90.js";import"./Collection-JD_tC5W8.js";import"./CollectionBuilder-DCs1Xm6c.js";import"./SelectionIndicator-XKCl6mR6.js";import"./Separator-hCT8I1RM.js";import"./getActionGroupSlot-BYkRiiTw.js";import"./useStatic-CXquBJ6C.js";import"./context-BigokEM3.js";import"./Popover-D1J4MggM.js";import"./OverlayTrigger-CDX30Jbz.js";import"./ControlledNotification-D50j9sIR.js";import"./ClearPropsContextView-Dm11ykOR.js";import"./LayoutCard-C0EPvsU3.js";import"./Accordion-BK4GuAoC.js";import"./Alert-C0EsiSv_.js";import"./AlertIcon-BnqUCYzd.js";import"./AlertBadge-B7Gau8m7.js";import"./Align-BmJOMdIy.js";import"./TableFooterRow-Bv0-bpAh.js";import"./SkeletonText-DpHKYHJZ.js";import"./Avatar-M318ynuv.js";import"./AvatarStack-Flh6B9Tb.js";import"./Badge-DHwTV9Zs.js";import"./BigNumber-BZRncc6S.js";import"./Breadcrumb-BZSCf-6e.js";import"./Link-CLqTFJh1.js";import"./Heading-DokAbZVz.js";import"./Legend-u8qZQHCw.js";import"./FileCardList-B3N0e0dv.js";import"./Image-CM2sjxlA.js";import"./CodeBlock-BBJItXDs.js";import"./CopyButton-CPARqyj4.js";import"./Tooltip-DhQmcZ0r.js";import"./react-children-utilities-cyw5EAJU.js";import"./Color-BQTRcc4A.js";import"./Content-CDtjT_Xe.js";import"./ContextualHelpTrigger-Nj7CEmIW.js";import"./CounterBadge-BvFCF2iG.js";import"./DonutChart-DA4lEOuY.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DYNPakqr.js";import"./Header-NJIzvUu8.js";import"./Initials-BicwQCWx.js";import"./InlineCode-IDIJw-r4.js";import"./LabeledValue-4mP07mAd.js";import"./PopoverTrigger-BnwqDM04.js";import"./Markdown-DLtx481N.js";import"./Separator-Bue3T6x6.js";import"./Message-CKkR5n6-.js";import"./MessageSeparator-DyuDr-P8.js";import"./NavigationGroup-CR-zeo24.js";import"./Notification-DuT0orJi.js";import"./NotificationProvider-CBFCjlXq.js";import"./ProgressBar-DwzJ5Krm.js";import"./Rating-DCUiyl_B.js";import"./Skeleton-DYUui1jC.js";const{action:C}=__STORYBOOK_MODULE_ACTIONS__,F=C("submit"),te={title:"Integrations/React Hook Form/CheckboxGroup",component:u,render:()=>{const s=async t=>{await x(1500),F(t)},o=h({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),m=v();return r.jsx(d,{form:o,onSubmit:s,children:r.jsxs(f,{children:[r.jsx(m,{name:"interests",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsDefaultValue",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check at least 1 item"})]})}),r.jsx(m,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check max 2 items"})]})}),r.jsx(O,{children:r.jsx(c,{type:"submit",children:"Submit"})})]})})}},a={},l={render:s=>{const o=h();return j.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"}),r.jsx(k,{children:"ErrorFromOuterFieldError!"})]})]})}},p={render:s=>{const o=h();return r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(c,{type:"submit",children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
